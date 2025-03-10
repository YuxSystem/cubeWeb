"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is CRM?",
    answer:
      "CRM (Customer Relationship Management) is a system that helps companies manage interactions with customers, streamline processes, and improve business relationships.",
  },
  {
    question: "What are the key features of a CRM system?",
    answer:
      "Common CRM features include contact management, sales tracking, customer support, reporting, and analytics.",
  },
  {
    question: "How do I choose the right CRM for my business?",
    answer:
      "To choose the right CRM, consider your company size, budget, needed features, ease of use, and integration with existing tools.",
  },
  {
    question: "Benefits of using a CRM system?",
    answer:
      "A CRM system improves customer relationships, increases sales, enhances team collaboration, automates repetitive tasks, and provides valuable insights into customer behavior.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">questions.</span>
          </h2>
          <p className="text-gray-600">Have questions? We have answers!</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

