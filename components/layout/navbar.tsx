"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 20)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
            : "bg-background/80 backdrop-blur-md md:bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="flex items-center space-x-2 z-50 relative"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Bizsun
              </span>
              <span className="text-sm text-muted-foreground">Creative</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-4"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
              <Button asChild className="ml-4">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative z-50"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-50"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 md:hidden flex flex-col"
            >
              {/* Close Button Header */}
              <div className="flex items-center justify-between h-20 px-6 border-b border-border/50 flex-shrink-0">
                <Link 
                  href="/" 
                  className="flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Bizsun
                  </span>
                  <span className="text-sm text-muted-foreground">Creative</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col flex-1 overflow-y-auto px-6 pb-8 pt-4">
                {/* Menu Items */}
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 relative group",
                          pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:text-primary hover:bg-accent"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {pathname === item.href && (
                          <motion.div
                            layoutId="mobileActiveTab"
                            className="absolute inset-0 bg-primary/10 rounded-lg border-l-2 border-primary"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-1" />

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.1, duration: 0.3 }}
                  className="mt-auto pt-6"
                >
                  <Button 
                    asChild 
                    className="w-full h-12 text-base font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>

                {/* Theme Toggle (Mobile) */}
                {mounted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2, duration: 0.3 }}
                    className="mt-4 flex items-center justify-center"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark")
                      }}
                      className="w-full"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-5 w-5 mr-2" />
                          Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="h-5 w-5 mr-2" />
                          Dark Mode
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

