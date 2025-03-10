"use client"

import { motion } from "framer-motion"
import { Users, Globe, Settings, Layers } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

const highlights = [
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Feito para Trabalho em Equipe",
    description: "Projetado para ajudar equipes a trabalharem juntas facilmente e alcançarem objetivos.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "Fonte Global Unificada",
    description: "Uma única fonte global que todos podem acessar e confiar.",
  },
  {
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    title: "Incrivelmente Fácil de Configurar",
    description: "Configuração rápida e simples que qualquer um pode fazer sem complicações.",
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-600" />,
    title: "Integração com Apps",
    description: "Conecta-se facilmente com seus aplicativos para uma experiência suave.",
  },
]

export default function Highlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Finalmente, um CRM que se adapta às suas necessidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um CRM que simplifica a gestão de relacionamento com o cliente, melhora a colaboração e otimiza fluxos de
            trabalho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HighlightCard({ highlight, index }: { highlight: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="mb-4 p-3 bg-blue-50 rounded-full">{highlight.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
      <p className="text-gray-600">{highlight.description}</p>
    </motion.div>
  )
}

