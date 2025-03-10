"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 shadow-blue relative overflow-hidden"
        >
          {/* Background gradient elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              <span className="mr-1">🚀</span> Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get a free demo today and discover how CRM can{" "}
              <span className="text-gradient">transform your business.</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-blue">
                Get Demo
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

