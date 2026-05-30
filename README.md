# ADVA Developments — Oman Website

A premium, production-grade React website for ADVA Developments' Oman operations.

## Stack
- React 18
- Lucide React (icons)
- Google Fonts (Cormorant Garamond, Playfair Display, Montserrat)
- Pure CSS animations (no extra libraries needed)

## Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at http://localhost:3000

### 3. Build for production
```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        — Fixed nav with scroll transparency + mobile menu
│   ├── Hero.jsx          — Full-screen hero with auto-rotating slides + stats bar
│   ├── About.jsx         — Company story + mission card
│   ├── Projects.jsx      — Project portfolio cards (ADVIDA + Oman pipeline)
│   ├── Vision.jsx        — 4 pillars of excellence + CEO quote
│   ├── Sustainability.jsx — Green initiatives + animated progress bars
│   ├── Contact.jsx       — Contact form + office info
│   └── Footer.jsx        — Links, social, copyright
├── App.jsx
├── index.js
└── index.css             — Design tokens (CSS variables), global styles
```

## Design System

**Colors:**
- `--navy-deepest`: #050d1a (background)
- `--navy-deep`: #0a1628
- `--gold`: #c9a96e (primary accent)
- `--gold-light`: #e2c89a

**Fonts:**
- Display: Cormorant Garamond (headlines, large text)
- Heading: Playfair Display
- Body: Montserrat

## Customization

### Update contact info
Edit `src/components/Contact.jsx` — replace phone, email, address placeholders.

### Update projects
Edit `src/components/Projects.jsx` — the `projects` array at the top of the file.

### Update logo
The logo is text-based in `Navbar.jsx`. Replace "ADVA" with your final brand mark or add an `<img>` tag.

### Add real images
The hero uses CSS gradients. To add real property photography:
1. Place images in `src/assets/`
2. Import them in `Hero.jsx`
3. Replace the `background` gradient with `backgroundImage: url(...)`

---

Built to match the quality standards of top-tier real estate developers.
