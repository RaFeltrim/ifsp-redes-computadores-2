<div align="center">

# 🌐 Redes de Computadores 2 — IFSP Câmpus São Carlos
### Bacharelado em Engenharia de Software / Análise e Desenvolvimento de Sistemas (ADS)
**Repositório Acadêmico, Roteiros Práticos de Laboratório no Cisco Packet Tracer, Cálculos de Sub-redes IPv4 e Administração de Servidores de Rede**

[![IFSP](https://img.shields.io/badge/IFSP-Câmpus_São_Carlos-16A34A?style=for-the-badge&logo=curseforge&logoColor=white)](https://scl.ifsp.edu.br/)
[![Disciplina](https://img.shields.io/badge/Disciplina-SCLRCO2_Redes_2-1E3A8A?style=for-the-badge&logo=cisco&logoColor=white)](https://github.com/RaFeltrim/ifsp-redes-computadores-2)
[![Cisco Packet Tracer](https://img.shields.io/badge/Cisco_Packet_Tracer-v8.2+-0284C7?style=for-the-badge&logo=cisco&logoColor=white)](https://www.netacad.com/)
[![Linux Servers](https://img.shields.io/badge/Linux-Debian%20%7C%20Ubuntu%20Server-E95420?style=for-the-badge&logo=linux&logoColor=white)](https://debian.org)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)
[![QA Status](https://img.shields.io/badge/QA_Validation-100%25_Approved-10B981?style=for-the-badge)](https://github.com/RaFeltrim/ifsp-redes-computadores-2)

<p align="center">
  <b>Docente:</b> Prof. Dr. Luiz Henrique Castelo Branco (<a href="mailto:luiz.branco@ifsp.edu.br">luiz.branco@ifsp.edu.br</a>)<br/>
  <b>Discente / Mantenedor:</b> <a href="https://github.com/RaFeltrim">Rafael Feltrim</a>
</p>

---

</div>

## 📌 Sumário Executivo & Planejamento Semestral

Este repositório centraliza todo o material técnico, resoluções teóricas, memórias de cálculo de sub-redes IPv4 (FLSM/CIDR), topologias no **Cisco Packet Tracer**, scripts de configuração Cisco IOS e laboratórios práticos em ambiente Linux para a disciplina de **Redes de Computadores 2 (SCLRCO2)** do IFSP São Carlos.

### 📅 Datas Importantes & Critérios de Avaliação (Moodle):
- **(PT) Prova Teórico/Prática:** 19/10 (Peso: 40%)
- **(EF) Exercícios de Fixação:** Entregas contínuas via Moodle (Peso: 20%)
- **(TP) Trabalho Prático:** Início em 28/11 | Entrega em 14/12 (Peso: 40%)
- **(IFA) Instrumento Final de Avaliação:** 18/12 às 08:30h

$$\text{Média Final} = (\text{PT} \times 0{,}4) + (\text{TP} \times 0{,}4) + (\text{EF} \times 0{,}2)$$

---

## 🗂️ Seções e Tópicos do Curso (Moodle)

O repositório está organizado de forma estrita e cronológica de acordo com as seções do Moodle da disciplina:

| Seção / Tópico | Descrição & Escopo Prático | Status |
| :--- | :--- | :---: |
| [**`Tópico 0 - Boas vindas`**](Tópico%200%20-%20Boas%20vindas/README.md) | Apresentação da disciplina, vídeo institucional e **Atividade 01 (Avaliação Diagnóstica)** | 🟢 Concluído |
| [**`Tópico 1 - Revisão endereçamento IPv4`**](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/README.md) | Classes A a E, NetID/Broadcast, FLSM, 50 exercícios e **Atividades 02 a 07** com Packet Tracer | 🟢 Concluído |
| [**`Tópico 2 - Configuração de Rotas`**](Tópico%202%20-%20Configuração%20de%20Rotas/README.md) | Roteamento em Camada 3 (L3), rotas estáticas (`ip route`), rota padrão e protocolos dinâmicos | ⏳ Planejado |
| [**`Tópico 3 - Configuração de Serviços de Rede`**](Tópico%203%20-%20Configuração%20de%20Serviços%20de%20Rede/README.md) | Implementação no simulador: Servidor DHCP, Servidor DNS, HTTP/Web e E-mail | ⏳ Planejado |
| [**`Tópico 4 - Montagem do ambiente virtual`**](Tópico%204%20-%20Montagem%20do%20ambiente%20virtual%20de%20trabalho/README.md) | Hipervisores (VirtualBox/VMware), Linux Debian/Ubuntu Server e adaptadores virtuais | ⏳ Planejado |
| [**`Tópico 5 - Configurações Iniciais`**](Tópico%205%20-%20Configurações%20Iniciais/README.md) | Administração de rede no Linux, configuração de interfaces (`netplan`, `ifupdown`) e SSH | ⏳ Planejado |
| [**`Tópico 6 - Serviços básicos`**](Tópico%206%20-%20Serviços%20básicos/README.md) | Servidores corporativos reais: DHCP (`isc-dhcp-server`), DNS (`bind9`), Web e Proxy (`Squid`) | ⏳ Planejado |
| [**`Trabalho Prático Avaliativo`**](Trabalho%20Prático%20Avaliativo/README.md) | Projeto Final Integrador (28/11 a 14/12): Infraestrutura completa com Roteamento, DHCP, HTTP e Proxy | ⏳ Planejado |
| [**`Avaliações`**](Avaliações/README.md) | Calendário, critérios e roteiros de revisão para a Prova PT (19/10) e IFA (18/12) | ⏳ Planejado |
| [**`Materiais complementares`**](Materiais%20complementares%20e%20links%20interessantes/README.md) | RFCs oficiais (791, 1918, 4632), apostilas recomendadas, simuladores e cheatsheets | 🟢 Disponível |

---

## 🗺️ Mapa Consolidado de Entregas Homologadas (Atividades 01 a 13)

| Atividade | Tema Central | Principais Conceitos & Protocolos | Documento PDF | Guia Markdown | Simulador / Script |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **`01`** | **Avaliação Diagnóstica** | Modelo OSI, Topologias, Protocolos L2/L3/L7, IPv4 vs IPv6, MAC, NAT e Wi-Fi | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/01.%20Avaliação%20Diagnóstica%20-%20Rafael%20F%20.pdf) | — | — |
| **`02`** | **Classes de Redes (Pt 1)** | Conversão Binário $\leftrightarrow$ Decimal, Classes A a E, NetID, HostID e Máscaras Padrão | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/02.%20Classes%20de%20Redes%20(Pt%201)%20-%20Rafael%20F%20.pdf) | — | — |
| **`03`** | **Prática Packet Tracer (Pt 2)** | 8 Práticas de Laboratório: Comutação L2, Resolução ARP, Variação de Octetos, Isolamento L3 e Servidor HTTP | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/03.%20Prática%20Packet%20Tracer%20(Pt%202)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/03.%20Prática%20Packet%20Tracer%20(Pt%202)%20-%20Rafael%20F.md) | Diagramas L2 |
| **`04`** | **Prática Packet Tracer (Pt 3)** | Interligação de Classes Diferentes (Classe C `192.168.10.x` + Classe A `10.0.0.x`) via Roteador Cisco L3 | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/04.%20Prática%20Packet%20Tracer%20(Pt%203)%20-%20Rafael%20F%20.pdf) | — | Topologia L3 |
| **`05`** | **Rede e Broadcast (Pt 4)** | 50 Exercícios Teórico-Práticos: 40 Cálculos de NetID/Broadcast/Hosts + 10 Laboratórios no Packet Tracer | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/05.%20Rede%20e%20Broadcast%20(Pt%204)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/05.%20Rede%20e%20Broadcast%20(Pt%204)%20-%20Rafael%20F.md) | Multi-Switch |
| **`06`** | **Sub-redes (Pt 1)** | Projeto de Sub-redes FLSM: Particionamento da rede `192.168.1.0/24` em 8 sub-redes `/27` (30 hosts cada) | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/06.%20Sub-redes%20(Pt%201)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/06.%20Sub-redes%20(Pt%201)%20-%20Rafael%20F.md) | Diagrama FLSM |
| **`07`** | **Sub-redes (Pt 2)** | Interligação de 3 LANs heterogêneas (`/28`, `/10` e `/25`) com Roteador Cisco 2911 e 12 estações de trabalho | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Rafael%20F.md) | [PKT](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Rafael%20F%20.pkt) / [IOS](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Roteador%20R1.ios) |
| **`08`** | **Sub-redes (Pt 3)** | 4 Laboratórios Universitários (30 hosts cada) interligados via Roteador Cisco 2911 — FLSM /27 (30 hosts/lab) *(Prazo: 31/08)* | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/08.%20Sub-redes%20(Pt%203)%20-%20Rafael%20F%20.pdf) | — | Topologia + IOS |
| **`09`** | **Sub-redes (Pt 4)** | *Addressing Subnetting Workbook Part 2* — Problems 6 a 15 (Classes A, B e C FLSM) + Seção Valid/Non-Valid IP Addresses *(Prazo: 24/08)* | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/09.%20Sub-redes%20(Pt%204)%20-%20Rafael%20F%20.pdf) | — | Cálculo FLSM |
| **`10`** | **Sub-redes (Pt 5)** | 3 Sub-redes para 45 hosts (Classe C `/26`) interligadas no Packet Tracer *(Prazo: 31/08)* | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/10.%20Sub-redes%20(Pt%205)%20-%20Rafael%20F%20.pdf) | — | Topologia + Ping |
| **`11`** | **Sub-redes (Pt 6)** | 6 Setores corporativos (14 hosts cada), particionamento `/28` no Packet Tracer *(Prazo: 31/08)* | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/11.%20Sub-redes%20(Pt%206)%20-%20Rafael%20F%20.pdf) | — | Topologia + Ping |
| **`12`** | **Sub-redes (Pt 7)** | 2 Laboratórios de Faculdade (45 hosts cada), particionamento `/26` no Packet Tracer *(Prazo: 31/08)* | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/12.%20Sub-redes%20(Pt%207)%20-%20Rafael%20F%20.pdf) | — | Topologia + Ping |
| **`13`** | **Sub-redes (Pt 8)** | VLSM avançado: 3 sub-redes (50 hosts `/26`) + 2 sub-redes (30 hosts `/27`) na mesma Classe C *(Prazo: 31/08)* | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/13.%20Sub-redes%20(Pt%208)%20-%20Rafael%20F%20.pdf) | — | Topologia + Ping |

---

## 🖼️ Galeria de Topologias do Cisco Packet Tracer

### 1. Interligação de 3 LANs Heterogêneas com Roteador Cisco 2911 (Atividade 07)
Roteamento inter-redes com prefixos `/28`, `/10` e `/25`, 3 Switches Catalyst 2960 e 12 estações com 100% de sucesso em ICMP Echo:
<p align="center">
  <img src="Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/assets/topologia_atv7_3lans_router.jpg" width="850" alt="Topologia Atividade 07"/>
</p>

---

### 2. Particionamento e Dimensionamento FLSM (/27 - 30 Hosts) (Atividade 06)
Divisão exata de uma rede Classe C `192.168.1.0/24` em 8 domínios de broadcast independentes sem desperdício de endereços:
<p align="center">
  <img src="Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/assets/diagrama_flsm_subredes.jpg" width="850" alt="Diagrama FLSM Atividade 06"/>
</p>

---

## 🗂️ Central de Engenharia de Prompts (`.prompts/`)

Para que outros alunos possam reproduzir o mesmo padrão de eficiência, qualidade matemática e evidenciamento visual, disponibilizamos templates estruturados na pasta [`.prompts/`](.prompts/README.md):
- **Cálculo de Sub-redes:** [`01_resolucao_teorica_e_calculo_subredes.md`](.prompts/01_resolucao_teorica_e_calculo_subredes.md)
- **Topologias Packet Tracer:** [`02_pipeline_geracao_topologias_packet_tracer.md`](.prompts/02_pipeline_geracao_topologias_packet_tracer.md)
- **Scripts Cisco IOS:** [`03_configuracao_cisco_ios_e_pkt.md`](.prompts/03_configuracao_cisco_ios_e_pkt.md)
- **Relatórios em PDF:** [`04_compilacao_relatorio_academico_pdf.md`](.prompts/04_compilacao_relatorio_academico_pdf.md)
- **Auditoria de QA:** [`05_quality_assurance_e_matriz_validacao.md`](.prompts/05_quality_assurance_e_matriz_validacao.md)

---

## ⚙️ Guia Rápido de Reprodução no Cisco Packet Tracer

### Como abrir os arquivos de simulação (.PKT):
1. Instale o **Cisco Packet Tracer** (versão 8.0 ou superior) através do portal [Cisco Networking Academy](https://www.netacad.com/).
2. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/RaFeltrim/ifsp-redes-computadores-2.git
   ```
3. Abra o arquivo `.pkt` desejado diretamente no simulador (ex: `07. Sub-redes (Pt 2) - Rafael F .pkt`).

---

## 📚 Referências Bibliográficas

- **FOROUZAN, Behrouz A.** *Comunicação de Dados e Redes de Computadores*. 4ª Edição. McGraw-Hill, 2008.
- **CISCO SYSTEMS.** *Guia Completo CCNA 4.1 — Fundamentos de Endereçamento IP e Roteamento*.
- **TANENBAUM, Andrew S.; WETHERALL, David.** *Redes de Computadores*. 5ª Edição. Pearson, 2011.
- **RFC 791** — *Internet Protocol (IPv4 Specification)*.
- **RFC 1918** — *Address Allocation for Private Internets*.
- **RFC 4632** — *Classless Inter-domain Routing (CIDR)*.

---

<div align="center">
  <sub>Desenvolvido com foco em excelência técnica acadêmica por <a href="https://github.com/RaFeltrim">Rafael Feltrim</a> | IFSP Câmpus São Carlos</sub>
</div>
