"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Palette,
  Code,
  TrendingUp,
  Video,
  Type,
  FileText,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"
import { Alert } from "@/components/ui/alert"

const services = [
  {
    id: "photography",
    icon: Palette,
    title: "Photography Services",
    shortDescription: "Professional photography for lifestyle, fashion, product, and e-commerce shoots.",
    fullDescription: "We offer comprehensive photography services covering all your visual needs. Our experienced photographers use state-of-the-art equipment and creative techniques to capture stunning images that showcase your products, brand, or lifestyle in the best possible light.",
    features: [
      "Lifestyle Shoots",
      "Fashion Shoots",
      "Product Shoots",
      "E-commerce Shoots",
      "Studio Setup with 4K Cameras",
      "Still Photography",
    ],
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    shortDescription: "Complete video production services from concept to final delivery.",
    fullDescription: "We produce high-quality films and videos for various platforms and purposes. Our video production services include television commercials, digital films, corporate films, and factory shoots. We handle everything from initial concept to final post-production.",
    features: [
      "Television Commercials",
      "Digital Films",
      "Corporate Films",
      "Factory Shoots",
      "Complete Production",
      "Video Editing & Post-Production",
    ],
  },
  {
    id: "production",
    icon: TrendingUp,
    title: "Complete Production Services",
    shortDescription: "End-to-end production services with experienced professionals.",
    fullDescription: "We provide complete production services with a team of experienced professionals in every department. From executive producers to directors, illustrators, videographers, and photographers, we have the expertise to handle projects of any scale.",
    features: [
      "Executive Producer Services",
      "Film Directors",
      "Illustrator Services",
      "Videographer Services",
      "Still Photographer Services",
      "Complete Production Management",
    ],
  },
  {
    id: "studio",
    icon: Code,
    title: "Studio Setup & Equipment",
    shortDescription: "Professional studio setup with 4K cameras and modern equipment.",
    fullDescription: "Our state-of-the-art studio is equipped with the latest 4K cameras and professional equipment. We provide a complete studio setup for all your photography and video production needs, ensuring the highest quality output for your projects.",
    features: [
      "4K Camera Setup",
      "Professional Studio Space",
      "Lighting Equipment",
      "Audio Recording Facilities",
      "Green Screen Setup",
      "Post-Production Equipment",
    ],
  },
]

export function ServicesList() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const { addToast } = useToast()

  const service = services.find((s) => s.id === selectedService)

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)
    const serviceName = services.find((s) => s.id === serviceId)?.title
    addToast({
      type: "info",
      title: "Service Details",
      description: `Viewing details for ${serviceName}`,
      duration: 3000,
    })
  }

  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
              Our Expertise
            </motion.span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Our{" "}
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
              Services
            </motion.span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive creative solutions to elevate your brand and drive{" "}
            <span className="text-primary font-semibold">business growth</span>
          </p>
        </motion.div>

        {/* Info Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Alert
            variant="info"
            title="Ready to Get Started?"
            description="Click on any service below to learn more about what we offer. Each service includes detailed information and features."
            showIcon
            dismissible
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-500 group border-2 hover:border-primary/50 relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  {/* Animated gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-green-500/0 to-blue-500/0 group-hover:from-orange-500/10 group-hover:via-green-500/10 group-hover:to-blue-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 via-green-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:via-green-500 group-hover:to-blue-500 transition-all duration-300 shadow-xl group-hover:shadow-orange-500/40"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      </motion.div>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                    <CardDescription className="text-base mt-3 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start group/btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleServiceClick(service.id)
                        }}
                      >
                        Learn More
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span className="ml-2">→</span>
                        </motion.div>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {service && (
            <>
              <DialogHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 via-green-500/20 to-blue-500/20 flex items-center justify-center"
                  >
                    {(() => {
                      const Icon = service.icon
                      return <Icon className="h-7 w-7 text-primary" />
                    })()}
                  </motion.div>
                  <DialogTitle className="text-3xl">{service.title}</DialogTitle>
                </div>
                <DialogDescription className="text-base leading-relaxed">
                  {service.fullDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="text-primary mt-1 font-bold"
                      >
                        ✓
                      </motion.span>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                  <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600">
                    <a href="/contact" onClick={() => {
                      addToast({
                        type: "success",
                        title: "Redirecting to Contact",
                        description: "Let's discuss your project!",
                        duration: 3000,
                      })
                    }}>
                      Get Started
                    </a>
                  </Button>
                </motion.div>
                <Button variant="outline" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
