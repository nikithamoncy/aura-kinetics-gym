"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[850px] flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 pb-20">
            {/* Dynamic Background Noise/Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-radial from-zinc-900/50 via-[#0A0A0A] to-[#0A0A0A]" />
            </div>

            <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start text-left order-2 lg:order-1"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-white uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-8 inline-block bg-white/5 px-6 py-2.5 backdrop-blur-md rounded-full border border-white/10 w-fit"
                    >
                        Now Accepting Founding Members
                    </motion.span>

                    <h1 className="font-heading text-6xl md:text-[7rem] lg:text-[8rem] text-white leading-[0.85] tracking-tighter mb-8 shadow-sm">
                        Aura<br /><span className="italic font-light text-accent">Kinetics</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-12">
                        The sanctuary for the relentless. An intersection of clinical-grade biomechanics, elite conditioning, and data-driven recovery.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <Link href="/membership" className="px-10 py-4 bg-accent text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(0,71,255,0.3)] block text-center">
                            Claim Allocation
                        </Link>
                        <Link href="/facility" className="px-10 py-4 bg-transparent border border-white/30 text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-sm block text-center">
                            Explore Facility
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden group order-1 lg:order-2 shadow-2xl shadow-black/50"
                >
                    <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
                        alt="Aura Kinetics Facility"
                        className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Decorative overlay element */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Floor 01</p>
                            <p className="text-zinc-400 text-[10px] uppercase tracking-wider">The Forge</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md">
                            <svg className="w-4 h-4 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

            </div>

        </section>
    );
}
