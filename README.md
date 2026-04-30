# 🩺 Aura Path — Landing Page

Landing page institucional do **Aura Path**, sistema de suporte à decisão clínica com IA Explicável (XAI). Desenvolvida em HTML, CSS e JavaScript puros — sem dependências externas, sem build necessário.

---

## 🚀 Como rodar

### Opção 1 — Abrir diretamente no navegador (mais simples)

1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto
3. Dê duplo clique no arquivo `index.html`

O arquivo abrirá no seu navegador padrão. **Não requer servidor.**

---

### Opção 2 — Live Server (recomendado para desenvolvimento)

Use a extensão **Live Server** do VS Code para recarregar automaticamente ao editar.

**Pré-requisito:** [VS Code](https://code.visualstudio.com/) instalado.

```bash
# 1. Instale a extensão Live Server no VS Code
#    Extensions (Ctrl+Shift+X) → buscar "Live Server" → instalar

# 2. Abra a pasta do projeto no VS Code
code .

# 3. Clique com o botão direito em index.html → "Open with Live Server"
#    ou clique em "Go Live" na barra de status inferior
```

A página abre em `http://127.0.0.1:5500` e recarrega automaticamente ao salvar.

---

### Opção 3 — Servidor local com Python

Se você tem Python instalado, pode subir um servidor HTTP rapidamente:

```bash
# Python 3
python -m http.server 8080

# Acesse em: http://localhost:8080
```

---

### Opção 4 — Servidor local com Node.js

```bash
# Instale o serve globalmente (apenas uma vez)
npm install -g serve

# Suba o servidor na pasta do projeto
serve .

# Acesse em: http://localhost:3000
```

---

## 📁 Estrutura de arquivos

```
Website-Aura-Path/
│
├── index.html          # Estrutura principal da página
├── style.css           # Design system, layout e animações
├── script.js           # Interações: navbar, tabs, partículas, formulário
├── README.md           # Esta documentação
│
└── assets/             # Imagens e mídias (crie esta pasta se não existir)
    ├── logo.png              ← Logo da Aura Path
    ├── screenshot-hero.png   ← Print principal (seção hero)
    ├── screenshot-1.png      ← Tela de Diagnóstico (aba 1)
    ├── screenshot-2.png      ← Árvore XAI (aba 2)
    ├── screenshot-3.png      ← Alertas de Iatrogenia (aba 3)
    └── screenshot-4.png      ← Integração PEP (aba 4)
```

---

## 🖼️ Como adicionar os prints do protótipo

A página tem **5 espaços reservados** para screenshots do produto:

| Local na página | Arquivo esperado |
|---|---|
| Seção Hero (destaque principal) | `assets/screenshot-hero.png` |
| Aba "Tela de Diagnóstico" | `assets/screenshot-1.png` |
| Aba "Árvore XAI" | `assets/screenshot-2.png` |
| Aba "Alertas de Iatrogenia" | `assets/screenshot-3.png` |
| Aba "Integração PEP" | `assets/screenshot-4.png` |

**Passos:**
1. Exporte os prints do seu protótipo (Figma, app real, etc.)
2. Renomeie conforme a tabela acima
3. Coloque-os dentro da pasta `assets/`
4. Atualize a página — os placeholders serão substituídos automaticamente

> **Dica:** Formatos recomendados são `.png` ou `.webp`. Para melhor qualidade, use resolução mínima de **1280×720px**.

---

## 🎨 Customizando cores e textos

Todas as cores estão centralizadas como variáveis CSS no início do `style.css`:

```css
:root {
  --crimson: #8B0000;       /* Vermelho principal */
  --crimson-light: #c0392b; /* Vermelho claro (hover, destaques) */
  --steel: #1a3a5c;         /* Azul-aço escuro */
  --steel-light: #2980b9;   /* Azul claro */
  --dark: #0d1117;          /* Fundo principal */
  --text: #e6edf3;          /* Texto principal */
  --text-muted: #8b949e;    /* Texto secundário */
}
```

Para alterar textos (título, subtítulo, benefícios), edite diretamente o `index.html`.

---

## 📦 Dependências externas

Este projeto **não possui dependências de pacotes** (sem npm, sem build).

Apenas carrega via CDN no `<head>`:
- **Google Fonts** — Inter + Outfit (requer conexão com internet)

Para uso offline, baixe as fontes e referencie localmente.

---

## 🌐 Deploy (publicar online)

Por ser um site estático, pode ser publicado gratuitamente em:

| Plataforma | Como publicar |
|---|---|
| **GitHub Pages** | Push na branch `main` → Settings → Pages → Deploy from branch |
| **Vercel** | `vercel deploy` ou arraste a pasta no dashboard |
| **Netlify** | Arraste a pasta no [netlify.com/drop](https://netlify.com/drop) |

---

## ✉️ Formulário de contato

O formulário da seção "Solicitar Demo" atualmente é apenas visual (frontend). Para conectá-lo a um backend real, edite o listener no `script.js`:

```js
document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  
  // Exemplo com Formspree (gratuito):
  await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
});
```

Serviços recomendados: [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), ou integração com seu próprio backend.

---

## 📄 Licença

Projeto proprietário — **Aura Path**. Todos os direitos reservados.
