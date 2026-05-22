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

  // Função para adicionar nova página se necessário
  const checkNewPage = (neededSpace: number) => {
    if (y + neededSpace > pageHeight - 25) {
      // Rodapé antes de mudar de página
      doc.setFillColor(...greenPrimary)
      doc.rect(0, pageHeight - 15, pageWidth, 15, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(8)
      doc.text("DON'T PANIC - Dia da Toalha 2026", pageWidth / 2, pageHeight - 6, { align: "center" })
      
      doc.addPage()
      y = 25
      
      // Cabeçalho da nova página
      doc.setFillColor(...greenPrimary)
      doc.rect(0, 0, pageWidth, 15, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.text("EDITAL - Concurso de Cosplay e Cospobre | Dia da Toalha 2026", pageWidth / 2, 10, { align: "center" })
      doc.setTextColor(...textDark)
    }
  }

  // Função para texto justificado com quebra de linha
  const addJustifiedText = (text: string, fontSize: number, isBold: boolean = false) => {
    doc.setFontSize(fontSize)
    doc.setFont("helvetica", isBold ? "bold" : "normal")
    const lines = doc.splitTextToSize(text, contentWidth)
    const lineHeight = fontSize * 0.5
    checkNewPage(lines.length * lineHeight + 5)
    
    lines.forEach((line: string, index: number) => {
      if (index === lines.length - 1 || line.length < contentWidth * 0.5) {
        doc.text(line, margin, y)
      } else {
        doc.text(line, margin, y, { align: "justify", maxWidth: contentWidth })
      }
      y += lineHeight
    })
    y += 3
  }

  // Função para texto simples (não justificado - para listas)
  const addText = (text: string, fontSize: number, isBold: boolean = false) => {
    doc.setFontSize(fontSize)
    doc.setFont("helvetica", isBold ? "bold" : "normal")
    const lines = doc.splitTextToSize(text, contentWidth)
    const lineHeight = fontSize * 0.5
    checkNewPage(lines.length * lineHeight + 5)
    doc.text(lines, margin, y)
    y += lines.length * lineHeight + 3
  }

  // Função para adicionar título de seção
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

  // ============ CABEÇALHO ============
  doc.setFillColor(...greenPrimary)
  doc.rect(0, 0, pageWidth, 35, "F")
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont("helvetica", "bold")
  doc.text("DIA DA TOALHA 2026", pageWidth / 2, 15, { align: "center" })
  
  doc.setFontSize(14)
  doc.text("EDITAL DO CONCURSO DE COSPLAY E COSPOBRE", pageWidth / 2, 25, { align: "center" })
  
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Dia do Orgulho Nerd | IFMS Campus Aquidauana", pageWidth / 2, 32, { align: "center" })
  
  y = 50
  doc.setTextColor(...textDark)

  // ============ 1. APRESENTAÇÃO ============
  addSectionTitle("1", "APRESENTAÇÃO")
  addJustifiedText(
    "A Comissão de Cultura Geek e Nerd, em parceria com a Comissão de Arte e Cultura do IFMS Campus Aquidauana, apresenta o Concurso de Cosplay e Cospobre como parte das celebrações do Dia da Toalha (Dia do Orgulho Nerd), em homenagem ao escritor Douglas Adams e sua obra 'O Guia do Mochileiro das Galáxias'.",
    10
  )
  y += 5

  // ============ 2. DATA, LOCAL E HORÁRIO ============
  addSectionTitle("2", "DATA, LOCAL E HORÁRIO")
  addText("Data: 29 de maio de 2026 (quinta-feira)", 10, true)
  addText("Local: IFMS Campus Aquidauana", 10)
  addText("Horários do evento:", 10, true)
  addText("   - Intervalo Cultural Manhã: 09:15 às 09:45", 10)
  addText("   - Intervalo Cultural Tarde: 15:15 às 15:45", 10)
  addText("   - Evento Noturno (Biblioteca): 18:30 às 21:30", 10)
  addJustifiedText("O desfile e avaliação do cosplay e cospobre ocorrerá durante os intervalos culturais.", 10)
  y += 5

  // ============ 3. CATEGORIAS ============
  addSectionTitle("3", "CATEGORIAS DO CONCURSO")
  addText("O concurso será dividido em duas categorias:", 10, true)
  y += 3
  addText("3.1. COSPLAY (Tradicional):", 10, true)
  addJustifiedText("   - Fantasia tradicional onde o objetivo é recriar fielmente a aparência de um personagem;", 10)
  addText("   - Pode ser comprado, encomendado ou confeccionado pelo participante;", 10)
  addText("   - O foco é a fidelidade ao personagem e qualidade do traje.", 10)
  y += 3
  addText("3.2. COSPOBRE:", 10, true)
  addJustifiedText("   - Versão criativa e bem-humorada do cosplay, utilizando materiais de baixo custo;", 10)
  addText("   - Materiais permitidos/incentivados: papelão, garrafa PET, papel alumínio, sacos plásticos,", 10)
  addText("     jornal, caixas de ovos, rolos de papel, materiais recicláveis em geral;", 10)
  addText("   - O traje NÃO deve ser elaborado ou de alto custo;", 10)
  addText("   - O foco é a CRIATIVIDADE e o BOM HUMOR na representação do personagem.", 10)
  y += 5

  // ============ 4. PARTICIPAÇÃO ============
  addSectionTitle("4", "QUEM PODE PARTICIPAR")
  addText("- Todos os estudantes regularmente matriculados no IFMS Campus Aquidauana;", 10)
  addText("- O evento é exclusivo para público interno (estudantes, servidores e colaboradores);", 10)
  addText("- A inscrição será realizada no dia do evento, no local;", 10)
  addText("- Estudantes do período noturno podem participar mediante autorização do docente.", 10)
  y += 5

  // ============ 5. REGRAS GERAIS (AMBAS CATEGORIAS) ============
  addSectionTitle("5", "REGRAS GERAIS (VALEM PARA COSPLAY E COSPOBRE)")
  addText("5.1. Personagens permitidos:", 10, true)
  addJustifiedText("   - Personagens de animes, mangás, quadrinhos, games, filmes, séries, livros de ficção científica e fantasia;", 10)
  addText("   - Personagens originais (OCs) desde que não infrinjam as regras de conduta;", 10)
  addText("   - Versões alternativas de personagens (genderbend, steampunk, etc.) são permitidas.", 10)
  y += 5

  // ============ 6. PROIBIÇÕES ============
  addSectionTitle("6", "O QUE NÃO É PERMITIDO (LEIA COM ATENÇÃO)", true)
  
  addText("6.1. ARMAS E OBJETOS PERIGOSOS:", 10, true)
  addText("   - É PROIBIDO portar armas reais de qualquer natureza (armas de fogo, facas, canivetes, espadas afiadas, etc.);", 10)
  addText("   - É PROIBIDO portar armas de airsoft, paintball ou similares, mesmo descarregadas;", 10)
  addText("   - É PROIBIDO portar objetos pontiagudos ou cortantes que possam causar ferimentos;", 10)
  addJustifiedText("   - Props cenográficos (armas falsas) são permitidos APENAS se confeccionados em materiais seguros como EVA, isopor, papelão, espuma ou plástico flexível;", 10)
  addText("   - A organização se reserva o direito de reter qualquer objeto considerado perigoso.", 10)
  y += 3
  
  addText("6.2. CONTEÚDO DISCRIMINATÓRIO:", 10, true)
  addText("   - É PROIBIDO cosplay de personagens ou símbolos nazistas, fascistas ou de grupos de ódio;", 10)
  addText("   - É PROIBIDO qualquer conteúdo racista, xenofóbico, homofóbico, transfóbico ou discriminatório;", 10)
  addText("   - É PROIBIDA a prática de blackface, yellowface ou qualquer alteração de tom de pele para caracterização;", 10)
  addText("   - Cosplays de personagens de outras etnias são permitidos SEM alteração artificial do tom de pele.", 10)
  y += 3
  
  addText("6.3. VESTIMENTA E CONDUTA:", 10, true)
  addText("   - É PROIBIDO cosplay com nudez ou exposição excessiva (use bom senso - estamos em ambiente escolar);", 10)
  addText("   - Roupas íntimas não podem estar visíveis de forma intencional;", 10)
  addText("   - Cosplays com temática sexual explícita não são permitidos;", 10)
  addText("   - É obrigatório manter conduta respeitosa com todos os participantes e frequentadores do campus.", 10)
  y += 3
  
  addText("6.4. OUTRAS RESTRIÇÕES:", 10, true)
  addText("   - É PROIBIDO uso de substâncias inflamáveis, pirotecnia ou efeitos especiais perigosos;", 10)
  addText("   - Máscaras que cubram totalmente o rosto devem ser removidas para identificação quando solicitado;", 10)
  addText("   - O não cumprimento das regras resultará em desclassificação imediata.", 10)
  y += 5

  // ============ 7. CRITÉRIOS DE AVALIAÇÃO ============
  checkNewPage(95)
  
  addSectionTitle("7", "CRITÉRIOS DE AVALIAÇÃO")
  addJustifiedText("Os cosplays e cospobres serão avaliados com base nos seguintes critérios (total: 100 pontos):", 10)
  y += 3
  
  addText("CATEGORIA COSPLAY:", 10, true)
  // Tabela de critérios cosplay
  let tableStartY = y
  doc.setFillColor(240, 240, 240)
  doc.rect(margin, y, contentWidth, 8, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.text("Critério", margin + 3, y + 5)
  doc.text("Pontos", margin + 55, y + 5)
  doc.text("O que será avaliado", margin + 80, y + 5)
  y += 10
  
  doc.setFont("helvetica", "normal")
  const criteriosCosplay = [
    ["Fidelidade ao personagem", "25 pts", "Semelhança com o personagem original"],
    ["Qualidade da confecção", "25 pts", "Acabamento, detalhes, materiais utilizados"],
    ["Performance e postura", "25 pts", "Interpretação, poses, carisma no desfile"],
    ["Criatividade/Originalidade", "25 pts", "Inovação, adaptações criativas"]
  ]
  
  criteriosCosplay.forEach((criterio) => {
    doc.text(criterio[0], margin + 3, y + 5)
    doc.text(criterio[1], margin + 55, y + 5)
    doc.text(criterio[2], margin + 80, y + 5)
    doc.setDrawColor(200, 200, 200)
    doc.line(margin, y + 8, margin + contentWidth, y + 8)
    y += 10
  })
  
  doc.setDrawColor(100, 100, 100)
  doc.rect(margin, tableStartY, contentWidth, y - tableStartY)
  y += 8

  addText("CATEGORIA COSPOBRE:", 10, true)
  // Tabela de critérios cospobre
  tableStartY = y
  doc.setFillColor(240, 240, 240)
  doc.rect(margin, y, contentWidth, 8, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.text("Critério", margin + 3, y + 5)
  doc.text("Pontos", margin + 55, y + 5)
  doc.text("O que será avaliado", margin + 80, y + 5)
  y += 10
  
  doc.setFont("helvetica", "normal")
  const criteriosCospobre = [
    ["Criatividade", "30 pts", "Uso criativo de materiais simples"],
    ["Humor/Diversão", "25 pts", "Capacidade de arrancar sorrisos"],
    ["Identificação do personagem", "25 pts", "É possível reconhecer o personagem?"],
    ["Performance", "20 pts", "Interpretação e carisma"]
  ]
  
  criteriosCospobre.forEach((criterio) => {
    doc.text(criterio[0], margin + 3, y + 5)
    doc.text(criterio[1], margin + 55, y + 5)
    doc.text(criterio[2], margin + 80, y + 5)
    doc.setDrawColor(200, 200, 200)
    doc.line(margin, y + 8, margin + contentWidth, y + 8)
    y += 10
  })
  
  doc.setDrawColor(100, 100, 100)
  doc.rect(margin, tableStartY, contentWidth, y - tableStartY)
  y += 8

  // ============ 8. JÚRI ============
  addSectionTitle("8", "JÚRI AVALIADOR")
  addText("- O júri será composto por 3 (três) avaliadores convidados pela organização;", 10)
  addText("- A decisão do júri é soberana e irrecorrível;", 10)
  addText("- Os membros do júri não poderão participar do concurso;", 10)
  addText("- Em caso de empate, será considerada a maior nota no primeiro critério de cada categoria.", 10)
  y += 5

  // ============ 9. PREMIAÇÃO ============
  addSectionTitle("9", "PREMIAÇÃO")
  addText("Serão premiados os 3 (três) melhores de CADA categoria, sem distinção de colocação:", 10)
  y += 3
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("TOP 3 COSPLAY: Troféu Personalizado + Brinde", margin + 10, y)
  y += 8
  doc.text("TOP 3 COSPOBRE: Troféu Personalizado + Brinde", margin + 10, y)
  y += 10
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  y += 5

  // ============ 10. DISPOSIÇÕES FINAIS ============
  addSectionTitle("10", "DISPOSIÇÕES FINAIS")
  addText("- A participação no concurso implica na aceitação integral deste edital;", 10)
  addJustifiedText("- A organização poderá utilizar imagens dos participantes para divulgação do evento, respeitando a LGPD;", 10)
  addText("- Casos omissos serão resolvidos pela comissão organizadora;", 10)
  addText("- A organização se reserva o direito de alterar a programação se necessário;", 10)
  addJustifiedText("- Ao participar, o cosplayer autoriza o uso de sua imagem para fins de divulgação institucional.", 10)
  y += 5

  // ============ 11. CONTATO ============
  addSectionTitle("11", "CONTATO E DÚVIDAS")
  addJustifiedText("Dúvidas podem ser esclarecidas com os membros da Comissão de Cultura Geek e Nerd ou da Comissão de Arte e Cultura do IFMS Campus Aquidauana.", 10)
  y += 10

  // ============ RODAPÉ FINAL ============
  doc.setFillColor(...greenPrimary)
  doc.rect(0, pageHeight - 25, pageWidth, 25, "F")
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("DON'T PANIC!", pageWidth / 2, pageHeight - 15, { align: "center" })
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.text("Comissão de Cultura Geek e Nerd | Comissão de Arte e Cultura | IFMS Campus Aquidauana", pageWidth / 2, pageHeight - 7, { align: "center" })

  // Download
  doc.save("edital-cosplay-cospobre-dia-da-toalha-2026.pdf")
}
