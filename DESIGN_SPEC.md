# Vibe — Design Specification

> **Purpose:** This document defines the visual identity, design system, and implementation guidelines for the Vibe brand. All future websites and digital products built under the Vibe / Avunite umbrella should conform to this specification to ensure a consistent, recognizable experience.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Layout & Grid](#4-layout--grid)
5. [Spacing](#5-spacing)
6. [Component Library](#6-component-library)
   - [Buttons](#61-buttons)
   - [Cards](#62-cards)
   - [Forms](#63-forms)
   - [Navigation](#64-navigation)
   - [Footer](#65-footer)
   - [Warning / Status Banners](#66-warning--status-banners)
7. [Section Patterns](#7-section-patterns)
8. [Animation & Motion](#8-animation--motion)
9. [Iconography](#9-iconography)
10. [Responsive Design](#10-responsive-design)
11. [Logo & Brand Mark](#11-logo--brand-mark)
12. [Page Structure Template](#12-page-structure-template)
13. [Tailwind Configuration Reference](#13-tailwind-configuration-reference)
14. [Dos & Don'ts](#14-dos--donts)

---

## 1. Design Philosophy

Vibe uses a **Neo Brutalist** design language. This means:

| Principle | Description |
|-----------|-------------|
| **Bold & Direct** | Heavy borders, strong shadows, no decorative fluff. Interfaces communicate intent immediately. |
| **Flat & High-Contrast** | Elements sit on flat white or light-grey backgrounds. Color is used as an accent, not a wash. |
| **Tactile Feedback** | Interactive elements shift slightly on hover (translate + reduced shadow), mimicking physical button presses. |
| **Structural Honesty** | Borders define edges. No gradients masking structure. Rounded corners are rare and intentional. |
| **Monochrome Core + Vivid Accents** | Black borders and grey neutrals form the scaffolding; the Vibe sunset palette provides personality. |

---

## 2. Color Palette

### 2.1 Primary Brand Colors

The **Vibe Sunset Palette** is a warm progression from deep violet through golden yellow. Use it to convey energy, intelligence, and modernity.

#### Purple (`vibe-purple`) — Primary / Brand
| Token | Hex | Usage |
|-------|-----|-------|
| `vibe-purple-50` | `#E8E7F4` | Very light tints, hover backgrounds |
| `vibe-purple-100` | `#D1CFE9` | Subtle tints |
| `vibe-purple-200` | `#A39FD3` | Disabled states |
| `vibe-purple-300` | `#756FBD` | Secondary text accents |
| `vibe-purple-400` | `#4F48A4` | Hover states |
| **`vibe-purple-500`** | **`#3D348B`** | **Default — primary buttons, logo, links** |
| `vibe-purple-600` | `#312A6F` | Button hover, active |
| `vibe-purple-700` | `#251F53` | Dark UI accents |
| `vibe-purple-800` | `#181538` | Deep backgrounds |
| `vibe-purple-900` | `#0C0A1C` | Near-black text on light accents |

#### Indigo (`vibe-indigo`) — Secondary Accent
| Token | Hex | Usage |
|-------|-----|-------|
| **`vibe-indigo-500`** | **`#7678ED`** | Secondary UI accents, icons |
| `vibe-indigo-600` | `#4A4CE6` | Hover |
| `vibe-indigo-700` | `#2527D4` | Active |

#### Yellow (`vibe-yellow`) — Accent / CTA
| Token | Hex | Usage |
|-------|-----|-------|
| **`vibe-yellow-500`** | **`#F7B801`** | CTA backgrounds, text selection, status indicators |
| `vibe-yellow-400` | `#F8C531` | CTA hover |
| `vibe-yellow-900` | `#312500` | Text on yellow backgrounds |

#### Orange (`vibe-orange`) — Warning / Info Accent
| Token | Hex | Usage |
|-------|-----|-------|
| **`vibe-orange-500`** | **`#F18701`** | Streaming / speed icons, info callouts |

#### Red (`vibe-red`) — Error / Danger Accent
| Token | Hex | Usage |
|-------|-----|-------|
| **`vibe-red-500`** | **`#F35B04`** | Error states, critical icons, danger signals |

### 2.2 Semantic Colors

| Token | Maps To | Usage |
|-------|---------|-------|
| `primary-500` | `vibe-purple-500` | Primary interactive elements |
| `accent-500` | `vibe-yellow-500` | Highlight & CTA |

### 2.3 Neutral Palette

Vibe uses **Tailwind's default `gray` scale** for neutrals. Key stops:

| Stop | Hex (approx.) | Usage |
|------|---------------|-------|
| `gray-50` | `#F9FAFB` | Page backgrounds, footer |
| `gray-100` | `#F3F4F6` | Code backgrounds, subtle fills |
| `gray-200` | `#E5E7EB` | Dividers, borders |
| `gray-400` | `#9CA3AF` | Placeholder text, disabled icons |
| `gray-500` | `#6B7280` | Muted / secondary text |
| `gray-600` | `#4B5563` | Body text, descriptions |
| `gray-900` | `#111827` | Headings, primary text |
| `white` | `#FFFFFF` | Card fills, page background |

### 2.4 Special Usage

- **Text selection highlight:** `bg-vibe-yellow` / `text-vibe-purple-900`
- **Scrollbar thumb:** `bg-gray-300` (hover: `bg-gray-400`)
- **Body background:** `bg-white`
- **Section alternation:** white sections alternate with `bg-gray-50`

---

## 3. Typography

### 3.1 Font Stack

| Role | Family | Tailwind Class | Usage |
|------|--------|----------------|-------|
| **Display** | Midnight (custom) → system sans | `font-display` | All headings (H1–H3), section titles, logo |
| **Body** | Inter → system sans | `font-sans` | Body copy, descriptions, nav links |
| **Mono** | JetBrains Mono → system mono | `font-mono` | Code snippets, technical labels |
| **Arimo** | Arimo → system sans | `font-arimo` | Avunite company badge only |

> **Loading:** `Midnight` is self-hosted as `/fonts/Midnight.woff2` with `font-display: swap`. Inter should be loaded from Google Fonts or bundled. JetBrains Mono is loaded as needed for code contexts.

### 3.2 Type Scale

| Size | Tailwind | Approx px | Usage |
|------|----------|-----------|-------|
| `text-sm` | `0.875rem` | 14px | Captions, footer links, labels |
| `text-base` | `1rem` | 16px | Default body |
| `text-lg` | `1.125rem` | 18px | Lead text, hero subtitle |
| `text-xl` | `1.25rem` | 20px | Card titles, sub-section intros |
| `text-2xl` | `1.5rem` | 24px | Logo wordmark, sub-headings |
| `text-3xl` | `1.875rem` | 30px | Section sub-headings |
| `text-4xl` | `2.25rem` | 36px | Section titles (mobile) |
| `text-5xl` | `3rem` | 48px | Section titles (tablet) |
| `text-6xl` | `3.75rem` | 60px | Section titles (desktop) |
| `text-7xl–9xl` | `4.5–8rem` | 72–128px | Hero headline |

### 3.3 Type Hierarchy Rules

1. **Hero H1:** `font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.9] tracking-tight uppercase`
2. **Section H2:** `font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-gray-900`
3. **Sub-section H3:** `text-2xl md:text-3xl font-bold text-gray-900`
4. **Card H4:** `text-lg font-bold text-gray-900`
5. **Body paragraph:** `text-base text-gray-600`
6. **Lead / intro:** `text-lg md:text-xl text-gray-600`
7. **Small / captions:** `text-sm text-gray-500`
8. **Label / eyebrow:** `text-sm font-semibold uppercase tracking-wider text-gray-900`

### 3.4 Letter Spacing & Leading

- All display headings use `tracking-tight` (`letter-spacing: -0.025em`)
- Logo wordmark uses `tracking-tight` with custom `-0.02em`
- Section headings: tight leading (`leading-tight` or explicit `leading-[0.9]`)
- Body text: default `leading-normal` (1.5)

---

## 4. Layout & Grid

### 4.1 Section Grid

Every major section uses the `.section` utility class:

```css
.section {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--grid-gap);          /* 4vw */
  padding: var(--base-padding-y) var(--base-padding-x);
}
```

Content inside sections spans all 12 columns via `col-span-12`, then uses its own nested grid or flexbox.

### 4.2 CSS Custom Properties

```css
--grid-gap: 4vw;
--base-padding-x: max(6vw, 60px);    /* Desktop */
--base-padding-y: clamp(30px, 4vw, 50px);

/* Mobile (≤ 812px) */
--base-padding-x: 24px;
--base-padding-y: 24px;
```

### 4.3 Max-Width Containers

| Content width | Tailwind class | Usage |
|---------------|----------------|-------|
| `max-w-3xl` (48rem) | `mx-auto max-w-3xl` | Section headers, centered text |
| `max-w-4xl` (56rem) | `mx-auto max-w-4xl` | CTA sections |
| `max-w-5xl` (64rem) | `mx-auto max-w-5xl` | Content grids, feature lists |
| `max-w-6xl` (72rem) | `mx-auto max-w-6xl` | Wide feature grids |
| Full-bleed | `col-span-12` | Backgrounds, full-width sections |

### 4.4 Breakpoints

| Name | Min-width |
|------|-----------|
| `sm` | 540px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

---

## 5. Spacing

Use Tailwind's default 4px-base spacing scale. Key patterns:

| Use case | Value |
|----------|-------|
| Section vertical padding | `py-24 lg:py-32` |
| Card padding | `p-6` (small) / `p-8` (large) |
| Grid gap | `gap-6` (default) / `gap-8` (larger sections) |
| Section header bottom margin | `mb-16 lg:mb-20` |
| Icon box margin | `mb-4` |
| Card title margin | `mb-2` |

---

## 6. Component Library

### 6.1 Buttons

#### Base `.btn` class

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.2s;
  border: 4px solid #000;
  box-shadow: 6px 6px 0 0 #000;
}
.btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0 0 #000;
}
```

#### Neo Brutalist Button (`.neo-btn`) — Primary usage

```css
.neo-btn {
  border: 4px solid #000;
  box-shadow: 8px 8px 0 0 #000;
  transition: all 0.2s ease;
}
.neo-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 6px 6px 0 0 #000;
}
```

**Variants:**

| Class | Background | Text | Border | Use case |
|-------|------------|------|--------|----------|
| `neo-btn` + `bg-vibe-purple text-white` | `#3D348B` | White | Black | Primary CTA |
| `neo-btn` + `bg-vibe-yellow text-vibe-purple-900` | `#F7B801` | `#0C0A1C` | Black | Accent CTA (on dark backgrounds) |
| `.btn-secondary` | White | `gray-900` | Black | Secondary action |
| `.neo-btn-small` | Any | Any | 3px black | Compact actions |

**With icon (arrow):**
```html
<a class="neo-btn group inline-flex items-center gap-2 bg-vibe-purple px-8 py-4 text-lg font-bold text-white">
  Contact Us
  <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" ...>
    <!-- right arrow path -->
  </svg>
</a>
```

**Rules:**
- All buttons are `rounded-none` (no border radius) — this is core to the Neo Brutalist identity
- Never use gradients on button backgrounds
- Include the arrow icon on CTA buttons; animate `translate-x-1` on hover
- Padding for large CTAs: `px-8 py-4`; for nav CTAs: `px-4 py-2`

### 6.2 Cards

#### Base `.card` / `.neo-card`

```css
.neo-card {
  border: 4px solid #000;
  box-shadow: 8px 8px 0 0 #000;
  transition: all 0.2s ease;
}
.neo-card:hover {
  transform: translate(2px, 2px);
  box-shadow: 6px 6px 0 0 #000;
}
```

**Typical card structure:**
```html
<div class="neo-card group bg-white p-6">
  <!-- Icon box -->
  <div class="mb-4 inline-flex p-3 neo-icon-box bg-vibe-purple/10 text-vibe-purple">
    <!-- SVG icon -->
  </div>
  <!-- Title -->
  <h4 class="mb-2 text-lg font-bold text-gray-900">Card Title</h4>
  <!-- Body -->
  <p class="text-sm text-gray-600">Description text.</p>
</div>
```

**Icon box (`.neo-icon-box`):**
```css
.neo-icon-box {
  border: 3px solid #000;
}
```

**Icon background color pairings** (use per-feature color coding):

| Color token | Background tint | Text / icon color | Meaning |
|-------------|-----------------|-------------------|---------|
| `vibe-yellow` | `bg-vibe-yellow/10` | `text-vibe-yellow` | Semantic / intelligent |
| `vibe-indigo` | `bg-vibe-indigo/10` | `text-vibe-indigo` | Infrastructure / network |
| `vibe-purple` | `bg-vibe-purple/10` | `text-vibe-purple` | Core platform |
| `vibe-orange` | `bg-vibe-orange/10` | `text-vibe-orange` | Speed / streaming |
| `vibe-red` | `bg-vibe-red/10` | `text-vibe-red` | Limits / security |

### 6.3 Forms

Neo Brutalist form inputs:

```css
input[type="text"],
input[type="email"],
textarea,
select {
  border: 3px solid #000;
  border-radius: 0;
  box-shadow: 4px 4px 0 0 #000;
  background: white;
}
input:focus {
  transform: translate(1px, 1px);
  box-shadow: 3px 3px 0 0 #000;
}
```

- Never use rounded inputs
- Error states: replace black border with `border-vibe-red-500`
- Labels: `text-sm font-semibold text-gray-900 mb-1 block`

### 6.4 Navigation

**Fixed header structure:**
- Logo sits fixed at `top-0 left-0 z-50`
- Nav container sits fixed at `top-0 right-0 z-50`
- Background: `bg-white/90 backdrop-blur-xl` with 3px black border and shadow on desktop
- Logo: Neo Brutalist `V` block — `bg-vibe-purple text-white px-2.5 py-1 border-[3px] border-black shadow-[4px_4px_0_0_#000]` + `ibe` in `font-display` heavy weight
- CTA in nav: `bg-vibe-purple px-4 py-2 text-sm font-bold text-white`
- Mobile: hamburger menu, full-width overlay, large `text-3xl` links

**Scroll behavior:** On scroll past 100px, the nav container shadow increases for depth.

### 6.5 Footer

Structure:
1. **Brand column** (4 of 12): Logo, tagline, status badge, social icons
2. **Links columns** (8 of 12): Product / Company / Legal — 3-column grid
3. **Bottom bar**: Copyright, Avunite company badge, back-to-top

**Footer background:** `bg-gray-50` with `border-t border-gray-200`

**Status indicator:**
```html
<div class="inline-flex items-center gap-2 rounded-full border border-vibe-yellow-500/30 bg-vibe-yellow-50 px-3 py-1.5">
  <span class="h-2 w-2 animate-pulse rounded-full bg-vibe-yellow-600"></span>
  <span class="text-sm text-vibe-yellow-900">In Development</span>
</div>
```

### 6.6 Warning / Status Banners

Used at the top of every page to communicate product status. Should be:
- Thin strip above the navigation
- Background: `bg-vibe-yellow/20` or similar tint
- Bold, concise message + CTA link

---

## 7. Section Patterns

### 7.1 Section Header (Centered)

```html
<div class="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
  <h2 class="font-display text-4xl font-bold uppercase text-gray-900 md:text-5xl lg:text-6xl">
    Section Title
  </h2>
  <!-- Optional subtitle -->
  <p class="mt-4 text-lg text-gray-600">Optional subtitle text.</p>
</div>
```

### 7.2 Section Background Alternation

Alternate between white and light-grey to visually separate sections without hard borders:

| Section | Background |
|---------|------------|
| Hero | `bg-white` |
| Problem | `bg-gray-50` |
| Architecture | `bg-white` |
| Features | `bg-gray-50` |
| CTA | `bg-vibe-purple` (inverted) |
| Footer | `bg-gray-50` |

### 7.3 Feature Grid

```html
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <!-- Feature cards -->
</div>
```

### 7.4 CTA Section (Inverted)

Full-width `bg-vibe-purple` section:
- H2: `font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white`
- Subtitle: `text-vibe-purple-100`
- CTA button: `neo-btn bg-vibe-yellow text-vibe-purple-900`

### 7.5 Stat / Callout Blocks

Large stat display:
```html
<div class="font-display text-4xl font-bold text-vibe-red md:text-5xl">
  2-5s
</div>
<h3 class="mb-2 text-lg font-bold text-gray-900">Slow Response Times</h3>
<p class="text-sm text-gray-600">Description.</p>
```

---

## 8. Animation & Motion

### 8.1 Keyframes

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(100%); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 8.2 Animation Defaults

| Element | Animation | Duration | Easing | Delay |
|---------|-----------|----------|--------|-------|
| Section cards | `fadeInUp` | `0.6s` | `ease-out` | `0.1s × index` |
| Hero headline lines | `slideUp` | `0.8s` | `cubic-bezier(0.16,1,0.3,1)` | `0s / 0.15s / 0.3s` |
| Hero subtitle | `fadeInUp` | `0.8s` | `ease-out` | `0.5s` |
| CTA elements | `fadeInUp` | `0.8s` | `ease-out` | `0s / 0.1s / 0.2s` |

### 8.3 Scroll-Triggered Animations

Use `IntersectionObserver` to start animations when elements enter the viewport:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

cards.forEach((card) => {
  card.style.animationPlayState = 'paused';
  observer.observe(card);
});
```

Cards start with `animationPlayState: 'paused'` and only run after scrolling into view.

### 8.4 Interactive Micro-animations

| Element | Interaction | Animation |
|---------|-------------|-----------|
| `.neo-btn` / `.neo-card` | hover | `translate(2px, 2px)` + reduced shadow |
| `.neo-btn-small` | hover | `translate(1px, 1px)` + reduced shadow |
| Nav logo `V` block | hover | `translateY(-2px)` + taller shadow |
| Arrow icon in buttons | hover | `translateX(4px)` (via `group-hover:translate-x-1`) |
| Scroll indicator | always | `animate-bounce` |
| Status dot | always | `animate-pulse` |

### 8.5 Word Carousel (Hero)

The hero uses a two-word cycling highlight. CSS grid stacking technique:
```css
.word-carousel { display: grid; }
.carousel-word { grid-area: 1 / 1; opacity: 0; transform: translateY(10%); transition: opacity 0.4s ease, transform 0.4s ease; }
.carousel-word.active { opacity: 1; transform: translateY(0); }
```
Cycles every 2500ms after initial 900ms load delay.

### 8.6 Cursor Follower

A blob cursor follower is active on the homepage only (`BlobCursorFollower` component). Do not add it to every page — it is a homepage-specific delight detail.

---

## 9. Iconography

Use **outline-style SVG icons** throughout. Conventions:

- `stroke-width="1.5"` for feature icons (informational)
- `stroke-width="2"` for UI icons (navigation, actions)
- Size: `h-6 w-6` (feature icons in cards), `h-8 w-8` (larger architecture cards), `h-5 w-5` (button / nav icons), `h-4 w-4` (inline / small)
- Color: inherit from parent's color class (e.g., `text-vibe-yellow`)
- All icons via `fill="none" stroke="currentColor"`
- For decorative accent shapes, use `blur-3xl` circles with low opacity (`bg-vibe-yellow/10`, `bg-vibe-purple/10`)

Source: Use [Heroicons](https://heroicons.com/) (outline variant) as the primary icon library to maintain consistency.

---

## 10. Responsive Design

### 10.1 Mobile-First Approach

Write base styles for mobile, then use `sm:`, `md:`, `lg:`, `xl:` breakpoints to progressively enhance for larger screens.

### 10.2 Key Responsive Patterns

| Element | Mobile | Tablet (md) | Desktop (lg+) |
|---------|--------|-------------|---------------|
| Section padding-x | 24px | max(6vw, 60px) | max(6vw, 60px) |
| Hero H1 | `text-5xl` | `text-7xl` | `text-9xl` |
| Feature grid | 1 col | 2 cols | 3 cols |
| Footer brand/links | stacked | stacked | 4+8 grid |
| Navigation | hamburger | hamburger | inline bar |
| Section py | `py-24` | `py-24` | `py-32` |

### 10.3 Touch Targets

All interactive elements must have a minimum touch target of 44×44px on mobile. Nav hamburger: `px-3 py-[0.4rem]` minimum.

---

## 11. Logo & Brand Mark

### 11.1 Wordmark Construction

```
[V] ibe
```

- `[V]` — white letter on `bg-vibe-purple`, `border-[3px] border-black`, `box-shadow: 4px 4px 0 0 #000`
- `ibe` — `font-display font-black` in `text-gray-900`, directly adjacent
- Full wordmark class: `font-display text-2xl font-black tracking-tight text-gray-900 uppercase`
- Scale up to `text-3xl` for desktop nav

### 11.2 Clear Space

Maintain minimum padding equal to the height of the `V` block on all four sides of the wordmark.

### 11.3 Color Variants

| Variant | V block | Text | Background |
|---------|---------|------|------------|
| Default (light) | `bg-vibe-purple text-white` | `text-gray-900` | White / light |
| On dark | `bg-vibe-yellow text-vibe-purple-900` | `text-white` | Dark / `bg-vibe-purple` |

### 11.4 Don'ts

- Do not change the font from `Midnight`
- Do not remove the border and shadow from the `V` block
- Do not use the logo in lowercase

---

## 12. Page Structure Template

Every page should follow this structure:

```
┌─────────────────────────────────────────┐
│  WarningBanner (full-width status bar)  │
├─────────────────────────────────────────┤
│  Navigation (fixed, z-50)               │
├─────────────────────────────────────────┤
│                                         │
│  Hero Section (bg-white, min-h-screen)  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Section 2 (bg-gray-50)                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Section 3 (bg-white)                   │
│                                         │
├─────────────────────────────────────────┤
│  ...alternate bg-white / bg-gray-50...  │
├─────────────────────────────────────────┤
│                                         │
│  CTA Section (bg-vibe-purple)           │
│                                         │
├─────────────────────────────────────────┤
│  Footer (bg-gray-50, border-t)          │
└─────────────────────────────────────────┘
```

### 12.1 Astro Page Boilerplate

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Hero from "@components/landing/Hero.astro";
import MySection from "@components/landing/MySection.astro";
import Cta from "@components/landing/Cta.astro";
---

<BaseLayout>
  <Hero />
  <MySection />
  <Cta />
</BaseLayout>
```

### 12.2 New Section Boilerplate

```astro
---
import { getLangFromUrl, useTranslations } from "@i18n/utils";
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const { class: className } = Astro.props;
---

<section id="my-section" class:list={["section relative bg-white py-24 lg:py-32", className]}>
  <div class="relative z-10 col-span-12">
    <!-- Section header -->
    <div class="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
      <h2 class="font-display text-4xl font-bold uppercase text-gray-900 md:text-5xl lg:text-6xl">
        Section Title
      </h2>
    </div>

    <!-- Content grid -->
    <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- neo-card items -->
    </div>
  </div>
</section>
```

---

## 13. Tailwind Configuration Reference

Key customizations in `tailwind.config.cjs`:

```js
theme: {
  screens: { sm: '540px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
  extend: {
    borderRadius: {
      '4xl': '2rem', '5xl': '3rem', '6xl': '4rem', '7xl': '5rem'
    },
    colors: {
      vibe: {
        purple: { DEFAULT: '#3D348B', ...shades },
        indigo: { DEFAULT: '#7678ED', ...shades },
        yellow: { DEFAULT: '#F7B801', ...shades },
        orange: { DEFAULT: '#F18701', ...shades },
        red:    { DEFAULT: '#F35B04', ...shades },
      },
      primary: { ...vibePurpleShades },
      accent:  { ...vibeYellowShades },
    },
    fontFamily: {
      display: ['Midnight', ...defaultTheme.fontFamily.sans],
      sans:    ['Inter',    ...defaultTheme.fontFamily.sans],
      mono:    ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      arimo:   ['Arimo',   ...defaultTheme.fontFamily.sans],
    },
  }
}
```

---

## 14. Dos & Don'ts

### ✅ Do

- Use `font-display` for **all** headings
- Use `uppercase` on section H2s and the logo
- Apply the 4px black border + shadow to all interactive cards and buttons
- Alternate section backgrounds between `bg-white` and `bg-gray-50`
- Use `neo-card` and `neo-btn` classes as the base for interactive elements
- Animate cards with scroll-triggered `fadeInUp` using `IntersectionObserver`
- Include `rounded-none` on buttons — no rounded corners
- Use `vibe-purple` for primary actions, `vibe-yellow` for CTAs on dark backgrounds
- Follow the section grid (12-column) and `--base-padding-x` CSS variable for all sections
- Keep body text `text-gray-600` and headings `text-gray-900`
- Use Heroicons (outline) at standard sizes (`h-6 w-6`, `h-5 w-5`, `h-4 w-4`)

### ❌ Don't

- Don't use rounded corners on cards or buttons (they break the Neo Brutalist identity)
- Don't use gradient fills on buttons or card backgrounds
- Don't use more than one display font — `Midnight` is the only custom typeface
- Don't use dark mode unless it's been designed explicitly for that section
- Don't add the blob cursor follower to interior pages
- Don't use `vibe-red` or `vibe-orange` as background colors — only as icon/text accents
- Don't remove the black border and offset shadow from interactive elements
- Don't use `border-radius > 0` on buttons, form inputs, or feature cards
- Don't mix font weights arbitrarily — headings are `font-bold` / `font-extrabold`, body is `font-normal`
- Don't create new color tokens outside the established `vibe-*` palette

---

*Last updated: March 2026. Maintained by the Vibe / Avunite design team.*
