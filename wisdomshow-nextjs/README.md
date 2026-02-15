# Wisdom Show - Ultra-Custom Next.js Landing Page

A high-end, Framer-inspired landing page for wisdomshow.com.ng built with **Next.js 14**, **Framer Motion**, and **GSAP**. Features fluid organic shapes, cinematic intro, real-time parallax, scroll-triggered animations, and custom hand-crafted UI components.

## ✨ Features

- **Ultra-Custom Design**: Bespoke aesthetics, fluid organic shapes, no rigid layouts
- **Cinematic Intro**: GSAP-powered overlay fade-out on page load
- **Real-Time Parallax**: Framer Motion `useScroll`/`useTransform` for hero depth
- **Scroll-Triggered Animations**: Elements fade/slide into view with Intersection Observer
- **Interactive Hover Effects**: Buttons, cards, and nav links with micro-interactions
- **Custom Components**: Hand-coded Navbar, Hero, Features, About, Testimonials, FAQ, CTA, Footer
- **Responsive**: Custom flex/grid layouts, mobile-first, polished on all devices
- **SSG/SSR**: Static generation for performance and SEO
- **Optimized**: Next.js Image-ready, minimal JS bundle

## 📁 Project Structure

```
wisdomshow-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, fonts
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Animated sticky nav
│       ├── Hero.tsx        # Cinematic hero + parallax
│       ├── Features.tsx    # Feature cards
│       ├── Dashboard.tsx   # Dark section
│       ├── About.tsx       # About + images
│       ├── Testimonials.tsx
│       ├── FAQ.tsx         # Accordion
│       ├── CTA.tsx         # App store buttons
│       ├── Footer.tsx
│       └── ScrollReveal.tsx # Scroll animation wrapper
├── public/
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🚀 Installation

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or later (or yarn/pnpm)

### Setup

1. **Extract the ZIP** (or clone the repo)

2. **Install dependencies**
   ```bash
   cd wisdomshow-nextjs
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy (auto-detects Next.js)

### Netlify

```bash
npm run build
# Deploy `.next` + set build command: npm run build
# Publish directory: .next (or use @netlify/plugin-nextjs)
```

### Static Export (Optional)

Add to `next.config.mjs`:

```js
const nextConfig = { output: 'export' };
```

Then `npm run build` produces a `out/` folder for static hosting.

## 🔧 Customization

### Typography

Fonts are loaded in `layout.tsx`:
- **Syne** – Display/headings
- **DM Sans** – Body

Change in `src/app/layout.tsx` or `tailwind.config.ts`.

### Colors

Edit `tailwind.config.ts` and `globals.css`:

```css
:root {
  --color-primary: #3A5BFF;
  --color-secondary: #8B5CF6;
  --color-accent: #10B981;
}
```

### Links

Update these in components:

- `Navbar.tsx`: `/login`, `/register`
- `CTA.tsx`: App Store / Google Play URLs
- `Footer.tsx`: Privacy, Terms, Contact, social links

## 📦 Dependencies

| Package       | Purpose                         |
|---------------|---------------------------------|
| next          | React framework, SSR/SSG        |
| react         | UI library                      |
| framer-motion | Animations, scroll, gestures    |
| gsap          | Cinematic intro, timelines      |
| tailwindcss   | Utility-first CSS               |

## 📄 License

© 2025 The Wisdom Game. All rights reserved.
