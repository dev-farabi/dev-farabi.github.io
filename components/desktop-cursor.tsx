"use client";

import { useEffect, useRef } from "react";

type DesktopCursorProps = { motion: boolean; paused: boolean };

/** Native custom cursors remain usable if the optional visual follower is unavailable. */
export default function DesktopCursor({ motion, paused }: DesktopCursorProps) {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    const root = document.documentElement;
    if (!follower || paused) return;

    const fineMouse = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const highContrast = window.matchMedia("(forced-colors: active)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const interactiveSelector = 'a[href],button,summary,[role="button"],[role="link"],input[type="button"],input[type="submit"]';
    const editableSelector = 'input,textarea,select,[contenteditable="true"],[contenteditable=""]';
    let frame = 0;
    let cursorActive = false;
    let hasPosition = false;
    let previousTime = 0;
    let point = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      hasPosition = false;
      if (cursorActive) { root.classList.remove("farabi-custom-pointer"); cursorActive = false; }
      follower.dataset.visible = "false";
      follower.dataset.pressed = "false";
    };
    const eligible = () => fineMouse.matches && !highContrast.matches && !document.hidden;
    const selectionActive = () => { const selection = window.getSelection(); return Boolean(selection && !selection.isCollapsed); };
    const draw = (time: number) => {
      if (!eligible() || !motion || reducedMotion.matches) { cancelAnimationFrame(frame); frame = 0; follower.dataset.visible = "false"; return; }
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      const ease = 1 - Math.exp(-elapsed / 42);
      point.x += (target.x - point.x) * ease;
      point.y += (target.y - point.y) * ease;
      follower.style.transform = `translate3d(${point.x}px,${point.y}px,0)`;
      if (Math.hypot(target.x - point.x, target.y - point.y) > .15) frame = requestAnimationFrame(draw);
      else { frame = 0; previousTime = 0; }
    };
    const updateHover = (element: Element | null) => {
      const control = element?.closest(interactiveSelector);
      const disabled = control?.matches(':disabled,[aria-disabled="true"]');
      follower.dataset.interactive = control && !disabled ? "true" : "false";
    };
    const move = (event: PointerEvent) => {
      const element = event.target instanceof Element ? event.target : null;
      if (event.pointerType !== "mouse" || !eligible() || element?.closest(editableSelector) || selectionActive()) { hide(); return; }
      if (!cursorActive) { root.classList.add("farabi-custom-pointer"); cursorActive = true; }
      target = { x: event.clientX, y: event.clientY };
      updateHover(element);
      if (!motion || reducedMotion.matches) { follower.dataset.visible = "false"; return; }
      if (!hasPosition) {
        point = { ...target }; hasPosition = true;
        follower.style.transform = `translate3d(${point.x}px,${point.y}px,0)`;
      }
      follower.dataset.visible = "true";
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const over = (event: PointerEvent) => updateHover(event.target instanceof Element ? event.target : null);
    const down = (event: PointerEvent) => { if (event.pointerType !== "mouse") hide(); else follower.dataset.pressed = "true"; };
    const up = () => { follower.dataset.pressed = "false"; };
    const out = (event: PointerEvent) => { if (!event.relatedTarget) hide(); };
    const selectionChange = () => { if (selectionActive()) hide(); };
    const mediaChange = () => { hide(); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", hide);
    window.addEventListener("pointerout", out, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", hide);
    window.addEventListener("contextmenu", hide);
    document.addEventListener("visibilitychange", hide);
    document.addEventListener("selectionchange", selectionChange);
    fineMouse.addEventListener("change", mediaChange);
    highContrast.addEventListener("change", mediaChange);
    reducedMotion.addEventListener("change", mediaChange);

    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("pointerout", out);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", hide);
      window.removeEventListener("contextmenu", hide);
      document.removeEventListener("visibilitychange", hide);
      document.removeEventListener("selectionchange", selectionChange);
      fineMouse.removeEventListener("change", mediaChange);
      highContrast.removeEventListener("change", mediaChange);
      reducedMotion.removeEventListener("change", mediaChange);
    };
  }, [motion, paused]);

  return <div ref={followerRef} className="cursor-follower" data-visible="false" data-interactive="false" data-pressed="false" aria-hidden="true"><span className="cursor-halo"><i /><i /></span></div>;
}
