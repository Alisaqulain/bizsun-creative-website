"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Story() {
  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
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
                About Us
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
                Story
              </motion.span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building brands that make a{" "}
              <span className="text-primary font-semibold">difference</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our team"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, Bizsun Creative was born from a simple belief: every brand has a unique story waiting to be told. We started as a small team of passionate designers and marketers, united by our commitment to creating digital experiences that not only look stunning but drive real business results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we&apos;ve grown into a full-service creative agency, working with brands across industries to transform their digital presence. From startups to established enterprises, we&apos;ve helped hundreds of companies connect with their audiences in meaningful ways.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500/10 via-green-500/10 to-blue-500/10 rounded-xl p-8 border-2 border-primary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <motion.p
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl font-bold mb-4 text-foreground"
            >
              What Sets Us Apart
            </motion.p>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t just create beautiful designs—we build strategic solutions. Every project begins with deep research into your industry, audience, and goals. We combine creative excellence with data-driven insights to deliver work that not only looks great but performs exceptionally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

