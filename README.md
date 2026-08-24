<div align="center">

# 🌐 Redes de Computadores 2 — IFSP Câmpus São Carlos
### Bacharelado em Engenharia de Software / ADS
**Repositório Acadêmico, Roteiros Práticos de Laboratório no Cisco Packet Tracer e Cálculos de Sub-redes IPv4**

[![IFSP](https://img.shields.io/badge/IFSP-Câmpus_São_Carlos-16A34A?style=for-the-badge&logo=curseforge&logoColor=white)](https://scl.ifsp.edu.br/)
[![Disciplina](https://img.shields.io/badge/Disciplina-SCLRCO2_Redes_2-1E3A8A?style=for-the-badge&logo=cisco&logoColor=white)](https://github.com/RaFeltrim)
[![Cisco Packet Tracer](https://img.shields.io/badge/Cisco_Packet_Tracer-v8.2+-0284C7?style=for-the-badge&logo=cisco&logoColor=white)](https://www.netacad.com/)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)
[![QA Status](https://img.shields.io/badge/QA_Validation-100%25_Approved-10B981?style=for-the-badge)](https://github.com/RaFeltrim)

<p align="center">
  <b>Docente:</b> Prof. Dr. Luiz Henrique Castelo Branco | <b>Discente:</b> <a href="https://github.com/RaFeltrim">Rafael Feltrim</a>
</p>

---

</div>

## 📌 Sumário Executivo

Este repositório centraliza o material técnico, resoluções teóricas, memórias de cálculo de sub-redes IPv4 (FLSM/CIDR), scripts de configuração Cisco IOS e arquivos de simulação no **Cisco Packet Tracer** para a disciplina de **Redes de Computadores 2 (SCLRCO2)** do IFSP São Carlos.

O objetivo é servir como uma **base de conhecimento aberta, estruturada e de alta fidelidade técnica** para apoiar estudantes, pesquisadores e entusiastas de infraestrutura de redes nos estudos do Modelo OSI/TCP-IP, protocolos de roteamento, comutação em Camada 2/3 e arquitetura de redes corporativas.

---

## 🗺️ Mapa de Entregas e Atividades Homologadas

Todas as atividades foram resolvidas com memória de cálculo detalhada, fundamentação no Guia CCNA da Cisco e no livro *Comunicação de Dados e Redes de Computadores* (Forouzan), acompanhadas de diagramas de topologia e arquivos do simulador:

| Atividade | Tema Central | Principais Conceitos & Protocolos | Documento PDF | Guia Markdown | Simulador / Script |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **`01`** | **Avaliação Diagnóstica** | Modelo OSI, Topologias, Protocolos L2/L3/L7, IPv4 vs IPv6, MAC, NAT e Wi-Fi | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/01.%20Avaliação%20Diagnóstica%20-%20Rafael%20F%20.pdf) | — | — |
| **`02`** | **Classes de Redes (Pt 1)** | Conversão Binário $\leftrightarrow$ Decimal, Classes A a E, NetID, HostID e Máscaras Padrão | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/02.%20Classes%20de%20Redes%20(Pt%201)%20-%20Rafael%20F%20.pdf) | — | — |
| **`03`** | **Prática Packet Tracer (Pt 2)** | 8 Práticas de Laboratório: Comutação L2, Resolução ARP, Variação de Octetos, Isolamento L3 e Servidor HTTP | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/03.%20Prática%20Packet%20Tracer%20(Pt%202)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/03.%20Prática%20Packet%20Tracer%20(Pt%202)%20-%20Rafael%20F.md) | Diagramas L2 |
| **`04`** | **Prática Packet Tracer (Pt 3)** | Interligação de Classes Diferentes (Classe C `192.168.10.x` + Classe A `10.0.0.x`) via Roteador Cisco L3 | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/04.%20Prática%20Packet%20Tracer%20(Pt%203)%20-%20Rafael%20F%20.pdf) | — | Topologia L3 |
| **`05`** | **Rede e Broadcast (Pt 4)** | 50 Exercícios Teórico-Práticos: 40 Cálculos de NetID/Broadcast/Hosts + 10 Laboratórios no Packet Tracer | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/05.%20Rede%20e%20Broadcast%20(Pt%204)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/05.%20Rede%20e%20Broadcast%20(Pt%204)%20-%20Rafael%20F.md) | Multi-Switch |
| **`06`** | **Sub-redes (Pt 1)** | Projeto de Sub-redes FLSM: Particionamento da rede `192.168.1.0/24` em 8 sub-redes `/27` (30 hosts cada) | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/06.%20Sub-redes%20(Pt%201)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/06.%20Sub-redes%20(Pt%201)%20-%20Rafael%20F.md) | Diagrama FLSM |
| **`07`** | **Sub-redes (Pt 2)** | Interligação de 3 LANs heterogêneas (`/28`, `/10` e `/25`) com Roteador Cisco 2911 e 12 estações de trabalho | [PDF](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Rafael%20F%20.pdf) | [MD](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Rafael%20F.md) | [PKT](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Rafael%20F%20.pkt) / [IOS](Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/07.%20Sub-redes%20(Pt%202)%20-%20Roteador%20R1.ios) |

---

## 🖼️ Galeria de Topologias do Cisco Packet Tracer

Abaixo estão representadas algumas das topologias de laboratório projetadas e documentadas no repositório:

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

### 3. Isolamento de Setores (Vendas vs TI) e Servidores Web/FTP (Atividade 05 & 03)
Demonstração de isolamento lógico em Camada 3 sem roteador e publicação de serviços HTTP na porta 80:
<p align="center">
  <img src="Tópico%201%20-%20Revisão%20endereçamento%20IPv4/Entregas%20via%20moodle/assets/topologia_setores_servidores_atv5.jpg" width="850" alt="Topologia Setores e Servidores"/>
</p>

---

## 📂 Estrutura de Diretórios do Repositório

```text
Redes de Computadores 2/
├── .gitignore
├── LICENSE
├── README.md
├── Tópico 0 - Avaliação diagnóstica/
│   ├── Entrega-exercicio/
│   │   └── 01. Avaliação Diagnóstica - Rafael F .pdf
│   └── PDF aula/
│       └── AVALIAÇÃO DIAGNÓSTICA_RDC.pdf
└── Tópico 1 - Revisão endereçamento IPv4/
    ├── Entregas via moodle/
    │   ├── 01. Avaliação Diagnóstica - Rafael F .pdf
    │   ├── 02. Classes de Redes (Pt 1) - Rafael F .pdf
    │   ├── 03. Prática Packet Tracer (Pt 2) - Rafael F .pdf
    │   ├── 03. Prática Packet Tracer (Pt 2) - Rafael F.md
    │   ├── 04. Prática Packet Tracer (Pt 3) - Rafael F .pdf
    │   ├── 05. Rede e Broadcast (Pt 4) - Rafael F .pdf
    │   ├── 05. Rede e Broadcast (Pt 4) - Rafael F.md
    │   ├── 06. Sub-redes (Pt 1) - Rafael F .pdf
    │   ├── 06. Sub-redes (Pt 1) - Rafael F.md
    │   ├── 07. Sub-redes (Pt 2) - Rafael F .pdf
    │   ├── 07. Sub-redes (Pt 2) - Rafael F .pkt
    │   ├── 07. Sub-redes (Pt 2) - Rafael F.md
    │   ├── 07. Sub-redes (Pt 2) - Roteador R1.ios
    │   └── assets/                                  # Diagramas técnicos vetoriais e prints
    ├── PDFs aulas/                                  # Bibliografia e Guias Oficiais Cisco/Forouzan
    └── PDFs exercícios/                             # Roteiros oficiais emitidos pelo IFSP
```

---

## ⚙️ Guia Rápido de Reprodução no Cisco Packet Tracer

### Como abrir os arquivos de simulação (.PKT):
1. Instale o **Cisco Packet Tracer** (versão 8.0 ou superior) através do portal [Cisco Networking Academy](https://www.netacad.com/).
2. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/RaFeltrim/ifsp-redes-computadores-2.git
   ```
3. Abra o arquivo `.pkt` desejado diretamente no simulador (ex: `07. Sub-redes (Pt 2) - Rafael F .pkt`).

### Como carregar scripts Cisco IOS no Roteador:
1. Clique sobre o Roteador no Packet Tracer e abra a aba **CLI**.
2. Cole os blocos de configuração disponíveis nos arquivos `.ios` deste repositório (ex: `07. Sub-redes (Pt 2) - Roteador R1.ios`):
   ```ios
   Router> enable
   Router# configure terminal
   Router(config)# interface GigabitEthernet0/0
   Router(config-if)# ip address 192.168.1.33 255.255.255.240
   Router(config-if)# no shutdown
   ```
3. Realize os testes de conectividade disparando requisições ICMP (`ping`) a partir do *Command Prompt* dos computadores.

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
