export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-zinc-900">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-heading mb-6">
                            Aura<span className="text-accent italic font-light">Kinetics</span>
                        </h2>
                        <p className="text-zinc-400 font-light max-w-sm mb-8 leading-relaxed text-sm">
                            The premier destination for human optimization. We combine clinical diagnostics, elite coaching, and targeted recovery to elevate your baseline.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                                Ig
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                                X
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                                In
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm font-light text-zinc-300">
                            <li><a href="/facility" className="hover:text-accent transition-colors">The Facility</a></li>
                            <li><a href="/training" className="hover:text-accent transition-colors">Training Protocols</a></li>
                            <li><a href="/membership" className="hover:text-accent transition-colors">Membership Tiers</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Corporate Wellness</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm font-light text-zinc-300">
                            <li>1940 Century Park East</li>
                            <li>Los Angeles, CA 90067</li>
                            <li className="pt-4"><a href="mailto:concierge@aurakinetics.com" className="hover:text-accent transition-colors">concierge@aurakinetics.com</a></li>
                            <li>+1 (310) 555-0199</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-600">
                    <p>© {new Date().getFullYear()} Aura Kinetics. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
