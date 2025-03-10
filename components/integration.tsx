"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Zap, Code, Database, Smartphone, Workflow } from "lucide-react"

// Tecnologias e ferramentas que a empresa utiliza
const technologies = [
  { name: "React", icon: "/placeholder.svg?height=40&width=40", category: "frontend" },
  { name: "Next.js", icon: "/placeholder.svg?height=40&width=40", category: "frontend" },
  { name: "Vue.js", icon: "/placeholder.svg?height=40&width=40", category: "frontend" },
  { name: "Angular", icon: "/placeholder.svg?height=40&width=40", category: "frontend" },
  { name: "Node.js", icon: "/placeholder.svg?height=40&width=40", category: "backend" },
  { name: "Python", icon: "/placeholder.svg?height=40&width=40", category: "backend" },
  { name: "PHP", icon: "/placeholder.svg?height=40&width=40", category: "backend" },
  { name: "MongoDB", icon: "/placeholder.svg?height=40&width=40", category: "database" },
  { name: "MySQL", icon: "/placeholder.svg?height=40&width=40", category: "database" },
  { name: "PostgreSQL", icon: "/placeholder.svg?height=40&width=40", category: "database" },
  { name: "React Native", icon: "/placeholder.svg?height=40&width=40", category: "mobile" },
  { name: "Flutter", icon: "/placeholder.svg?height=40&width=40", category: "mobile" },
  { name: "AWS", icon: "/placeholder.svg?height=40&width=40", category: "cloud" },
  { name: "Azure", icon: "/placeholder.svg?height=40&width=40", category: "cloud" },
  { name: "Google Cloud", icon: "/placeholder.svg?height=40&width=40", category: "cloud" },
  { name: "Docker", icon: "/placeholder.svg?height=40&width=40", category: "devops" },
]

export default function Integration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const [hoveredTech, setHoveredTech] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredTechnologies = activeCategory
    ? technologies.filter((tech) => tech.category === activeCategory)
    : technologies

  return (
    <section ref={containerRef} className="py-32 bg-black text-white relative overflow-hidden pattern-circuit-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-900/20 to-black opacity-70"
          style={{ opacity }}
        />
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"
          style={{ y, scale }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), scale }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 mb-6 rounded-full glass-dark border-gradient-dark"
            >
              <Zap className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Stack Tecnológica
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Tecnologias <span className="text-gradient-blue">avançadas</span> para soluções{" "}
              <span className="text-gradient-purple">inovadoras</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 mb-8 text-xl"
            >
              Utilizamos as tecnologias mais modernas do mercado para desenvolver soluções robustas, escaláveis e de
              alta performance para o seu negócio.
            </motion.p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                size="sm"
                variant={activeCategory === null ? "default" : "outline"}
                className={`rounded-full ${activeCategory === null ? "bg-gradient-blue shadow-neon-blue" : "border-blue-800 text-gray-300"}`}
                onClick={() => setActiveCategory(null)}
              >
                Todas
              </Button>
              <Button
                size="sm"
                variant={activeCategory === "frontend" ? "default" : "outline"}
                className={`rounded-full ${activeCategory === "frontend" ? "bg-gradient-blue shadow-neon-blue" : "border-blue-800 text-gray-300"}`}
                onClick={() => setActiveCategory("frontend")}
              >
                <Code className="w-4 h-4 mr-2" /> Frontend
              </Button>
              <Button
                size="sm"
                variant={activeCategory === "backend" ? "default" : "outline"}
                className={`rounded-full ${activeCategory === "backend" ? "bg-gradient-blue shadow-neon-blue" : "border-blue-800 text-gray-300"}`}
                onClick={() => setActiveCategory("backend")}
              >
                <Database className="w-4 h-4 mr-2" /> Backend
              </Button>
              <Button
                size="sm"
                variant={activeCategory === "mobile" ? "default" : "outline"}
                className={`rounded-full ${activeCategory === "mobile" ? "bg-gradient-blue shadow-neon-blue" : "border-blue-800 text-gray-300"}`}
                onClick={() => setActiveCategory("mobile")}
              >
                <Smartphone className="w-4 h-4 mr-2" /> Mobile
              </Button>
              <Button
                size="sm"
                variant={activeCategory === "database" ? "default" : "outline"}
                className={`rounded-full ${activeCategory === "database" ? "bg-gradient-blue shadow-neon-blue" : "border-blue-800 text-gray-300"}`}
                onClick={() => setActiveCategory("database")}
              >
                <Database className="w-4 h-4 mr-2" /> Banco de Dados
              </Button>
              <Button
                size="sm"
                variant={activeCategory === "cloud" ? "default" : "outline"}
                className={`rounded-full ${activeCategory === "cloud" ? "bg-gradient-blue shadow-neon-blue" : "border-blue-800 text-gray-300"}`}
                onClick={() => setActiveCategory("cloud")}
              >
                <Workflow className="w-4 h-4 mr-2" /> Cloud
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-blue hover:opacity-90 shadow-neon-blue text-lg px-8 py-6 rounded-xl"
              >
                Conheça Nossa Stack
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              {/* Central element */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="w-24 h-24 glass-gradient-dark rounded-full flex items-center justify-center border border-blue-500/30 relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse-glow" />
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Central Icon"
                    width={48}
                    height={48}
                    className="text-white relative z-10"
                  />
                </motion.div>
              </motion.div>

              {/* Orbiting technologies */}
              {filteredTechnologies.map((tech, index) => {
                // Calculate positions in a spiral pattern
                const totalTechs = filteredTechnologies.length
                const angle = (index / totalTechs) * Math.PI * 6
                const radius = 80 + index * 10
                const x = radius * Math.cos(angle)
                const y = radius * Math.sin(angle)

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      zIndex: index === hoveredTech ? 30 : 10,
                    }}
                    onHoverStart={() => setHoveredTech(index)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className="glass-dark rounded-full flex items-center justify-center relative"
                      animate={{
                        width: index === hoveredTech ? "auto" : "40px",
                        height: index === hoveredTech ? "40px" : "40px",
                        boxShadow: index === hoveredTech ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />

                      <AnimatePresence>
                        {index === hoveredTech && (
                          <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="ml-2 whitespace-nowrap overflow-hidden"
                          >
                            {tech.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  {filteredTechnologies.map((_, index) => {
                    // Calculate positions in a spiral pattern
                    const totalTechs = filteredTechnologies.length
                    const angle = (index / totalTechs) * Math.PI * 6
                    const radius = 80 + index * 10
                    const x = radius * Math.cos(angle)
                    const y = radius * Math.sin(angle)

                    return (
                      <motion.line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="url(#gradient-line)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{
                          pathLength: 1,
                          opacity: index === hoveredTech ? 0.8 : 0.3,
                          strokeWidth: index === hoveredTech ? 2 : 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    )
                  })}
                </motion.g>

                {/* Gradient definition for lines */}
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated rings */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                <motion.div
                  className="w-40 h-40 rounded-full border border-blue-500/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-60 h-60 rounded-full border border-purple-500/20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="w-80 h-80 rounded-full border border-pink-500/20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

