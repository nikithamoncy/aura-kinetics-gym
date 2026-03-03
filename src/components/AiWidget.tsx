"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

export default function AiWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Welcome to Aura Kinetics. How can I assist you with your performance goals today?"
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput(""); // Clear immediately

        const newUserMessage: Message = { id: Date.now().toString(), role: "user", content: userMsg };
        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);

        try {
            // Only send the history excluding the initial welcome message, or format properly 
            const history = messages.slice(1).map(m => ({
                role: m.role,
                content: m.content
            }));

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg, history })
            });

            if (!res.ok) throw new Error("API response error");
            const data = await res.json();

            setMessages(prev => [
                ...prev,
                { id: (Date.now() + 1).toString(), role: "assistant", content: data.text || "An error occurred." }
            ]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [
                ...prev,
                { id: (Date.now() + 1).toString(), role: "assistant", content: "Connection disrupted. Please try again later." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-80 bg-white border border-gray-100 shadow-2xl overflow-hidden flex flex-col rounded-2xl"
                    >
                        <div className="bg-zinc-950 p-4 flex justify-between items-center z-10">
                            <div>
                                <h3 className="text-white font-bold text-sm">AI Concierge</h3>
                                <p className="text-zinc-400 text-xs">Usually responds instantly</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="h-80 bg-zinc-50 p-4 flex flex-col gap-3 overflow-y-auto">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`px-3 py-2 text-sm shadow-sm max-w-[85%] ${msg.role === "assistant"
                                            ? "self-start bg-white border border-gray-100 text-zinc-800 rounded-2xl rounded-tl-sm"
                                            : "self-end bg-accent text-white rounded-2xl rounded-tr-sm"
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="self-start bg-white border border-gray-100 text-zinc-500 px-4 py-2 rounded-2xl rounded-tl-sm text-sm shadow-sm max-w-[85%] flex gap-1">
                                    <span className="animate-bounce">.</span>
                                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask our AI Concierge..."
                                className="flex-1 bg-zinc-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="p-2 bg-zinc-950 text-white rounded-full hover:bg-accent disabled:opacity-50 disabled:hover:bg-zinc-950 transition-colors shadow-md"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-zinc-800 transition-colors relative group"
            >
                <MessageSquare size={24} />
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-white"></span>
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <span className="absolute -top-10 right-0 whitespace-nowrap bg-white text-zinc-950 text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Ask our AI Concierge...
                    </span>
                )}
            </motion.button>
        </div>
    );
}
