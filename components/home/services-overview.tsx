"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect } from "react"
import Link from "next/link"
import { Palette, Code, TrendingUp, Video, Type, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Palette,
    title: "Photography Services",
    description: "Professional photography for lifestyle, fashion, product, and e-commerce shoots with 4K studio setup.",
    href: "/services#photography",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Complete video production including TV commercials, digital films, corporate films, and factory shoots.",
    href: "/services#video",
  },
  {
    icon: TrendingUp,
    title: "Complete Production",
    description: "End-to-end production services with executive producers, directors, and experienced professionals.",
    href: "/services#production",
  },
  {
    icon: Code,
    title: "Studio & Equipment",
    description: "Professional studio setup with 4K cameras and modern equipment for all your production needs.",
    href: "/services#studio",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      x.set(distanceX * 0.1)
      y.set(distanceY * 0.1)
      rotateX.set(-distanceY * 0.05)
      rotateY.set(distanceX * 0.05)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
      rotateX.set(0)
      rotateY.set(0)
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [x, y, rotateX, rotateY])

  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
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
      style={{
        x: xSpring,
        y: ySpring,
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-2 hover:border-primary/50 relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm cursor-pointer">
        {/* Animated gradient effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-green-500/0 to-blue-500/0 group-hover:from-orange-500/10 group-hover:via-green-500/10 group-hover:to-blue-500/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated shine effect */}
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
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <Button asChild variant="ghost" className="group/btn w-full justify-start">
              <Link href={service.href} className="flex items-center">
                Learn More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
              What We Offer
            </motion.span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Our{" "}
            <span className="relative inline-block">
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
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-500/10 via-green-500/10 to-blue-500/10 -z-10 origin-left rounded-full"
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to elevate your brand and drive{" "}
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary font-semibold inline-block"
            >
              business growth
            </motion.span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/services" className="flex items-center">
                View All Services
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
