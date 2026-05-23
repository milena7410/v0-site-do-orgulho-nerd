"use client"

import { Download, FileText, Award, Users, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateEditalPDF } from "@/lib/generate-edital-pdf"

export function CosplaySection() {
  return (
    <section className="pt-8 pb-16 px-4 md:px-8" id="cosplay">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary glow-text">
            Concurso de Cosplay e Cospobre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venha fantasiado do seu personagem favorito e concorra a prêmios! 
            Leia o edital completo para conhecer as regras e critérios de avaliação.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <span className="bg-primary/20 border border-primary/50 rounded-full px-4 py-2 text-sm text-primary font-semibold">
              Cosplay
            </span>
            <span className="bg-accent/20 border border-accent/50 rounded-full px-4 py-2 text-sm text-accent font-semibold">
              Cospobre
            </span>
          </div>
        </div>

        {/* Cards de informação */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
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
              <ClipboardList className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Inscrição na hora!</h3>
            <p className="text-sm text-muted-foreground">
              Preencha o formulário no dia do evento
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Duas categorias</h3>
            <p className="text-sm text-muted-foreground">
              Cosplay tradicional ou Cospobre
            </p>
          </div>
        </div>

        {/* Explicação das categorias */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="bg-card border border-primary/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-3">Cosplay</h3>
            <p className="text-muted-foreground text-sm">
              Fantasia tradicional onde o objetivo é recriar fielmente a aparência de um personagem. 
              Pode ser comprado, encomendado ou confeccionado pelo participante.
            </p>
          </div>
          <div className="bg-card border border-accent/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent mb-3">Cospobre</h3>
            <p className="text-muted-foreground text-sm">
              Versão criativa e bem-humorada do cosplay, usando materiais de baixo custo como papelão, 
              garrafa PET, papel alumínio, sacos plásticos e materiais recicláveis. O foco é a criatividade!
            </p>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Botão de download do edital */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 glow-box text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Edital do Concurso
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Leia todas as regras, critérios de avaliação e informações sobre premiação.
            </p>
            <Button
              size="lg"
              onClick={generateEditalPDF}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box gap-2"
            >
              <Download className="w-5 h-5" />
              Baixar Edital (PDF)
            </Button>
          </div>

          {/* Inscrição no local */}
          <div className="bg-card border-2 border-accent rounded-xl p-8 text-center flex flex-col items-center justify-center">
            <ClipboardList className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Inscrição para o Concurso
            </h3>
            <p className="text-muted-foreground text-sm">
              A inscrição será realizada no dia do evento, presencialmente no local.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
