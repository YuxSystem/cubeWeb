"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Our sales team has seen a significant increase in closed deals. The automated workflows and lead scoring simplified our processes.",
    author: "Esther Howard",
    role: "Operations Director",
    company: "Acme Inc.",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote: "Allows us to provide personalized service and build stronger relationships with customers.",
    author: "Q. Hawkins",
    role: "Operations Director",
    company: "Globex Corp",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote: "Facilitates seamless communication and collaboration, ensuring everyone is on the same page.",
    author: "Jacob Jones",
    role: "Operations Director",
    company: "Initech",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            <span className="mr-1">💬</span> Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear directly from businesses that <span className="text-gradient">succeed with CRM.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the impact of CRM on customer relationships.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass-effect rounded-2xl p-8 shadow-sm hover:shadow-blue transition-all duration-300 hover:-translate-y-1 relative"
    >
      <div className="absolute top-6 right-6 text-blue-100">
        <Quote className="w-10 h-10 text-blue-100 opacity-50" />
      </div>

      <p className="text-gray-600 italic mb-8 relative z-10">{testimonial.quote}</p>

      <div className="flex items-center">
        <div className="mr-4 relative">
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm transform scale-110"></div>
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.author}
            width={56}
            height={56}
            className="rounded-full relative z-10 border-2 border-white"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.author}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <p className="text-blue-600 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

