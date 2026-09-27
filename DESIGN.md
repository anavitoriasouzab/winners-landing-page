---
name: Winners Hamburgueria
description: Late-night neon burger house in Manaus — a single landing page that books group tables over WhatsApp.
colors:
  neon-red: "#c4161c"
  neon-red-hot: "#dc2027"
  ketchup-brick: "#a3121a"
  oxblood: "#7d0f12"
  ember-coral: "#ec5f54"
  marquee-gold: "#f2b544"
  marquee-gold-bright: "#ffc75c"
  ember-glow: "#4a0c0c"
  night-black: "#0e0b0a"
  burnt-ink: "#1a0f0c"
  menu-cream: "#efe4d3"
  paper-white: "#fff8ee"
  sign-white: "#ffffff"
typography:
  display:
    fontFamily: "Anton, Impact, 'Arial Narrow', sans-serif"
    fontSize: "clamp(56px, 9.5vw, 128px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Anton, Impact, 'Arial Narrow', sans-serif"
    fontSize: "clamp(44px, 6.5vw, 88px)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Anton, Impact, 'Arial Narrow', sans-serif"
    fontSize: "clamp(30px, 3.2vw, 40px)"
    fontWeight: 400
    lineHeight: 1
  body-lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 20px)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.16em"
rounded:
  sm: "4px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  section: "clamp(56px, 8vw, 112px)"
  tight: "12px"
  base: "20px"
  roomy: "28px"
components:
  book-option-red:
    backgroundColor: "{colors.neon-red}"
    textColor: "{colors.sign-white}"
    rounded: "{rounded.sm}"
    padding: "10px 8px"
    height: "72px"
  book-option-red-hover:
    backgroundColor: "{colors.neon-red-hot}"
    textColor: "{colors.sign-white}"
  book-option-gold:
    backgroundColor: "{colors.marquee-gold}"
    textColor: "{colors.burnt-ink}"
    rounded: "{rounded.sm}"
    padding: "10px 8px"
    height: "88px"
  book-option-gold-hover:
    backgroundColor: "{colors.marquee-gold-bright}"
    textColor: "{colors.burnt-ink}"
  step-card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.burnt-ink}"
    padding: "clamp(24px, 3vw, 40px)"
  statement-tile:
    backgroundColor: "{colors.neon-red}"
    textColor: "{colors.sign-white}"
    typography: "{typography.headline}"
    padding: "24px"
---

# Design System: Winners Hamburgueria

## Overview

**Creative North Star: "Neon de Madrugada"**

The page is the restaurant at night. A near-black room, warmed from one corner by a deep red glow, where the only things that shine are the signs: red neon for action, marquee gold for the words that matter. It should feel like standing at the door on a Friday at 11pm with the group behind you — loud, warm, a little late, and obviously the place to be.

Everything is flat and confident. Color is laid down as solid fields (black, cream, oxblood), type is condensed and shouted in Anton capitals, and corners stay almost square. Light is the only "effect": the radial ember glow behind hero and final CTA, and the colored glow under the WhatsApp booking selector, like a sign reflecting on the wall. Sections alternate between night (dark) and daylight-menu (cream) so the long scroll has a pulse.

Density is generous and poster-like: few elements per section, very large headlines, and body copy kept short and readable in Archivo.

**Key Characteristics:**
- Night-black base with alternating cream and oxblood sections
- Anton uppercase headlines at poster scale; Archivo for everything you actually read
- Red = act, gold = emphasize; they never swap jobs
- Flat solid fields; glow is the only depth, and it belongs to light sources
- Almost-square corners (4px); circles only for food photos

## Colors

A night palette: black and cream as the room, red and gold as the neon.

### Primary
- **Neon Red** (neon-red): the action color. The WhatsApp booking selector (hero and Compromisso), the statement tile in the gallery, step numbers and the top rule on step cards. Hover brightens to **Neon Red Hot** (neon-red-hot).

### Secondary
- **Marquee Gold** (marquee-gold): the emphasis color. Highlighted words inside headlines ("Reserve a mesa", "Na Winners."), star ratings, placeholder labels, promise numbers, and the final booking selector. Hover brightens to **Marquee Gold Bright** (marquee-gold-bright).

### Tertiary
- **Ketchup Brick** (ketchup-brick): red for light backgrounds. Takes over Neon Red's emphasis role on cream sections (highlighted headline words, eyebrows, placeholder labels) where the brighter red would vibrate.
- **Oxblood** (oxblood): a full-bleed section color, used for the Compromisso block — the one serious, reassuring moment in the page.
- **Ember Coral** (ember-coral): eyebrow labels and footer titles on dark backgrounds. Tuned to stay ≥4.5:1 even on the red center of the ember gradients (4.69:1 on ember-glow).

### Neutral
- **Night Black** (night-black): page background and dark sections.
- **Ember Glow** (ember-glow): the hot center of the radial gradients behind hero and final CTA, fading into night black.
- **Menu Cream** (menu-cream): text on dark, and the background of light sections.
- **Burnt Ink** (burnt-ink): text on cream and on gold.
- **Paper White** (paper-white): step cards sitting on cream.
- **Sign White** (sign-white): text on neon-red surfaces (booking options, statement tile).

### Named Rules
**The Sign Rule.** Red means "do something", gold means "read this". The gold booking selector exists only once, as the final and biggest CTA; red is never used to highlight a word on a dark section.

**The Night-Day Rule.** Sections alternate dark and light (hero dark → Abertura cream → O lugar dark → Cardápio cream → Como funciona dark → Compromisso oxblood → final dark). Never stack two cream sections.

## Typography

**Display Font:** Anton (with Impact, Arial Narrow)
**Body Font:** Archivo (with system-ui)

**Character:** Anton is the painted sign on the wall: condensed, all caps, set tight. Archivo is the waiter talking to you: plain, warm and readable.

### Hierarchy
- **Display** (400, clamp(56px, 9.5vw, 128px), 0.98): hero and final CTA headlines only. Uppercase, balanced wrap.
- **Headline** (400, clamp(44px, 6.5vw, 88px), 1.02): section titles. Uppercase. The cream "Abertura" block uses a slightly smaller step (clamp(44px, 6vw, 80px)), and secondary in-section heads step down to clamp(36px, 4.8vw, 64px).
- **Title** (400, clamp(30px, 3.2vw, 40px), 1): step card titles. The booking selector title uses the same voice at clamp(20px, 2vw, 24px).
- **Numerals** (Anton, 40px in the promise list, clamp(88px, 10vw, 128px) on step cards): numbers are set as display type, in gold or red.
- **Body Lead** (400, clamp(17px, 1.6vw, 20px), 1.65, max 34em): hero subheadline.
- **Body** (400, 17–18px, 1.75): paragraphs. Supporting notes drop to 15px at 0.8 opacity; CTA microcopy is 13px.
- **Label** (600, 13px, 0.16em, uppercase): eyebrows above section titles, footer titles, placeholder and testimonial tags (12px, 700).

### Named Rules
**The Shout-and-Talk Rule.** Anton only shouts: headlines, numbers, button labels, names. Anything longer than one line of reading is Archivo, in sentence case.

**The One Highlight Rule.** A headline gets at most one highlighted phrase, in gold (dark) or ketchup brick (cream), placed where the promise is.

## Layout

A single column of full-bleed sections. Content sits in a 1280px max-width container with a fluid gutter (clamp(20px, 5vw, 72px)) and fluid section padding (clamp(56px, 8vw, 112px)).

Responsiveness uses intrinsic grids, not breakpoints: `repeat(auto-fit, minmax(min(100%, N), 1fr))` with N around 380–420px for two-column splits (copy + media), 260px for the gallery, 220px for media pairs, and 150px for menu items. Columns collapse to one on phones on their own, and type scales with clamp(). Gaps are fluid too (clamp(32px, 5vw, 64–72px) between columns; 12px inside the gallery; 20–24px between cards).

The only fixed rhythm is inside components: 12px between an eyebrow and its title, 20–24px between text blocks, 12px inside the booking selector (title, options, microline).

## Elevation & Depth

The system is flat. Surfaces do not float; there are no card shadows and no layering. Depth comes from light: radial gradients glow from ember red into night black behind the hero (upper right) and the final CTA (top center), and the WhatsApp booking selector casts a colored glow the same color as its options.

### Shadow Vocabulary
- **Red neon glow** (`box-shadow: 0 10px 30px rgba(196, 22, 28, .35)`): under the red booking selector only (hero and Compromisso).
- **Gold neon glow** (`box-shadow: 0 14px 40px rgba(242, 181, 68, .28)`): under the final gold booking selector only.

### Named Rules
**The Light Source Rule.** Only things that are "lit" (the WhatsApp booking selector and the two ember gradients) produce glow. Cards, placeholders, images and text never get shadows.

## Shapes

Almost-square. Each booking option uses a 4px corner, just enough to not feel sharp; sections, cards, the statement tile and media are square-cornered. The one curve is the circle, reserved for food: every mini burger and mini entrada photo is a perfect circle.

Borders are sparing and meaningful: a 6px neon-red top rule marks step cards, 1px cream hairlines at 25% separate promise list rows, and 1.5px dashed borders mark content still to come (placeholders).

## Components

### Booking Selector (WhatsApp)
Flat and confident: one lit sign split into three. It is the only call to action on the page and appears in four places (hero, end of Como funciona, after Compromisso, final CTA).
- **Structure:** the WhatsApp glyph in marquee gold + an Anton uppercase title ("Reservar pelo WhatsApp"; "Reservar a mesa do meu grupo" at the end), a 14px "Quantas pessoas?" line under it, then three joined options showing only the range and "pessoas" (2–5, 6–10, 11+), then the 13px microline "Abre o WhatsApp com a mensagem pronta. O valor do rodízio e das bebidas vem na primeira resposta.". WhatsApp is signalled once, in the title — never repeated inside each option (the owner found icons + "Reservar" per option cluttered).
- **Options:** equal thirds separated by a 3px gap, 76px tall (88px gold), a big Anton range (clamp(28px, 3vw, 34px)) over a 12px Archivo 600 uppercase "pessoas". Each option is its own wa.me link with a prefilled message for that range.
- **Red (hero, Compromisso):** neon red with sign-white text and the red neon glow; max width 480px.
- **Gold (final):** marquee gold with burnt-ink text, 88px tall with a larger range (clamp(34px, 3.6vw, 42px)) and a larger title, gold neon glow; max width 520px. Used once.
- **Hover / Focus:** background brightens over 0.15s; focus shows a 3px outline offset 3px (marquee gold on red options, menu cream on gold options) and lifts above its neighbors.

### Navigation
Sits inside the hero, not sticky: logo on the left (links to the top), section links centered, Instagram icon on the right (44px targets).
- **Desktop (≥1100px):** Archivo 600 at 13px, 0.12em, uppercase, cream. Hover and the current item turn marquee gold with a 2px underline that draws in from the left (0.2s, expo ease-out). The row is a 3-column grid so the links sit on the true center.
- **Phone/tablet:** a hamburger icon opens the same `<nav>` as a full-screen panel (native popover) on the ember gradient: close icon top-right, links stacked in Anton at clamp(30px, 8vw, 44px) between cream hairlines, WhatsApp number at the bottom.
- **Kicker:** the hero's location line carries a short trailing rule in its own color, echoing the reference's organization.

### Hero Burger
The hero's right column: one static photo of a burger in exploded layers, max 500px wide, top-aligned with the headline. The photo sits on pure black and is blended into the ember gradient with `mix-blend-mode: lighten`, so it reads as lit by the room. The radial glow is centered behind it (74% 42%) and deliberately toned down (center #330c0a instead of ember-glow) so the burger keeps its own colors instead of reading red. An assembled→exploded animation was built and parked by the owner; its assets are in `docs/referencias/fotos-hamburguer/animacao-hero/`.

### Problem → Answer (Abertura)
The opening pairs a photo that stretches to the full height of the text (desktop; 3:2 on top on phones) with a two-beat text column: the problem (headline + one paragraph), a hairline, then the answer as two paper-white items side by side, each with a 4px neon-red top rule, an Anton ketchup-brick title and one short line. It borrows the step-card motif so "answers" look alike across the page.

### Closing (final CTA)
Headline (Anton, clamp(48px, 6.2vw, 88px)), the 30-minute line, then one line of proof right above the gold booking selector (gold star icon, Anton "4,6", "no Google · cerca de 1.600 avaliações"): proof sits next to the last decision. The right column is a photo of the full dining room at night that follows the height of the text (min 560px), with a **visit card** resting on its base: night-black fill, 4px marquee-gold top rule, Anton "Onde fica" with a pin icon, address, hours and a gold "Abrir no Google Maps" link (44px target). On phones the photo (4:5) and the card stack below the booking selector.

### Footer
Its own band after `<main>` on `--c-bg-deep` (#0a0807, one step below the page), with a 12% cream hairline on top. Five columns on desktop (≥1000px): brand (logo, one-line description, Instagram icon), Navegue (section links), Horário (dt/dd pairs, tabular numbers), Contato (gold line icons: WhatsApp, Instagram, pin + Maps link) and Pagamento + Delivery. Column titles are Anton uppercase at 20px. On phones: brand full width, then two columns, with Contato full width. A bottom bar holds the © line and "Voltar ao topo ↑" (44px target). Only owner-supplied data: no e-mail, no newsletter.

### Menu Board (Cardápio)
The menu sits on cream like a paper menu. Group titles are Anton uppercase (clamp(22px, 2.4vw, 28px)) followed by a hairline that runs to the edge; items are circles over Anton names. Minis: 3 per row on phones, 5 per row from 700px. While only the three confirmed minis exist, the group is titled "Alguns dos minis" (`.menu-grid--few`): three wide columns with circles up to 260px on desktop, and one row per mini on phones (104px circle left, name and ingredients right). The head pairs the headline with **menu stats**: two big ketchup-brick Anton numbers (10+ receitas, 4 mini entradas, clamp(56px, 7vw, 96px)) between hairlines, in place of a floating paragraph.

### Hero Organization (features + proof bar)
The hero reads top-down as: kicker, headline, one-line lead, booking selector, then a row of three **features** (gold line icon + short uppercase label at 12px, 0.08em: "Mesas para grupos grandes", "Sexta e sábado até as 4h", "Pix, cartão e vale-refeição"). On phones the icon sits above its label so the three stay side by side.

Proof lives in a **proof bar** across the bottom of the hero, spanning both columns: three cells (Google rating, Instagram followers, years making burgers), each with the same pattern: a bare gold line icon (34px, no frame or plaque — the owner rejected the boxed version), then an Anton value (clamp(30px, 3vw, 40px)) over a short Archivo label. Content is centered in each cell on wide screens and left-aligned when the cells stack, so the icons form a column. Cells are divided by 1px menu-cream hairlines at 16% (a 1px grid gap over the hairline color), square corners, night-black fill; on phones they stack. Icons are authored SVG in one 1.7 stroke, never emoji or glyphs.

### Cards / Containers
- **Step card:** paper white on cream, square corners, 6px neon-red top rule, padding clamp(24px, 3vw, 40px). A giant Anton numeral in neon red, then an Anton title, then body.
- **Statement tile:** solid neon-red block in the gallery grid with a short Anton line anchored bottom-left. It is the "sign" among the photos.
- **Promise list:** numbered rows on oxblood, 64px numeral column in gold Anton, cream hairlines between rows.
- **Compromisso layout:** headline spans the full width (two lines on desktop). Below it, promise list + booking selector on the left and two stacked photos on the right that fill the full height of that column (3:2 row split: the table card with order times on top, a round of minis arriving below). On phones: headline, list, the two photos side by side as squares, then the booking selector.

### Testimonial (pending-content card)
Not on the page right now: reviews appear only when the owner sends real text, name and date. Style kept for that moment. Dashed 1.5px marquee-gold border over a 6% gold tint (on dark), 28px padding: a tag label, gold stars, italic body, and an Anton uppercase author line with muted date/source. On cream it switches to ketchup brick; on oxblood the tint becomes 18% black. The dashed border signals "real review goes here" and must be replaced by a solid treatment once real reviews exist.

### Media Placeholder
1.5px dashed menu-cream border (45%) over a 135° diagonal stripe (6% cream, 12px bands), centered gold label and description. Aspect ratios are fixed per slot (4:5 hero, 3:2 opening, 1:1 pairs, 16:10 closing, circles for food). Its only job is to reserve space for real photography.

## Do's and Don'ts

### Do:
- **Do** keep every color in the `:root` tokens of `public/css/style.css` (`--c-*`) and reference them; hover shades already exist.
- **Do** set headlines in Anton uppercase with at most one highlighted phrase (gold on dark, ketchup brick on cream).
- **Do** alternate dark and light sections, and use oxblood for the one reassurance block.
- **Do** use circles only for food photos, and 4px corners only for the booking options.
- **Do** keep the neon glow under the WhatsApp booking selector; it is part of the identity.
- **Do** show ratings as the real number (4,6), never as five full stars.

### Don't:
- **Don't** add shadows to cards, images, placeholders or text; glow belongs only to lit elements.
- **Don't** use red to highlight words on dark sections or gold as a generic action color; red acts, gold emphasizes.
- **Don't** set paragraphs or anything longer than a line in Anton or in uppercase.
- **Don't** round cards or sections, or introduce pill shapes.
- **Don't** use the stock or AI burger images in `docs/referencias/` as if they were Winners photos. The only sanctioned use is the hero burger (owner's choice, until a real photo exists); every other slot keeps its placeholder until real photography exists.
