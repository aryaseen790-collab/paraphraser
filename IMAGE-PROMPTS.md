# Image prompts for OG Humanizer

The layout has 12 image slots. Until a file exists, each slot shows a soft placeholder in the site colours, so you can add images one at a time.

**How to add an image**
1. Generate it with the prompt below (Midjourney, ChatGPT/DALL·E, Gemini/Imagen, Ideogram, Firefly, etc.).
2. Crop it to the aspect ratio listed, then export it as **WebP, quality 80**, at the width listed.
3. Save it in `public/images/` with **exactly** the filename listed.
4. Commit and push. Vercel redeploys, and the image replaces the placeholder automatically. Alt text, including translations, is already in `src/config/images.ts`.

---

## 1. House style (paste this into every prompt)

All images must look like one family. Start every prompt with this style block:

> **Style:** modern flat editorial illustration with subtle grain texture and soft, gentle shading; bold, simple geometric shapes; rounded corners; clean confident lines in deep ink navy (#0E1330). Colour palette strictly limited to electric cobalt blue (#3346FF), violet (#7A3FF2), highlighter yellow (#FFE45C), mint green (#12B886), coral (#FF6B5B) and white, on a very light cool background (#F5F7FF). Lots of negative space, one clear focal point, friendly and optimistic, slightly playful. No text, no letters, no words, no numbers, no logos, no watermarks. Not photorealistic, not 3D render, no gradient mesh, no glossy plastic look.

**Negative prompt** (for tools that support it, e.g. Stable Diffusion or Leonardo):
`text, letters, words, typography, numbers, watermark, logo, signature, photorealistic, 3d render, plastic, glossy, cluttered, busy background, dark background, neon, cyberpunk, robot face close-up, creepy, uncanny, extra fingers, distorted hands`

**Tips for a consistent set**
- Generate **image 2 first**. Once you're happy with it, use it as the **style reference** for every other image (Midjourney: `--sref <image URL>`; ChatGPT: upload it and say "in exactly this illustration style"; Ideogram/Leonardo: Style Reference).
- In Midjourney, add `--style raw --v 7 --ar <ratio>` and keep the same `--sref` and `--seed` across the set.
- AI image tools are bad at text. If letters appear on papers or screens, regenerate or ask for "abstract scribble lines instead of writing".
- Characters should be diverse and non-specific: different skin tones, ages and styles, with simple features. Avoid photoreal faces.

---

## 2. The images

### 1. `hero-spark.webp` (hero, beside the headline, wide screens only)
- **Size:** 800 × 800 (1:1)
- **Where:** small square next to the main heading on every tool page (desktop only, so it never pushes the tool down)
- **Prompt:**
  > [House style] A single oversized yellow highlighter pen drawing a bold glowing stroke across a stack of three paper cards; the top card shows abstract scribble lines that become loose and hand-drawn where the highlighter passes; tiny sparkles and a few small floating shapes (circle, star, squiggle) in mint and coral around it. Centered composition on a soft violet-to-cobalt rounded square background, icon-like and simple enough to read at small size.
- **Midjourney:** `--ar 1:1 --style raw`

### 2. `robot-to-human.webp` ("What it means to humanize AI text")
- **Size:** 1600 × 1000 (16:10)
- **Where:** homepage section 1, and section 1 of every translated humanizer page
- **Prompt:**
  > [House style] A friendly, simple boxy robot on the left feeds a long ribbon of paper covered in rigid, perfectly uniform rectangular lines into a big yellow highlighter "gate" in the middle; on the right side the same paper ribbon comes out with loose, varied, hand-drawn scribble lines and small doodles in the margin, and a smiling person catches it, reading it happily. Left side uses cool blues and greys, right side becomes warmer with yellow, mint and coral accents. Wide horizontal composition, plenty of white space, transformation reads clearly left to right.
- **Midjourney:** `--ar 16:10 --style raw`

### 3. `original-voice.webp` ("Why OG?")
- **Size:** 1200 × 900 (4:3)
- **Where:** homepage section 2
- **Prompt:**
  > [House style] A neat stack of identical grey printed pages, all the same, and one page pulled out of the middle that is clearly different: handwritten-looking scribbles in navy ink, a yellow highlighter mark, a small coral heart doodle and a signature-like flourish (abstract, not real letters). A hand with a fountain pen rests near it. The unique page glows slightly, standing out from the uniform stack. Calm, warm, a little nostalgic.
- **Midjourney:** `--ar 4:3 --style raw`

### 4. `use-cases.webp` ("When a free AI humanizer earns its keep")
- **Size:** 1600 × 1000 (16:10)
- **Where:** homepage section 5, and the "uses" section of every translated humanizer page
- **Prompt:**
  > [House style] Four floating, slightly overlapping cards arranged in a loose fan on a light background: an email envelope card, a blog article card with an abstract image block, a formal letter card with a small ribbon seal, and a chat bubble card. Each card has abstract scribble lines (no real text) and one word-length stroke highlighted in yellow highlighter. Small connecting dotted lines and sparkles between them. Each card has a different accent colour: cobalt, mint, coral, violet.
- **Midjourney:** `--ar 16:10 --style raw`

### 5. `detectors.webp` ("A candid word about AI detectors")
- **Size:** 1200 × 900 (4:3)
- **Where:** homepage section 6, and the honesty section of every translated humanizer page
- **Prompt:**
  > [House style] A large magnifying glass hovering over a single page of abstract scribble lines; inside the lens, instead of answers, there are several playful question marks in different colours and a small wobbly balance scale that cannot decide which way to tip. A simple gauge or meter next to it with the needle pointing at a vague middle position. The mood is light-hearted and honest, gently poking fun at the idea that a machine can be certain.
- **Midjourney:** `--ar 4:3 --style raw`

### 6. `paraphrase-concept.webp` ("Paraphrasing: say the same thing, better")
- **Size:** 1600 × 1000 (16:10)
- **Where:** paraphraser page section 1, and section 1 of every translated paraphraser page
- **Prompt:**
  > [House style] One horizontal strip of abstract scribble lines on the left (representing a single sentence) splits like a river delta into four parallel strips on the right, each strip a different colour (cobalt, mint, coral, violet) and a slightly different length and rhythm, suggesting four rewrites of the same idea. Small arrows and sparkles along the branches; a yellow highlighter mark on one of the four, as if chosen. Clean, diagrammatic but warm.
- **Midjourney:** `--ar 16:10 --style raw`

### 7. `writing-desk.webp` ("How to get a better rewrite" tips)
- **Size:** 1200 × 900 (4:3)
- **Where:** paraphraser page section 4, and the tips section of every translated paraphraser page
- **Prompt:**
  > [House style] Top-down view of a tidy desk: an open laptop showing two side-by-side panels of abstract lines (left panel with a few coral marks, right panel with a few mint marks), a spiral notebook with doodles, a yellow highlighter, a coffee cup with a small heart in the foam, and a small potted plant. Cozy and organised, balanced composition with generous space around objects.
- **Midjourney:** `--ar 4:3 --style raw`

### 8. `about-workspace.webp` (About page header)
- **Size:** 1600 × 900 (16:9)
- **Where:** top of the About page
- **Prompt:**
  > [House style] A small, bright, friendly studio scene: two or three diverse people at a shared table with laptops and paper drafts, one pointing at a page with a yellow highlighter, another smiling and holding a mug; a big window with soft daylight, a plant, a pinboard with abstract coloured cards. Feels independent, honest and approachable, not corporate.
- **Midjourney:** `--ar 16:9 --style raw`

### 9. `guide-humanize.webp` (guide: How to Humanize AI Content)
- **Size:** 1600 × 900 (16:9)
- **Where:** top of `/guides/how-to-humanize-ai-content`
- **Prompt:**
  > [House style] A simple friendly robot hands a printed draft (abstract uniform lines) to a person sitting at a desk; the person is adding hand-drawn notes, arrows and a yellow highlighter mark in the margin, clearly improving it. Teamwork feeling: the machine drafts, the human edits. Wide composition, light background.
- **Midjourney:** `--ar 16:9 --style raw`

### 10. `guide-email.webp` (guide: How to Rewrite an Email Formally)
- **Size:** 1600 × 900 (16:9)
- **Where:** top of `/guides/how-to-rewrite-an-email-formally`
- **Prompt:**
  > [House style] Two email cards side by side connected by a curved arrow: the left one is casual and messy (tilted, abstract scribbles, a small emoji-like circle face, a coffee stain), the right one is crisp and professional (straight, neat abstract lines, a small ribbon seal, a tie-shaped bookmark). Left in coral tones, right in cobalt tones, a yellow highlighter sparkle on the arrow.
- **Midjourney:** `--ar 16:9 --style raw`

### 11. `guide-simplify.webp` (guide: How to Simplify Complex Text)
- **Size:** 1600 × 900 (16:9)
- **Where:** top of `/guides/how-to-simplify-text`
- **Prompt:**
  > [House style] A big tangled ball of navy string on the left gradually unwinding into one straight, smooth mint-green line that runs to the right and ends in a small yellow highlighted dot; a few tiny dots of coral and violet along the way. Minimal, satisfying, lots of white space.
- **Midjourney:** `--ar 16:9 --style raw`

### 12. `guide-plagiarism.webp` (guide: How to Paraphrase Without Plagiarising)
- **Size:** 1600 × 900 (16:9)
- **Where:** top of `/guides/how-to-paraphrase-without-plagiarism`
- **Prompt:**
  > [House style] An open book on the left with a bright yellow bookmark labelled only with a quotation-mark shape, a dotted line leading from the book to a student's notebook on the right where the same idea is drawn as a different, hand-sketched diagram, with a small check-mark badge in mint. Conveys "credit the source, write it your own way". Calm and trustworthy.
- **Midjourney:** `--ar 16:9 --style raw`

---

## 3. Optional: a designed social share image

The site already generates a share image automatically (cobalt gradient with the headline). If you'd like a richer one:
- **Size:** 1200 × 630
- **Prompt:**
  > [House style] Wide banner: on a cobalt-to-violet gradient background, a large yellow highlighter stroke sweeps across the centre, turning a strip of stiff uniform lines into loose, hand-drawn lines; small sparkles in mint and coral. Leave the left 55% of the image calm and empty for text to be added later.
- Then add the headline "Make AI text sound like you" and the OG Humanizer logo in a design tool (Canva or Figma), because AI image tools can't render text reliably. Save it as `src/app/opengraph-image.png` and delete `src/app/opengraph-image.tsx`, or ask me to wire it in.

---

## 4. Checklist

| # | File | Size | Done |
|---|---|---|---|
| 1 | hero-spark.webp | 800×800 | ☐ |
| 2 | robot-to-human.webp | 1600×1000 | ☐ |
| 3 | original-voice.webp | 1200×900 | ☐ |
| 4 | use-cases.webp | 1600×1000 | ☐ |
| 5 | detectors.webp | 1200×900 | ☐ |
| 6 | paraphrase-concept.webp | 1600×1000 | ☐ |
| 7 | writing-desk.webp | 1200×900 | ☐ |
| 8 | about-workspace.webp | 1600×900 | ☐ |
| 9 | guide-humanize.webp | 1600×900 | ☐ |
| 10 | guide-email.webp | 1600×900 | ☐ |
| 11 | guide-simplify.webp | 1600×900 | ☐ |
| 12 | guide-plagiarism.webp | 1600×900 | ☐ |

Keep each file under about 250 KB (WebP at quality 75–80 usually lands at 80–200 KB). If you send me the images, I'll add and optimise them for you.
