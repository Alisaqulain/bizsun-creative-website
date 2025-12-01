"use client"

import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), springConfig)
  const y = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), springConfig)

  // Laptop 3D transforms based on mouse position
  const laptopRotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig)
  const laptopRotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), springConfig)

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseXRelative = (e.clientX - rect.left) / width
      const mouseYRelative = (e.clientY - rect.top) / height
      mouseX.set(mouseXRelative)
      mouseY.set(mouseYRelative)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      style={{ y: yTransform, opacity }}
    >
      {/* Background gradient overlay to fill empty space */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background pointer-events-none" />
      
      {/* Animated Gradient Orbs with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.3, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/25 rounded-full blur-3xl"
          style={{ x, y }}
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.4, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated Laptop with Digital Marketing Dashboard Background */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-5xl xl:max-w-6xl opacity-25 dark:opacity-20 pointer-events-none hidden md:block"
        initial={{ opacity: 0, x: 150, scale: 0.75, y: 50 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          opacity: { duration: 5, repeat: Infinity },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          rotateY: laptopRotateY,
          rotateX: laptopRotateX,
        }}
      >
        {/* Laptop with Digital Marketing Dashboard */}
        <div className="relative">
          {/* Laptop Screen */}
          <motion.div
            className="relative mx-auto"
            style={{ width: "750px", height: "480px", transformStyle: "preserve-3d" }}
            animate={{ 
              rotateX: [0, 3, 0],
              rotateY: [0, -2, 0],
              y: [0, -15, 0],
            }}
            transition={{
              rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Laptop Screen Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-t-[24px] shadow-2xl border-4 border-slate-900">
              {/* Screen Bezel */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-2 bg-slate-900 rounded-full" />
              
              {/* Screen Content - Digital Marketing Dashboard */}
              <div className="absolute inset-3 rounded-[16px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Dashboard Header */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DM</span>
                    </div>
                    <div className="h-4 w-24 bg-slate-700/50 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-green-500/30" />
                    <div className="w-6 h-6 rounded bg-blue-500/30" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="absolute top-12 left-0 right-0 bottom-0 p-4 space-y-3 overflow-hidden">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: "Traffic", value: "12.5K", color: "orange", trend: "+24%" },
                      { label: "Leads", value: "342", color: "green", trend: "+18%" },
                      { label: "Revenue", value: "$45K", color: "blue", trend: "+32%" },
                      { label: "ROI", value: "285%", color: "orange", trend: "+12%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className="text-[8px] text-slate-400 mb-1">{stat.label}</div>
                        <div className={`text-sm font-bold mb-1 ${
                          stat.color === "orange" ? "text-orange-400" :
                          stat.color === "green" ? "text-green-400" : "text-blue-400"
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-[7px] text-green-400">{stat.trend}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Section */}
                  <div className="grid grid-cols-3 gap-2">
                    <motion.div
                      className="col-span-2 bg-slate-800/60 rounded-lg p-3 border border-slate-700/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="h-3 w-20 bg-slate-700/50 rounded mb-3" />
                      <div className="flex items-end justify-between h-24 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t"
                            style={{
                              background: `linear-gradient(to top, ${
                                i % 3 === 0 ? "rgba(249, 115, 22, 0.6)" :
                                i % 3 === 1 ? "rgba(34, 197, 94, 0.6)" :
                                "rgba(59, 130, 246, 0.6)"
                              }, transparent)`,
                            }}
                            animate={{
                              height: [`${30 + (i % 5) * 10}%`, `${60 + (i % 5) * 15}%`, `${30 + (i % 5) * 10}%`],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.1,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Social Media Metrics */}
                    <motion.div
                      className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="h-3 w-16 bg-slate-700/50 rounded mb-2" />
                      {["Facebook", "Instagram", "LinkedIn"].map((platform, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          <div className="h-2 w-12 bg-slate-700/50 rounded" />
                          <div className={`h-2 w-8 rounded ${
                            i === 0 ? "bg-blue-500/40" :
                            i === 1 ? "bg-pink-500/40" : "bg-blue-600/40"
                          }`} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Campaign Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {["Email", "SEO", "Ads"].map((campaign, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <div className="h-2 w-16 bg-slate-700/50 rounded mb-2" />
                        <div className="flex items-center justify-between mb-1">
                          <div className="h-3 w-8 bg-slate-700/50 rounded" />
                          <div className={`h-3 w-6 rounded ${
                            i === 0 ? "bg-orange-500/40" :
                            i === 1 ? "bg-green-500/40" : "bg-blue-500/40"
                          }`} />
                        </div>
                        <div className="h-1.5 w-full bg-slate-700/30 rounded" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glare Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* Laptop Keyboard Base */}
            <motion.div
              className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] h-6 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-xl shadow-xl"
              style={{ transform: "perspective(1000px) rotateX(8deg)" }}
            />
            <motion.div
              className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[850px] h-3 bg-slate-900 rounded-lg shadow-2xl"
              style={{ transform: "perspective(1000px) rotateX(12deg)" }}
            />
          </motion.div>

          {/* Glowing Effect Behind Browser */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-orange-500/10 via-green-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Enhanced Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/50 rounded-full"
          initial={{
            x: `${10 + (i * 3.5)}%`,
            y: `${20 + (i % 4) * 25}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [
              `${20 + (i % 4) * 25}%`,
              `${10 + (i % 4) * 25}%`,
              `${20 + (i % 4) * 25}%`,
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cursor follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Animated Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 mb-8 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary">Award-Winning Creative Agency</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Award className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.div>

          {/* Animated Heading with better typography */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6 md:mb-8 leading-tight px-2"
          >
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-2"
            >
              <span className="block">We Create</span>
            </motion.div>
            <motion.div
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-2"
            >
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
                  Digital Experiences
                </motion.span>
              </span>
            </motion.div>
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="block">That Grow Brands</span>
            </motion.div>
          </motion.h1>
          
          {/* Animated Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Transform your brand with{" "}
            <motion.span
              className="text-primary font-semibold"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              cutting-edge
            </motion.span>{" "}
            design, strategic marketing, and innovative digital solutions that drive{" "}
            <motion.span
              className="text-orange-500 font-semibold relative"
              whileHover={{ scale: 1.05 }}
            >
              real results
              <motion.span
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/40 via-green-500/40 to-blue-500/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.6 }}
              />
            </motion.span>
            .
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-16 px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/contact" className="relative z-10 flex items-center justify-center">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  Get in Touch
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full border-2 backdrop-blur-md bg-background/60 hover:bg-background/90 transition-all duration-300 hover:border-primary/50 w-full sm:w-auto"
              >
                <Link href="/portfolio" className="flex items-center justify-center">
                  View Our Work
                  <motion.div
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Animated Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
          >
            {[
              { number: "200+", label: "Projects", icon: TrendingUp, color: "orange" },
              { number: "150+", label: "Clients", icon: Zap, color: "green" },
              { number: "50+", label: "Awards", icon: Award, color: "blue" },
            ].map((stat, i) => {
              const Icon = stat.icon
              const colorClasses = {
                orange: "from-orange-500/10 to-orange-500/5 border-orange-500/20 text-orange-500",
                green: "from-green-500/10 to-green-500/5 border-green-500/20 text-green-500",
                blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-500",
              }
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} border backdrop-blur-sm group cursor-pointer transition-all duration-300`}
                >
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="inline-block mb-4"
                  >
                    <Icon className={`h-8 w-8 sm:h-10 sm:w-10`} />
                  </motion.div>
                  <motion.div
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-2`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-muted-foreground uppercase tracking-wider font-semibold"
            >
              Scroll
            </motion.span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-7 h-12 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-md bg-background/60 shadow-lg"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
