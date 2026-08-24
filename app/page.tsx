import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.filter((p) => p.tag).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1400&q=90"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">SS26 Collection</p>
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tight mb-6">
            THE<br />JOURNEY
          </h1>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-8 max-w-xs">
            Limited drops. Unlimited culture.
          </p>
          <Link
            href="/shop"
            className="inline-block border border-white text-white text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Ticker */}
      <div className="border-y border-white/5 py-3 overflow-hidden bg-[#0e0e0e]">
        <div className="flex gap-16 whitespace-nowrap">
          <span className="text-xs tracking-[0.4em] uppercase text-white/20 animate-none">
            RIHLA SS26 &nbsp;—&nbsp; NEW DROP &nbsp;—&nbsp; LIMITED STOCK &nbsp;—&nbsp; FREE SHIPPING OVER $150 &nbsp;—&nbsp; RIHLA SS26 &nbsp;—&nbsp; NEW DROP &nbsp;—&nbsp; LIMITED STOCK &nbsp;—&nbsp; FREE SHIPPING OVER $150 &nbsp;—&nbsp; RIHLA SS26 &nbsp;—&nbsp; NEW DROP
          </span>
        </div>
      </div>

      {/* Featured drops */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl font-black uppercase tracking-[0.2em]">Featured</h2>
          <Link href="/shop" className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Mid-page banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">The Collection</p>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-6">
            Dress the<br />Voyage
          </h2>
          <Link
            href="/shop"
            className="inline-block bg-white text-black text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-white/80 transition-colors duration-300"
          >
            Explore All
          </Link>
        </div>
      </section>

      {/* All products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-10">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
