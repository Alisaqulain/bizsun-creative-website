"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Branding & Design", href: "/services#branding" },
    { name: "Web Development", href: "/services#web" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Video Production", href: "/services#video" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Company Info - Spans 2 columns on large screens */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4"
              >
                <Image
                  src="/Bizsun Logo.png"
                  alt="Bizsun Creative"
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
              
              <p className="text-white/70 leading-relaxed max-w-md">
                An audio-visual production house founded by experienced industry professionals and young creative-technical enthusiasts. Quality is our identity, commitment is our strength.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Subscribe to our newsletter</h4>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 border-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 border border-white/10 hover:border-white/30`}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <motion.h3
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="font-bold text-lg mb-6 text-white"
              >
                Company
              </motion.h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-white/70 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"
                      />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <motion.h3
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="font-bold text-lg mb-6 text-white"
              >
                Services
              </motion.h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-white/70 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"
                      />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <motion.h3
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="font-bold text-lg mb-6 text-white"
              >
                Get in Touch
              </motion.h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-orange-500 group-hover:to-green-500 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 text-orange-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <a
                    href="mailto:info@bizsoncreative.com"
                    className="text-sm text-white/70 hover:text-white transition-colors flex-1"
                  >
                    info@bizsoncreative.com
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300"
                  >
                    <Phone className="h-5 w-5 text-green-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <a
                    href="tel:+917044178863"
                    className="text-sm text-white/70 hover:text-white transition-colors flex-1"
                  >
                    +91 70441 78863
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-orange-500 transition-all duration-300"
                  >
                    <MapPin className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-sm text-white/70 flex-1">
                    Mumbai • Delhi • Kolkata, India
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 pb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-sm text-white/60"
            >
              © {new Date().getFullYear()} Bizsun Creative. All rights reserved.
            </motion.p>
            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.resources.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
