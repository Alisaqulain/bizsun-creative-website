import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Bizsun Creative",
  description: "Get in touch with Bizsun Creative. Let's discuss how we can help transform your brand and drive business growth.",
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your brand? Let&apos;s start a conversation about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>

        <ContactMap />
      </div>
    </div>
  )
}

