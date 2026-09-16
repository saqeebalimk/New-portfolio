import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import config from "@/data/config.json";

export function Footer() {
    const socialLinks = [
        { href: config.github, label: "GitHub", icon: <Github size={18} /> },
        { href: config.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
        { href: `mailto:${config.email}`, label: "Email", icon: <Mail size={18} /> },
        {
            href: "https://x.com",
            label: "X / Twitter",
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.638 5.905-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative bg-white border-t border-slate-100 mt-0 py-0 z-10">
            {/* Main Footer Card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-3xl border border-slate-100/80 shadow-sm px-8 sm:px-12 py-10">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                        {/* ── Column 1: Branding ── */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-slate-900 mb-1">
                                Mohammed
                            </h2>
                            <p className="text-slate-500 text-sm font-medium mb-4">
                                Software Engineer • 4 Years of Professional Experience
                            </p>
                            <p className="text-slate-400 text-[13px] leading-relaxed max-w-[240px] mx-auto md:mx-0">
                                Building scalable solutions with code, creativity and continuous learning.
                            </p>
                        </div>

                        {/* ── Column 2: Signature ── */}
                        <div className="flex flex-col items-center gap-3">
                            <span
                                className="text-4xl font-bold text-primary italic leading-tight"
                                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
                            >
                                Mohammed
                            </span>
                            <div className="w-20 h-0.5 bg-primary/30 rounded-full" />
                            <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                                Keep Building
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-600">
                                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* ── Column 3: Social + Tagline ── */}
                        <div className="flex flex-col items-center md:items-end gap-5">
                            <div className="flex items-center gap-3">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:bg-blue-50 hover:border-blue-200 transition-all hover:scale-110 shadow-sm"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                            <p className="text-slate-400 text-[13px] text-center md:text-right">
                                Building a better tomorrow,<br className="hidden sm:block" /> one commit at a time. ✨
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 px-2">
                    <p className="text-slate-400 text-[12.5px] font-medium">
                        © 2026 Mohammed. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-[12.5px] text-slate-400 font-medium">
                        <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
