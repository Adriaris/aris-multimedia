# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server (Next.js 16, port 3000)
npm run build     # Production build
npm run lint      # ESLint (no test suite exists)
```

## Stack

- **Next.js 16.2.2** — App Router, React 19, TypeScript 5
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css` (no `tailwind.config.*`)
- **Three.js** — used only in `components/ArisOrb.tsx` (WebGL orb)
- **Resend** — email delivery via `app/api/contact/route.ts`; requires `RESEND_API_KEY` env var
- **Lucide React** — icon library

## Architecture

The site is a **single-page application** with one route (`/`) plus three legal pages (`/aviso-legal`, `/privacidad`, `/cookies`).

`app/page.tsx` is a single `"use client"` component that contains the entire page: Navbar, MenuPanel, Hero, Servicios, Sobre, Proceso, Contacto, and Footer sections — all defined as local functions in the same file.

`components/ArisOrb.tsx` is the only extracted component — a Three.js WebGL orb loaded with `dynamic(..., { ssr: false })` to avoid SSR crashes. It renders into the contact section background at low opacity.

### Design system (no external UI lib)

- Background: `#080808` / `#060606` / `#0d0d0d`
- Accent: `#F5A623` (amber) — hover lightens to `#FFD166`
- All animations are in `globals.css`: `scroll-animate` + `in-view` classes driven by an `IntersectionObserver` in `page.tsx`, plus `shimmer-text`, `kenBurns`, `float` keyframes.
- Scroll-reveal delays use `.delay-1` through `.delay-5` CSS classes.

### Contact flow

`ContactForm` in `page.tsx` → `POST /api/contact` → Resend sends to `info@arismultimedia.com`. File attachments are base64-encoded client-side before posting.

## Key conventions

- Tailwind v4 uses `border-white/8` opacity fractions directly — no `border-opacity-*`.
- `bg-linear-to-b` is the Tailwind v4 syntax for gradient direction (replaces `bg-gradient-to-b`).
- Images live in `public/`. Use `next/image` with `fill` for responsive photos.
- The navbar logo visibility is driven by scroll direction (`showLogo` state), not just scroll position.
