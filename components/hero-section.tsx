export function HeroSection() {
  return (
    <section className="relative py-12 px-4 md:px-8 flex flex-col items-center justify-center">
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

        {/* Data em destaque */}
        <div className="inline-block bg-primary/20 border border-primary/50 rounded-lg px-4 py-2 mb-6">
          <p className="text-sm md:text-base font-bold text-primary glow-text leading-tight">
            <span className="block">27/05 - Programação Cultural</span>
            <span className="block">29/05 - Concurso de Cosplay</span>
          </p>
        </div>

        {/* Cartaz */}
        <div className="mt-4 flex justify-center">
          <img
            src="/cartaz-evento.png"
            alt="Cartaz do Dia da Toalha"
            className="w-full max-w-xl h-auto rounded-lg border border-border glow-box float-animation"
          />
        </div>

        {/* CTA */}
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mt-4">
          Venha fantasiado do seu personagem favorito e participe do nosso concurso de cosplay e cospobre!
        </p>
      </div>
    </section>
  )
}
