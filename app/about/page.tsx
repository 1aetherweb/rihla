import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
            alt="About Rihla"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">Our Story</p>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tight">
            RIHLA
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-6">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 leading-tight">
            Built for the<br />road ahead.
          </h2>
          <div className="flex flex-col gap-4 text-white/50 text-sm leading-relaxed">
            <p>
              Rihla — Arabic for "journey" — was born from the belief that what you wear should match where you're going. Not a destination, but a direction.
            </p>
            <p>
              We started with one hoodie. No investors, no hype machine. Just heavy cotton, clean lines, and something to prove.
            </p>
            <p>
              Every piece is designed to move with you — built from premium materials, cut for real bodies, made to last longer than any trend.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] bg-[#111]">
          <Image
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
            alt="Rihla clothing"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-12">What We Stand For</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality First", body: "300gsm+ fabrics. Reinforced seams. No shortcuts. Every piece is stress-tested before it ever reaches you." },
              { title: "Limited Runs", body: "We don't restock. When it's gone, it's gone. Each drop is a moment — be there or wait for the next one." },
              { title: "Made to Move", body: "Oversized fits. Functional cuts. Designed for the pavement, the airport, and everywhere in between." },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-black uppercase tracking-wide mb-4">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Ready to shop?</h2>
        <Link
          href="/shop"
          className="inline-block border border-white text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors duration-300"
        >
          View Hoodies
        </Link>
      </section>
    </>
  );
}
