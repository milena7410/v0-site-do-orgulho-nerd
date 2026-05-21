import { Download, FileText, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CosplaySection() {
  return (
    <section className="py-16 px-4 md:px-8" id="cosplay">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary glow-text">
            Concurso de Cosplay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venha fantasiado do seu personagem favorito e concorra a prêmios! 
            Leia o edital completo para conhecer as regras e critérios de avaliação.
          </p>
        </div>

        {/* Cards de informação */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Quem pode participar?</h3>
            <p className="text-sm text-muted-foreground">
              Todos os estudantes do IFMS-AQ (evento interno)
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Júri</h3>
            <p className="text-sm text-muted-foreground">
              Avaliação por professores e membros da comissão
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Sem inscrição prévia</h3>
            <p className="text-sm text-muted-foreground">
              Basta comparecer fantasiado no dia do evento!
            </p>
          </div>
        </div>

        {/* Botão de download do edital */}
        <div className="text-center">
          <div className="inline-block bg-card border-2 border-primary rounded-xl p-8 glow-box">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Edital do Concurso
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Baixe o edital completo com todas as regras, critérios de avaliação e informações sobre premiação.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box gap-2"
            >
              <a href="/api/edital" download="edital-cosplay-dia-da-toalha.pdf">
                <Download className="w-5 h-5" />
                Baixar Edital (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
