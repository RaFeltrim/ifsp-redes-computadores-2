# 🖼️ Prompt 02: Pipeline de Geração de Evidências Visuais (Cisco Packet Tracer)

Utilize este prompt para gerar prompts de imagem em inglês de alta fidelidade técnica para ferramentas de geração visual (ex: DALL-E, Imagen, Midjourney, Flux ou subagentes de imagem) replicando o design visual do **Cisco Packet Tracer**.

---

## 🎯 Regras da Pipeline Visual

Ao criar ou solicitar diagramas de topologia de redes:
1. **Idioma do Prompt Visual:** Obrigatoriamente em **Inglês** técnico.
2. **Estilo Gráfico:** Minimalista, vetor 2D plano (*flat vector design*), fundo branco puro (*pure white background*), sem perspectiva 3D ou distorções isométricas.
3. **Equipamentos e Ícones Oficiais Cisco:**
   - Switches Cisco Catalyst 2960 (ícone retangular azul escuro com setas).
   - Roteadores Cisco 2911 / 1941 (ícone circular azul com 4 setas cruzadas).
   - Estações de trabalho (ícones de PCs e Servidores clássicos).
4. **Detalhes e Rótulos Obrigatórios:**
   - LEDs de status de porta em verde sólido.
   - Caixas de texto retangulares nítidas com: Nome do Dispositivo, Endereço IP, Máscara Sub-rede, NetID e Default Gateway.
   - Nomes explícitos de interfaces (ex: `FastEthernet0/1`, `GigabitEthernet0/0`).

---

## 📥 Template de Prompt para Geração de Topologia

```text
A crisp, high-resolution 2D technical network lab topology diagram in authentic Cisco Packet Tracer vector aesthetic on a pure white background. Minimalist flat design with no 3D effects and no isometric distortion.

Network Layout:
- [ROTEADOR/SWITCH CENTRAL]: [ex: A central Cisco 2911 Router (R1) connecting 3 LAN subnets via GigabitEthernet0/0, GigabitEthernet0/1, GigabitEthernet0/2].
- [SUB-REDE 1]: [ex: Top-left Switch Cisco Catalyst 2960 connected to 4 PC workstations labeled 'LAN 1: 192.168.1.32/28 | Gateway: 192.168.1.33 255.255.255.240'].
- [SUB-REDE 2]: [ex: Bottom-center Switch connected to 4 PCs labeled 'LAN 2: 172.0.0.0/10 | Gateway: 172.0.0.1 255.192.0.0'].
- [SUB-REDE 3]: [ex: Top-right Switch connected to 4 PCs labeled 'LAN 3: 192.168.2.0/25 | Gateway: 192.168.2.1 255.255.255.128'].

Visual Details:
Solid green link status indicator dots on all switch/router ports, authentic Cisco blue iconography, straight black copper connection lines, sharp typography in black text boxes with explicit IP addresses, subnet masks, and NetIDs.
```
