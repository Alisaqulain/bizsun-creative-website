import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Bizsun Creative",
  description: "Explore our portfolio of successful projects - branding, web design, digital marketing, and creative solutions.",
}

export default function PortfolioPage() {
  return <PortfolioGrid />
}

