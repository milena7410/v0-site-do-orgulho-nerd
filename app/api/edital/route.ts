import { jsPDF } from 'jspdf'

export async function GET() {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = 20

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number, isBold = false, align: 'left' | 'center' = 'left') => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', isBold ? 'bold' : 'normal')
    
    if (align === 'center') {
      doc.text(text, pageWidth / 2, y, { align: 'center' })
      y += fontSize * 0.5
    } else {
      const lines = doc.splitTextToSize(text, contentWidth)
      doc.text(lines, margin, y)
      y += lines.length * fontSize * 0.45
    }
  }

  const addSpacing = (space: number) => {
    y += space
  }

  const checkPageBreak = (neededSpace: number) => {
    if (y + neededSpace > 280) {
      doc.addPage()
      y = 20
    }
  }

  // CABEÇALHO
  doc.setFillColor(34, 139, 34)
  doc.rect(0, 0, pageWidth, 40, 'F')
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.text('EDITAL DO CONCURSO DE COSPLAY', pageWidth / 2, 18, { align: 'center' })
  
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text('Dia da Toalha - Dia do Orgulho Nerd', pageWidth / 2, 28, { align: 'center' })
  doc.text('IFMS Campus Aquidauana', pageWidth / 2, 36, { align: 'center' })
  
  y = 50
  doc.setTextColor(0, 0, 0)

  // APRESENTAÇÃO
  addText('1. APRESENTACAO', 14, true)
  addSpacing(4)
  addText('A Comissao de Cultura Geek e Nerd e a Comissao de Arte e Cultura do IFMS Campus Aquidauana apresentam o Concurso de Cosplay, parte integrante das comemoracoes do "Dia da Toalha" em homenagem ao Dia do Orgulho Nerd.', 11)
  addSpacing(8)

  // DATA E LOCAL
  checkPageBreak(40)
  addText('2. DATA, LOCAL E HORARIO', 14, true)
  addSpacing(4)
  addText('Data: 27 de maio de 2026 (quarta-feira)', 11)
  addText('Local: IFMS Campus Aquidauana', 11)
  addText('Horario da Apresentacao: Durante o intervalo cultural (manha e tarde) e evento noturno (18h30 - 21h30)', 11)
  addSpacing(8)

  // PARTICIPAÇÃO
  checkPageBreak(50)
  addText('3. QUEM PODE PARTICIPAR', 14, true)
  addSpacing(4)
  addText('3.1. Podem participar todos os estudantes regularmente matriculados no IFMS Campus Aquidauana.', 11)
  addText('3.2. A participacao e individual.', 11)
  addText('3.3. O evento e exclusivo para publico interno do IFMS.', 11)
  addText('3.4. Nao e necessaria inscricao previa - basta comparecer fantasiado.', 11)
  addText('3.5. Estudantes do periodo noturno podem participar apenas com autorizacao do docente.', 11)
  addSpacing(8)

  // REGRAS GERAIS
  checkPageBreak(80)
  addText('4. REGRAS GERAIS DO COSPLAY', 14, true)
  addSpacing(4)
  addText('4.1. O cosplay deve ser baseado em um personagem de:', 11)
  addText('   - Animes, mangas e light novels', 11)
  addText('   - Filmes, series de TV e streaming', 11)
  addText('   - Jogos (video games, jogos de tabuleiro, RPG)', 11)
  addText('   - Quadrinhos (comics, HQs, graphic novels)', 11)
  addText('   - Livros de ficcao cientifica e fantasia', 11)
  addText('   - Cultura pop em geral', 11)
  addSpacing(4)
  addText('4.2. E permitido cosplay de personagens originais (OC) desde que apresentem uma historia/conceito.', 11)
  addText('4.3. Sao aceitos cosplays feitos a mao, comprados ou mistos.', 11)
  addText('4.4. Grupos podem se apresentar juntos, mas a avaliacao sera individual.', 11)
  addSpacing(8)

  // PROIBIÇÕES
  checkPageBreak(100)
  addText('5. O QUE NAO E PERMITIDO', 14, true)
  addSpacing(4)
  doc.setTextColor(180, 0, 0)
  addText('ATENCAO: O descumprimento de qualquer item abaixo resultara em desclassificacao imediata.', 11, true)
  doc.setTextColor(0, 0, 0)
  addSpacing(4)
  addText('5.1. ARMAS E OBJETOS PERIGOSOS:', 11, true)
  addText('   - Armas reais de qualquer tipo (facas, canivetes, espadas afiadas, etc.)', 11)
  addText('   - Armas de fogo, mesmo que descarregadas ou de airsoft', 11)
  addText('   - Replicas metalicas ou que possam causar ferimentos', 11)
  addText('   - Objetos pontiagudos ou cortantes', 11)
  addText('   - Bastoes ou objetos que possam ser usados como armas', 11)
  addSpacing(4)
  addText('5.2. Armas de props (cenograficas) sao permitidas apenas se feitas de:', 11)
  addText('   - EVA, isopor, papelao, espuma, plastico flexivel ou materiais similares', 11)
  addText('   - Devem ser claramente falsas e inofensivas', 11)
  addSpacing(4)

  checkPageBreak(80)
  addText('5.3. CONTEUDO INADEQUADO:', 11, true)
  addText('   - Cosplays com conotacao sexual explicita ou nudez', 11)
  addText('   - Personagens ou simbolos que promovam racismo, nazismo, fascismo ou qualquer forma de discriminacao', 11)
  addText('   - Simbolos de odio, preconceito ou intolerancia religiosa', 11)
  addText('   - Conteudo que faca apologia a violencia, drogas ou crimes', 11)
  addText('   - Personagens que ridicularizem grupos etnicos, religiosos ou sociais', 11)
  addText('   - Blackface, yellowface ou qualquer forma de caracterizacao racial ofensiva', 11)
  addSpacing(4)
  addText('5.4. VESTIMENTAS:', 11, true)
  addText('   - Roupas muito curtas ou reveladoras que firam o decoro do ambiente escolar', 11)
  addText('   - Mascaras que cubram completamente o rosto (exceto para fotos rapidas)', 11)
  addText('   - Cosplays que atrapalhem a circulacao ou causem desconforto a terceiros', 11)
  addSpacing(8)

  // CRITÉRIOS DE AVALIAÇÃO
  doc.addPage()
  y = 20
  addText('6. CRITERIOS DE AVALIACAO', 14, true)
  addSpacing(4)
  addText('Os cosplays serao avaliados pelos seguintes criterios:', 11)
  addSpacing(4)
  
  addText('6.1. FIDELIDADE AO PERSONAGEM (0 a 25 pontos)', 11, true)
  addText('   - Semelhanca com o personagem original', 11)
  addText('   - Atencao aos detalhes do figurino', 11)
  addText('   - Caracterizacao (maquiagem, peruca, acessorios)', 11)
  addSpacing(4)

  addText('6.2. QUALIDADE DA CONFECCAO (0 a 25 pontos)', 11, true)
  addText('   - Acabamento das pecas', 11)
  addText('   - Criatividade na construcao', 11)
  addText('   - Uso de materiais e tecnicas', 11)
  addSpacing(4)

  addText('6.3. PERFORMANCE E POSTURA (0 a 25 pontos)', 11, true)
  addText('   - Interpretacao do personagem', 11)
  addText('   - Poses caracteristicas', 11)
  addText('   - Carisma e presenca de palco', 11)
  addSpacing(4)

  addText('6.4. CRIATIVIDADE E ORIGINALIDADE (0 a 25 pontos)', 11, true)
  addText('   - Elementos criativos adicionados', 11)
  addText('   - Originalidade na interpretacao', 11)
  addText('   - Props e acessorios diferenciados', 11)
  addSpacing(4)

  addText('PONTUACAO MAXIMA: 100 pontos', 11, true)
  addSpacing(8)

  // JÚRI
  checkPageBreak(40)
  addText('7. JURI', 14, true)
  addSpacing(4)
  addText('7.1. O juri sera composto por 3 (tres) avaliadores convidados.', 11)
  addText('7.2. A decisao do juri e soberana e irrecorrivel.', 11)
  addText('7.3. Em caso de empate, o criterio de desempate sera, nesta ordem:', 11)
  addText('   1o - Maior nota em Fidelidade ao Personagem', 11)
  addText('   2o - Maior nota em Qualidade da Confeccao', 11)
  addText('   3o - Decisao conjunta do juri', 11)
  addSpacing(8)

  // PREMIAÇÃO
  checkPageBreak(50)
  addText('8. PREMIACAO', 14, true)
  addSpacing(4)
  addText('8.1. Serao premiados os 3 (tres) melhores cosplays:', 11)
  addText('   1o Lugar - Certificado + Premio a definir', 11)
  addText('   2o Lugar - Certificado + Premio a definir', 11)
  addText('   3o Lugar - Certificado + Premio a definir', 11)
  addSpacing(4)
  addText('8.2. Todos os participantes receberao certificado de participacao.', 11)
  addText('8.3. Podera haver premiacoes especiais a criterio da organizacao.', 11)
  addSpacing(8)

  // DISPOSIÇÕES FINAIS
  checkPageBreak(60)
  addText('9. DISPOSICOES FINAIS', 14, true)
  addSpacing(4)
  addText('9.1. A organizacao reserva-se o direito de recusar cosplays que nao estejam de acordo com este edital.', 11)
  addText('9.2. A participacao no concurso implica na aceitacao de todas as regras deste edital.', 11)
  addText('9.3. A organizacao podera fotografar e filmar os participantes para divulgacao do evento.', 11)
  addText('9.4. Casos omissos serao resolvidos pela Comissao Organizadora.', 11)
  addText('9.5. As aulas ocorrerao normalmente durante o dia.', 11)
  addText('9.6. Este edital podera sofrer alteracoes a qualquer momento, sendo os participantes informados.', 11)
  addSpacing(12)

  // CONTATO
  checkPageBreak(40)
  addText('10. CONTATO', 14, true)
  addSpacing(4)
  addText('Em caso de duvidas, procure a Comissao de Cultura Geek e Nerd ou a Comissao de Arte e Cultura do IFMS Campus Aquidauana.', 11)
  addSpacing(16)

  // RODAPÉ
  addText('Aquidauana-MS, maio de 2026.', 11, false, 'center')
  addSpacing(12)
  addText('Comissao de Cultura Geek e Nerd', 11, true, 'center')
  addText('Comissao de Arte e Cultura', 11, true, 'center')
  addText('IFMS Campus Aquidauana', 11, false, 'center')
  addSpacing(16)

  // Mensagem final
  doc.setFillColor(34, 139, 34)
  doc.rect(0, 270, pageWidth, 27, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text("DON'T PANIC - Nos vemos (fantasiados) no dia 27!", pageWidth / 2, 284, { align: 'center' })

  // Gerar o PDF
  const pdfBuffer = doc.output('arraybuffer')

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="edital-cosplay-dia-da-toalha.pdf"',
    },
  })
}
