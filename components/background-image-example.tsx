"use client"

export default function BackgroundImageExample() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Exemplos de Imagens de Fundo</h2>

      {/* Imagem de fundo básica */}
      <div
        className="h-64 w-full max-w-3xl mx-auto rounded-xl mb-8 flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-white text-2xl font-bold bg-black/50 px-6 py-3 rounded-lg">Imagem de Fundo Básica</h3>
      </div>

      {/* Imagem de fundo com gradiente */}
      <div className="h-64 w-full max-w-3xl mx-auto rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/services/crm.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 z-10" />
        <div className="relative z-20 text-white text-center px-6">
          <h3 className="text-2xl font-bold mb-2">Imagem com Gradiente</h3>
          <p>Adicione gradientes sobre imagens para melhorar a legibilidade do texto</p>
        </div>
      </div>

      {/* Imagem de fundo com efeito parallax */}
      <div className="h-64 w-full max-w-3xl mx-auto rounded-xl overflow-hidden relative">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(/images/services/web-dev.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center text-white text-center px-6">
          <h3 className="text-2xl font-bold">Efeito Parallax</h3>
        </div>
      </div>
    </div>
  )
}

