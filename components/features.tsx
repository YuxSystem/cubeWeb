"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Code, Database, Smartphone, Zap, ArrowRight } from "lucide-react"

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web responsivas, rápidas e otimizadas para SEO, com experiências de usuário excepcionais.",
    color: "blue",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "CRM Personalizado",
    description:
      "Sistemas de gestão de relacionamento com o cliente adaptados às necessidades específicas do seu negócio.",
    color: "purple",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aplicativos Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android que oferecem experiências perfeitas aos seus usuários.",
    color: "pink",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automação de Processos",
    description:
      "Soluções de automação que eliminam tarefas repetitivas e aumentam a eficiência operacional da sua empresa.",
    color: "amber",
  },
]

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden pattern-dots">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-70"
        style={{ opacity }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full glass border-gradient"
          >
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Nossas Especialidades
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Soluções tecnológicas que <span className="text-gradient-blue">impulsionam seu crescimento</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-xl"
          >
            Desenvolvemos tecnologias personalizadas que se adaptam perfeitamente às necessidades do seu negócio.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Floating elements */}
        <div className="relative h-40 mt-20">
          <motion.div
            className="absolute left-1/4 top-0 w-20 h-20 bg-blue-100/50 rounded-full"
            style={{ y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute right-1/4 bottom-0 w-16 h-16 bg-purple-100/50 rounded-full"
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 w-12 h-12 bg-pink-100/50 rounded-full"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      shadow: "shadow-neon-blue",
      text: "text-blue-600",
      gradient: "from-blue-600 to-blue-400",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      shadow: "shadow-neon-purple",
      text: "text-purple-600",
      gradient: "from-purple-600 to-purple-400",
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      shadow: "shadow-neon-multi",
      text: "text-pink-600",
      gradient: "from-pink-600 to-pink-400",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      shadow: "shadow-neon-multi",
      text: "text-amber-600",
      gradient: "from-amber-600 to-amber-400",
    },
  }

  const colors = colorClasses[feature.color as keyof typeof colorClasses]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`neo-brutalism rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden relative ${
        feature.color === "blue"
          ? "neo-brutalism-blue"
          : feature.color === "purple"
            ? "neo-brutalism-purple"
            : "neo-brutalism"
      }`}
    >
      {/* Background gradient that appears on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0`}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
        <div className={colors.text}>{feature.icon}</div>

        {/* Animated circles on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: isHovered
              ? `0 0 0 2px rgba(255,255,255,0.8), 0 0 0 6px ${feature.color === "blue" ? "rgba(59, 130, 246, 0.2)" : feature.color === "purple" ? "rgba(147, 51, 234, 0.2)" : feature.color === "pink" ? "rgba(236, 72, 153, 0.2)" : "rgba(245, 158, 11, 0.2)"}`
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h3 className="text-2xl font-bold mb-3 relative z-10">{feature.title}</h3>
      <p className="text-gray-600 mb-6 relative z-10">{feature.description}</p>

      <motion.div
        className="flex items-center text-sm font-medium relative z-10"
        animate={{
          x: isHovered ? 5 : 0,
          color: isHovered
            ? feature.color === "blue"
              ? "#2563eb"
              : feature.color === "purple"
                ? "#9333ea"
                : feature.color === "pink"
                  ? "#ec4899"
                  : "#f59e0b"
            : "#6b7280",
        }}
        transition={{ duration: 0.3 }}
      >
        Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
      </motion.div>
    </motion.div>
  )
}

