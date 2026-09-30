import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>

      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <img
          src="/hero.jpg"
          alt="Rihla"
          className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-14 left-6 md:left-12 z-10 max-w-xl">
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.88] tracking-tight text-white mb-5">
            Every Road<br />Leads Here.
          </h1>
          <p className="text-sm text-white/60 mb-8">Drop 001 — Now Available.</p>
          <a
            href="/shop"
            className="inline-block bg-white text-black text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-white/90 transition-colors font-medium"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Announcement ticker */}
      <div className="overflow-hidden border-b border-white/5 bg-[#0a0a0a] py-2.5">
        <p className="text-[9px] tracking-[0.45em] uppercase text-white/15 whitespace-nowrap px-6">
          RIHLA SS26 &nbsp;·&nbsp; DROP 001 AVAILABLE NOW &nbsp;·&nbsp; FREE SHIPPING OVER $150 &nbsp;·&nbsp; LIMITED STOCK &nbsp;·&nbsp; RIHLA SS26 &nbsp;·&nbsp; DROP 001 AVAILABLE NOW &nbsp;·&nbsp; FREE SHIPPING OVER $150 &nbsp;·&nbsp; LIMITED STOCK
        </p>
      </div>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-5 pt-20 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[9px] tracking-[0.45em] uppercase text-white/25 mb-1">Drop 001</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Presence Hoodie</h2>
          </div>
          <Link href="/shop" className="text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
            All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial banner */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Lookbook"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-6">
          <p className="text-[9px] tracking-[0.5em] uppercase text-white/30">Lookbook</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight">
            Dress the<br />Voyage
          </h2>
          <Link
            href="/lookbook"
            className="border border-white/60 text-white text-[10px] tracking-[0.35em] uppercase px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            View Lookbook
          </Link>
        </div>
      </section>

      {/* Brand statement */}
      <section className="max-w-7xl mx-auto px-5 py-24 flex flex-col md:flex-row gap-10 md:gap-24 items-start">
        <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 shrink-0 pt-1">About</p>
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-6">
            Rihla —<br />Arabic for journey.
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-8">
            Born from movement. Built for people who don't stay still. We make pieces that hold up — on the road, in the city, wherever you're headed next.
          </p>
          <Link href="/about" className="text-[10px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5">
            Our Story →
          </Link>
        </div>
      </section>
    </>
  );
}
