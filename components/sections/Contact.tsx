"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Briefcase, Github, Linkedin, Send, CheckCircle, X, AlertCircle, Copy, Check } from "lucide-react";
import config from "@/data/config.json";

// ─── Signature Component (consistent across contact + footer) ─────────────────
export function HandwrittenSignature({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
    const sizes = {
        sm: "text-2xl",
        md: "text-3xl",
        lg: "text-4xl",
    };
    return (
        <span
            className={`${sizes[size]} font-bold text-primary italic tracking-tight`}
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
        >
            Mohammed
        </span>
    );
}

// ─── Success Modal ─────────────────────────────────────────────────────────────
function SuccessModal({ onClose }: { onClose: () => void }) {
    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-sm"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="success-title"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-sm p-10 flex flex-col items-center text-center relative"
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-full hover:bg-slate-100"
                    >
                        <X size={20} />
                    </button>

                    {/* Check circle */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mb-6"
                    >
                        <CheckCircle size={40} className="text-green-500" strokeWidth={2.5} />
                    </motion.div>

                    <h3 id="success-title" className="text-2xl font-bold text-slate-900 mb-3">
                        Message Sent!
                    </h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                        Thank you for reaching out!<br />
                        I&apos;ll get back to you very soon.
                    </p>

                    {/* Signature */}
                    <div className="flex flex-col items-center gap-1">
                        <HandwrittenSignature size="lg" />
                        <div className="w-24 h-0.5 bg-primary/30 rounded-full mt-1" />
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

// ─── Copy Button ───────────────────────────────────────────────────────────────
function CopyButton({ value }: { value: string }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={handleCopy}
            aria-label="Copy to clipboard"
            className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-blue-50 transition-all"
        >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
    );
}

// ─── Main Contact Section ──────────────────────────────────────────────────────
export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        opportunityType: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validate = useCallback(() => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }
        if (!formData.opportunityType) newErrors.opportunityType = "Please select an opportunity type.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
        if (submitError) setSubmitError("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const payload = new FormData();
            payload.append("name", formData.name);
            payload.append("email", formData.email);
            payload.append("subject", formData.opportunityType);
            payload.append("message", formData.message);
            payload.append("_subject", `New Portfolio Contact: ${formData.opportunityType}`);
            payload.append("_captcha", "false");
            payload.append("_template", "table");

            const response = await fetch("https://formsubmit.co/ajax/alikhanmohammed342@gmail.com", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: payload,
            });

            const result = await response.json();
            if (result.success) {
                setShowSuccess(true);
                setFormData({ name: "", email: "", opportunityType: "", message: "" });
                setErrors({});
            } else {
                throw new Error("Submission failed");
            }
        } catch {
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = (field: string) =>
        `w-full bg-white border rounded-xl p-3.5 text-slate-900 placeholder-slate-400 text-[15px] focus:outline-none focus:ring-2 transition-all shadow-sm ${
            errors[field]
                ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                : "border-slate-200 focus:ring-primary/20 focus:border-primary"
        }`;

    const socialLinks = [
        { href: config.github, label: "GitHub", icon: <Github size={18} /> },
        { href: config.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
        { href: `mailto:${config.email}`, label: "Email", icon: <Mail size={18} /> },
    ];

    return (
        <>
            {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

            <section id="contact" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
                {/* Background decorations */}
                <div className="absolute top-[-80px] right-[-100px] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="absolute bottom-[-80px] left-[-100px] w-[400px] h-[400px] bg-violet-100/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-full mb-5 border border-blue-100">
                            <Mail size={12} /> GET IN TOUCH
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                            Let&apos;s Work{" "}
                            <span className="text-primary">Together</span>
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
                        <p className="text-slate-500 text-[16px] max-w-xl mx-auto leading-relaxed">
                            I&apos;m always open to discussing new opportunities, interesting projects or collaborations.
                        </p>
                        <p className="text-slate-400 text-[14px] mt-2">
                            Feel free to reach out — I&apos;ll get back to you as soon as possible.
                        </p>
                    </motion.div>

                    {/* Two-column layout */}
                    <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-10 items-start">

                        {/* ── LEFT CARD ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-8">

                                {/* Status badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 text-green-700 rounded-full text-[11px] font-bold uppercase tracking-widest">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Open to Opportunities
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                                        Let&apos;s Build Something Amazing
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed">
                                        Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear from you. I&apos;m currently open to full-time opportunities, part-time roles, freelance projects and exciting collaborations.
                                    </p>
                                </div>

                                {/* Contact info cards */}
                                <div className="space-y-3">
                                    <a
                                        href="tel:+918792248396"
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-green-50/50 hover:border-green-100 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call me</p>
                                            <p className="text-slate-800 font-semibold text-[14px] truncate">+91 8792248396</p>
                                        </div>
                                        <CopyButton value="+918792248396" />
                                    </a>

                                    <a
                                        href={`mailto:alikhanmohammed342@gmail.com`}
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-100 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Mail size={18} />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
                                            <p className="text-slate-800 font-semibold text-[14px] truncate">alikhanmohammed342@gmail.com</p>
                                        </div>
                                        <CopyButton value="alikhanmohammed342@gmail.com" />
                                    </a>

                                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-purple-50/30 hover:border-purple-100 transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 flex-shrink-0">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Location</p>
                                            <p className="text-slate-800 font-semibold text-[14px]">Bengaluru, Karnataka, India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-teal-50/30 hover:border-teal-100 transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                                            <Briefcase size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Availability</p>
                                            <p className="text-slate-800 font-semibold text-[14px]">Open to Opportunities</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social links */}
                                <div>
                                    <p className="text-sm font-bold text-slate-600 mb-4">Connect with me</p>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        {socialLinks.map((s) => (
                                            <a
                                                key={s.label}
                                                href={s.href}
                                                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                                rel="noopener noreferrer"
                                                aria-label={s.label}
                                                className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-blue-50 hover:border-blue-200 transition-all hover:scale-110 shadow-sm"
                                            >
                                                {s.icon}
                                            </a>
                                        ))}
                                        {/* X / Twitter */}
                                        <a
                                            href="https://x.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="X / Twitter"
                                            className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-blue-50 hover:border-blue-200 transition-all hover:scale-110 shadow-sm"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.638 5.905-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                        </a>
                                        {/* Decorative handwritten note */}
                                        <p
                                            className="text-lg text-primary ml-3 leading-snug italic font-bold tracking-wide"
                                            style={{ fontFamily: "'Dancing Script', cursive" }}
                                        >
                                            Let&apos;s connect<br />
                                            &amp; create something great!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── RIGHT FORM CARD ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                                {/* Form header */}
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                                        <Send size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[20px] font-bold text-slate-900 mb-1">Send Me a Message</h3>
                                        <p className="text-slate-400 text-sm">Fill out the form below and I&apos;ll get back to you soon.</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                    {/* Name + Email row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                                Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className={inputClass("name")}
                                                aria-required="true"
                                                aria-describedby={errors.name ? "error-name" : undefined}
                                            />
                                            {errors.name && (
                                                <p id="error-name" className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1" role="alert">
                                                    <AlertCircle size={12} /> {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                                Email <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className={inputClass("email")}
                                                aria-required="true"
                                                aria-describedby={errors.email ? "error-email" : undefined}
                                            />
                                            {errors.email && (
                                                <p id="error-email" className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1" role="alert">
                                                    <AlertCircle size={12} /> {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Opportunity Type */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-opportunity" className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                            Opportunity Type <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="contact-opportunity"
                                                name="opportunityType"
                                                value={formData.opportunityType}
                                                onChange={handleChange}
                                                className={`${inputClass("opportunityType")} appearance-none pr-10`}
                                                aria-required="true"
                                                aria-describedby={errors.opportunityType ? "error-opportunity" : undefined}
                                            >
                                                <option value="" disabled>Select an option...</option>
                                                <option value="Freelancing">Freelancing</option>
                                                <option value="Collaborate">Collaborate</option>
                                                <option value="Part Time">Part Time</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Open Opportunities">Open Opportunities</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        {errors.opportunityType && (
                                            <p id="error-opportunity" className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1" role="alert">
                                                <AlertCircle size={12} /> {errors.opportunityType}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-message" className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell me about your project..."
                                            className={`${inputClass("message")} resize-y min-h-[120px]`}
                                            aria-required="true"
                                            aria-describedby={errors.message ? "error-message" : undefined}
                                        />
                                        {errors.message && (
                                            <p id="error-message" className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1" role="alert">
                                                <AlertCircle size={12} /> {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit error */}
                                    {submitError && (
                                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium" role="alert">
                                            <AlertCircle size={16} />
                                            {submitError}
                                        </div>
                                    )}

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white font-bold text-[15px] rounded-2xl hover:bg-blue-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={17} />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-slate-400 text-xs flex items-center justify-center gap-1.5 mt-1">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                        </svg>
                                        Your information is safe and will never be shared with third parties.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
