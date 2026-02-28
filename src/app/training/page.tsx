export const metadata = {
    title: "Training | AURA KINETICS",
    description: "Personal training and elite group classes.",
};

export default function TrainingPage() {
    const schedule = [
        { time: "05:00 AM", class: "Hypertrophy Block", trainer: "Dr. Evans", spots: "Waitlist" },
        { time: "06:30 AM", class: "Metabolic Conditioning", trainer: "Coach Sarah", spots: "3 Spots" },
        { time: "08:00 AM", class: "Engine (Zone 2)", trainer: "Coach Marcus", spots: "Open" },
        { time: "12:00 PM", class: "Executive Strength", trainer: "Dr. Evans", spots: "1 Spot" },
        { time: "05:30 PM", class: "Hypertrophy Block", trainer: "Coach Sarah", spots: "Open" },
    ];

    return (
        <div className="pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight mb-6">
                        Elite Conditioning
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-2xl font-medium">
                        Data-backed protocols. Expert instruction. The Aura Kinetics curriculum is designed to push your physiological boundaries safely and effectively.
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-heading font-black uppercase mb-8 border-b border-gray-200 pb-4">Today&apos;s Protocol</h2>

                        <div className="space-y-4">
                            {schedule.map((session, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface border border-gray-100 hover:border-gray-300 transition-colors group">
                                    <div className="flex items-center gap-6 mb-4 sm:mb-0">
                                        <span className="text-sm font-bold text-zinc-400 w-20">{session.time}</span>
                                        <div>
                                            <h3 className="font-bold text-zinc-950 text-lg group-hover:text-accent transition-colors">{session.class}</h3>
                                            <p className="text-sm text-zinc-500">{session.trainer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm ${session.spots === "Waitlist" ? "bg-red-50 text-red-600" :
                                            session.spots === "Open" ? "bg-green-50 text-green-600" :
                                                "bg-orange-50 text-orange-600"
                                            }`}>
                                            {session.spots}
                                        </span>
                                        <button className="text-sm font-bold uppercase border border-zinc-200 px-4 py-2 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors">
                                            Reserve
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-950 p-8 text-white rounded-sm h-fit sticky top-32">
                        <h3 className="font-heading text-xl uppercase tracking-wider text-zinc-400 mb-6">Personal Coaching</h3>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                            Bypass the guesswork. Work 1-on-1 with clinical exercise physiologists to construct a fully customized protocol based on your DEXA scans, VO2 Max, and blood panels.
                        </p>
                        <button className="w-full bg-accent text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-orange-600 transition-colors shadow-lg shadow-accent/20">
                            Inquire Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
