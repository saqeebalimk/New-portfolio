"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, LayoutTemplate, Sparkles, Lightbulb, Code2, Rocket, BookOpen, Clock, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function About() {
    return (
        <section id="about" className="py-24 relative bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                
                {/* ---------------- ROW 1: ABOUT ME & CORE STRENGTHS ---------------- */}
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
                    
                    {/* Left Column: About Me (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-full mb-3 border border-blue-100">
                            ABOUT
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">About Me</h2>
                        
                        <div className="space-y-5">
                            <p className="text-[16px] sm:text-[17px] md:text-[18px] font-medium text-slate-600 leading-[1.8] lg:max-w-[75ch]">
                                Full Stack Software Engineer with{" "}
                                <span className="text-blue-600 font-bold">4 years</span> of professional experience delivering complete,{" "}
                                <span className="text-blue-600 font-semibold">production-ready web applications</span>. I bridge the gap between traditional enterprise architecture{" "}
                                <span className="bg-blue-50 text-blue-700 font-semibold px-1.5 py-0.5 rounded-md text-[15px]">Java/J2EE · Go · Spring Boot</span>{" "}
                                and modern full-stack development{" "}
                                <span className="bg-sky-50 text-sky-700 font-semibold px-1.5 py-0.5 rounded-md text-[15px]">React · Node.js · Django</span>.
                            </p>
                            <p className="text-[16px] sm:text-[17px] md:text-[18px] font-medium text-slate-600 leading-[1.8] lg:max-w-[75ch]">
                                For the past 3 years, I have extensively integrated{" "}
                                <span className="text-violet-600 font-bold">AI Pair-Programming</span> and{" "}
                                <span className="text-violet-600 font-bold">Agentic AI workflows</span> into my daily engineering process. I use AI-assisted workflows to{" "}
                                <span className="italic font-semibold text-slate-800">accelerate development</span> while maintaining strong architectural, testing and code-quality practices — enabling me to write{" "}
                                <span className="text-violet-600 font-semibold">scalable code</span> and deliver{" "}
                                <span className="text-violet-600 font-semibold">reliable, intelligent products</span>.
                            </p>
                            <p className="text-[16px] sm:text-[17px] md:text-[18px] font-medium text-slate-600 leading-[1.8] lg:max-w-[75ch]">
                                My core strength lies in combining{" "}
                                <span className="text-teal-600 font-bold">deep foundational language knowledge</span> with{" "}
                                <span className="text-teal-600 font-semibold">modern full-stack</span> and{" "}
                                <span className="bg-teal-50 text-teal-700 font-semibold px-1.5 py-0.5 rounded-md text-[15px]">AI capabilities</span>{" "}
                                to build <span className="italic font-semibold text-slate-800">real-world solutions</span>.
                            </p>
                        </div>
                        

                    </motion.div>

                    {/* Right Column: Core Strengths (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Core Strengths</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <LayoutTemplate className="text-blue-500 mb-3" size={24} />
                                <h4 className="font-bold text-slate-900 text-sm">Full Stack <br/> Development</h4>
                            </Card>
                            <Card className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <Sparkles className="text-violet-500 mb-3" size={24} />
                                <h4 className="font-bold text-slate-900 text-sm">AI-Assisted <br/> Engineering</h4>
                            </Card>
                            <Card className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <Lightbulb className="text-teal-500 mb-3" size={24} />
                                <h4 className="font-bold text-slate-900 text-sm">Problem <br/> Solving</h4>
                            </Card>
                            <Card className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <Code2 className="text-blue-600 mb-3" size={24} />
                                <h4 className="font-bold text-slate-900 text-sm">Clean & Scalable <br/> Code</h4>
                            </Card>
                            <Card className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <Rocket className="text-orange-500 mb-3" size={24} />
                                <h4 className="font-bold text-slate-900 text-sm">Product <br/> Mindset</h4>
                            </Card>
                            <Card className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <BookOpen className="text-emerald-500 mb-3" size={24} />
                                <h4 className="font-bold text-slate-900 text-sm">Continuous <br/> Learning</h4>
                            </Card>
                        </div>
                    </motion.div>
                </div>
                
                {/* ---------------- ROW 2: EXPERIENCE & SKILLS ---------------- */}
                <div id="experience" className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start scroll-mt-24">
                    
                    {/* Left Column: My Professional Journey (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-full mb-3 border border-blue-100">
                                    EXPERIENCE
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">My Professional Journey</h3>
                            </div>
                            <p className="text-slate-500 text-sm font-medium pb-1 hidden sm:block">A journey of continuous learning, building and creating impact.</p>
                        </div>

                        <div className="relative pb-10 ml-2 sm:ml-0">
                            {/* Continuous Vertical Line */}
                            <div className="absolute left-2.5 sm:left-[108px] top-8 bottom-0 w-px bg-slate-200 z-0"></div>

                            <div className="space-y-12">
                                {/* Experience 1: ARN */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 pt-2 group"
                                >
                                    {/* Date Container (Left side on desktop) */}
                                    <div className="sm:w-24 flex-shrink-0 sm:text-right hidden sm:block pt-3">
                                        <p className="text-[12px] font-bold text-slate-500 leading-tight">Dec 2024</p>
                                        <p className="text-[12px] font-semibold text-slate-400 my-1">↓</p>
                                        <p className="text-[12px] font-bold text-slate-500 leading-tight">31 Aug 2026</p>
                                    </div>
                                    
                                    {/* Timeline Node */}
                                    <div className="hidden sm:block absolute left-[103px] top-6 w-3.5 h-3.5 bg-blue-500 rounded-full border-[3px] border-white shadow-sm z-10 group-hover:scale-125 transition-transform duration-300" />
                                    <div className="sm:hidden absolute left-1 top-10 w-3.5 h-3.5 bg-blue-500 rounded-full border-[3px] border-white z-10" />

                                    {/* White Content Card */}
                                    <div className="flex-grow relative bg-white pl-10 sm:pl-0">
                                        
                                        {/* Mobile Date */}
                                        <p className="text-[11px] font-bold text-slate-500 mb-2 sm:hidden flex items-center gap-2">
                                            <Calendar size={12}/> Dec 2024 – 31 Aug 2026
                                        </p>

                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                {/* Logo Emulator */}
                                                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-slate-100 shadow-sm flex items-center justify-center bg-white flex-shrink-0 overflow-hidden relative">
                                                    <div className="flex items-center justify-center font-black italic text-[#E53935] tracking-tighter text-[12px] sm:text-[1rem] leading-none z-10">
                                                        ARN
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-[16px] sm:text-[18px] font-bold text-slate-900 leading-tight mb-1">ARN Systems Pvt Ltd</h4>
                                                    <p className="text-blue-600 font-semibold text-[13px] sm:text-[14px]">Software Developer</p>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider items-center gap-1.5 border border-emerald-100/50">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Project Completed
                                            </div>
                                        </div>
                                        
                                        <ul className="space-y-3 mt-5 mb-6 pl-1 pr-4">
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Pioneered the adoption of AI pair-programming and Agentic AI workflows, including GitHub Copilot and LLM-assisted development, reducing boilerplate code generation and accelerating feature delivery timelines by 40%.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Delivered end-to-end product features spanning React.js frontends, Go/Golang and Python backend services, REST APIs and PostgreSQL data flows, integrating modern services with legacy enterprise architecture.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Utilized advanced Prompt Engineering and LLM context management to rapidly refactor, optimize and translate legacy Java/Spring codebases into high-performance Go and Django microservices.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Designed and integrated REST APIs with JWT authentication and role-based access control across Go/Golang, Node.js, Django and supporting Java/Spring Boot services.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Connected React.js interfaces to backend services, databases and third-party integrations, owning the complete request-to-response lifecycle.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Optimized algorithms, queries and legacy code paths, improving application performance by 30%.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Leveraged AI-driven automation tools to streamline data processing workflows, reducing manual intervention by 32%.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Implemented intelligent monitoring and alerting systems for predictive maintenance, preventing system downtime in production.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Deployed and supported production services on Linux servers with Nginx, managing environment configuration and release readiness.</span>
                                            </li>
                                        </ul>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {['React.js', 'Python', 'Go', 'PostgreSQL', 'REST APIs', 'AI Tools'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Experience 2: SevenChats */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 pt-2 group"
                                >
                                    <div className="sm:w-24 flex-shrink-0 sm:text-right hidden sm:block pt-3">
                                        <p className="text-[12px] font-bold text-slate-500 leading-tight">Oct 2022</p>
                                        <p className="text-[12px] font-semibold text-slate-400 my-1">↓</p>
                                        <p className="text-[12px] font-bold text-slate-500 leading-tight">Nov 2024</p>
                                    </div>
                                    
                                    <div className="hidden sm:block absolute left-[103px] top-6 w-3.5 h-3.5 bg-slate-300 rounded-full border-[3px] border-white z-10 transition-colors group-hover:bg-blue-400" />
                                    <div className="sm:hidden absolute left-1 top-10 w-3.5 h-3.5 bg-slate-300 rounded-full border-[3px] border-white z-10" />

                                    <div className="flex-grow bg-white pl-10 sm:pl-0">
                                        <p className="text-[11px] font-bold text-slate-500 mb-2 sm:hidden flex items-center gap-2">
                                            <Calendar size={12}/> Oct 2022 – Nov 2024
                                        </p>

                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-slate-100 shadow-sm flex items-center justify-center bg-white flex-shrink-0 overflow-hidden">
                                                    <div className="flex items-center justify-center font-black text-[12px] sm:text-[1.2rem] leading-none">
                                                        <span className="text-black">7</span><span className="text-[#00BCD4]">C</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-[16px] sm:text-[18px] font-bold text-slate-900 leading-tight mb-1">SevenChats Private Limited</h4>
                                                    <p className="text-slate-600 font-semibold text-[13px] sm:text-[14px]">Software Developer (Front End)</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <ul className="space-y-3 mt-5 mb-6 pl-1 pr-4">
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Developed core web applications using React.js and Redux, boosting user engagement by 25% across the social platform.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Integrated backend services and optimized RESTful API calls, reducing response time by 30%.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Built production features for posts, articles, polls, events and media galleries with file storage and responsive UI.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Implemented AI-powered chatbot features for the 7Chats platform, enabling intelligent message handling and context-aware responses.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Designed and optimized LLM integration pipelines for real-time data processing and natural language understanding.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Automated repetitive tasks using scripting, reducing manual effort by 25% and accelerating delivery cycles.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Skills (5 cols) */}
                    <div id="skills" className="lg:col-span-5 scroll-mt-24 pt-2">
                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase tracking-widest rounded-full mb-3 border border-slate-200">
                            SKILLS
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Technical Skills</h3>
                        
                        <div className="space-y-8 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                            
                            {/* Languages */}
                            <div>
                                <h4 className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'SQL', 'HTML5', 'CSS3'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Frontend Development */}
                            <div>
                                <h4 className="text-sm font-bold text-sky-600 mb-3 uppercase tracking-wider">Frontend Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Material UI', 'SCSS', 'Bootstrap', 'Framer Motion'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Development */}
                            <div>
                                <h4 className="text-sm font-bold text-teal-600 mb-3 uppercase tracking-wider">Backend Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'Go REST APIs', 'Spring Boot', 'Spring MVC', 'RESTful APIs'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Databases & DevOps */}
                            <div>
                                <h4 className="text-sm font-bold text-emerald-600 mb-3 uppercase tracking-wider">Databases & DevOps</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Docker', 'AWS', 'Azure', 'Linux', 'Nginx', 'CI/CD'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* AI & Modern Engineering */}
                            <div>
                                <h4 className="text-sm font-bold text-violet-600 mb-3 uppercase tracking-wider">AI & Modern Engineering</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['AI Pair Programming', 'LLMs', 'RAG', 'Prompt Engineering', 'OpenAI API', 'Gemini API', 'AI Automation', 'Agentic Workflows'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg">{skill}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
