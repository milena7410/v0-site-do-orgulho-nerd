"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, Send } from "lucide-react"
import Link from "next/link"

export default function InscricaoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    turma: "",
    personagem: "",
    origem: "",
    categoria: "cosplay",
    descricao: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com um backend/banco de dados
    console.log("Inscrição enviada:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Inscrição Realizada!
          </h1>
          <p className="text-muted-foreground mb-8">
            Sua inscrição no concurso de {formData.categoria === "cosplay" ? "Cosplay" : "Cospobre"} foi registrada com sucesso. 
            Nos vemos no dia 29 de maio!
          </p>
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>

        <div className="bg-card border border-border rounded-xl p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary glow-text mb-2">
            Inscrição para o Concurso
          </h1>
          <p className="text-muted-foreground mb-8">
            Preencha os dados abaixo para participar do concurso de Cosplay ou Cospobre no Dia da Toalha.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo *</Label>
              <Input
                id="nome"
                required
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>

            {/* Turma */}
            <div className="space-y-2">
              <Label htmlFor="turma">Turma *</Label>
              <Input
                id="turma"
                required
                placeholder="Ex: 2º Ano Informática"
                value={formData.turma}
                onChange={(e) => setFormData({ ...formData, turma: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>

            {/* Personagem */}
            <div className="space-y-2">
              <Label htmlFor="personagem">Nome do personagem *</Label>
              <Input
                id="personagem"
                required
                placeholder="Ex: Naruto, Hermione, Mario"
                value={formData.personagem}
                onChange={(e) => setFormData({ ...formData, personagem: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>

            {/* Origem */}
            <div className="space-y-2">
              <Label htmlFor="origem">Origem do personagem *</Label>
              <Input
                id="origem"
                required
                placeholder="Ex: Naruto (Anime), Harry Potter (Filme/Livro)"
                value={formData.origem}
                onChange={(e) => setFormData({ ...formData, origem: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>

            {/* Categoria */}
            <div className="space-y-3">
              <Label>Categoria *</Label>
              <RadioGroup
                value={formData.categoria}
                onValueChange={(value) => setFormData({ ...formData, categoria: value })}
                className="flex flex-col gap-3"
              >
                <div className="flex items-start space-x-3 bg-secondary/50 border border-border rounded-lg p-4">
                  <RadioGroupItem value="cosplay" id="cosplay" className="mt-1" />
                  <div>
                    <Label htmlFor="cosplay" className="font-semibold cursor-pointer">
                      Cosplay
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Fantasia tradicional - foco em fidelidade ao personagem
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-secondary/50 border border-border rounded-lg p-4">
                  <RadioGroupItem value="cospobre" id="cospobre" className="mt-1" />
                  <div>
                    <Label htmlFor="cospobre" className="font-semibold cursor-pointer">
                      Cospobre
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Materiais de baixo custo/recicláveis - foco na criatividade
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Descrição (opcional) */}
            <div className="space-y-2">
              <Label htmlFor="descricao">
                Descrição da fantasia <span className="text-muted-foreground">(opcional)</span>
              </Label>
              <Textarea
                id="descricao"
                placeholder="Conte um pouco sobre sua fantasia, materiais utilizados, etc."
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                className="bg-secondary border-border resize-none"
                rows={3}
              />
            </div>

            {/* Aviso */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-sm text-foreground">
                Ao se inscrever, você declara que leu e concorda com todas as regras do edital do concurso.
              </p>
            </div>

            {/* Botão de enviar */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-box gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Inscrição
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
