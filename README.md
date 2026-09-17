# Mohammed Saqeeb — Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-saqeebkhan.vercel.app-2563EB?style=for-the-badge&logo=vercel)](https://saqeebkhan.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Resend](https://img.shields.io/badge/Resend-Email%20API-black?style=for-the-badge)](https://resend.com/)

> **Mohammed Saqeeb** — Full Stack Software Engineer (4+ Years Experience)  
> Building scalable web applications with React, Node.js, Python, Go, Java, and modern AI-assisted engineering workflows.

🌐 **Production Site:** [https://saqeebkhan.vercel.app/](https://saqeebkhan.vercel.app/)

---

## 🚀 Key Features

### 1. 🛡️ Hero Image Download Protection System
- Multi-layer security attributes on the hero portrait (`profile.jpg`).
- Disables pointer clicks, context menu right-clicks (`Save Image As...`), and native HTML5 dragging (`pointer-events-none`, `select-none`, `draggable={false}`, `onContextMenu`).

### 2. 🎙️ Browser-Native AI Voice Assistant
- Integrated AI voice experience built with the browser's **Web Speech API** (`SpeechRecognition` & `SpeechSynthesis`).
- Interactive 3-ring pulsing orb trigger with a floating status tooltip label.
- Built-in local knowledge engine answering visitor questions about experience, skills, projects, and contact info without external API costs.

### 3. 📧 Secure Serverless Email Contact Workflow (`/api/contact/route.ts`)
- Next.js App Router API Route powered by **Resend**.
- **HTML Notification Cards:** Formats incoming inquiries into clean HTML card emails sent to `alikhanmohammed342@gmail.com`.
- **1-Click Smart Pre-filled Replies:** Reply button pre-types tailored email responses in Gmail based on opportunity type (`Freelancing`, `Full Time`, `Collaborate`, `Part Time`, `Open Opportunities`) complete with sender first-name greeting and signature (`Mohammed`, phone `+91 8792248396`, email `alikhanmohammed342@gmail.com`, and clickable portfolio link).

### 4. 📱 Mobile-First Responsive Design System
- Optimized for mobile viewports (375px – 414px) with strict `w-full max-w-full box-border overflow-x-hidden` constraints.
- Scaled experience company logos (36px) and responsive text wrapping.
- Compact floating experience badge (`4+ Years Software Engineering`).

### 5. 🎨 Color-Coded Typography & Animations
- Categorized skill highlights (Blue for Full Stack, Violet for AI Engineering, Teal for problem-solving).
- Framer Motion micro-interactions and smooth scroll navigation.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 App Router](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [Resend API](https://resend.com/)
- **Voice Engine:** Web Speech API (`SpeechRecognition` & `SpeechSynthesis`)
- **Hosting:** [Vercel](https://vercel.com/)

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/saqeebalimk/New-portfolio.git
cd New-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=re_your_resend_api_key_here
RESEND_FROM_EMAIL=Mohammed Saqeeb <hello@saqeebkhan.dev>
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🔒 Environment & Deployment Variables

Set these environment variables in your **Vercel Project Settings**:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Resend API Key | `re_123456789...` |
| `RESEND_FROM_EMAIL` | Verified domain sender email | `Mohammed Saqeeb <hello@saqeebkhan.dev>` |

---

## 📬 Contact & Connect

- **Portfolio:** [https://saqeebkhan.vercel.app/](https://saqeebkhan.vercel.app/)
- **Email:** [alikhanmohammed342@gmail.com](mailto:alikhanmohammed342@gmail.com)
- **Phone:** +91 8792248396
- **LinkedIn:** [Mohammed Saqeeb](https://linkedin.com)
- **GitHub:** [@saqeebalimk](https://github.com/saqeebalimk)

---
*Developed by Mohammed Saqeeb — Full Stack Software Engineer*
