import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { VoiceAssistant } from "@/components/ui/VoiceAssistant";

const inter = Inter({ subsets: ["latin"] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", display: "swap" });

import config from "@/data/config.json";

export const metadata: Metadata = {
  title: "Mohammed Saqeeb | Software Engineer",
  description: "Mohammed Saqeeb is a Software Engineer specializing in full-stack web development with React, Node.js, Python, Go, Java and modern AI-assisted engineering workflows.",
  keywords: [
    "Mohammed Saqeeb",
    "Software Engineer",
    "Mohammed Saqeeb Software Engineer",
    "Mohammed Saqeeb React Developer",
    "Mohammed Saqeeb Full Stack Developer",
    "Python Developer",
    "Go Developer",
    "Java Developer",
    "React Developer"
  ],
  openGraph: {
    title: "Mohammed Saqeeb | Software Engineer",
    description: "Mohammed Saqeeb is a Software Engineer specializing in full-stack web development with React, Node.js, Python, Go, Java and modern AI-assisted engineering workflows.",
    url: config.portfolio,
    siteName: "Mohammed Saqeeb — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Saqeeb | Software Engineer",
    description: "Software Engineer specializing in full-stack web development with React, Node.js, Python, Go, Java and modern AI-assisted engineering workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": config.name,
              "url": config.portfolio,
              "sameAs": [
                config.linkedin,
                config.github
              ],
              "jobTitle": "Software Engineer",
              "description": "Software Engineer specializing in full-stack web development with React, Node.js, Python, Go, Java and modern AI-assisted engineering workflows.",
              "worksFor": {
                "@type": "Organization",
                "name": "ARN Systems Pvt Ltd"
              }
            })
          }}
        />
        <Navbar />
        <main className="min-h-screen relative overflow-hidden flex flex-col pb-20 md:pb-0">
          {/* Background Gradients */}
          <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] -z-10 pointer-events-none" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] -z-10 pointer-events-none" />

          {children}
        </main>
        <div className="hidden md:block">
          <Footer />
        </div>
        <div className="md:hidden pb-16">
          <Footer />
        </div>
        <VoiceAssistant />
      </body>
    </html>
  );
}
