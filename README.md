# Joyce Femina J — Portfolio

A premium, recruiter-friendly portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Premium dark UI** inspired by Linear, Vercel, and Stripe
- **Command Palette** (`⌘K` / `Ctrl+K`) for instant navigation
- **Interactive Career Timeline** with scroll-driven animations
- **Case-study Project Showcase** with architecture diagrams and impact metrics
- **Skill Galaxy** — interactive node-based skill visualization
- **Recruiter Dashboard** — "Why Hire Me?" with key metrics
- **Engineering Mindset** section with interactive pillar navigation
- **SEO optimized** — meta tags, Open Graph, JSON-LD structured data, sitemap, robots.txt

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, CommandPalette
│   ├── sections/     # Hero, Timeline, Projects, Skills, etc.
│   ├── seo/          # Structured data
│   └── ui/           # Reusable UI primitives
├── data/             # Resume-driven content (single source of truth)
├── hooks/            # Custom React hooks
└── types/            # TypeScript interfaces
public/
├── resume.pdf        # Downloadable resume
├── sitemap.xml
└── robots.txt
```

## Customization

All portfolio content lives in `src/data/`:

| File | Content |
|------|---------|
| `profile.ts` | Name, contact, role, availability |
| `timeline.ts` | Career journey events |
| `projects.ts` | Case study project data |
| `skills.ts` | Skill galaxy categories |
| `content.ts` | Hire reasons, mindset pillars, testimonials |
| `navigation.ts` | Nav items, command palette, SEO config |

Update these files to reflect new experience, projects, or contact details.

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-configures:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**

### Post-deployment

1. Update `seo.url` in `src/data/navigation.ts` with your Vercel domain
2. Update `canonical` URL and `og:image` in `index.html`
3. Update `sitemap.xml` and `robots.txt` with your production URL
4. Replace `public/og-image.svg` with a PNG version for better social sharing

## Performance

- Lazy viewport animations (animate only when visible)
- Minimal dependencies
- Semantic HTML with ARIA labels
- Mobile-first responsive design
- Target Lighthouse score: 95+

## License

Private — © Joyce Femina J
