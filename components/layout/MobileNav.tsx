"use client";

import { Home, User, Briefcase, Code, Folder, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNav() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "experience", "skills", "projects", "contact"];

            // Default to home if at top
            if (window.scrollY < 100) {
                setActiveSection("home");
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section === "home" ? "hero" : section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is in the viewport (with some offset)
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/", icon: <Home size={20} />, id: "home" },
        { name: "About", href: "#about", icon: <User size={20} />, id: "about" },
        { name: "Experience", href: "#experience", icon: <Briefcase size={20} />, id: "experience" },
        { name: "Skills", href: "#skills", icon: <Code size={20} />, id: "skills" },
        { name: "Projects", href: "#projects", icon: <Folder size={20} />, id: "projects" },
        { name: "Contact", href: "#contact", icon: <Mail size={20} />, id: "contact" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 pb-safe pt-2">
            <div className="flex justify-around items-end pb-2">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveSection(item.id)}
                        className={`flex flex-col items-center p-2 min-w-[3.5rem] transition-all duration-300 group ${activeSection === item.id
                                ? "text-primary -translate-y-1"
                                : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        <div className={`mb-1 transition-transform duration-300 ${activeSection === item.id ? "scale-110" : "group-hover:scale-110"}`}>
                            {item.icon}
                        </div>
                        <span className={`text-[10px] font-medium tracking-wide transition-opacity duration-300 ${activeSection === item.id ? "opacity-100" : "opacity-70"}`}>
                            {item.name}
                        </span>
                        {activeSection === item.id && (
                            <span className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(0,123,255,0.8)]" />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}
