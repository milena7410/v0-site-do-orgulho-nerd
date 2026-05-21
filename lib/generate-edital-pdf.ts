"use client"

import { jsPDF } from "jspdf"

export function generateEditalPDF() {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = 20

  // Cores
  const greenPrimary: [number, number, number] = [34, 197, 94]
  const textDark: [number, number, number] = [30, 30, 30]

  // Funcao para adicionar nova pagina se necessario
  const checkNewPage = (neededSpace: number) => {
    if (y + neededSpace > pageHeight - 25) {
      // Rodape antes de mudar de pagina
      doc.setFillColor(...greenPrimary)
      doc.rect(0, pageHeight - 15, pageWidth, 15, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(8)
      doc.text("DON'T PANIC - Dia da Toalha 2026", pageWidth / 2, pageHeight - 6, { align: "center" })
      
      doc.addPage()
      y = 25
      
      // Cabecalho da nova pagina
      doc.setFillColor(...greenPrimary)
      doc.rect(0, 0, pageWidth, 15, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.text("EDITAL - Concurso de Cosplay | Dia da Toalha 2026", pageWidth / 2, 10, { align: "center" })
      doc.setTextColor(...textDark)
    }
  }

  // Funcao para texto justificado com quebra de linha
  const addJustifiedText = (text: string, fontSize: number, isBold: boolean = false) => {
    doc.setFontSize(fontSize)
    doc.setFont("helvetica", isBold ? "bold" : "normal")
    const lines = doc.splitTextToSize(text, contentWidth)
    const lineHeight = fontSize * 0.5
    checkNewPage(lines.length * lineHeight + 5)
    
    lines.forEach((line: string, index: number) => {
      // Ultima linha ou linhas curtas nao justificam
      if (index === lines.length - 1 || line.length < contentWidth * 0.5) {
        doc.text(line, margin, y)
      } else {
        doc.text(line, margin, y, { align: "justify", maxWidth: contentWidth })
      }
      y += lineHeight
    })
    y += 3
  }

  // Funcao para texto simples (nao justificado - para listas)
  const addText = (text: string, fontSize: number, isBold: boolean = false) => {
    doc.setFontSize(fontSize)
    doc.setFont("helvetica", isBold ? "bold" : "normal")
    const lines = doc.splitTextToSize(text, contentWidth)
    const lineHeight = fontSize * 0.5
    checkNewPage(lines.length * lineHeight + 5)
    doc.text(lines, margin, y)
    y += lines.length * lineHeight + 3
  }

  // Funcao para adicionar titulo de secao
  const addSectionTitle = (number: string, title: string, isRed: boolean = false) => {
    checkNewPage(25)
    doc.setFillColor(...(isRed ? [220, 38, 38] as [number, number, number] : greenPrimary))
    doc.rect(margin, y - 5, contentWidth, 10, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text(`${number}. ${title}`, margin + 5, y + 2)
    y += 15
    doc.setTextColor(...textDark)
  }

  // ============ CABECALHO ============
  doc.setFillColor(...greenPrimary)
  doc.rect(0, 0, pageWidth, 35, "F")
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont("helvetica", "bold")
  doc.text("DIA DA TOALHA 2026", pageWidth / 2, 15, { align: "center" })
  
  doc.setFontSize(14)
  doc.text("EDITAL DO CONCURSO DE COSPLAY", pageWidth / 2, 25, { align: "center" })
  
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Dia do Orgulho Nerd | IFMS Campus Aquidauana", pageWidth / 2, 32, { align: "center" })
  
  y = 50
  doc.setTextColor(...textDark)

  // ============ 1. APRESENTACAO ============
  addSectionTitle("1", "APRESENTACAO")
  addJustifiedText(
    "A Comissao de Cultura Geek e Nerd, em parceria com a Comissao de Arte e Cultura do IFMS Campus Aquidauana, apresenta o Concurso de Cosplay como parte das celebracoes do Dia da Toalha (Dia do Orgulho Nerd), em homenagem ao escritor Douglas Adams e sua obra 'O Guia do Mochileiro das Galaxias'.",
    10
  )
  y += 5

  // ============ 2. DATA, LOCAL E HORARIO ============
  addSectionTitle("2", "DATA, LOCAL E HORARIO")
  addText("Data: 27 de maio de 2026 (quarta-feira)", 10, true)
  addText("Local: IFMS Campus Aquidauana", 10)
  addText("Horarios do evento:", 10, true)
  addText("   - Intervalo Cultural Manha: 09:15 as 09:45", 10)
  addText("   - Intervalo Cultural Tarde: 15:15 as 15:45", 10)
  addText("   - Evento Noturno (Biblioteca): 18:30 as 21:30", 10)
  addJustifiedText("O desfile e avaliacao do cosplay ocorrera durante os intervalos culturais.", 10)
  y += 5

  // ============ 3. PARTICIPACAO ============
  addSectionTitle("3", "QUEM PODE PARTICIPAR")
  addText("- Todos os estudantes regularmente matriculados no IFMS Campus Aquidauana;", 10)
  addText("- O evento e exclusivo para publico interno (estudantes, servidores e colaboradores);", 10)
  addText("- Nao e necessaria inscricao previa - basta comparecer fantasiado;", 10)
  addText("- Estudantes do periodo noturno podem participar mediante autorizacao do docente.", 10)
  y += 5

  // ============ 4. REGRAS GERAIS ============
  addSectionTitle("4", "REGRAS GERAIS DO COSPLAY")
  addText("4.1. Personagens permitidos:", 10, true)
  addJustifiedText("   - Personagens de animes, mangas, quadrinhos, games, filmes, series, livros de ficcao cientifica e fantasia;", 10)
  addText("   - Personagens originais (OCs) desde que nao infrinjam as regras de conduta;", 10)
  addText("   - Versoes alternativas de personagens (genderbend, steampunk, etc.) sao permitidas.", 10)
  y += 3
  addText("4.2. Confeccao:", 10, true)
  addText("   - Cosplays podem ser comprados, encomendados ou confeccionados pelo participante;", 10)
  addText("   - Nao ha obrigatoriedade de confeccao propria, mas sera um diferencial na avaliacao.", 10)
  y += 5

  // ============ 5. PROIBICOES ============
  addSectionTitle("5", "O QUE NAO E PERMITIDO (LEIA COM ATENCAO)", true)
  
  addText("5.1. ARMAS E OBJETOS PERIGOSOS:", 10, true)
  addText("   - E PROIBIDO portar armas reais de qualquer natureza (armas de fogo, facas, canivetes, espadas afiadas, etc.);", 10)
  addText("   - E PROIBIDO portar armas de airsoft, paintball ou similares, mesmo descarregadas;", 10)
  addText("   - E PROIBIDO portar objetos pontiagudos ou cortantes que possam causar ferimentos;", 10)
  addJustifiedText("   - Props cenograficos (armas falsas) sao permitidos APENAS se confeccionados em materiais seguros como EVA, isopor, papelao, espuma ou plastico flexivel;", 10)
  addText("   - A organizacao se reserva o direito de reter qualquer objeto considerado perigoso.", 10)
  y += 3
  
  addText("5.2. CONTEUDO DISCRIMINATORIO:", 10, true)
  addText("   - E PROIBIDO cosplay de personagens ou simbolos nazistas, fascistas ou de grupos de odio;", 10)
  addText("   - E PROIBIDO qualquer conteudo racista, xenofobico, homofobico, transfobico ou discriminatorio;", 10)
  addText("   - E PROIBIDA a pratica de blackface, yellowface ou qualquer alteracao de tom de pele para caracterizacao;", 10)
  addText("   - Cosplays de personagens de outras etnias sao permitidos SEM alteracao artificial do tom de pele.", 10)
  y += 3
  
  addText("5.3. VESTIMENTA E CONDUTA:", 10, true)
  addText("   - E PROIBIDO cosplay com nudez ou exposicao excessiva (use bom senso - estamos em ambiente escolar);", 10)
  addText("   - Roupas intimas nao podem estar visiveis de forma intencional;", 10)
  addText("   - Cosplays com tematica sexual explicita nao sao permitidos;", 10)
  addText("   - E obrigatorio manter conduta respeitosa com todos os participantes e frequentadores do campus.", 10)
  y += 3
  
  addText("5.4. OUTRAS RESTRICOES:", 10, true)
  addText("   - E PROIBIDO uso de substancias inflamaveis, pirotecnia ou efeitos especiais perigosos;", 10)
  addText("   - Mascaras que cubram totalmente o rosto devem ser removidas para identificacao quando solicitado;", 10)
  addText("   - O nao cumprimento das regras resultara em desclassificacao imediata.", 10)
  y += 5

  // ============ 6. CRITERIOS DE AVALIACAO ============
  // Forca nova pagina para a secao 6 nao cortar
  checkNewPage(85)
  
  addSectionTitle("6", "CRITERIOS DE AVALIACAO")
  addJustifiedText("Os cosplays serao avaliados com base nos seguintes criterios (total: 100 pontos):", 10)
  y += 3
  
  // Tabela de criterios
  const tableStartY = y
  doc.setFillColor(240, 240, 240)
  doc.rect(margin, y, contentWidth, 8, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.text("Criterio", margin + 3, y + 5)
  doc.text("Pontos", margin + 55, y + 5)
  doc.text("O que sera avaliado", margin + 80, y + 5)
  y += 10
  
  doc.setFont("helvetica", "normal")
  const criterios = [
    ["Fidelidade ao personagem", "25 pts", "Semelhanca com o personagem original"],
    ["Qualidade da confeccao", "25 pts", "Acabamento, detalhes, materiais utilizados"],
    ["Performance e postura", "25 pts", "Interpretacao, poses, carisma no desfile"],
    ["Criatividade/Originalidade", "25 pts", "Inovacao, adaptacoes criativas"]
  ]
  
  criterios.forEach((criterio) => {
    doc.text(criterio[0], margin + 3, y + 5)
    doc.text(criterio[1], margin + 55, y + 5)
    doc.text(criterio[2], margin + 80, y + 5)
    doc.setDrawColor(200, 200, 200)
    doc.line(margin, y + 8, margin + contentWidth, y + 8)
    y += 10
  })
  
  // Borda da tabela
  doc.setDrawColor(100, 100, 100)
  doc.rect(margin, tableStartY, contentWidth, y - tableStartY)
  y += 8

  // ============ 7. JURI ============
  addSectionTitle("7", "JURI AVALIADOR")
  addText("- O juri sera composto por 3 (tres) avaliadores convidados pela organizacao;", 10)
  addText("- A decisao do juri e soberana e irrecorrivel;", 10)
  addText("- Os membros do juri nao poderao participar do concurso;", 10)
  addText("- Em caso de empate, sera considerada a maior nota no criterio 'Fidelidade ao personagem'.", 10)
  y += 5

  // ============ 8. PREMIACAO ============
  addSectionTitle("8", "PREMIACAO")
  addText("Serao premiados os 3 (tres) melhores cosplays:", 10)
  y += 3
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("1o Lugar: Trofeu + Brinde", margin + 10, y)
  y += 6
  doc.text("2o Lugar: Trofeu + Brinde", margin + 10, y)
  y += 6
  doc.text("3o Lugar: Trofeu + Brinde", margin + 10, y)
  y += 10
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  addText("Todos os participantes receberao certificado de participacao.", 10)
  y += 5

  // ============ 9. DISPOSICOES FINAIS ============
  addSectionTitle("9", "DISPOSICOES FINAIS")
  addText("- A participacao no concurso implica na aceitacao integral deste edital;", 10)
  addJustifiedText("- A organizacao podera utilizar imagens dos participantes para divulgacao do evento, respeitando a LGPD;", 10)
  addText("- Casos omissos serao resolvidos pela comissao organizadora;", 10)
  addText("- A organizacao se reserva o direito de alterar a programacao se necessario;", 10)
  addJustifiedText("- Ao participar, o cosplayer autoriza o uso de sua imagem para fins de divulgacao institucional.", 10)
  y += 5

  // ============ 10. CONTATO ============
  addSectionTitle("10", "CONTATO E DUVIDAS")
  addJustifiedText("Duvidas podem ser esclarecidas com os membros da Comissao de Cultura Geek e Nerd ou da Comissao de Arte e Cultura do IFMS Campus Aquidauana.", 10)
  y += 10

  // ============ RODAPE FINAL ============
  doc.setFillColor(...greenPrimary)
  doc.rect(0, pageHeight - 25, pageWidth, 25, "F")
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("DON'T PANIC!", pageWidth / 2, pageHeight - 15, { align: "center" })
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.text("Comissao de Cultura Geek e Nerd | Comissao de Arte e Cultura | IFMS Campus Aquidauana", pageWidth / 2, pageHeight - 7, { align: "center" })

  // Download
  doc.save("edital-cosplay-dia-da-toalha-2026.pdf")
}
