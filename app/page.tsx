import { Hero } from "@/components/home/hero"
import { ServicesOverview } from "@/components/home/services-overview"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { ContactBanner } from "@/components/home/contact-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioPreview />
      <WhyChooseUs />
      <Testimonials />
      <ContactBanner />
    </>
  )
}

