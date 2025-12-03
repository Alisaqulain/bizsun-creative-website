import { ServicesList } from "@/components/services/services-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Bizsun Creative",
  description: "Professional audio-visual production services including photography, video production, complete production management, and studio setup with 4K cameras.",
}

export default function ServicesPage() {
  return <ServicesList />
}

