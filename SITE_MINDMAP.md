# Deniz Timurturkan — Software Engineer Portfolio — Mind Map
> **For Claude Code:** Read this file at the start of every session. It is the single source of truth for architecture, design decisions, feature specs, and open TODOs.

---

## 0. Project Overview

| Field | Value |
|---|---|
| **Owner** | Deniz Timurturkan |
| **Type** | Software engineer portfolio (single-page) |
| **Hosting** | GitHub Pages via GitHub Actions |
| **Repo structure** | Static site — no server-side framework |
| **Build** | Plain HTML/CSS/JS (no bundler) |
| **Deployment trigger** | Push to `main` → GitHub Action builds & deploys to `gh-pages` branch |
| **Primary goal** | Showcase experience, projects, and skills to recruiters / hiring managers |
| **Sibling project** | `mayadealba` — an illustrator portfolio built with the same architecture pattern (mindmap-as-spec, vanilla stack, data.js content, GH Actions deploy). This site reuses that *pattern*, not its visuals. |

---

## 1. Visual Identity & Design System

### 1.1 Aesthetic Direction
- **Theme:** Clean, dark, technical — navy/near-black canvas with a confident blue accent
- **Mood:** Professional and modern, not playful. Monospace touches (section eyebrows, tags, nav) nod to the "engineer" identity without being gimmicky.

### 1.2 Color Palette (CSS Variables)
```css
--color-bg:            #06070C; /* page background */
--color-surface:       #10162A; /* header bg, cards, alt section bg */
--color-accent:        #1D4ED8; /* primary buttons, links, active nav */
--color-accent-light:  #60A5FA; /* hover states, tag chips, highlights */
--color-text:          #F8FAFC; /* primary text */
--color-text-muted:    rgba(248, 250, 252, 0.62);
--color-border:        rgba(248, 250, 252, 0.08);
```
Palette given by owner and kept exactly as provided — do not alter these hex values without asking.

### 1.3 Typography
- **Headings / display:** `Space Grotesk` (Google Fonts) — geometric, technical feel
- **Body:** `IBM Plex Sans` (Google Fonts) — clean, readable humanist sans
- **Mono accents:** `JetBrains Mono` — used for section eyebrows ("01 — Experience"), nav labels, skill tag chips
- All with system-font fallback stacks for offline/slow-load resilience

### 1.4 Motion Principles
- Fade-up on scroll: `opacity 0→1`, `translateY 24px→0`, via `IntersectionObserver` (`reveal.js`) — applied per-section and per-card
- Hover on project cards / buttons: slight lift (`translateY(-4px)`) + shadow deepens
- Nav: scroll-spy highlights the active section link; smooth-scroll on anchor click
- Respect `prefers-reduced-motion`: disable transform/opacity transitions when set

---

## 2. Site Architecture

```
/
├── index.html              ← Single page: Hero, About, Experience, Projects, Skills, Contact
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css   ← all CSS custom properties
│   │   ├── global.css      ← header, nav, footer, base typography, layout
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── experience.css
│   │   ├── projects.css
│   │   ├── skills.css
│   │   └── contact.css
│   └── js/
│       ├── nav.js          ← scroll-spy active link + mobile menu toggle
│       ├── reveal.js       ← IntersectionObserver fade-up on scroll
│       └── data.js         ← all portfolio content as one JS object
└── .github/
    └── workflows/
        └── deploy.yml      ← GitHub Actions: build & deploy to gh-pages
```

---

## 3. GitHub Actions Deploy Workflow

**File:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
          publish_branch: gh-pages
```

Repo is `deniztimurturkan/website` (not `<user>.github.io`), so once Pages is enabled on the `gh-pages` branch it serves at `deniztimurturkan.github.io/website/` unless a custom domain (`CNAME` file) is added later.

---

## 4. Section Specs (`index.html`, single scrolling page)

### 4.1 Header / Nav
- Sticky top bar, background `--color-surface`
- Left: initials mark ("DT") linking to top
- Center/right: anchor nav — About, Experience, Projects, Skills, Contact
- Active link underlined/colored via scroll-spy (`nav.js`)
- Mobile (< 768px): hamburger toggle slides down nav list

### 4.2 Hero
- Name, "Software Engineer" title, one-line tagline
- CTA button: "Contact me" (scrolls to #contact) — no Resume button (decided against a resume download link)
- No photo (none provided) — initials/mark treatment instead

### 4.3 About
- Short bio paragraph: Georgia Tech CS grad, current EDP Software Engineer at Travelers
- Education block: Georgia Institute of Technology, BS Computer Science, May 2025, relevant coursework list

### 4.4 Experience
- Vertical timeline, one entry per resume job (most recent first):
  1. EDP Software Engineer — Travelers (June 2025–Present)
  2. SWE/QA Automation Engineer Intern — Amwins (May 2024–May 2025)
  3. Embedded System Cyber Security Research Co-Leader — Georgia Tech VIP/Research Institute (Aug 2023–May 2025)
  4. Software Engineer Intern — Br Magazacilik C.O. (May 2023–Jul 2023)
- Each entry: role, company, location, dates, bullet list (from resume, used directly as first draft)

### 4.5 Projects
- Card grid, `--color-surface` background, hover lift
- Cards: Frogger (Android app), Wyze Camera reverse-engineering research (published paper), SDR spoofing tool (Scapy), AWS Bedrock summarization agents (Travelers work)
- Each card: title, tagline, bullet list, optional external link

### 4.6 Skills
- Grouped tag chips (mono font): Programming Languages, Frameworks, Natural Languages — verbatim from resume

### 4.7 Contact
- Email (`mailto:deniztimurturkan@gmail.com`)
- GitHub, LinkedIn — **placeholder hrefs**, resume only had link text not URLs (see §7)

### 4.8 Footer
- Small copyright line + same contact links

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column everywhere, stacked timeline, 1-col project grid |
| Tablet | 640–1024px | 2-col project grid |
| Desktop | > 1024px | 3-col project grid, nav fully expanded |

Nav collapses to hamburger below 768px.

---

## 6. `data.js` — Content Schema

```js
const siteData = {
  name: "Deniz Timurturkan",
  title: "Software Engineer",
  email: "deniztimurturkan@gmail.com",
  github: "#", // TODO: replace with real GitHub URL
  linkedin: "#", // TODO: replace with real LinkedIn URL
  bio: { short: "...", long: "..." },
  education: { school, degree, dates, courses: [] },
  experience: [ { role, company, location, dates, bullets: [] }, ... ],
  projects: [ { id, title, tagline, bullets: [], link: null }, ... ],
  skills: { languages: [], frameworks: [], naturalLanguages: [] },
};
```
`index.html` contains the static markup (SEO-friendly); a small inline script in `data.js`-adjacent logic is intentionally NOT used for rendering — content is hand-written directly into `index.html` for simplicity (no build step), and `data.js` exists as the single canonical place to update copy, which should be kept in sync with the HTML when edited.

---

## 7. Open TODOs / Placeholders

- [ ] Replace `github: "#"` and the GitHub nav/contact link with the real profile URL
- [ ] Replace `linkedin: "#"` and the LinkedIn nav/contact link with the real profile URL
- [ ] Optional: add a profile photo to the Hero/About section
- [ ] Optional: custom domain — add `CNAME` file once/if a domain is purchased
- [ ] Enable GitHub Pages in repo Settings → Pages, source = `gh-pages` branch (not done automatically by the workflow)
- [ ] `prefers-reduced-motion` media query already planned in `reveal.js`/CSS — verify once built
- [ ] Add real project links (GitHub repos) to Projects cards once available

---

## 8. Quick Reference — Key Design Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | Vanilla HTML/CSS/JS | No build step, easiest GitHub Pages hosting, no dependencies |
| Layout | Single-page scroll | Simpler than multi-page for a resume-style portfolio; faster to scan |
| CSS architecture | Custom properties + per-section sheets | Lightweight, maintainable without a preprocessor |
| Scroll reveal | `IntersectionObserver` | No library dependency, native browser API |
| Content data | `data.js` object | Single reference place for content, mirrors mayadealba pattern |
| Fonts | Space Grotesk + IBM Plex Sans + JetBrains Mono | Free Google Fonts, technical feel, offline fallback stacks |
| Deployment | GitHub Actions → gh-pages | Free, automated, version-controlled, same as mayadealba |
