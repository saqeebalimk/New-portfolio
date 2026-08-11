import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const inter = Inter({ subsets: ["latin"] });

import config from "@/data/config.json";

export const metadata: Metadata = {
  title: "Mohammed Saqeeb Khan | Full Stack Software Engineer | React, Node.js, Django & Python",
  description: "Mohammed Saqeeb Khan is a Full Stack Software Engineer with 4 years of experience building scalable web applications using React.js, Node.js, Django, Python, TypeScript, PostgreSQL and AI integrations.",
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
              "jobTitle": config.title,
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              }
            })
          }}
        />
        <Navbar />
        <MobileNav />
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
      </body>
    </html>
  );
}
