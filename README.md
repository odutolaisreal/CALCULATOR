# Wisdom Show - Framer-Style Landing Page

A modern, high-end landing page redesign for wisdomshow.com.ng, inspired by top-class Framer designs. Features a sleek, professional interface with elegant animations, smooth transitions, and a polished user experience.

## 📁 Project Structure

```
wisdomshow-redesign/
├── index.html      # Main HTML structure
├── style.css       # All styles (CSS custom properties, animations, responsive)
├── script.js       # Interactions (smooth scroll, FAQ accordion, mobile menu)
└── README.md       # This file
```

## 🚀 Installation & Setup

### Option 1: Simple Static Hosting (No Build Required)

This is a **pure HTML/CSS/JS** project with **no dependencies**. You can run it immediately:

1. **Local preview**: Open `index.html` directly in your browser
   - Double-click the file, or
   - Use a simple server: `python3 -m http.server 8000` or `npx serve .`

2. **Deploy to any static host**:
   - **Netlify / Vercel**: Drag the folder or connect your repo
   - **GitHub Pages**: Push to a repo and enable Pages
   - **AWS S3 / CloudFront**: Upload the files to an S3 bucket
   - **Traditional hosting**: Upload via FTP to your web server

### Option 2: Replace wisdomshow.com.ng Frontend

If wisdomshow.com.ng uses a framework (e.g., Next.js):

1. Copy `index.html` content into your main page component
2. Add `style.css` to your global styles or import it
3. Add `script.js` to your page or app layout
4. Update `/login` and `/register` links to your actual routes

## 🔗 Link Configuration

Update these placeholders in `index.html` to match your setup:

- **Login**: `<a href="/login">` → Your login URL
- **Register**: `<a href="/register">` → Your registration URL
- **App Store / Google Play**: Update `href="#"` in the CTA section
- **Privacy Policy / Terms**: Update footer links
- **Social media**: Update footer social links

## ✨ Features

- **Framer-inspired design**: Clean, minimalistic, top-class aesthetics
- **Smooth animations**: Hero fade-in, scroll reveal, hover effects
- **Responsive**: Mobile-first, works on all screen sizes
- **FAQ accordion**: Expandable Q&A
- **Mobile menu**: Hamburger navigation with smooth transitions
- **Parallax hints**: Subtle depth in hero section
- **Accessible**: Semantic HTML, ARIA labels where needed
- **Fast**: No heavy frameworks, vanilla JS, optimized CSS

## 🎨 Customization

### Colors
Edit CSS custom properties in `style.css`:

```css
:root {
  --color-primary: #3A5BFF;    /* Main blue */
  --color-secondary: #8B5CF6;  /* Purple accent */
  --color-accent: #10B981;     /* Success green */
}
```

### Fonts
Uses [Google Fonts](https://fonts.google.com): **DM Sans** (body) and **Syne** (headings). Loaded via `<link>` in `index.html`. Change or remove if using different fonts.

## 📦 Deliverables

- **Source files**: `index.html`, `style.css`, `script.js`
- **No build step**: Ready to deploy as-is
- **No Node/npm**: Plain HTML/CSS/JS only
- **Images**: Uses CSS gradients and SVG icons (no external images required)

## 🌐 Browser Support

- Chrome, Firefox, Safari, Edge (modern versions)
- Backdrop-filter may not work on very old browsers; layout remains fine

## 📄 License

© 2025 The Wisdom Game. All rights reserved.
