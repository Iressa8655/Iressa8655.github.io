

# I-Han (Iressa) Cheng — Personal Portfolio Website

## Overview
A sophisticated, elegant clinician-scientist portfolio with a plum-to-champagne gradient theme, Playfair Display + Inter typography, and refined animations. All content is hardcoded from the spec.

## Design System
- **Colors**: Primary gradient (#6B3B7E → #9E7A8C → #C4A882), background #F0EEF2, text #2C2025, muted #8B7880
- **Typography**: Playfair Display (headings), Inter (body), uppercase Inter for section labels
- **Cards**: White with subtle shadow, gradient top-border on hover, lift animation

## Sections to Build (single-page, scroll-based)

1. **Sticky Nav** — Frosted glass effect, gradient logo text, pill-style Contact button, mobile hamburger menu, shrink-on-scroll behavior
2. **Hero** — Radial gradient background, left text (name, subtitle, tagline, pill buttons) + right headshot placeholder, 4 stat badges with count-up animation
3. **About** — Two-column: bio paragraphs + education timeline with gradient year dots and pill tags
4. **Research & Publications** — Filter pills (All/MSK/Respiratory/Global Health/Infectious Disease), 2-column card grid with featured indicators, gradient borders, links to ORCID
5. **Projects** — 3-column grid of 6 project cards with emoji icons, descriptions, tech stack pills, and external links
6. **Presentations & Outreach** — Vertical timeline with gradient dots, event details, optional document links
7. **Awards & Honours** — 4-column grid of award cards with sparkle icons on top achievements
8. **CV & Evidence Documents** — 2-column grid of document cards linking to Dropbox (new tab, rel="noopener")
9. **Contact** — Centered section with gradient wash, email + social buttons
10. **Footer** — Dark (#2C2025) with pale text and social links

## Animations & Interactions
- Intersection Observer for fade-in/slide-up on scroll
- Card hover: translateY(-4px) + gradient border glow
- Publication filtering with smooth fade transitions
- Nav: transparent → frosted white on scroll
- Hero stat count-up on load
- Gradient button shimmer on hover

## Technical Details
- Upload the user's headshot photo to the project
- Google Fonts: Playfair Display + Inter
- Fully responsive (mobile hamburger, tablet 2-col, desktop full layout)
- All external links open in new tab with rel="noopener"
- Headshot placeholder with id="headshot" for easy replacement

## File Structure
- `src/pages/Index.tsx` — Main page composing all sections
- `src/components/Navbar.tsx` — Sticky nav with scroll effects
- `src/components/Hero.tsx` — Hero section
- `src/components/About.tsx` — Bio + education timeline
- `src/components/Research.tsx` — Publications with filtering
- `src/components/Projects.tsx` — Project cards grid
- `src/components/Presentations.tsx` — Timeline
- `src/components/Awards.tsx` — Awards grid
- `src/components/Documents.tsx` — CV & evidence documents
- `src/components/Contact.tsx` — Contact section
- `src/components/Footer.tsx` — Footer
- `src/hooks/useScrollAnimation.ts` — Intersection Observer hook
- `src/hooks/useCountUp.ts` — Count-up animation hook

