"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E5E5E5]">
            <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="text-2xl font-heading tracking-widest uppercase text-foreground">
                    Aura<span className="text-accent italic font-light">Kinetics</span>
                </Link>

                {/* Center: Links */}
                <div className="hidden md:flex items-center space-x-12">
                    {["Facility", "Training", "Membership"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="group relative text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-foreground transition-colors duration-500"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Right: CTA & Portal */}
                <div className="flex items-center space-x-8">
                    <Link href="/portal" className="hidden md:block text-xs uppercase tracking-widest text-zinc-400 hover:text-foreground transition-colors duration-300">
                        Portal
                    </Link>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/membership"
                            className="px-6 py-3 bg-foreground text-white text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-500 rounded-full"
                        >
                            Trial
                        </Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
