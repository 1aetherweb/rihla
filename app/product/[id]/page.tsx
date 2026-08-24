import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import SizeSelector from "@/components/SizeSelector";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

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
        {/* Image */}
        <div className="relative aspect-[3/4] bg-[#111]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.tag && (
            <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white text-black px-2 py-1 font-bold">
              {product.tag}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-3">Hoodie</p>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">{product.name}</h1>
          <p className="text-2xl text-white/80 mb-6">${product.price}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-8">{product.description}</p>

          {product.sold_out ? (
            <div className="border border-white/10 text-white/30 text-xs tracking-[0.3em] uppercase px-8 py-4 text-center mb-6">
              Sold Out
            </div>
          ) : (
            <SizeSelector product={product} />
          )}

          <div className="border-t border-white/5 pt-8 mt-4">
            <div className="flex flex-col gap-3 text-xs tracking-wider text-white/30 uppercase">
              <p>Free shipping on orders over $150</p>
              <p>Easy 30-day returns</p>
              <p>Sizing guide available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="group block">
                <div className="relative overflow-hidden bg-[#111] aspect-[3/4]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <div className="pt-3">
                  <p className="text-xs tracking-wider uppercase text-white/50 mb-1">Hoodie</p>
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm font-medium tracking-wide">{p.name}</p>
                    <p className="text-sm text-white/70">${p.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
