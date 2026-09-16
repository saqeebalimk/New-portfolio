"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import config from "@/data/config.json";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience & Skills", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "AI Engineering", href: "#ai-engineering" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (pathname?.startsWith("/projects/")) return null;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    {/* Brand Logo */}
                    <Link href="/" className="flex flex-col items-start leading-tight">
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">
                            Mohammed 
                        </span>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                            Software Engineer
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-primary transition-colors font-semibold text-sm relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right side icons & CTA */}
                    <div className="hidden lg:flex items-center space-x-5">
                        <div className="w-px h-5 bg-slate-200 mx-2" />
                        <a href={config.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        
                        <a
                            href="https://drive.google.com/file/d/1e_rzX-uPoTYwcgX0vE0Kb1hYcqVeN9M8/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col space-y-3 rounded-b-3xl transform transition-all duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-700 hover:text-primary font-bold text-[15px] px-4 py-3 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px w-full bg-slate-100 my-2" />
                    <div className="flex gap-4 px-2">
                        <a href={config.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-lg text-slate-600 hover:text-slate-900">
                            <Github size={20} />
                        </a>
                        <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600">
                            <Linkedin size={20} />
                        </a>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1e_rzX-uPoTYwcgX0vE0Kb1hYcqVeN9M8/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-2 px-4 py-3 font-semibold rounded-xl bg-primary text-white hover:bg-blue-700 w-full"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
