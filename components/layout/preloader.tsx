"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!mounted) return null
  if (!isLoading) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { color: "orange", delay: 0, size: 400 },
              { color: "green", delay: 0.3, size: 500 },
              { color: "blue", delay: 0.6, size: 450 },
            ].map((orb, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 100, -50, 0],
                  y: [0, 50, -30, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: orb.delay,
                  ease: "easeInOut",
                }}
                className={`absolute rounded-full blur-3xl ${
                  orb.color === 'orange' ? 'bg-orange-500/30' :
                  orb.color === 'green' ? 'bg-green-500/30' :
                  'bg-blue-500/30'
                }`}
                style={{
                  width: `${orb.size}px`,
                  height: `${orb.size}px`,
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
              />
            ))}
          </div>

          {/* Main loader content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Logo/Brand */}
            <motion.div
              variants={logoVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative"
              >
                <Image
                  src="/Bizsun Logo.png"
                  alt="Bizsun Creative"
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </motion.div>
              
              {/* Rotating rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute inset-0 border-${i === 0 ? 'orange' : i === 1 ? 'green' : 'blue'}-500/30 border-2 rounded-2xl`}
                  style={{
                    padding: `${(i + 1) * 8}px`,
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                  }}
                />
              ))}
            </motion.div>

            {/* Animated dots */}
            <div className="flex items-center space-x-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className={`w-4 h-4 rounded-full ${
                    i === 0
                      ? "bg-orange-500"
                      : i === 1
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full relative"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-slate-400 font-medium"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={progress < 30 ? "init" : progress < 60 ? "load" : progress < 90 ? "almost" : "ready"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {progress < 30
                    ? "Initializing..."
                    : progress < 60
                    ? "Loading assets..."
                    : progress < 90
                    ? "Almost there..."
                    : "Ready!"}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            
            {/* Progress percentage */}
            <motion.div
              variants={itemVariants}
              className="text-xs text-slate-500 font-semibold mt-2"
            >
              {progress}%
            </motion.div>
          </div>

          {/* Floating particles */}
          {mounted && [...Array(20)].map((_, i) => {
            const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
            const randomY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
            return (
              <motion.div
                key={i}
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: [randomY, randomY - 200, randomY],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0
                    ? "bg-orange-500/50"
                    : i % 3 === 1
                    ? "bg-green-500/50"
                    : "bg-blue-500/50"
                }`}
              />
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
