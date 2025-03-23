"use client"

import Image from "next/image"

export default function ExampleImage() {
  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Exemplos de Imagens</h2>

      {/* Imagem básica */}
      <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Imagem de fundo do hero"
          fill
          className="object-cover"
          priority // Carrega com prioridade (para imagens acima da dobra)
        />
      </div>

      {/* Imagem com tamanho fixo */}
      <div className="flex justify-center">
        <Image src="/images/logo.png" alt="Logo da empresa" width={200} height={80} className="rounded-lg" />
      </div>

      {/* Imagem com efeito hover */}
      <div className="relative w-64 h-64 rounded-xl overflow-hidden group">
        <Image
          src="/images/services/web-dev.jpg"
          alt="Desenvolvimento Web"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white font-bold text-xl">Desenvolvimento Web</h3>
        </div>
      </div>
    </div>
  )
}

