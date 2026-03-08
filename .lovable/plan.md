

# Add Download & Donate Page

Create a new `/download` page inspired by the LibreOffice donation/download pattern, adapted for APPs2400's Pokerstr8ts game download with an optional donation prompt.

## What gets built

**New page: `src/pages/Download.tsx`** — A two-column layout:

- **Left column — Donation form**:
  - Donation frequency selector (One-time / Monthly)
  - Preset amount buttons ($5, $10, $19, $25, $50) + custom input
  - Currency selector (CAD/USD)
  - Two mock CTA buttons: "Donate via PayPal" and "Donate via Credit Card" (UI only, no real payment)
  - Message: "APPs2400 is a community-driven company. Your donation supports game development and charitable tournaments."
  - Collapsible sections for bank transfer info, tax deductions
  - "Or donate your time" section linking to volunteer/charity page

- **Right column — About & Impact sidebar**:
  - Heading: "We're a community-driven board game company"
  - Description of APPs2400's mission and how donations help
  - "Your support helps us keep creating" section

- Fully responsive — stacks vertically on mobile

**Changes to existing files:**
1. **`src/App.tsx`** — Add `/download` route
2. **`src/components/Navbar.tsx`** — Add "Download" nav link (or keep using the existing Index download section as a link to this page)
3. **`src/pages/Index.tsx`** — Update the "Download Now" button to link to `/download`

## Design
- Bold & playful style consistent with existing site
- Green accent for donation CTAs (matching the LibreOffice green button pattern but using the site's secondary color)
- Card-based layout with the donation form in a bordered card
- Collapsible accordion sections for additional info

