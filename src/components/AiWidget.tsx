"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export default function AiWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-80 bg-white border border-gray-100 shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="bg-zinc-950 p-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-bold text-sm">AI Concierge</h3>
                                <p className="text-zinc-400 text-xs">Usually responds instantly</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="h-64 bg-surface p-4 flex flex-col gap-3 overflow-y-auto">
                            <div className="self-start bg-gray-200 text-zinc-800 px-3 py-2 rounded-2xl rounded-tl-sm text-sm shadow-sm max-w-[85%]">
                                Welcome to Aura Kinetics. How can I assist you with your performance goals today?
                            </div>
                        </div>

                        <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Ask our AI Concierge..."
                                className="flex-1 bg-surface border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="p-2 bg-accent text-white rounded-full hover:bg-orange-600 transition-colors shadow-md">
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
