"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0A0A] z-10" />
                {/* We use a stunning high-res image representing elite fitness */}
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-80 scale-105 transform motion-safe:animate-[slowPan_20s_ease-in-out_infinite_alternate]"
                />
            </div>

            <div className="relative z-20 max-w-[1400px] mx-auto px-8 w-full text-center flex flex-col items-center justify-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-white uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-8 block bg-white/10 px-8 py-3 backdrop-blur-md rounded-full border border-white/20"
                    >
                        Now Accepting Founding Members
                    </motion.span>

                    <h1 className="font-heading text-7xl md:text-[9rem] lg:text-[11rem] text-white leading-[0.85] tracking-tighter mb-8 shadow-sm">
                        Aura<span className="italic font-light text-accent">Kinetics</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-12 drop-shadow-md">
                        The sanctuary for the relentless. An intersection of clinical-grade biomechanics, elite conditioning, and data-driven recovery.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <Link href="/membership" className="px-12 py-5 bg-accent text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_40px_rgba(0,71,255,0.4)] block text-center">
                            Claim Allocation
                        </Link>
                        <Link href="/facility" className="px-12 py-5 bg-transparent border border-white/30 text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-sm block text-center">
                            Explore Facility
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">Scroll to Descend</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slowPan {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.1) translate(-1%, 2%); }
        }
      `}} />
        </section>
    );
}
