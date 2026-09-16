import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import config from "@/data/config.json";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 mt-20 pt-10 pb-6 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{config.name}</h2>
                        <p className="text-slate-600 font-medium">{config.title} • {config.experience}</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href={config.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-transform hover:scale-110"><Github /></a>
                        <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-transform hover:scale-110"><Linkedin /></a>
                        <a href={`mailto:${config.email}`} className="text-slate-500 hover:text-primary transition-transform hover:scale-110"><Mail /></a>
                    </div>
                </div>

                <div className="border-t border-slate-200 mt-8 pt-6 text-center text-slate-500 text-sm font-medium">
                    <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
