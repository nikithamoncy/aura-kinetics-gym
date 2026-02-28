"use client";

import { useState } from "react";

export default function ProtocolGenerator() {
    const [intensity, setIntensity] = useState<number>(7);
    const [sleep, setSleep] = useState<number>(7);
    const [focus, setFocus] = useState<string>("CNS Reset");
    const [generating, setGenerating] = useState(false);
    const [protocol, setProtocol] = useState<{ title: string; steps: { phase: string; desc: string }[] } | null>(null);

    const generateProtocol = () => {
        setGenerating(true);
        setProtocol(null);

        setTimeout(() => {
            let title = "Standard Recovery Protocol";
            let steps = [];

            if (focus === "CNS Reset" && intensity > 7) {
                title = "High-Intensity Systemic Reset";
                steps = [
                    { phase: "Phase 1: Shift", desc: "15 min — Float Therapy (Sensory Deprivation) to downregulate sympathetic tone." },
                    { phase: "Phase 2: Contrast", desc: "3x Cycles: 3 min 190°F Sauna / 1 min 39°F Cold Plunge. End on cold." },
                    { phase: "Phase 3: Flush", desc: "20 min — Pneumatic Compression (Legs) at 80mmHg." },
                ];
            } else if (focus === "Tissue Repair") {
                title = "Targeted Myofascial Repair";
                steps = [
                    { phase: "Phase 1: Vasodilation", desc: "20 min — Infrared Sauna (140°F) to increase local blood flow." },
                    { phase: "Phase 2: Manipulation", desc: "15 min — Percussive Therapy targeting major groups worked." },
                    { phase: "Phase 3: Oxygenation", desc: "10 min — Mild Hyperbaric Oxygen Therapy (mHBOT)." },
                ];
            } else {
                title = "Baseline Optimization";
                steps = [
                    { phase: "Phase 1: Mobilize", desc: "10 min — Active flow / Dynamic stretching." },
                    { phase: "Phase 2: Heat", desc: "15 min — Traditional Finnish Sauna (180°F)." },
                    { phase: "Phase 3: Rest", desc: "15 min — Zero-gravity recliner with Red Light Therapy." },
                ];
            }

            setProtocol({ title, steps });
            setGenerating(false);
        }, 800);
    };

    return (
        <section className="py-32 bg-[#050505] relative border-t border-zinc-900 border-b">
            <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Copy & Inputs */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-semibold">Interactive</h2>
                        <h3 className="text-5xl lg:text-6xl font-heading leading-[1.1] mb-6 text-white">
                            Kinetic Protocol <br /> <span className="italic text-zinc-500">Generator.</span>
                        </h3>
                        <p className="text-zinc-400 text-lg font-light leading-relaxed">
                            Every stress demands a specific adaptation. Input your variables below to receive an immediate, scientifically-backed recovery protocol engineered for today’s state.
                        </p>
                    </div>

                    <div className="space-y-8 bg-[#0A0A0A] p-10 relative border border-zinc-800">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent"></div>

                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold">Training Intensity (1-10)</label>
                                <span className="text-xs font-bold text-accent">{intensity}/10</span>
                            </div>
                            <input type="range" min="1" max="10" value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="w-full accent-accent bg-zinc-800 h-[2px] rounded-none appearance-none outline-none cursor-pointer" />
                        </div>

                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold">Sleep Last Night (Hours)</label>
                                <span className="text-xs font-bold text-accent">{sleep}h</span>
                            </div>
                            <input type="range" min="3" max="12" value={sleep} onChange={(e) => setSleep(Number(e.target.value))} className="w-full accent-accent bg-zinc-800 h-[2px] rounded-none appearance-none outline-none cursor-pointer" />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-4">Primary Stimulus Goal</label>
                            <div className="grid grid-cols-2 gap-3">
                                {["CNS Reset", "Tissue Repair", "Inflammation Reduction", "General Maintenance"].map((goal) => (
                                    <button
                                        key={goal}
                                        onClick={() => setFocus(goal)}
                                        className={`py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all border ${focus === goal ? "bg-accent text-white border-accent" : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"}`}
                                    >
                                        {goal}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={generateProtocol}
                            disabled={generating}
                            className="w-full py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-50"
                        >
                            {generating ? "Analyzing Variables..." : "Generate Protocol"}
                        </button>
                    </div>
                </div>

                {/* Right: Output Display */}
                <div className="h-full min-h-[500px] flex items-center justify-center border border-zinc-800 bg-[#0A0A0A] relative p-10 shadow-2xl">
                    {!protocol && !generating && (
                        <div className="text-center">
                            <span className="block w-16 h-16 border border-zinc-700 mx-auto rounded-full flex items-center justify-center mb-6">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            </span>
                            <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-bold">Awaiting Inputs</p>
                        </div>
                    )}

                    {generating && (
                        <div className="text-center w-full">
                            <div className="w-full h-[2px] bg-zinc-800 relative overflow-hidden mb-8">
                                <div className="absolute top-0 left-0 h-full bg-accent animate-[loading_1.5s_infinite_ease-in-out]"></div>
                            </div>
                            <p className="text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase">Calculating precise interventions...</p>
                        </div>
                    )}

                    {protocol && !generating && (
                        <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <h4 className="text-3xl font-heading mb-10 pb-6 border-b border-zinc-800 text-white">{protocol.title}</h4>
                            <div className="space-y-10">
                                {protocol.steps.map((step: { phase: string; desc: string }, idx: number) => (
                                    <div key={idx} className="flex gap-6">
                                        <span className="text-accent text-sm font-bold tracking-widest uppercase shrink-0 mt-0.5">{`0${idx + 1}`}</span>
                                        <div>
                                            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 mb-3">{step.phase}</h5>
                                            <p className="text-zinc-500 font-light text-base leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="text-xs uppercase tracking-[0.2em] text-accent font-bold flex items-center gap-3 hover:text-white transition-colors">
                                Save to Member App <span className="text-lg">→</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom loading animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 40%; }
          100% { width: 100%; transform: translateX(100%); }
        }
      `
            }} />
        </section>
    );
}
