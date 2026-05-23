import { MapPin, Info, AlertCircle } from "lucide-react"

export function InfoSection() {
  return (
    <section className="py-8 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary glow-text">
          Informações Importantes
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Local */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Local</h3>
            </div>
            <p className="text-foreground mb-2">
              <strong>IFMS - Campus Aquidauana</strong>
            </p>
            <p className="text-muted-foreground text-sm">
              Manhã e Tarde (dia 27): Pátio / Área comum<br />
              Cosplay (dia 29): Biblioteca do campus
            </p>
          </div>

          {/* Sobre o evento */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Sobre o Evento</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Organizado pela <strong className="text-foreground">Comissão de Cultura Geek e Nerd</strong> e 
              a <strong className="text-foreground">Comissão de Arte e Cultura</strong> do IFMS-AQ em 
              comemoração ao Dia do Orgulho Nerd!
            </p>
          </div>

          {/* Aviso importante */}
          <div className="bg-card border border-primary/50 rounded-lg p-6 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Avisos Importantes
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• <strong className="text-foreground">Evento interno:</strong> Apenas para estudantes do IFMS</li>
                  <li>• <strong className="text-foreground">Não é necessária inscrição prévia</strong></li>
                  <li>• <strong className="text-foreground">Aulas normais:</strong> As aulas ocorrerão normalmente durante o dia</li>
                  <li>• <strong className="text-foreground">Cosplay (dia 29):</strong> Venha fantasiado e participe do concurso presencialmente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Atividades */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            O que teremos?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎬", label: "Cinema" },
              { emoji: "🎲", label: "Jogos de Tabuleiro" },
              { emoji: "📸", label: "Espaço para Fotos" },
              { emoji: "🎭", label: "Concurso de Cosplay" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all"
              >
                <span className="text-4xl mb-2 block">{item.emoji}</span>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
