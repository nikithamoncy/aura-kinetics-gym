"use client";

import { useState, useEffect } from "react";

export default function Calculator() {
    const [system, setSystem] = useState<"imperial" | "metric">("imperial");
    const [age, setAge] = useState(30);
    const [weight, setWeight] = useState(180); // lbs or kg
    const [height, setHeight] = useState(70); // inches or cm
    const [activityLevel, setActivityLevel] = useState(1.55); // moderate

    const [bmi, setBmi] = useState(0);
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Calculate metrics
        let wKg = weight;
        let hCm = height;

        if (system === "imperial") {
            wKg = weight * 0.453592;
            hCm = height * 2.54;
        }

        const hM = hCm / 100;
        const currentBmi = wKg / (hM * hM);

        // Mifflin-St Jeor (assuming male for baseline simplicity in UI, or generic average)
        const bmr = 10 * wKg + 6.25 * hCm - 5 * age + 5;
        const dailyCals = bmr * activityLevel;
        const targetProtein = system === "imperial" ? weight * 1.0 : weight * 2.2; // roughly 1g/lb

        setBmi(Math.round(currentBmi * 10) / 10);
        setCalories(Math.round(dailyCals));
        setProtein(Math.round(targetProtein));

        setAnimate(true);
        const t = setTimeout(() => setAnimate(false), 300);
        return () => clearTimeout(t);
    }, [system, age, weight, height, activityLevel]);

    return (
        <section className="py-24 bg-surface" id="calculator">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight mb-4">
                        The Kinetic Metric Calculator
                    </h2>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        Input your baseline to uncover your precise maintenance calories, optimal protein target, and metabolic baseline.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12">
                    {/* Controls */}
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-2 p-1 bg-surface rounded-lg w-fit mb-8">
                            <button
                                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${system === "imperial" ? "bg-white shadow-sm text-zinc-950" : "text-zinc-500 hover:text-zinc-950"}`}
                                onClick={() => { setSystem("imperial"); setWeight(180); setHeight(70); }}
                            >
                                Imperial
                            </button>
                            <button
                                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${system === "metric" ? "bg-white shadow-sm text-zinc-950" : "text-zinc-500 hover:text-zinc-950"}`}
                                onClick={() => { setSystem("metric"); setWeight(80); setHeight(180); }}
                            >
                                Metric
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-zinc-950">Age</label>
                                    <span className="text-sm font-medium text-accent">{age} yrs</span>
                                </div>
                                <input type="range" min="16" max="100" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full accent-accent bg-gray-200 h-1 rounded-full appearance-none outline-none cursor-pointer" />
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-zinc-950">Weight</label>
                                    <span className="text-sm font-medium text-accent">{weight} {system === "imperial" ? "lbs" : "kg"}</span>
                                </div>
                                <input type="range" min={system === "imperial" ? "90" : "40"} max={system === "imperial" ? "350" : "160"} value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-accent bg-gray-200 h-1 rounded-full appearance-none outline-none cursor-pointer" />
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-zinc-950">Height</label>
                                    <span className="text-sm font-medium text-accent">{system === "imperial" ? `${Math.floor(height / 12)}'${height % 12}"` : `${height} cm`}</span>
                                </div>
                                <input type="range" min={system === "imperial" ? "60" : "150"} max={system === "imperial" ? "84" : "215"} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-accent bg-gray-200 h-1 rounded-full appearance-none outline-none cursor-pointer" />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-bold text-zinc-950 block mb-3">Activity Level</label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: "Light", value: 1.375 },
                                    { label: "Moderate", value: 1.55 },
                                    { label: "Intense", value: 1.725 },
                                ].map((level) => (
                                    <button
                                        key={level.label}
                                        onClick={() => setActivityLevel(level.value)}
                                        className={`py-3 rounded-lg text-xs font-bold border transition-all ${activityLevel === level.value ? "border-accent bg-accent/5 text-accent" : "border-gray-200 text-zinc-500 hover:border-gray-300"}`}
                                    >
                                        {level.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Screen */}
                    <div className="flex-1 bg-zinc-950 rounded-2xl p-8 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="font-heading uppercase text-xl text-zinc-400 mb-8 border-b border-zinc-800 pb-4">Your Baselines</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">Maintenance Calories</p>
                                    <p className={`text-5xl font-heading font-black text-accent transition-transform duration-300 ${animate ? 'scale-105' : 'scale-100'}`}>
                                        {calories} <span className="text-xl text-zinc-500 font-sans font-medium">kcal</span>
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">Target Protein</p>
                                        <p className="text-3xl font-heading font-black text-white">{protein}g</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">Current BMI</p>
                                        <p className="text-3xl font-heading font-black text-white">{bmi}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <p className="text-sm text-zinc-300 mb-4">Lock in your custom macro plan.</p>
                            <div className="flex items-center gap-0">
                                <input type="email" placeholder="Enter your email" className="flex-1 bg-zinc-900 border border-zinc-700 rounded-l-md px-4 py-3 text-sm focus:outline-none focus:border-accent" />
                                <button className="bg-accent text-white px-6 py-3 rounded-r-md text-sm font-bold uppercase hover:bg-orange-600 transition-colors">
                                    Send Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
