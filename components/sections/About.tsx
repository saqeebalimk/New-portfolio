"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Code, Database, Layout, Server, Briefcase, Calendar } from "lucide-react";

export function About() {
    const skillCategories = [
        {
            title: "Languages",
            color: "border-purple-500/30",
            progressColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            skills: [
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Python", level: 90 },
                { name: "Java", level: 80 },
                { name: "J2EE", level: 78 },
                { name: "SQL", level: 85 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 95 },
            ]
        },
        {
            title: "Frontend",
            color: "border-blue-500/30",
            progressColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
            skills: [
                { name: "React.js", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "Angular 7/8+", level: 80 },
                { name: "Redux", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Bootstrap", level: 90 },
                { name: "Material UI", level: 85 },
                { name: "SCSS", level: 85 },
                { name: "Responsive Design", level: 95 },
                { name: "Framer Motion", level: 80 },
                { name: "React Router", level: 90 },
                { name: "GSAP", level: 75 },
            ]
        },
        {
            title: "Backend",
            color: "border-cyan-500/30",
            progressColor: "bg-gradient-to-r from-cyan-500 to-teal-400",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Express.js", level: 90 },
                { name: "Django", level: 90 },
                { name: "Django REST Framework", level: 85 },
                { name: "Spring Boot", level: 80 },
                { name: "Spring MVC", level: 78 },
                { name: "Hibernate", level: 78 },
                { name: "JSP", level: 75 },
                { name: "Servlets", level: 75 },
                { name: "RESTful Web Services", level: 95 },
                { name: "SOAP Web Services", level: 78 },
                { name: "WS-Security", level: 75 },
                { name: "JWT", level: 90 },
                { name: "Authentication", level: 95 },
                { name: "Role Based Access", level: 90 },
                { name: "Microservices", level: 85 },
            ]
        },
        {
            title: "Database",
            color: "border-green-500/30",
            progressColor: "bg-gradient-to-r from-green-500 to-emerald-400",
            skills: [
                { name: "PostgreSQL", level: 95 },
                { name: "MongoDB", level: 90 },
                { name: "MySQL", level: 90 },
                { name: "Redis", level: 85 },
                { name: "SQLite", level: 80 },
            ]
        },
        {
            title: "DevOps & Cloud",
            color: "border-purple-500/30",
            progressColor: "bg-gradient-to-r from-violet-500 to-purple-400",
            skills: [
                { name: "Git", level: 95 },
                { name: "GitHub", level: 95 },
                { name: "Docker", level: 85 },
                { name: "Linux", level: 90 },
                { name: "Nginx", level: 85 },
                { name: "CI/CD", level: 85 },
                { name: "Hostinger VPS", level: 80 },
                { name: "Cloud Deployment", level: 85 },
                { name: "WebLogic", level: 75 },
                { name: "Tomcat", level: 80 },
                { name: "JBoss", level: 75 },
            ]
        },
        {
            title: "AI & Automation",
            color: "border-pink-500/30",
            progressColor: "bg-gradient-to-r from-pink-500 to-rose-400",
            skills: [
                { name: "OpenAI API", level: 90 },
                { name: "Google Gemini", level: 85 },
                { name: "Gemini API", level: 85 },
                { name: "LLMs", level: 90 },
                { name: "Prompt Engineering", level: 95 },
                { name: "RAG", level: 85 },
                { name: "LangChain", level: 80 },
                { name: "Vector Databases", level: 85 },
                { name: "Automation", level: 90 },
            ]
        },
    ];

    const experiences = [
        {
            company: "ARN Systems",
            role: "Full Stack Software Engineer",
            period: "Dec 2024 – July 31 2026",
            description: [
                "Architected and delivered the JYNM automotive marketplace (React + Django + PostgreSQL), driving lead generation for 100+ vendor locations.",
                "Engineered technical SEO strategy with 301 redirects, canonical URLs, and structured data, boosting organic search visibility.",
                "Built AI-powered service platform (AHA Technologies) integrating OpenAI APIs and WhatsApp Business for electronics diagnosis workflows.",
                "Optimized database query execution time by 30% through indexing strategies and query refactoring.",
                "Led DevOps setup on Linux/Nginx with Docker, ensuring 99.9% uptime in production environments.",
                "Integrated AI-driven automation reducing manual intervention by 32% in enterprise data processing pipelines."
            ]
        },
        {
            company: "SevenChats Pvt Ltd",
            role: "Software Engineer",
            period: "Oct 2022 – Nov 2024",
            description: [
                "Developed and maintained core product features for a social networking platform serving thousands of active users.",
                "Optimized RESTful API response times by 40% through payload compression and caching strategies.",
                "Engineered reusable component library reducing UI development time by 25% across the product team.",
                "Drove 20% improvement in user engagement by rearchitecting key interaction flows.",
                "Delivered production-ready features consistently in an Agile cross-functional environment."
            ]
        }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Me Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">About <span className="text-primary">Me</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                {/* Bio Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-gray-300 leading-relaxed"
                    >
                        <p>
                            <strong className="text-white">Full Stack Software Engineer</strong> with 4 years of professional experience in agile software development. I specialize in building highly scalable web applications, REST APIs, and full stack development utilizing modern technologies to deliver robust production-ready products.
                        </p>
                        <p>
                            Proficient in <span className="text-primary">React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Bootstrap,</span> and <span className="text-primary">Material UI</span> for building highly interactive UIs. On the backend, I leverage <span className="text-primary">Node.js, Express.js, Python, Django,</span> and <span className="text-primary">Django REST Framework</span> along with API integration, JWT Authentication, and databases like <span className="text-primary">PostgreSQL, MongoDB, MySQL,</span> and <span className="text-primary">Redis</span>.
                        </p>
                        <p>
                            I have deep expertise in <span className="text-primary">AI Integration</span> (OpenAI API, Gemini API, LLM, LangChain, Prompt Engineering), and streamline my workflows using <span className="text-primary">Docker, Git, GitHub, Linux,</span> and <span className="text-primary">Nginx</span>. I enjoy solving real-world challenges through clean code and reliable deployments.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="flex flex-col items-center text-center space-y-4 border-primary/20 bg-primary/5">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Layout size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Frontend</h3>
                            <p className="text-gray-400 text-sm">React, Next.js, Tailwind, Redux</p>
                        </Card>

                        <Card className="flex flex-col items-center text-center space-y-4 border-secondary/20 bg-secondary/5">
                            <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                <Server size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Backend</h3>
                            <p className="text-gray-400 text-sm">Node.js, Express, Django, Python</p>
                        </Card>

                        <Card className="flex flex-col items-center text-center space-y-4 border-green-500/20 bg-green-500/5">
                            <div className="p-3 bg-green-500/10 rounded-full text-green-500">
                                <Database size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Database</h3>
                            <p className="text-gray-400 text-sm">PostgreSQL, MySQL, Supabase</p>
                        </Card>

                        <Card className="flex flex-col items-center text-center space-y-4 border-yellow-500/20 bg-yellow-500/5">
                            <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500">
                                <Code size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Languages</h3>
                            <p className="text-gray-400 text-sm">JavaScript, TypeScript, Python, SQL</p>
                        </Card>
                    </div>
                </div>

                {/* Skills Section */}
                <motion.div
                    id="skills"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 scroll-mt-24"
                >
                    <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                        Technical <span className="text-secondary">Skills</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, catIndex) => (
                            <Card key={catIndex} className={`border ${category.color} bg-gray-900/50 p-6`}>
                                <h4 className="text-xl font-bold text-white mb-6">{category.title}</h4>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <ProgressBar
                                            key={skillIndex}
                                            label={skill.name}
                                            percentage={skill.level}
                                            color={category.progressColor}
                                        />
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    id="experience"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24"
                >
                    <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                        Work <span className="text-primary">Experience</span>
                    </h3>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative"
                                >
                                    {/* Timeline Dot with Pulse Animation */}
                                    <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                        <div className="relative w-4 h-4 bg-primary rounded-full border-4 border-gray-900 shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
                                    </div>

                                    {/* Experience Card */}
                                    <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                                        {/* Spacer for alternating layout */}
                                        <div className="hidden md:block md:w-1/2"></div>

                                        {/* Card Content */}
                                        <div className="md:w-1/2 md:px-8">
                                            <motion.div
                                                whileHover={{ scale: 1.03, y: -5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Card className={`relative overflow-hidden border-l-4 ${index % 2 === 0 ? 'border-l-primary' : 'border-l-secondary'
                                                    } bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300`}>
                                                    {/* Animated Gradient Background */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                    <div className="relative flex items-start gap-4 p-6">
                                                        {/* Icon with Animation */}
                                                        <motion.div
                                                            className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-primary/5' : 'from-secondary/20 to-secondary/5'
                                                                } flex-shrink-0`}
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.6 }}
                                                        >
                                                            <Briefcase size={24} className={index % 2 === 0 ? 'text-primary' : 'text-secondary'} />
                                                        </motion.div>

                                                        <div className="flex-1">
                                                            {/* Header */}
                                                            <div className="mb-4">
                                                                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                                                    {exp.role}
                                                                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                                        {index === 0 ? 'Current' : 'Past'}
                                                                    </span>
                                                                </h4>
                                                                <p className={`font-semibold mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'
                                                                    }`}>
                                                                    {exp.company}
                                                                </p>
                                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                                    <Calendar size={14} />
                                                                    <span>{exp.period}</span>
                                                                </div>
                                                            </div>

                                                            {/* Achievements List */}
                                                            <ul className="space-y-3">
                                                                {exp.description.map((item, i) => (
                                                                    <motion.li
                                                                        key={i}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        whileInView={{ opacity: 1, x: 0 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ delay: i * 0.1 }}
                                                                        className="flex items-start gap-3 text-gray-300 group/item"
                                                                    >
                                                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                                                                            } group-hover/item:scale-150 transition-transform duration-200`}></div>
                                                                        <span className="group-hover/item:text-white transition-colors duration-200">
                                                                            {item}
                                                                        </span>
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* Decorative Corner Accent */}
                                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${index % 2 === 0 ? 'from-primary/10' : 'from-secondary/10'
                                                        } to-transparent rounded-bl-full opacity-50`}></div>
                                                </Card>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
