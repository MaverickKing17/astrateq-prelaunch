# AstraTeq: ASTRA-AI DriveGuard Landing Page

Welcome to the **AstraTeq: ASTRA-AI DriveGuard** pre-order and waitlist landing page. Featuring high-fidelity aesthetic enhancements and fully-functional interactive simulations, this app is built with **React 18+**, **Vite**, and styled with **Tailwind CSS** using a fully customized **Sleek Interface** design theme.

---

## 🌌 Visual Theme: Sleek Interface
The application adheres to a polished, premium aesthetic utilizing high-contrast Slate and Midnight tones with subtle interactive elements:
*   **Color Palette**: Deep Slate main canvas (`#0F172A`), space-grey card systems (`#1E293B`), vibrant indigo-indigo active cues (`#6366f1`), and crisp cyan highlights (`#22D3EE`).
*   **Typography**: Clean sans-serif headings paired with tech-forward JetBrains Mono code indicators details.
*   **Shadows & Glows**: Soft interactive box-shadows and pulse micro-animations around digital mockups to reinforce elite software performance.

---

## ⚡ Key Interactive Experiences

### 🚗 1. Interactive OBD-II Compatibility Checker
Users can select their vehicle's Year, Make, and Model to perform a simulated real-time Canbus diagnostics audit. Successful compatibility locks in a discount and guarantees proper integration.

### 📊 2. Privacy Safeguard & Signal Comparison Widget
A real-time comparison module demonstrating the safety benefits of Local Edge Processing (12ms latency, offline resilience) versus typical Cloud telemetry processing.

### 🧱 3. Hardware Package Exploder
Visual representations of included hardware—the Astra Smart Core Processor, high-refresh camera housing, and specialized OBD-II sync accessories.

### 💳 4. Prelaunch Reservation & Simulated Stripe Checkout
Select an active founding allotment tier and experience a fully functional, secure Stripe preorder checkout simulation complete with instant pre-order validation, email receipts configuration, and priority tracking ticket issuance.

### ⏱️ 5. Countdown Timers & Dynamic Discounts
Syncs dynamic time-bounds down to the millisecond to build urgency around pre-order slots, plus an overlay **Exit Intent Coupon Modal** providing additional incentive code `ASTRA-FND-SAVE25`.

---

## 🛠️ Project Architecture

```bash
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.tsx      # Top ticker alert banner
│   │   ├── Navbar.tsx               # Responsive sticky headbar
│   │   ├── Hero.tsx                 # Real-time HUD and Hero dashboard mockup
│   │   ├── TrustBar.tsx              # Quick technical benefits audit
│   │   ├── HowItWorks.tsx           # Setup flow chart indicators
│   │   ├── LocalIntelligence.tsx    # Interactive Cloud vs. Local speed diagram
│   │   ├── CompatibilityChecker.tsx # OBD-II Vehicle selector
│   │   ├── WhatIsIncluded.tsx       # Package graphics representation
│   │   ├── Pricing.tsx              # Preorder tiers list & Stripe checkout simulator
│   │   ├── RiskReversal.tsx         # 60-Day satisfaction trial details
│   │   ├── FaqAccordion.tsx         # Dynamic support items
│   │   ├── ExitIntentModal.tsx      # Exit listener discount voucher popup
│   │   ├── FinalCta.tsx             # Urgently-styled footer pre-order callout
│   │   └── Footer.tsx               # Details copyright & newsletter subscription
│   ├── App.tsx                      # Single-page layout framework controller
│   ├── index.css                    # Tailwind core styling definitions
│   └── main.tsx                     # React client initializer
├── package.json                     # System scripts & dependencies
└── vite.config.ts                   # Bundler layout settings
```

---

## 🚀 Standard Installation & Running Guide

Ensure you have **Node.js** installed locally on your system, then follow these instructions:

### 1. Close and Install Dependencies
```bash
npm install
```

### 2. Boot up Development Instance Local Mode
```bash
npm run dev
```
The application will boot up and serve output on `http://localhost:3000`.

### 3. Production Compilation Build
```bash
npm run build
```
Creates a hyper-optimized production build folder in the `dist` directory.

---

## 🛡️ Telemetry & Sovereignty Declaration
We stand firmly on the side of consumer privacy. Our hardware performs all driver fatigue tracking, lane detection, and sensor fusion locally inside your vehicle. No facial data, coordination points, or driving metrics are ever transmitted or aggregated on far-away servers.
