"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, ChevronDown, Code, Database, Smartphone, Zap } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax effect values
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const y3 = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Spring animations for smoother movement
  const springConfig = { stiffness: 100, damping: 30 }
  const mouseX = useSpring(useMotionValue(0), springConfig)
  const mouseY = useSpring(useMotionValue(0), springConfig)

  useEffect(() => {
    mouseX.set(mousePosition.x)
    mouseY.set(mousePosition.y)
  }, [mousePosition, mouseX, mouseY])

  // Floating elements animation variants
  const floatingVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden pattern-dots"
      style={
        {
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl"
          style={{ opacity }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full filter blur-3xl animate-pulse-glow" />
        </motion.div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      {/* Content container */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center px-4 py-2 mb-8 rounded-full glass border-gradient"
          >
            <Code className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Transformando ideias em tecnologia • 2025
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textRevealVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Soluções tecnológicas
            <span className="relative ml-2">
              <span className="text-gradient-blue">avançadas</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-blue rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
            <br />
            <motion.span
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textRevealVariants}
              className="text-gradient-purple"
            >
              para o seu negócio.
            </motion.span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textRevealVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10"
          >
            Desenvolvemos sites, CRMs, aplicativos e automações que transformam a maneira como sua empresa opera e se
            conecta com seus clientes.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={textRevealVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-blue hover:opacity-90 shadow-neon-blue text-lg px-8 py-6 rounded-xl"
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl"
            >
              Nossos Projetos
            </Button>
          </motion.div>

          {/* 3D Floating Elements */}
          <div className="relative w-full max-w-5xl h-80 perspective">
            <AnimatePresence>
              {[1, 2, 3, 4, 5].map((i) => {
                // Calculate positions based on index
                const positions = [
                  { left: "15%", top: "20%" },
                  { right: "20%", top: "15%" },
                  { left: "25%", bottom: "15%" },
                  { right: "25%", bottom: "25%" },
                  { left: "45%", top: "50%" },
                ]
                const pos = positions[i - 1]

                return (
                  <motion.div
                    key={i}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    custom={i}
                    variants={floatingVariants}
                    className="absolute animate-float"
                    style={{
                      ...pos,
                      animationDelay: `${i * 0.5}s`,
                      zIndex: 10 - i,
                    }}
                  >
                    <div className="glass rounded-2xl shadow-neon-blue overflow-hidden">
                      <div className="relative p-4 backdrop-blur-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
                        <div className="relative z-10">
                          {i === 1 && (
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <Code className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="text-sm font-medium">Desenvolvimento Web</div>
                            </div>
                          )}

                          {i === 2 && (
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <Database className="h-4 w-4 text-purple-600" />
                              </div>
                              <div className="text-sm font-medium">CRM Personalizado</div>
                            </div>
                          )}

                          {i === 3 && (
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Smartphone className="h-4 w-4 text-green-600" />
                              </div>
                              <div className="text-sm font-medium">Aplicativos Mobile</div>
                            </div>
                          )}

                          {i === 4 && (
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                <Zap className="h-4 w-4 text-amber-600" />
                              </div>
                              <div className="text-sm font-medium">Automação de Processos</div>
                            </div>
                          )}

                          {i === 5 && (
                            <div className="w-16 h-16 rounded-full bg-gradient-blue flex items-center justify-center">
                              <Image
                                src="/placeholder.svg?height=32&width=32"
                                width={32}
                                height={32}
                                alt="Central Icon"
                                className="text-white"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {[1, 2, 3, 4].map((i) => (
                <motion.path
                  key={i}
                  d={`M50%,50% L${i === 1 ? "15%,20%" : i === 2 ? "80%,15%" : i === 3 ? "25%,85%" : "75%,75%"}`}
                  stroke="url(#gradient-line)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.3,
                    transition: { delay: 0.5 + i * 0.2, duration: 1.5 },
                  }}
                />
              ))}

              {/* Gradient definition for lines */}
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Reviews section with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center justify-center mt-4 space-x-1 glass px-6 py-3 rounded-full"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-medium">4.9</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-600">+200 Projetos Entregues</span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

