# Akosua Mensah Portfolio

Premium portfolio website for a digital marketer and brand growth strategist, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, `next/image`, `next/font`, and restrained Lucide React icons.

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Edit Profile Content

Update the primary identity, contact links, positioning, expertise, process, tools, and metrics in:

```text
src/data/profile.ts
```

The placeholder name is centralized as `Akosua Mensah`. Replace it there once the final name, email, and social links are ready.

## Add or Edit Projects

Project summaries and case-study content live in:

```text
src/data/projects.ts
```

Each project needs a unique `slug`. The route `/work/[slug]` is generated from this file, so adding a new project automatically creates a case-study page.

## Edit Experience and Testimonials

```text
src/data/experience.ts
src/data/testimonials.ts
```

Keep copy concise and outcome-led. The design is intentionally typography-first, so stronger writing improves the whole site.

## Replace Images

Project-bound placeholder images are stored in:

```text
public/images/
```

Replace these files with real assets using the same filenames, or update the image paths in `src/data/profile.ts` and `src/data/projects.ts`.

Current placeholders:

```text
portrait.png
fashion-awareness.png
beauty-launch.png
hospitality-leads.png
commerce-growth.png
```

Use large, sharp images with calm compositions. Avoid screenshots with tiny unreadable UI, heavy filters, decorative graphics, and stock images that feel generic.

## Change Colors

Design tokens are CSS variables in:

```text
src/app/globals.css
```

Key variables:

```css
--background: #f4f1e9;
--foreground: #111111;
--secondary: #6f6b64;
--border: #d9d4cb;
--accent: #7b2d35;
```

Use one accent color sparingly.

## Change Fonts

The body font uses `next/font` in:

```text
src/app/layout.tsx
```

The editorial display stack is defined as `--font-display` in `src/app/globals.css`. Replace it with a local or Google serif if you add the font through `next/font`.

## Modify Animation Timing

Shared reveal timing lives in:

```text
src/components/motion/Reveal.tsx
src/components/motion/ImageReveal.tsx
src/app/globals.css
```

The main easing token is:

```css
--ease-editorial: cubic-bezier(0.76, 0, 0.24, 1);
```

Reduced-motion preferences are respected in the motion components and global CSS.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Before publishing, update `canonicalUrl` in `src/data/profile.ts` to the production domain.
