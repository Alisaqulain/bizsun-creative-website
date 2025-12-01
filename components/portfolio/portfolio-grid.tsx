"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import { useToast } from "@/components/ui/toast"

const projects = [
  {
    id: 1,
    title: "TechStart Branding",
    category: "Branding",
    description: "Complete brand identity redesign for a tech startup, including logo, color palette, typography, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    fullDescription: "We transformed TechStart's brand identity from a generic tech company look to a modern, vibrant brand that stands out in the competitive startup landscape. The new identity reflects innovation, energy, and forward-thinking values.",
    services: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Custom e-commerce website with seamless shopping experience and integrated payment solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    fullDescription: "Built a fully responsive e-commerce platform with advanced features including product filtering, wishlist, cart management, and secure checkout. The site achieved a 40% increase in conversion rates.",
    services: ["Web Design", "E-Commerce Development", "UI/UX Design"],
    year: "2024",
  },
  {
    id: 3,
    title: "Fashion Brand Campaign",
    category: "Digital Marketing",
    description: "Comprehensive social media marketing campaign that increased brand awareness by 250%.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    fullDescription: "Developed and executed a multi-channel digital marketing campaign for a fashion brand, including Instagram, Facebook, and TikTok strategies. The campaign generated over 1M impressions and significantly increased online sales.",
    services: ["Social Media Marketing", "Content Creation", "Influencer Partnerships"],
    year: "2023",
  },
  {
    id: 4,
    title: "Product Launch Video",
    category: "Video Production",
    description: "Compelling product launch video that generated 500K+ views and drove significant product sales.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop",
    fullDescription: "Created a high-energy product launch video combining live-action footage, motion graphics, and dynamic editing. The video became the brand's most successful marketing asset.",
    services: ["Video Production", "Motion Graphics", "Video Editing"],
    year: "2023",
  },
  {
    id: 5,
    title: "Healthcare App Design",
    category: "Web Development",
    description: "User-friendly healthcare application with appointment booking and patient portal features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    fullDescription: "Designed and developed a comprehensive healthcare app focusing on user experience and accessibility. The app simplifies appointment scheduling and provides patients with easy access to their medical information.",
    services: ["App Design", "UI/UX Design", "Frontend Development"],
    year: "2023",
  },
  {
    id: 6,
    title: "Restaurant Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a modern restaurant chain, including logo, menu design, and packaging.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    fullDescription: "Developed a warm, inviting brand identity that reflects the restaurant's commitment to fresh, local ingredients. The identity extends across all touchpoints from menus to packaging to digital presence.",
    services: ["Brand Identity", "Logo Design", "Packaging Design"],
    year: "2023",
  },
]

export function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const { addToast } = useToast()

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter)

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    if (newFilter !== "All") {
      addToast({
        type: "info",
        title: "Filter Applied",
        description: `Showing ${newFilter} projects`,
        duration: 2000,
      })
    }
  }

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
    addToast({
      type: "info",
      title: "Project Details",
      description: `Viewing ${project.title}`,
      duration: 2000,
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
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
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
              Our Work
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
              Portfolio
            </motion.span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing our best work across branding, web design, marketing, and more
          </p>
        </motion.div>

        {/* Info Alert */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Alert
              variant="warning"
              title="No Projects Found"
              description={`No projects found in the ${filter} category. Try selecting a different filter.`}
              showIcon
              dismissible
            />
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category ? "default" : "outline"}
                onClick={() => handleFilterChange(category)}
                className={filter === category ? "bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600" : ""}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, y: -60, scale: 0.9, rotateY: 15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 relative"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Animated content */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm text-primary font-semibold mb-3 uppercase tracking-wider"
                      >
                        {project.category}
                      </motion.p>
                      <motion.h3
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-white mb-4"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center text-white/90 text-sm font-medium"
                      >
                        <span>View Project</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-6 right-6 w-14 h-14 border-2 border-primary rounded-xl"
                      initial={{ scale: 0, rotate: -45 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-primary font-medium">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h2 className="text-3xl font-bold mt-2">{selectedProject.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Services Provided:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
                      <motion.span
                        key={service}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-orange-500/10 via-green-500/10 to-blue-500/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600"
                      onClick={() => {
                        addToast({
                          type: "success",
                          title: "Ready to Start Your Project?",
                          description: "Let's discuss how we can help bring your vision to life!",
                          duration: 4000,
                        })
                      }}
                    >
                      <a href="/contact">Start Your Project</a>
                    </Button>
                  </motion.div>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
