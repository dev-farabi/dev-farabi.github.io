import ServicePage from "../../../components/service-page";
import { services } from "../../../lib/services";
import { pageMetadata } from "../../../lib/seo";
const service = services[0];
export const metadata = pageMetadata(service.title, service.description, `/services/${service.slug}`);
export default function WebDevelopment() { return <ServicePage service={service} />; }
