"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=30&width=120" },
  { name: "Partner 2", logo: "/placeholder.svg?height=30&width=120" },
  { name: "Partner 3", logo: "/placeholder.svg?height=30&width=120" },
  { name: "Partner 4", logo: "/placeholder.svg?height=30&width=120" },
  { name: "Partner 5", logo: "/placeholder.svg?height=30&width=120" },
]

export default function Partners() {
  return (
    <section className="py-12 border-t border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={30}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

