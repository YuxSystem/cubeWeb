"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function HeroWithImage() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
      </div>

      {/* Conteúdo */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium text-white">{t("hero.tagline")}</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("hero.title")} <span className="text-gradient-blue">{t("hero.titleHighlight")}</span>
              <br />
              <span className="text-gradient-purple">{t("hero.subtitle")}</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-lg">{t("hero.description")}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-blue hover:opacity-90 shadow-neon-blue text-lg px-8 py-6 rounded-xl"
              >
                {t("hero.cta.primary")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
              >
                {t("hero.cta.secondary")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative h-[500px] w-full">
              <Image src="/images/hero-illustration.png" alt="Hero Illustration" fill className="object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

