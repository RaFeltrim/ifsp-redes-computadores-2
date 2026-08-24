# 📄 Prompt 04: Compilação de Relatórios Acadêmicos em PDF (Padrão IFSP)

Utilize este prompt para orientar a IA na estruturação de relatórios acadêmicos de entrega no formato PDF utilizando Python `reportlab` ou Markdown renderizável.

---

## 🎯 Padrão de Identidade Visual e Diagramação (Padrão Ouro IFSP)

1. **Cabeçalho Institucional:**
   - Nome oficial: `INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE SÃO PAULO`
   - Câmpus: `CÂMPUS SÃO CARLOS — BACHARELADO EM ENGENHARIA DE SOFTWARE / ADS`
   - Metadados: Disciplina, Docente, Discente e Data.
2. **Paleta de Cores Institucional:**
   - Primária: Azul Marinho Cisco/Institucional (`#1E3A8A`)
   - Secundária: Azul Turquesa / Técnico (`#0284C7`)
   - Destaque/Sucesso: Verde Esmeralda (`#16A34A` / `#F0FDF4`)
   - Textos e Bordas: Cinza Escuro (`#1F2937`) e Bordas Suaves (`#CBD5E1`)
3. **Estrutura de Conteúdo:**
   - Título da Atividade e Objetivo do Laboratório.
   - Tabelas comparativas e memórias de cálculo completas.
   - Seção de Evidências Visuais com figuras de topologia embutidas.
   - Tabela de Testes de Conectividade (Ping / ICMP / ARP / HTTP).
   - Conclusão Técnica e Síntese de Aprendizado.
   - Numeração de páginas no rodapé no formato `Página X de Y`.

---

## 📥 Template de Solicitação de Relatório

```markdown
Gere o relatório técnico acadêmico completo para a entrega da seguinte atividade:

- Número e Título: [ex: Atividade 06 - Endereçamento IP (Sub-redes - Parte 1)]
- Aluno: [Nome do Aluno]
- Conteúdo a incluir:
  - Tabela com todos os cálculos de sub-rede
  - Topologia do Cisco Packet Tracer gerada
  - Diagnóstico de protocolos e conclusão técnica
- Formato: Gerar script Python com ReportLab gerando o PDF final diagramado e o respectivo arquivo .md.
```
