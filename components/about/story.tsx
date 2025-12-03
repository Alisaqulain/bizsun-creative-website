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
                We are an audio-visual production house founded by experienced industry professionals and young creative-technical enthusiasts. At Bizsun Creative, we bring together the best of both worlds - seasoned expertise and fresh, innovative perspectives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We nurture the best and experienced professionals in every department to cater to your needs and offer you the finest output that are original as well as unique. Our aim is to grow as a company along with you by providing you the best of our production services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-semibold text-primary">
                Quality is our identity, commitment is our strength.
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
              Our Production Process
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {["Initial Brief", "Ideation/Scripting", "Storyboard", "Execution"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                  <div className="text-sm font-semibold">{step}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              From concept to final delivery, we follow a structured approach ensuring every project meets the highest standards of quality and creativity. Our team of experienced professionals works collaboratively to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

