# helical — landing page spec
## google stitch build document v1.0

---

## how to use this doc

Paste the **master prompt** first to establish the design system.
Then use the **section prompts** one at a time to build each section.
Use the **refinement prompts** to correct anything Stitch gets wrong.
End with the **DESIGN.md block** to lock the system for future screens.

---

## 01 — master prompt (paste this first)

```
Design a landing page for "helical" — an AI tools company for builders and developers.

BRAND PERSONALITY:
- Teenage Engineering meets Fly.io meets Railway.app
- Utility-first, anti-decoration, systems thinking
- "Built for the work, not the pitch"
- Feels like a technical manual, not a startup marketing page
- Lowercase everything — brand name, headings, labels

VISUAL SYSTEM:
- Background: #F0EDE6 (warm off-white, like aged paper)
- Primary ink: #0A0A0A (near black)
- Accent: #D95F0A (signal orange — used sparingly, once per section)
- Mid tone: #6B6866 (warm gray for secondary text)
- Rule/border: #C8C4BC (light warm gray)
- Surface: #E4E0D8 (slightly darker paper for cards/sections)

TYPOGRAPHY:
- Display headings: Helvetica Neue, weight 400, tight tracking (-0.02em), lowercase
- Body: Helvetica Neue, weight 400, normal tracking
- Labels/eyebrows: Helvetica Neue, weight 400, 0.20em tracking, uppercase, 10px
- Code/technical: Courier New or monospace, weight 400
- NO serif fonts. NO Inter. NO geometric sans like Futura.

LAYOUT RULES:
- 48px horizontal padding on desktop
- Maximum content width: 1080px, centered
- Sections divided by 1px solid #C8C4BC rules
- No cards with drop shadows
- No gradients
- No rounded corners except where structurally required
- Grid-based, everything aligned

TONE OF COPY:
- Lowercase throughout
- Short. Dense. Technical but human.
- No exclamation marks. No "unlock" or "seamless" or "powerful".
- Reads like documentation, not advertising.
```

---

## 02 — navigation bar

```
Design the navigation bar for helical:

Left: the helical wordmark — lowercase "helical" in Helvetica Neue, 13px, letter-spacing 0.14em. 
Before the wordmark, a small SVG mark placeholder (circle, ~16px).

Right: nav links — "product", "docs", "pricing", "sign in" 
All lowercase, 12px Courier New, color #6B6866, spaced 32px apart.
Final item "get started →" in #D95F0A (signal orange).

Background: #F0EDE6
Border-bottom: 1px solid #C8C4BC
Height: 56px
No hamburger menu visible at desktop.
```

---

## 03 — hero section

```
Design the hero section:

LAYOUT: Full-width, two columns.
Left column (60%): text content.
Right column (40%): terminal/code block visual.

LEFT COLUMN CONTENT:
- Eyebrow label: "helical — intelligence for makers" 
  Style: 9px Helvetica Neue, letter-spacing 0.22em, uppercase, color #6B6866
  Add a 1px horizontal rule below it, color #C8C4BC, width 40px, margin-bottom 24px

- Headline (2–3 lines):
  "built for the work,
  not the pitch."
  Style: 52px Helvetica Neue weight 400, letter-spacing -0.02em, lowercase, color #0A0A0A, line-height 0.95

- Body text:
  "helical is not a platform. it's a set of tools, built carefully, for people who already know what they're doing and want the machine to keep up."
  Style: 14px Helvetica Neue, color #6B6866, line-height 1.75, max-width 400px, margin-top 24px

- CTA row (margin-top 36px):
  Primary: "read the docs →" — text only, Courier New 12px, color #D95F0A, no button box
  Secondary: "or get started free" — Courier New 12px, color #6B6866, margin-left 24px

RIGHT COLUMN CONTENT:
Dark terminal block, background #0A0A0A, padding 28px, no border-radius.
Show mock terminal output in Courier New 12px:

  $ helical init my-project
  ✓ environment detected
  ✓ config written to helical.toml
  ✓ ready

  [helical] running on localhost:4200
  [helical] watching for changes...

Line colors: commands in #F0EDE6, success marks in #D95F0A, comments in #555.

SECTION: background #F0EDE6, padding 80px 48px, border-bottom 1px solid #C8C4BC.
```

---

## 04 — social proof bar

```
Design a minimal social proof / trust bar:

Single row, horizontally centered.
Content: "trusted by engineers at —" followed by 5 company names in Courier New 11px, color #C8C4BC, letter-spacing 0.08em.
Use placeholder names: stripe, vercel, linear, anthropic, figma.

Background: #E4E0D8
Padding: 18px 48px
Border-bottom: 1px solid #C8C4BC
No logos, text only.
```

---

## 05 — how it works / features

```
Design a features section with a 3-column grid.

SECTION LABEL: 
"02 — what it does" in 9px Courier New, color #D95F0A, letter-spacing 0.18em, lowercase.
Below label: 1px rule full width, color #C8C4BC, margin-bottom 40px.

HEADLINE:
"precision tools.
zero noise."
48px Helvetica Neue 400, letter-spacing -0.02em, lowercase, max-width 480px, margin-bottom 48px.

3-COLUMN FEATURE GRID (equal columns, 1px #C8C4BC borders between columns, no outer border):

Column 1:
- Label: "01" in 9px Courier New, color #D95F0A
- Title: "fits how you already build" — 16px Helvetica Neue 400, lowercase, margin-top 8px
- Body: "works with your stack, your editor, your workflow. no onboarding. no migration. just drop it in." — 12px Courier New, color #6B6866, line-height 1.75, margin-top 12px

Column 2:
- Label: "02"
- Title: "grows with the craft"
- Body: "the more you use it, the better it gets. built to adapt to the way you work, not the other way around."

Column 3:
- Label: "03"
- Title: "made once. trusted for years."
- Body: "no trend-chasing. no rebrand every 18 months. tools built to last because the work needs to last."

SECTION: background #F0EDE6, padding 72px 48px, border-bottom 1px solid #C8C4BC.
Column padding: 32px. Top-aligned text.
```

---

## 06 — code/technical detail section

```
Design a split section showing technical credibility.

LEFT SIDE (50%):
Background #0A0A0A, padding 48px.

Show a code block in Courier New 12px, line-height 1.8:

  // helical.toml
  
  [project]
  name = "my-app"
  env  = "production"
  
  [intelligence]
  model   = "helical-1"
  context = "codebase"
  mode    = "precise"
  
  [output]
  format  = "inline"
  verbose = false

Syntax colors: keys in #F0EDE6, values in #D95F0A, comments in #555, brackets in #444.

RIGHT SIDE (50%):
Background #F0EDE6, padding 48px.

Eyebrow: "03 — configuration" — 9px Courier New, #6B6866, letter-spacing 0.18em.
Headline: "one file.\nno surprises." — 36px Helvetica Neue 400, lowercase, letter-spacing -0.02em, line-height 1.0, color #0A0A0A.
Body (margin-top 20px): "everything helical needs lives in a single toml file. readable by humans. auditable by your team. no hidden state." — 12px Courier New, color #6B6866, line-height 1.75.

Link below body: "view full config reference →" — 11px Courier New, color #D95F0A.

SECTION: no extra padding, full-bleed split. Border-bottom 1px solid #C8C4BC.
```

---

## 07 — testimonial / quote

```
Design a centered editorial quote section.

Layout: centered, max-width 640px, margin auto.

Opening mark: large quotation mark " — 80px Helvetica Neue 400, color #C8C4BC, line-height 0.5.

Quote text:
"the best tools feel inevitable. you reach for them without thinking — they're already where your hand expects them to be."
Style: 22px Helvetica Neue 400, color #0A0A0A, line-height 1.5, lowercase, letter-spacing -0.01em.

Attribution (margin-top 24px):
"— maya r., senior engineer" — 10px Courier New, color #6B6866, letter-spacing 0.12em.

Thin rule above attribution: 1px solid #C8C4BC, width 32px, centered.

SECTION: background #E4E0D8, padding 80px 48px, border-bottom 1px solid #C8C4BC.
```

---

## 08 — pricing

```
Design a pricing section.

SECTION LABEL: "04 — pricing" — 9px Courier New, #D95F0A.
Rule below label.

HEADLINE: "straightforward.\nno surprises." — 48px Helvetica Neue 400, lowercase.

PRICING GRID: 3 columns, separated by 1px #C8C4BC vertical rules, no card backgrounds.
Columns are full-bleed, top-aligned, padding 32px each.

Column 1 — "free":
- Price: "$0 / mo" — 32px Helvetica Neue 400
- Tagline: "for personal projects" — 11px Courier New, #6B6866
- Rule separator
- Feature list in 11px Courier New, #6B6866, line-height 2.2:
  ✓ 1 project
  ✓ helical-1 model
  ✓ community support
  × team features
  × priority access
- CTA: "get started →" — 11px Courier New, #0A0A0A

Column 2 — "pro" (accent this column with #D95F0A top border, 2px):
- Label above: "most used" — 8px Courier New, #D95F0A, letter-spacing 0.2em
- Price: "$29 / mo"
- Tagline: "for professional builders"
- Features:
  ✓ unlimited projects
  ✓ helical-1 + helical-2
  ✓ priority support
  ✓ advanced config
  × enterprise sso
- CTA: "start free trial →" — 11px Courier New, #D95F0A

Column 3 — "team":
- Price: "$99 / mo"
- Tagline: "for engineering teams"
- Features:
  ✓ everything in pro
  ✓ team workspace
  ✓ sso + audit logs
  ✓ dedicated support
  ✓ custom models
- CTA: "talk to us →" — 11px Courier New, #0A0A0A

SECTION: background #F0EDE6, padding 72px 48px, border-bottom 1px solid #C8C4BC.
```

---

## 09 — CTA / footer close

```
Design a closing CTA section and footer.

CTA SECTION:
Background #0A0A0A, padding 72px 48px.
Layout: two columns, vertically centered.

Left:
- Eyebrow: "ready to build?" — 9px Courier New, #555, letter-spacing 0.18em
- Headline: "start with the docs.\nthe rest follows." — 42px Helvetica Neue 400, color #F0EDE6, lowercase, letter-spacing -0.02em, line-height 1.05

Right (right-aligned):
- Primary CTA: "read the docs →" — 11px Courier New, color #D95F0A, border-bottom 1px solid #D95F0A, padding-bottom 2px
- Secondary: "or create a free account" — 11px Courier New, color #555, margin-top 14px

FOOTER:
Background #0A0A0A, padding 32px 48px.
Border-top 1px solid #1C1C1C.

Left: 
"© 2026 helical" — 9px Courier New, #555
Horizontal rule separator (vertical bar |), then "built with care."

Right:
Links in 9px Courier New, #555, spaced 24px apart:
"privacy", "terms", "status", "github", "twitter"
```

---

## 10 — refinement prompts

Use these if Stitch gets something wrong:

**If fonts look too modern/rounded:**
```
Replace all sans-serif fonts with Helvetica Neue specifically. 
Remove any geometric or rounded letterforms. 
The type should look utilitarian, not friendly.
```

**If it adds too much color:**
```
Remove all color except #D95F0A orange accent. 
Everything else should be #0A0A0A, #6B6866, or #F0EDE6.
No blue, green, purple, or any other hues.
```

**If layouts look too "startup-y":**
```
Remove all drop shadows, card hover effects, and rounded corners.
Make borders 1px solid lines only.
Remove any gradient backgrounds.
The layout should feel like a technical document, not a SaaS marketing page.
```

**If copy sounds too salesy:**
```
Rewrite all copy in lowercase.
Remove any exclamation marks.
Replace words like "powerful", "seamless", "unlock", "next-gen" with plain descriptive language.
Match the tone of Fly.io or Railway.app documentation.
```

**If the terminal blocks look decorative:**
```
Make terminal blocks plainer. 
Background #0A0A0A, text #F0EDE6, Courier New 12px.
No fake window chrome, no traffic light dots, no title bars.
Just the text on a dark background.
```

---

## 11 — DESIGN.md block

Paste this into Stitch's DESIGN.md to lock the system for future screens:

```markdown
# helical design system

## identity
brand: helical
tagline: built for the work, not the pitch
voice: lowercase, technical, sparse, honest

## colours
--ink:     #0A0A0A  /* near black, primary text */
--carbon:  #1C1C1C  /* dark surface */
--signal:  #D95F0A  /* orange accent — 1x per view max */
--mid:     #6B6866  /* secondary text, labels */
--rule:    #C8C4BC  /* borders, dividers */
--field:   #E4E0D8  /* surface, alternating sections */
--paper:   #F0EDE6  /* primary background */

## typography
display:  Helvetica Neue 400, -0.02em, lowercase
subhead:  Helvetica Neue 400, 0em
body:     Helvetica Neue 400, line-height 1.7
mono:     Courier New 400 — for all code, labels, technical copy
label:    Helvetica Neue 400, 9px, 0.20em tracking, uppercase

no serif. no inter. no rounded sans.

## spacing
page-padding-x: 48px
section-padding-y: 72px
grid-gap: 32px
border: 1px solid #C8C4BC

## rules
- all headings lowercase
- no drop shadows
- no gradients  
- no rounded corners on structural elements
- signal orange used once per section maximum
- monospace for anything technical
- sections separated by 1px rules, not whitespace alone
```

---

## 12 — export instructions

1. Generate each section using the prompts above
2. Use **Gemini 3 Pro mode** for higher fidelity
3. After each section, use voice or chat to correct with the refinement prompts
4. Once all sections look right, generate **DESIGN.md** and paste the block above
5. Export options:
   - **Paste to Figma** — for further refinement and handoff
   - **Export HTML/CSS** — for direct development
   - **Export to AI Studio** — if building with Gemini backend
6. Note: Stitch works better at mobile/component level — for the full desktop layout you may need to assemble sections in Figma after individual generation

---

*doc: HEL-BRAND-002 — landing page spec*
*rev: 2026.04*
*status: ready for build*
