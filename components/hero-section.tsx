import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-12 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold glow-text text-primary mb-2">
          DIA DA TOALHA
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          ✦ Orgulho Nerd ✦
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          IFMS - Aquidauana
        </p>

        {/* Cartaz do evento */}
        <div className="relative w-full max-w-md mx-auto mb-8 float-animation">
          <div className="glow-box rounded-lg overflow-hidden">
            <Image
              src="/cartaz-evento.png"
              alt="Cartaz do Dia da Toalha - Evento com data 27/05, intervalo cultural manhã e tarde, cinema, jogos de tabuleiro e concurso de cosplay"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Data em destaque */}
        <div className="inline-block bg-primary/20 border border-primary/50 rounded-lg px-6 py-4 mb-8">
          <p className="text-lg text-muted-foreground">Quarta-feira</p>
          <p className="text-4xl md:text-5xl font-bold text-primary glow-text">
            27 de Maio
          </p>
        </div>

        {/* CTA */}
        <p className="text-lg text-foreground/80 max-w-xl mx-auto">
          Venha fantasiado do seu personagem favorito e participe do nosso concurso de cosplay!
        </p>
      </div>
    </section>
  )
}
