# Demo Dental

A premium dental clinic landing page for a practice in Ankara. Mobile-first design with a professional Medical Blue and Clean White palette.

## Tech stack

- **Next.js** (App Router)
- **React 19**
- **Tailwind CSS**
- **Lucide React** (icons)
- **TypeScript**

## What’s included

- Sticky navbar with “Book Appointment” CTA
- Hero section: headline, English-speaking doctors subtext, primary CTA
- Services section: Dental Implants, Hollywood Smile, Emergency Care
- Contact / CTA section
- WhatsApp floating button (configurable in `lib/constants.ts`)

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install and run

```bash
# Install dependencies
npm install

# Run in development
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Configuration

- **WhatsApp number:** Edit `WHATSAPP_NUMBER` in `lib/constants.ts` (use country code, no `+` or spaces).
- **Nav links:** Update `NAV_LINKS` in `lib/constants.ts` if you add or change sections.

## Project structure

```
app/              # Next.js App Router (page, layout, globals)
components/
  layout/         # Navbar
  sections/       # Hero, Services, Contact
  ui/             # ServiceCard, WhatsAppButton
lib/              # constants, utils
```

## License

Private — for client use.
