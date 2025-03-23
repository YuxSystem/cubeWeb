"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

// Dados de exemplo para a galeria
const galleryImages = [
  {
    src: "/images/services/web-dev.jpg",
    alt: "Desenvolvimento Web",
    title: "Desenvolvimento Web",
  },
  {
    src: "/images/services/crm.jpg",
    alt: "CRM Personalizado",
    title: "CRM Personalizado",
  },
  {
    src: "/images/services/mobile.jpg",
    alt: "Aplicativos Mobile",
    title: "Aplicativos Mobile",
  },
  {
    src: "/images/services/automation.jpg",
    alt: "Automação de Processos",
    title: "Automação de Processos",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Galeria de Projetos</h2>

      {/* Grid de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h3 className="text-white font-bold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de visualização de imagem */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold">{galleryImages[selectedImage].title}</h3>
              </div>
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

