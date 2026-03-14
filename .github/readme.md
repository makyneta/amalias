# Amália's — Website Oficial · Official Website

## Amália's — A Portuguese Ice Cream, For Sure

Official website of **Amália's**, a Portuguese brand of bite-sized bonbon ice creams made with traditional Portuguese flavours.

---

### 📋 Project Structure

```
/
├── index.html                     # Main website file
├── assets/
│   └── images/
│       ├── ui/
│       │   ├── logo.png           # Brand logo
│       │   └── fundo.jpg          # Portuguese azulejo tile background
│       └── products/
│           ├── doce-ovos.png
│           ├── laranja-algarve.png
│           ├── licor.ginja.png
│           └── pastel-de-nata.jpg
│   └── scripts/
│       └── index.js
│   └── styles/
│       └── index.css
├── .github/
│       └── README.md
└── 
```

---

### 🚀 Getting Started

1. **Clone or download** this repository
2. Add product images to `assets/images/products/` using the filenames listed above
3. Place the logo at `assets/images/ui/logo.png`
4. Place the tile background at `assets/images/ui/fundo.jpg`
5. Open `index.html` in any browser — **no server required**

> ⚠️ Images are **included** in the repository.

---

### 🗂️ Website Sections

| Section | Description |
|---------|-------------|
| **Hero** | Background image, logo, tagline and calls to action |
| **About** | Brand presentation and value proposition |
| **Products** | Grid of 6 main flavours + additional flavours banner |
| **History** | The story behind Amália's origin and mission |
| **Values** | The brand's three core pillars |
| **Team** | The 7 founding members |
| **Contact** | Contact form and brand information |

---

### 🎨 Technologies Used

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, animations, media queries
- **JavaScript (Vanilla)** — mobile menu, smooth scroll, entrance animations
- **Google Fonts** — Playfair Display · Crimson Pro · Great Vibes

---

### 📱 Responsive Design

Fully responsive with breakpoints at:
- `≤ 900px` — tablet and mobile (hamburger menu active)
- `≤ 600px` — small mobile (single-column grid)

---

### 🖼️ Adding Product Images

Each product card uses a static `<img>` tag in the HTML. To update:

```html
<div class="produto-img">
  <img src="assets/images/products/pastel-de-nata.jpg" alt="Pastel de Nata">
</div>
```

Simply replace the `src` with the path to your image. Recommended dimensions: **800 × 600 px** or larger, in `.jpg` or `.webp` format.

---

### 👥 Team

| Name | Role |
|------|------|
| Eduardo Magina | Líder |
| Alícia Aires | Gestora de Preço |
| Tiago Bandeira | Desenvolvimento de Produto |
| Francisco Feijó | Gestor de Clientes |
| Carolina Priegue | Marketing Research |
| Raquel Sousa | Scrum Master |
| Guilherme Silva | Gestor de Comunicação |

---

### ⚖️ Licence & Rights

© 2026 **Makyneta Unipessoal, Lda.** All rights reserved.

This codebase is the property of Makyneta Unipessoal, Lda. and is intended solely for official use under the Amália's brand. Unauthorised reproduction, distribution or use of any part of this project is strictly prohibited.