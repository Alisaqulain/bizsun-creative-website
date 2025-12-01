"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

function ScrollProgressContent() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50 origin-left"
      style={{ scaleX }}
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-primary via-primary/80 to-primary"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  )
}

export function ScrollProgress() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50" />
    )
  }

  return <ScrollProgressContent />
}

