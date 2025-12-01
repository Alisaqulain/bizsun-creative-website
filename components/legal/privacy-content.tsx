"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "Personal information you provide when contacting us (name, email, phone number)",
      "Information about your business and project requirements",
      "Website usage data and analytics",
      "Cookies and similar tracking technologies",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our services",
      "To communicate with you about your projects",
      "To send you marketing communications (with your consent)",
      "To analyze website usage and improve user experience",
    ],
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: [
      "We implement industry-standard security measures",
      "Your data is encrypted in transit and at rest",
      "We never sell your personal information to third parties",
      "Access to your data is restricted to authorized personnel only",
    ],
  },
  {
    icon: Eye,
    title: "Your Rights",
    content: [
      "Right to access your personal data",
      "Right to correct inaccurate information",
      "Right to request deletion of your data",
      "Right to opt-out of marketing communications",
    ],
  },
]

export function PrivacyContent() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 via-green-500/10 to-blue-500/10 border border-primary/20"
            >
              Legal
            </motion.span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Privacy{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Policy
            </motion.span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Bizsun Creative, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 via-green-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                    <ul className="space-y-3 ml-16">
                      {section.content.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 bg-muted/50 rounded-lg border-2"
        >
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: privacy@bizsuncreative.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Creative Street, Design City, DC 12345</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

