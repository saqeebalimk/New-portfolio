import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Saqeeb Khan | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white`}>
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
