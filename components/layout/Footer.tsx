import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="glass border-t border-white/10 mt-20 pt-10 pb-6 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">Mohammed Saqeeb Khan M K</h2>
                        <p className="text-gray-400">Full Stack Developer • Building digital experiences</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="https://github.com/saqeebalimk/M4S" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-transform hover:scale-110"><Github /></a>
                        <a href="https://www.linkedin.com/in/mohammed-ali-khan-24b81a278/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-transform hover:scale-110"><Linkedin /></a>
                        <a href="mailto:alikhanmohammed342@gmail.com" className="text-gray-400 hover:text-primary transition-transform hover:scale-110"><Mail /></a>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Mohammed Saqeeb Khan M K. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
