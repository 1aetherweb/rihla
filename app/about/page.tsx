import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full h-[50vh] bg-black flex items-end pb-16 px-6 md:px-14 justify-center text-center">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-4">Our Story</p>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tight">
            RIHLA
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-2xl mx-auto px-6 pt-10 pb-24 text-center">
        <div className="flex flex-col gap-6 text-white/60 text-base leading-relaxed">
          <p>Rihla means journey.</p>
          <p>But a journey isn't always about where you're going.</p>
          <p>Sometimes it's about where you've been, what you've learned, what you've lost, what you've gained, and who you're becoming along the way.</p>
          <p>Rihla was built around that idea.</p>
          <p>A reminder to keep moving, keep growing, and keep your faith through every part of it.</p>
          <p>Our pieces are made to be worn through the everyday — the long nights, early mornings, new beginnings, quiet moments, and everything in between.</p>
          <p>There's no perfect way to journey.</p>
          <p>There's just yours.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-28">
        <Link
          href="/shop"
          className="inline-block bg-white text-black text-xs tracking-[0.35em] uppercase px-10 py-4 hover:bg-white/90 transition-colors font-semibold"
        >
          Shop Now
        </Link>
      </section>
    </>
  );
}
