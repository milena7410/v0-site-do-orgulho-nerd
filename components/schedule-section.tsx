import { Clock, Sun, Moon } from "lucide-react"

const scheduleItems = [
  {
    period: "Manhã",
    icon: Sun,
    time: "09:15 às 09:45",
    title: "Intervalo Cultural",
    description: "Apresentação musical e decorações especiais para fotos",
  },
  {
    period: "Tarde",
    icon: Sun,
    time: "15:15 às 15:45",
    title: "Intervalo Cultural",
    description: "Apresentação musical e decorações especiais para fotos",
  },
  {
    period: "Noite",
    icon: Moon,
    time: "18:30 às 21:30",
    title: "Evento na Biblioteca",
    description: "Cinema, jogos de tabuleiro, espaço para fotos e concurso de cosplay",
  },
]

export function ScheduleSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary glow-text">
          Programação
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Confira os horários do evento
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 glow-box hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {item.period}
                </span>
              </div>

              <div className="flex items-center gap-2 text-primary mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-mono text-sm">{item.time}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
