# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Groups of friends (and families) in Manaus deciding where to eat together. They arrive mostly from the Winners Instagram (@winnershamburgueria — bio link, stories, posts), usually on a phone, often mid-conversation with the group while "ninguém decide onde ir". Their job: pick a place the whole group will like, and lock in a table for everyone.

People who only want the address, opening hours or delivery are a secondary audience; they find it in the footer, not in the page's main flow.

## Product Purpose

A single landing page for Winners Hamburgueria whose only conversion is **opening a WhatsApp conversation to book a table for a group** (and receive the rodízio price in the first reply). Success = WhatsApp reservation conversations started from the page.

## Positioning

Winners combines artisanal burgers and a mini-burger rodízio with a themed space built for groups: neon signage, a motorcycle mural, retro signs and music. "O cenário é o convite. A comida é o motivo de voltar." It solves the group's "onde a gente vai?" with both good food and a different place, in Shopping Arena Mall.

## Operating Context

- Traffic: Instagram organic. The opening uses the "versão Instagram" of the copy (`docs/briefing/copy-lp.md`).
- Reservation happens in WhatsApp. The visitor picks a party size (2–5, 6–10, 11+) and WhatsApp opens with a prefilled message for that range, leaving only "Dia e horário: ___" (and "Número de pessoas: ___" for 11+) to fill, and asking for the rodízio price.
- In the restaurant: rodízio ordered in rounds of up to 3 minis per person; the next round can be ordered as soon as the previous one reaches the table; the table's attendant writes the time of each order on the table card.
- Address: Shopping Arena Mall, Av. Pedro Teixeira, 3077, loja 05, Manaus. Hours: every day 16h–23h, Friday and Saturday until 4h. Payment: Pix, débito, crédito, vale-refeição. Delivery via app to Chapada, Flores, Adrianópolis, Nossa Senhora das Graças and Parque 10.
- The owner/partner maintains this project and approves all copy, promises and imagery.

## Capabilities and Constraints

- Static site (HTML + CSS, no build); the only JS is a 6-line helper that closes the mobile menu. `public/` is the deploy root. Hosting not chosen yet.
- One call to action only (WhatsApp booking by party size), placed in hero, after Como funciona, after Compromisso, and final CTA (four positions; the fourth was added so phones never scroll ~9 screens without one). A top menu (logo, section links, Instagram) sits in the hero, not sticky; on phones it opens as a full-screen panel. No form or sticky bar. Address (Maps), phone (WhatsApp) and Instagram are plain text links in the footer, not buttons; delivery is footer text.
- Groups: Winners takes large groups, but the owner chose not to publish a maximum size or a WhatsApp reply-time promise.
- **No prices on the page.** The rodízio has a fixed price (listed in the copy doc), but the page intentionally omits it; each CTA carries the line "O valor do rodízio e das bebidas vem na primeira resposta."
- Rodízio: 4 mini entradas and 10+ mini burgers. Drinks and service fee are not included.
- Open decisions:
  - 30-minute rule (Compromisso version A: free next round if more than 30 min between rounds) vs. version B (no cost promise). Owner's call; A is live on the page.
  - Confirm (92) 98193-4395 receives WhatsApp.
  - Hosting provider and final domain.

## Brand Commitments

- Name: Winners Hamburgueria. Official logo (white script "Winners" + "HAMBURGUERIA" pill) and red square icon in `docs/marca/`; a high-resolution transparent logo file is still needed.
- Voice: pt-BR, conversational and direct ("a gente", "por nossa conta"), talking to someone organizing a group outing. Concrete facts over adjectives.
- The themed space (neon, motorcycle mural, retro signs, music) is part of what Winners delivers, not decoration.

## Evidence on Hand

Confirmed and usable:
- Google rating around 4,6 with about 1.600 reviews (shown without a consultation date, per the owner).
- 42,3 mil Instagram followers.
- More than 10 years making artisanal burgers.
- Mini names already confirmed: Mini Clássico (blend artesanal, queijo, alface e tomate), Mini Bacon (bacon crocante e cheddar), Mini Frango (frango empanado e maionese da casa).

Owner rule: any data the owner did not send is fictitious and stays off the page (no bracketed placeholders, invented dates, names or reviews). Photo slots may stay as dashed placeholders.

Not yet available — never fabricate:
- Real photos/video of the space, groups, food, table card and store entrance. The "O lugar" gallery shows fictitious AI images of the neon, mural, retro signs and dining room (`public/img/secoes/lugar-*.webp`, sources `banco de imagens/lugar-*.png`). The final CTA uses the vertical dining-room image (`public/img/secoes/final-salao-*.webp`), also fictitious AI, with a "Onde fica" card (address, hours, Maps link). The two Compromisso photos (table card, round arriving) are fictitious AI images (`public/img/secoes/compromisso-*-900.webp`); the card shows times 18–19 min apart (19:40, 19:58, 20:17, 20:36); any replacement must keep every gap under 30 min so it never contradicts the 30-minute promise. The three mini photos (Clássico, Bacon, Frango) are fictitious AI images too (`public/img/secoes/mini-*-520.webp`, sources `banco de imagens/mini-*.png`). The Abertura group photo is a fictitious AI image the owner chose (`public/img/secoes/amigos-a-mesa-*.webp`, source `banco de imagens/reuniao-amigos.png`) until a real one exists. The images in `docs/referencias/` are inspiration or AI/stock, not Winners photos. The owner chose to use one of them in the hero (`hamburguer-flutuando-escuro.jpg`, exploded burger on black), static and without a caption for now; it must be replaced by real Winners food photography before launch.
- Section order (owner-approved, replaces the brief's 6 blocks): Hero → Abertura → O lugar → Cardápio → Como funciona → Compromisso → Final CTA + footer. "O lugar" and "Cardápio" were split from the brief's single "Galeria e minis" block, and "Como funciona" moved before "Compromisso" so the rounds and table card are explained before the 30-minute promise uses them.
- Testimonials: none on the page. They return only if the owner sends real text, name, date and authorization.
- Names, ingredients and photos of the other minis and of the 4 mini entradas. The page shows only the three confirmed minis ("Alguns dos minis") and mentions the counts (10+ minis, 4 entradas) in text.

## Product Principles

1. One job: every element either helps a group decide on Winners or gets them to the WhatsApp button.
2. Answer each fear where it lives: waiting → Compromisso; crowding → reservation guarantees the table; "all minis taste the same" → named minis with photos.
3. Real proof only: real photos, real reviews with name and date, dated numbers. An honest placeholder beats a fake.
4. Price talk happens in WhatsApp, never on the page.
5. Mobile first: the visitor comes from Instagram on a phone.
