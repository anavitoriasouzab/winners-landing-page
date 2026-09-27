# Winners Hamburgueria — Landing page

Landing page de reserva de mesa da **Winners Hamburgueria** (Shopping Arena Mall, Manaus).
Objetivo único: levar o visitante a abrir uma conversa no WhatsApp para reservar mesa para o grupo.

Site 100% estático (HTML + CSS), sem framework e sem build. O único JavaScript é `js/menu.js`, que fecha o menu do celular depois de tocar num link.

## Estrutura

```
.
├── public/                     ← o site. É ESTA pasta que vai para o ar.
│   ├── index.html
│   ├── css/style.css
│   ├── js/menu.js              fecha o menu do celular ao tocar num link
│   └── img/
│       ├── brand/              logo e ícones (favicon, apple-touch-icon)
│       └── hero/               hambúrguer do topo (imagem de banco, trocar por foto real)
├── docs/
│   ├── briefing/               estrutura da página e copy (fonte do conteúdo)
│   ├── marca/                  arquivos originais de logo e ícone
│   └── referencias/            inspiração visual (só o hambúrguer do topo saiu daqui)
│       ├── layouts/
│       ├── artes/
│       └── fotos-hamburguer/
└── design/
    └── claude-design-export/   export original do Claude Design (arquivo histórico)
```

## Rodar localmente

Abra `public/index.html` no navegador, ou sirva a pasta `public/`:

```bash
npx serve public
# ou, com Python:
python -m http.server 8000 --directory public
```

No VS Code, o Live Server também funciona (abrir `public/index.html`).

## Deploy

**No ar agora (GitHub Pages):** https://anavitoriasouzab.github.io/winners-landing-page/

Funciona nos dois modos do GitHub Pages:

- **"Deploy from a branch"** (modo atual): o `index.html` da raiz do repositório leva direto para `public/` (o site fica em `/winners-landing-page/public/`) e o `404.html` da raiz leva para a 404 do site. Eles existem para o GitHub **nunca** mostrar este README como página. Não apague.
- **"GitHub Actions"** (recomendado, endereço mais limpo): *Settings → Pages → Build and deployment → Source: "GitHub Actions"*. Cada `git push` no `main` publica só a pasta `public/` (`.github/workflows/pages.yml`) e o site abre direto em `/winners-landing-page/`.


Qualquer hospedagem estática serve. Configuração em todas elas:

| Campo | Valor |
|---|---|
| Build command | *(vazio)* |
| Output / publish directory | `public` |

- **Vercel:** importar o repositório e definir *Output Directory* = `public` (framework: *Other*).
- **Netlify:** *Publish directory* = `public`, sem build command. Ou arrastar a pasta `public/` no painel.
- **GitHub Pages / Cloudflare Pages:** publicar a pasta `public/`.

Antes de publicar, ver as pendências abaixo e, quando houver domínio, adicionar `og:image` e `og:url` no `<head>`.

## Pendências de conteúdo

Regra do dono: qualquer dado que ele não enviou é fictício e não entra no site (nada de colchetes, datas, nomes ou depoimentos inventados).

Algumas estão marcadas no HTML com comentários `TODO`.

- [ ] Confirmar que o (92) 98193-4395 é WhatsApp
- [ ] Galeria "O lugar": neon, mural, placas e mesas estão no site como imagens fictícias (IA), em `public/img/secoes/lugar-*.webp`; trocar por fotos reais quando houver. `lugar-mesas-vertical.png` é usada na foto do CTA final
- [ ] Compromisso: as fotos do cartão (horários 19:40 → 20:36, intervalos abaixo de 30 min) e da rodada são fictícias (IA), em `public/img/secoes/compromisso-*-900.webp`. Trocar por fotos reais quando houver. Se gerar outra versão do cartão, conferir que nenhum intervalo passe de 30 min
- [ ] CTA final: a foto do salão (`public/img/secoes/final-salao-*.webp`, original `banco de imagens/lugar-mesas-vertical.png`) é fictícia (IA). Trocar por foto real quando houver
- [ ] Foto do grupo à mesa (Abertura): hoje é uma imagem fictícia gerada por IA (`public/img/secoes/amigos-a-mesa-*.webp`, original em `banco de imagens/reuniao-amigos.png`). Trocar por foto real quando houver
- [ ] Se quiser mostrar mais minis ou as 4 mini entradas: enviar nome, ingredientes e foto de cada um (hoje aparecem só Clássico, Bacon e Frango, com fotos fictícias de IA em `public/img/secoes/mini-*-520.webp`; originais em `banco de imagens/mini-*.png`)
- [ ] Depoimentos: só entram se você enviar o texto real, nome, data e autorização (o estilo `.quote` já está pronto no CSS)
- [ ] Aprovação do dono para a **regra dos 30 minutos** (Compromisso versão A). Se não aprovar: usar a versão B, que está comentada no HTML, e remover a frase marcada "VERSÃO A" no CTA final
- [x] Imagem de compartilhamento (`public/img/og/winners-og.jpg`, 1200×630, captura do topo do site)
- [ ] **Quando houver domínio:** trocar o `og:image` para URL completa (o WhatsApp só mostra a imagem assim), acrescentar `og:url` e `<link rel="canonical">`, criar `sitemap.xml` e descomentar a linha `Sitemap:` do `robots.txt`. Se possível, acrescentar `"url"` e `"image"` no JSON-LD de restaurante do `index.html`
- [ ] Trocar o hambúrguer do topo (`public/img/hero/hamburguer-flutuando.webp`, imagem de banco, não é da Winners) por foto real de um hambúrguer da casa
- [ ] Logo oficial em alta (SVG ou PNG transparente). O `logo-winners.png` atual foi recortado de um PNG com fundo xadrez "falso"

## Decisões fixas (do briefing)

Ver `docs/briefing/estrutura-lp.md`. As principais:

- Ordem das seções (aprovada pelo dono): topo, Abertura, O lugar, Cardápio, Como funciona, Compromisso, CTA final e rodapé
- Uma única ação (reservar pelo WhatsApp) em quatro posições: topo, fim de Como funciona, depois do Compromisso e CTA final. Em cada uma, o visitante escolhe o tamanho do grupo (2–5, 6–10, 11+) e o WhatsApp abre com a mensagem pronta daquela faixa
- Sem preço na página. Sob cada botão fica a linha "O valor do rodízio e das bebidas vem na primeira resposta."
- Menu no topo (logo, seções, Instagram), sem barra fixa e sem formulário. No celular, o menu abre em tela cheia
