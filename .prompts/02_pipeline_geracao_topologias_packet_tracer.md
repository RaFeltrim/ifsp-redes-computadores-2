# 📐 Prompt 02: Pipeline de Geração de Evidências Visuais e Topologias (Cisco Packet Tracer)

> **⚠️ AVISO DE DEPRECIAÇÃO:** A geração de diagramas simulados de topologia via ferramentas de imagem de IA (DALL-E, Midjourney) ou scripts Python (PIL/ReportLab) está estritamente descontinuada neste repositório. As entregas acadêmicas mais recentes não foram formatadas utilizando os ícones e itens autênticos do Packet Tracer, falhando nas auditorias de qualidade.

A nova diretriz oficial para geração de imagens de topologias é **gerar os blocos de configuração CLI (running-config)** e entregá-los diretamente ao usuário. O usuário irá copiar, colar no Packet Tracer, construir a rede real e extrair a imagem autêntica.

---

## 🛠️ Regras da Nova Pipeline de Topologias

Ao criar ou lidar com demandas de diagramas de topologia de redes, você deve:
1. **NÃO tentar gerar ou desenhar a imagem da topologia**.
2. **Utilizar o Prompt Oficial de Configuração** abaixo para formatar a resposta para o usuário.
3. Fornecer os blocos CLI limpos, precisos e exatos para cada dispositivo, prontos para colar no modo `conf t`.

---

## 📝 Novo Template de Prompt Oficial (Geração de Configs para Packet Tracer)

Sempre que precisar estruturar a topologia de um laboratório para o usuário recriar no Packet Tracer, utilize internamente (ou forneça ao usuário) o seguinte prompt padrão:

```text
Atue como um Engenheiro de Redes Cisco certificado CCNA. Preciso que você gere as configurações de running-config para o Cisco Packet Tracer para uma topologia com [Descreva sua rede aqui, ex: 1 Roteador, 2 Switches e 2 VLANs]. Forneça os blocos de comandos CLI limpos e organizados por dispositivo, prontos para copiar e colar no modo configuration terminal.
```
