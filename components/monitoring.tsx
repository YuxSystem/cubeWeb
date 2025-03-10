"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Monitoring() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dark opacity-30"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-3 gap-4 relative">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  d="M50,50 L150,50 L150,150 L250,150 L250,250"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  d="M50,150 L100,150 L100,250 L200,250"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  d="M150,50 L200,50 L200,100 L250,100"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>

              {[...Array(9)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="aspect-square glass-effect-dark rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center relative z-10">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt={`Icon ${index + 1}`}
                        width={24}
                        height={24}
                        className="text-blue-400"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Data Point {index + 1}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800/50">
              <span className="mr-1">📊</span> Real-time Analytics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Monitor and analyze global user{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                engagement in real time.
              </span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Take full control by monitoring and analyzing user engagement in real time with our advanced analytics and
              easy-to-use dashboard interface.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-blue">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

