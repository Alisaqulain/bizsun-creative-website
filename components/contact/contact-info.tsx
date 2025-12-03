"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    content: "info@bizsoncreative.com",
    link: "mailto:info@bizsoncreative.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 70441 78863",
    link: "tel:+917044178863",
  },
  {
    icon: MapPin,
    title: "Locations",
    content: "Mumbai • Delhi • Kolkata",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM IST",
    link: null,
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <Card className="border-2">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon
              const content = detail.link ? (
                <a
                  href={detail.link}
                  className="text-primary hover:underline transition-colors"
                >
                  {detail.content}
                </a>
              ) : (
                <span className="text-muted-foreground">{detail.content}</span>
              )

              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{detail.title}</h3>
                    <div className="text-base">{content}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Want to have a quick chat?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Whether you need photography services, video production, or complete production management, we&apos;re here to help. Reach out and let&apos;s discuss how we can bring your creative vision to life with our professional audio-visual production services.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

