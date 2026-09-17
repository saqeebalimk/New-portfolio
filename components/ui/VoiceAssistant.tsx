"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, X, MessageSquare, Send, PhoneCall, Volume2, Sparkles } from "lucide-react";

type Message = {
    role: "user" | "assistant";
    text: string;
};

// Extremely basic FAQ matcher for testing AI agent logic before real LLM integration
function generateAssistantResponse(input: string): string {
    const text = input.toLowerCase();
    
    if (text.includes("experience") || text.includes("work")) {
        return "Mohammed has 4 years of professional experience as a Full Stack Software Engineer. He has worked at ARN Systems and SevenChats, developing complex React, Go, and Python applications.";
    }
    if (text.includes("react") || text.includes("next") || text.includes("frontend")) {
        return "Yes, Mohammed is an expert in frontend development using React, Next.js, and modern CSS frameworks like Tailwind.";
    }
    if (text.includes("available") || text.includes("freelance") || text.includes("hire") || text.includes("opportunity")) {
        return "Mohammed is currently open to full-time opportunities, part-time roles, freelance projects, and exciting collaborations. You can contact him via the form on this portfolio.";
    }
    if (text.includes("project") || text.includes("jynm") || text.includes("sevenchats")) {
        return "Some of his notable projects include the JYNM automotive marketplace, SevenChats social platform, and AHA Technologies AI diagnostics tool.";
    }
    if (text.includes("ai") || text.includes("llm") || text.includes("agent") || text.includes("copilot")) {
        return "Mohammed heavily utilizes AI-assisted engineering and agentic workflows, including Copilot and LLM prompt engineering, to accelerate development by up to 40%.";
    }
    if (text.includes("contact") || text.includes("email") || text.includes("phone")) {
        return "You can reach Mohammed via email at alikhanmohammed342@gmail.com, or by calling +91 8792248396.";
    }
    
    // Default reply
    return "I'm not exactly sure about that from Saqeeb's portfolio information, but you can definitely contact Saqeeb directly for more details!";
}

export function VoiceAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"IDLE" | "LISTENING" | "THINKING" | "SPEAKING" | "ERROR">("IDLE");
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", text: "Hi! I'm Saqeeb's AI assistant. I can tell you about his experience, projects, skills and current availability. What would you like to know?" }
    ]);
    const [inputText, setInputText] = useState("");
    
    const recognitionRef = useRef<any>(null);
    const synthesisRef = useRef<SpeechSynthesis | null>(null);

    // Initialize Web Speech APIs safely
    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'en-US';

                recognition.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    handleUserInput(transcript);
                };

                recognition.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setStatus("ERROR");
                    setTimeout(() => setStatus("IDLE"), 2000);
                };

                recognition.onend = () => {
                    if (status === "LISTENING") {
                        setStatus("IDLE"); // if didn't capture properly
                    }
                };

                recognitionRef.current = recognition;
            }
            synthesisRef.current = window.speechSynthesis;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const speak = (text: string) => {
        if (synthesisRef.current) {
            synthesisRef.current.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onstart = () => setStatus("SPEAKING");
            utterance.onend = () => setStatus("IDLE");
            utterance.onerror = () => setStatus("IDLE");
            synthesisRef.current.speak(utterance);
        } else {
            setStatus("IDLE");
        }
    };

    const handleUserInput = (text: string) => {
        if (!text.trim()) return;
        
        // Add user msg
        setMessages(prev => [...prev, { role: "user", text }]);
        setStatus("THINKING");

        // Simulate network delay & thought process
        setTimeout(() => {
            const responseText = generateAssistantResponse(text);
            setMessages(prev => [...prev, { role: "assistant", text: responseText }]);
            if (synthesisRef.current) {
                speak(responseText);
            } else {
                setStatus("IDLE");
            }
        }, 800);
    };

    const toggleListening = () => {
        if (status === "LISTENING") {
            recognitionRef.current?.stop();
            setStatus("IDLE");
        } else if (status === "SPEAKING") {
            synthesisRef.current?.cancel();
            setStatus("IDLE");
        } else {
            if (recognitionRef.current) {
                synthesisRef.current?.cancel();
                setStatus("LISTENING");
                recognitionRef.current.start();
            } else {
                // Not supported
                alert("Voice input isn't supported in this browser. You can type your question instead.");
            }
        }
    };

    const handleTextSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            handleUserInput(inputText);
            setInputText("");
        }
    };

    const renderStatusBadge = () => {
        switch (status) {
            case "LISTENING":
                return <span className="text-red-500 font-bold animate-pulse text-xs uppercase tracking-widest">Listening...</span>;
            case "THINKING":
                return <span className="text-violet-500 font-bold text-xs uppercase tracking-widest">Thinking...</span>;
            case "SPEAKING":
                return <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">Speaking...</span>;
            case "ERROR":
                return <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">Try again</span>;
            default:
                return null;
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-slate-200 rounded-3xl shadow-xl w-[90vw] sm:w-[350px] overflow-hidden mb-4 pointer-events-auto flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm relative">
                                    <Sparkles size={18} />
                                    {status === 'SPEAKING' && (
                                        <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-slate-900 text-sm">Saqeeb&apos;s AI Assistant</span>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">Knowledge Base Mode</span>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    synthesisRef.current?.cancel();
                                    recognitionRef.current?.stop();
                                    setIsOpen(false);
                                }}
                                className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Chat History */}
                        <div className="flex-1 h-[280px] overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`
                                        p-3 px-4 rounded-2xl max-w-[85%] text-[13.5px] leading-relaxed shadow-sm
                                        ${msg.role === 'user' 
                                            ? 'bg-blue-600 text-white rounded-br-sm' 
                                            : 'bg-white text-slate-800 border border-slate-100 rounded-bl-sm'
                                        }
                                    `}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Status area */}
                        <div className="h-6 flex items-center justify-center">
                            {renderStatusBadge()}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-slate-100 space-y-3">
                            <form onSubmit={handleTextSubmit} className="flex items-center gap-2">
                                <input 
                                    type="text" 
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type a question..."
                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                                <button type="submit" disabled={!inputText.trim()} className="p-2 rounded-xl bg-blue-50 text-blue-600 disabled:opacity-50 disabled:bg-slate-50 disabled:text-slate-400 transition-colors">
                                    <Send size={18} />
                                </button>
                            </form>
                            
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={toggleListening}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all border
                                        ${status === 'LISTENING' 
                                            ? "bg-red-50 text-red-600 border-red-200" 
                                            : status === 'SPEAKING'
                                                ? "bg-orange-50 text-orange-600 border-orange-200"
                                                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                                        }
                                    `}
                                >
                                    {status === 'LISTENING' ? (
                                        <><Mic size={16} className="animate-pulse" /> Stop Listening</>
                                    ) : status === 'SPEAKING' ? (
                                        <><Volume2 size={16} className="animate-pulse" /> Stop Speaking</>
                                    ) : (
                                        <><Mic size={16} /> Tap to Speak</>
                                    )}
                                </button>
                            </div>
                            
                            <a href="tel:+918792248396" className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-slate-50 text-slate-500 border border-slate-100 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors">
                                <PhoneCall size={12} /> Call Saqeeb&apos;s AI Assistant
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-blue-600 hover:scale-105 transition-all group"
                >
                    <MessageSquare size={20} className="group-hover:animate-bounce" />
                    <span className="font-semibold text-[14px]">Ask AI Assistant</span>
                </button>
            )}
        </div>
    );
}
