# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Note: `C:\Users\anavi\Downloads\CLAUDE.md` (a parent folder) describes a different project — a personal finance dashboard with Supabase. Its rules (Storage module, `SCHEMA_VERSION`, `.side-nav`, etc.) do **not** apply here.

## What this is

Single-page landing page for **Winners Hamburgueria** (Shopping Arena Mall, Manaus). All copy is pt-BR; talk to the user in pt-BR. The page's one goal is to start a WhatsApp conversation to book a table for a group. There is a top menu inside the hero (not sticky); no form or sticky bar.

Plain static site: HTML + CSS, no framework, no build. The only JS is `public/js/menu.js` (closes the mobile menu after a link tap); the menu itself opens with the native `popover` attribute. `public/` is the deploy root (see README for hosting settings).

## Layout

- `public/index.html` + `public/css/style.css` — the site. Normally the only files you edit.
- `public/img/` — assets actually served by the site. Nothing outside `public/` is deployed.
- `docs/briefing/estrutura-lp.md` — original structure brief (6 blocks). The owner has since approved a new order: Hero → Abertura → O lugar → Cardápio → Como funciona → Compromisso → Final CTA + footer (see PRODUCT.md). Read both before changing structure or copy.
- `docs/briefing/copy-lp.md` — full copy source with headline/section variations.
- `docs/marca/` — original brand files. `docs/referencias/` — visual inspiration; never link from the site. Exception chosen by the owner: `public/img/hero/hamburguer-flutuando.webp` (static, no caption) derived from `docs/referencias/fotos-hamburguer/hamburguer-flutuando-escuro.jpg`, until a real photo exists. The parked animation assets live in `docs/referencias/fotos-hamburguer/animacao-hero/`; `descartadas/` holds a Vecteezy-watermarked cutout that must never ship.
- `banco de imagens/` — the owner's image drop folder (sources, not deployed). Optimize to WebP into `public/img/` before using; e.g. `reuniao-amigos.png` → `public/img/secoes/amigos-a-mesa-{720,1200}.webp` (fictitious AI photo, owner-approved).
- `design/claude-design-export/` — the original Claude Design export (`.dc.html` + generated `support.js` runtime). Historical reference; the site was converted from it and no longer depends on it. Don't edit it.

## Running

`python -m http.server 8000 --directory public` (or open `public/index.html`, or Live Server). No lint or tests. Check at ~375px, ~768px and ≥1280px. Headless Chrome won't go below 500px window width — to test phone width, load the page in a 375px `<iframe>`.

## Conventions

- CSS tokens live in `:root` in `style.css` (`--c-*` colors, `--f-display` Anton / `--f-body` Archivo, `--gutter`, `--section-y`, rhythm `--gap-tight` 12px inside a group / `--gap-group` 40–64px between groups). Use them; don't hardcode new values or add inline `style=""`.
- Responsiveness uses `clamp()` and `repeat(auto-fit, minmax(min(100%, N), 1fr))` grids (`.split` takes `--split-min` / `--split-gap`), not breakpoints. Keep that pattern. Media queries are the exception, used only where the topology must switch: nav (inline ≥1100px, popover below), gallery (4 fixed columns ≥900px, 2 below), minis grid (5 columns ≥700px, 3 below) and Compromisso (text+CTA | media ≥900px; text → media → CTA below).
- Class naming is BEM-lite (`.quote`, `.quote__text`, `.quote--on-light`). Components with per-background variants: `.quote` (testimonial, CSS kept for future real reviews), `.book` (WhatsApp booking selector, `--red` / `--gold`). The `.ph` placeholder styles were removed once every photo slot was filled.
- The footer (`.site-footer`, `#contato`) lives after `</main>`, not inside the final section.
- Every `target="_blank"` link carries a screen-reader hint "(abre em nova aba)" (visually-hidden span, or appended to `aria-label`). Keep it on new links.
- SEO/deploy files: `public/robots.txt`, `public/404.html` (relative paths + a tiny inline script that writes `<base>`: "/" in production/localhost, ".../public/" under Live Server or file://, so styles load however it is opened), `public/img/og/winners-og.jpg` and a Restaurant JSON-LD in `<head>` (owner data only, no self-declared rating). Domain-dependent items (absolute og:image, og:url, canonical, sitemap.xml) wait for the domain.
- `a:hover` sets gold globally, so every link-styled component (e.g. `.book__opt:hover`) must set its own `color`.
- The only CTA is the `.book` selector, repeated in 4 places (hero, end of Como funciona, Compromisso, final), each with 3 party-size links (2–5, 6–10, 11+) = 12 `wa.me/5592981934395?text=` hrefs with URL-encoded prefilled messages. The decoded messages are in the comment at the top of `<body>`; change all 12 together. Footer phone links to plain `wa.me/5592981934395`.
- The owner chose not to state a max party size or a reply-time promise on the page; don't add either without asking.
- Compromisso block has two versions: A (30-minute rule, active, pending owner approval) and B (commented out below it). Switching to B also means removing the line marked "VERSÃO A" in the final CTA.
- Owner rule: any data the owner did not send is fictitious and must not appear on the page — no `[bracketed]` placeholders, invented dates, names, menu items or reviews. The `.quote` testimonial styles remain in CSS for when real reviews arrive; no testimonial is on the page now. Pricing is intentionally never shown on the page.
- The colored glow under the booking selector is part of the identity (DESIGN.md "Light Source Rule"); keep it unless the user asks otherwise.
