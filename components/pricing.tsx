"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Everything you need to get started",
    features: ["Full visibility into system usage", "Seamless connect", "Personalized training sessions"],
  },
  {
    name: "Pro",
    price: "$139",
    description: "Perfect for growing teams",
    features: [
      "Full visibility into system usage",
      "Seamless connect",
      "Personalized training sessions",
      "Advanced encryption",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$199",
    description: "For teams that need more",
    features: ["Full visibility into system usage", "Seamless connect", "Advanced encryption", "24/7 support access"],
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-50"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            <span className="mr-1">💰</span> Flexible Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible plans that evolve <span className="text-gradient">with your needs.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Designed to scale effortlessly as you grow.</p>

          <div className="inline-flex p-1 rounded-full bg-gray-100 mb-8">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly" ? "bg-white shadow-md text-blue-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "annual" ? "bg-white shadow-md text-blue-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual <span className="text-green-600 text-xs">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} billingCycle={billingCycle} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  plan,
  index,
  billingCycle,
}: {
  plan: any
  index: number
  billingCycle: "monthly" | "annual"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Calculate annual price (20% discount)
  const annualPrice = Number.parseInt(plan.price.replace("$", "")) * 0.8
  const displayPrice = billingCycle === "monthly" ? plan.price : `$${annualPrice}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`glass-effect rounded-2xl p-8 relative ${
        plan.popular ? "shadow-blue border-blue-200" : "border border-gray-200 hover:border-blue-200 hover:shadow-blue"
      } transition-all duration-300 hover:-translate-y-1`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-primary text-white text-sm font-medium py-1 px-4 rounded-full shadow-md">
            Most Popular
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{displayPrice}</span>
        <span className="text-gray-600">/month</span>
        {billingCycle === "annual" && <div className="text-green-600 text-sm mt-1">Billed annually</div>}
      </div>
      <Button
        className={`w-full mb-6 ${
          plan.popular ? "bg-gradient-primary hover:opacity-90" : "bg-gray-900 hover:bg-gray-800"
        }`}
      >
        Choose Plan
      </Button>
      <ul className="space-y-3">
        {plan.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center">
            <div className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-3 w-3 text-green-600" />
            </div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

