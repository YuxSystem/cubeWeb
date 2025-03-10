"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart, Activity } from "lucide-react"

export default function Solutions() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Solução</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Monitore e analise o engajamento global de usuários em tempo real.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Saiba Mais
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 flex space-x-2">
                <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
                <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              </div>

              <div className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Engajamento de Usuários</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Diário</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Semanal</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Mensal</button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Usuários Ativos</span>
                      <Activity className="h-4 w-4 text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold">8,642</p>
                    <p className="text-xs text-green-500">+12.5% vs. semana anterior</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Tempo Médio</span>
                      <LineChart className="h-4 w-4 text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold">24m 13s</p>
                    <p className="text-xs text-green-500">+3.2% vs. semana anterior</p>
                  </div>
                </div>

                <div className="h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center p-4 relative">
                  <div className="absolute inset-0 p-4">
                    <div className="w-full h-full flex items-end">
                      <div className="w-1/7 h-20 bg-blue-200 rounded-t-md mx-1"></div>
                      <div className="w-1/7 h-28 bg-blue-300 rounded-t-md mx-1"></div>
                      <div className="w-1/7 h-24 bg-blue-400 rounded-t-md mx-1"></div>
                      <div className="w-1/7 h-36 bg-blue-500 rounded-t-md mx-1"></div>
                      <div className="w-1/7 h-32 bg-blue-600 rounded-t-md mx-1"></div>
                      <div className="w-1/7 h-40 bg-blue-700 rounded-t-md mx-1"></div>
                      <div className="w-1/7 h-44 bg-blue-800 rounded-t-md mx-1"></div>
                    </div>
                  </div>
                  <BarChart className="h-12 w-12 text-gray-300" />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-2">
                    <PieChart className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-500">Relatório completo disponível</span>
                  </div>
                  <button className="text-sm text-blue-600 font-medium">Exportar</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

