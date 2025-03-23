"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "/images/team/person1.jpg",
    bio: "Especialista em desenvolvimento web com mais de 10 anos de experiência no mercado.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ana@cubesoftware.com",
    },
  },
  {
    name: "Carlos Mendes",
    role: "CTO",
    image: "/images/team/person2.jpg",
    bio: "Desenvolvedor full-stack com foco em arquitetura de sistemas e soluções escaláveis.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "carlos@cubesoftware.com",
    },
  },
  {
    name: "Juliana Costa",
    role: "Diretora de Design",
    image: "/images/team/person3.jpg",
    bio: "Designer de experiência do usuário apaixonada por criar interfaces intuitivas e acessíveis.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "juliana@cubesoftware.com",
    },
  },
  {
    name: "Rafael Oliveira",
    role: "Gerente de Projetos",
    image: "/images/team/person4.jpg",
    bio: "Especialista em metodologias ágeis com experiência em gerenciamento de projetos complexos.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rafael@cubesoftware.com",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais talentosos por trás das nossas soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamMember({ member, index }: { member: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-4">
            <a
              href={member.social.linkedin}
              className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href={member.social.twitter}
              className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a
              href={`mailto:${member.social.email}`}
              className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </motion.div>
  )
}

