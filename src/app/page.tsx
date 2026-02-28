import Hero from "@/components/Hero";
import ProtocolGenerator from "@/components/ProtocolGenerator";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">
      <Hero />

      {/* Heavy Statement Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-10"></div>
        <div className="max-w-[1000px] mx-auto px-8 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl leading-[1.2] font-light mb-12">
            &quot;Performance is not an accident. It is the predictable outcome of <span className="text-accent italic">precise mathematics</span> and unyielding intent.&quot;
          </h2>
          <div className="flex items-center justify-center gap-6">
            <span className="w-12 h-[1px] bg-accent"></span>
            <p className="text-xs tracking-[0.3em] uppercase text-zinc-400 font-bold">The Aura Philosophy</p>
            <span className="w-12 h-[1px] bg-accent"></span>
          </div>
        </div>
      </section>

      {/* The Atmosphere Gallery / Split Sections */}
      <section className="py-24 bg-white text-zinc-950 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] relative z-20">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-200 pb-12">
            <h2 className="font-heading text-6xl md:text-8xl tracking-tight">The <br /><span className="italic text-zinc-400">Architecture.</span></h2>
            <p className="max-w-md text-zinc-500 font-light leading-relaxed text-lg">
              Every square foot is engineered to manipulate your environment and force physiological adaptation. No distractions. Pure stimulus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="aspect-[4/5] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2831&auto=format&fit=crop"
                alt="Heavy Lifting"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="space-y-8 lg:pl-12">
              <span className="text-accent text-sm font-bold tracking-widest uppercase">01 / The Forge</span>
              <h3 className="font-heading text-5xl">Calibrated Floor.</h3>
              <p className="text-zinc-600 font-light text-lg leading-relaxed">
                Outfitted exclusively with Eleiko competition plates and customized Arsenal Strength leverage machines. Our flooring density was scientifically selected to maximize force transfer during compound lifts.
              </p>
              <button className="border-b-2 border-zinc-950 pb-1 text-xs uppercase tracking-widest font-bold hover:text-accent hover:border-accent transition-colors">
                Explore The Equipment
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8 lg:pr-12 order-2 md:order-1">
              <span className="text-accent text-sm font-bold tracking-widest uppercase">02 / The Lab</span>
              <h3 className="font-heading text-5xl">Clinical Recovery.</h3>
              <p className="text-zinc-600 font-light text-lg leading-relaxed">
                Accelerate your parasympathetic shift. Utilizing 39°F hydrotherapy plunges, 190°F traditional Finnish saunas, and targeted pneumatic compression to repair tissue at a cellular level.
              </p>
              <button className="border-b-2 border-zinc-950 pb-1 text-xs uppercase tracking-widest font-bold hover:text-accent hover:border-accent transition-colors">
                View Recovery Protocols
              </button>
            </div>
            <div className="aspect-[4/5] overflow-hidden group order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop"
                alt="Recovery Plunge"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Protocol Generator replaces the grey background from before, making it dark theme */}
      <div className="bg-[#050505] text-white">
        <ProtocolGenerator />
      </div>

      {/* End CTA */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center brightness-50"></div>
        <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h2 className="font-heading text-6xl md:text-8xl text-white mb-8">Ascend.</h2>
          <p className="text-xl text-white/80 font-light mb-12">
            Membership is strictly capped to preserve the integrity of the training floor. Submit your application below to join the elite.
          </p>
          <button className="px-12 py-6 bg-white text-[#0047FF] uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#0A0A0A] hover:text-white transition-all duration-500">
            Apply For Membership
          </button>
        </div>
      </section>

    </div>
  );
}
