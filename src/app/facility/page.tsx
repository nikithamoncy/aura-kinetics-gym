export const metadata = {
    title: "The Facility | AURA KINETICS",
    description: "A clinical look at our training and recovery zones.",
};

export default function FacilityPage() {
    return (
        <div className="pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight mb-6">
                        The Arsenal
                    </h1>
                    <p className="text-lg text-zinc-600 font-medium">
                        Explore the strictly-curated zones engineered for maximizing biological output and expediting recovery. Uncompromised standards only.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Training Floor */}
                    <div className="bg-surface p-8 border border-gray-100 hover:border-gray-300 transition-colors">
                        <div className="h-64 bg-zinc-200 mb-8 border border-gray-200 rounded-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 mix-blend-multiply"></div>
                        </div>
                        <h2 className="text-2xl font-heading font-black uppercase mb-4">The Training Floor</h2>
                        <ul className="text-zinc-600 space-y-3 mb-8">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Eleiko Competition Barbells & Plates</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Arsenal Strength Customized Machines</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 50-Yard High-Traction Turf</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Concept2 Ergometers</li>
                        </ul>
                    </div>

                    {/* Recovery Lab */}
                    <div className="bg-surface p-8 border border-gray-100 hover:border-gray-300 transition-colors">
                        <div className="h-64 bg-zinc-200 mb-8 border border-gray-200 rounded-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 mix-blend-multiply"></div>
                        </div>
                        <h2 className="text-2xl font-heading font-black uppercase mb-4">The Recovery Lab</h2>
                        <ul className="text-zinc-600 space-y-3 mb-8">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 39°F Cold Plunge Pools</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 190°F Finnish Dry Saunas</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Red Light Therapy Beds</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Therabody Pneumatic Compression</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button className="px-10 py-5 border-2 border-zinc-950 text-zinc-950 text-sm font-black uppercase tracking-widest hover:bg-zinc-950 hover:text-white transition-colors">
                        Book a VIP Tour
                    </button>
                </div>
            </div>
        </div>
    );
}
