import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import SizeSelector from "@/components/SizeSelector";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
      {/* Breadcrumb */}
      <nav className="text-xs tracking-widest uppercase text-white/30 mb-10 flex gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-white/60">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image gallery */}
        <ProductGallery
          images={product.images ?? [product.image]}
          name={product.name}
          tag={product.tag}
        />

        {/* Details */}
        <div className="flex flex-col justify-start pt-4">
          <p className="text-[10px] tracking-[0.45em] uppercase text-white/25 mb-3">Drop 001 · Hoodie</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">{product.name}</h1>
          <p className="text-xl text-white/60 mb-5">${product.price}</p>
          <p className="text-white/40 text-sm leading-relaxed mb-8">{product.description}</p>

          {product.sold_out ? (
            <div className="border border-white/10 text-white/30 text-xs tracking-[0.3em] uppercase px-8 py-4 text-center mb-6">
              Sold Out
            </div>
          ) : (
            <SizeSelector product={product} />
          )}

          {/* Materials & Care */}
          <div className="border-t border-white/5 pt-7 mt-2 mb-7">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-4">Materials & Care</p>
            <ul className="flex flex-col gap-2 text-xs text-white/40 leading-relaxed">
              <li>— {product.description}</li>
              <li>— Hand wash cold</li>
              <li>— Do not bleach</li>
              <li>— Lay flat to dry</li>
              <li>— Cool iron if needed</li>
            </ul>
          </div>

          {/* Shipping */}
          <div className="border-t border-white/5 pt-7">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-4">Shipping & Returns</p>
            <ul className="flex flex-col gap-2 text-xs text-white/40 leading-relaxed">
              <li>— Free shipping on orders over $130</li>
              <li>— Standard delivery 2–5 business days</li>
              <li>— Returns within 14 days on unworn items</li>
              <li>— <Link href="/size-guide" className="underline underline-offset-2 hover:text-white transition-colors">Size guide available</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
