import { ServicesList } from "@/components/services/services-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Bizsun Creative",
  description: "Comprehensive creative services including branding, web design, digital marketing, video production, and more.",
}

export default function ServicesPage() {
  return <ServicesList />
}

