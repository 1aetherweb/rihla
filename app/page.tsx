/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute bottom-16 left-6 md:left-14 z-10 max-w-2xl">
          <h1 className="text-6xl md:text-[7rem] font-black uppercase leading-[0.85] tracking-tight text-white mb-6">
            Every Road<br />Leads Here.
          </h1>
          <p className="text-sm text-white/50 mb-10 tracking-wide">Drop 001 — Now Available.</p>
          <a
            href="/shop"
            className="inline-block bg-white text-black text-xs tracking-[0.35em] uppercase px-10 py-4 hover:bg-white/90 transition-colors font-semibold"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-28">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Presence Hoodie</h2>
          <Link href="/shop" className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lookbook banner — real brand photo */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/lookbook/13.jpg"
          alt="Rihla Lookbook"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-7">
          <p className="text-[10px] tracking-[0.55em] uppercase text-white/40">SS26 Lookbook</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white">
            Dress the<br />Voyage
          </h2>
          <Link
            href="/lookbook"
            className="border border-white text-white text-[10px] tracking-[0.4em] uppercase px-10 py-3.5 hover:bg-white hover:text-black transition-colors duration-300 mt-2"
          >
            View Lookbook
          </Link>
        </div>
      </section>

      {/* Brand statement */}
      <section className="max-w-5xl mx-auto px-5 md:px-10 py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-8">
          Rihla — Arabic<br />for Journey.
        </h2>
        <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto mb-10">
          Born from movement. Built for people who don't stay still. We make pieces that hold up — on the road, in the city, wherever you're headed next.
        </p>
        <Link href="/about" className="text-[10px] tracking-[0.4em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
          Our Story
        </Link>
      </section>
    </>
  );
}
