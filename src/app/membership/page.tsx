"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function MembershipPage() {
    const tiers = [
        {
            name: "The Foundation",
            price: "$199",
            period: "/ month",
            desc: "Unrestricted access to the training floor and standard recovery tools.",
            features: [
                "24/7 Biometric Access",
                "Calibrated Training Floor",
                "Daily Group Classes",
                "Locker & Towel Service",
            ],
            popular: false,
        },
        {
            name: "The Kinetic Elite",
            price: "$349",
            period: "/ month",
            desc: "Complete access to all training modules and advanced clinical recovery.",
            features: [
                "Everything in Foundation",
                "Unlimited Cold Plunge & Sauna",
                "2x/mo InBody Composition Scans",
                "Priority Class Booking",
                "1x/mo Assessment with Coach"
            ],
            popular: true,
        }
    ];

    return (
        <div className="pt-24 pb-32 bg-surface min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight mb-6">
                        Invest in Output
                    </h1>
                    <p className="text-lg text-zinc-600 font-medium">
                        Select the tier that aligns with your performance demands.
                        Automated onboarding begins immediately after checkout.
                    </p>
                </header>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={tier.name}
                            whileHover={{ y: -5 }}
                            className={`bg-white border rounded-lg p-10 relative flex flex-col ${tier.popular ? "border-accent shadow-2xl shadow-accent/10" : "border-gray-200 shadow-xl"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                                    Recommended
                                </div>
                            )}

                            <h2 className="text-2xl font-heading font-black uppercase mb-2">{tier.name}</h2>
                            <p className="text-sm text-zinc-500 mb-8 h-10">{tier.desc}</p>

                            <div className="mb-8">
                                <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                                <span className="text-zinc-500 font-medium">{tier.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {tier.features.map((feat) => (
                                    <li key={feat} className="flex items-start gap-3">
                                        <Check className="text-accent mt-0.5" size={18} />
                                        <span className="text-zinc-700 font-medium">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors ${tier.popular
                                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                                    : "bg-surface text-zinc-950 hover:bg-gray-200"
                                }`}>
                                Join Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-200 shadow-lg text-center">
                    <h3 className="font-heading uppercase text-xl font-bold mb-4">Corporate & Team Packages</h3>
                    <p className="text-zinc-600 mb-6 text-sm">
                        We offer bespoke health and optimization packages for executive teams and tier-1 athletes.
                    </p>
                    <a href="#" className="text-accent font-bold uppercase text-sm tracking-widest hover:underline">
                        Contact Enterprise Sales →
                    </a>
                </div>
            </div>
        </div>
    );
}
