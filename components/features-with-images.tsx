"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web responsivas, rápidas e otimizadas para SEO, com experiências de usuário excepcionais.",
    image: "/images/services/web-dev.jpg",
  },
  {
    title: "CRM Personalizado",
    description:
      "Sistemas de gestão de relacionamento com o cliente adaptados às necessidades específicas do seu negócio.",
    image: "/images/services/crm.jpg",
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android que oferecem experiências perfeitas aos seus usuários.",
    image: "/images/services/mobile.jpg",
  },
  {
    title: "Automação de Processos",
    description:
      "Soluções de automação que eliminam tarefas repetitivas e aumentam a eficiência operacional da sua empresa.",
    image: "/images/services/automation.jpg",
  },
]

export default function FeaturesWithImages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos tecnologias personalizadas que se adaptam perfeitamente às necessidades do seu negócio.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureWithImage key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureWithImage({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
        <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
        <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`order-first ${index % 2 === 1 ? "md:order-last" : "md:order-first"}`}
      >
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  )
}

