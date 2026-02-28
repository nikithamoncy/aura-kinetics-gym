export const metadata = {
    title: "Member Portal | AURA KINETICS",
    description: "Access your personalized training protocols, recovery data, and membership portal.",
};

export default function PortalPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col pt-20">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                {/* Accent glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

            <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-20">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-heading font-light tracking-tighter mb-4 text-white">
                            Aura<span className="italic text-accent font-light">Kinetics</span>
                        </h1>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                            Secure Member Portal
                        </p>
                    </div>

                    {/* Login Form Container */}
                    <div className="bg-[#050505] border border-zinc-800 p-8 shadow-2xl relative">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-500"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-500"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500"></div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
                                    Identification
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Aura ID or Email"
                                    className="w-full bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label htmlFor="password" className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
                                        Access Key
                                    </label>
                                    <a href="#" className="text-[10px] uppercase tracking-wider text-zinc-600 hover:text-accent transition-colors">
                                        Recover Key
                                    </a>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••••"
                                    className="w-full bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 py-3 text-sm tracking-widest focus:outline-none focus:border-accent transition-colors duration-300"
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 mt-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500"
                            >
                                Authenticate
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
                            <p className="text-xs text-zinc-500">
                                Not a founding member yet?{' '}
                                <a href="/membership" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors ml-2">
                                    Apply
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* System Status Footer */}
                    <div className="mt-12 text-center text-[10px] font-mono tracking-widest text-zinc-600 uppercase flex items-center justify-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Network Secure
                        </span>
                        <span>|</span>
                        <span>Biometrics Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
