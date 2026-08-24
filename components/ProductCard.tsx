import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-[#111] aspect-[3/4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white text-black px-2 py-1 font-bold">
            {product.tag}
          </span>
        )}
        {product.sold_out && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-xs tracking-widest uppercase border border-white/40 px-4 py-2 text-white/60">
              Sold Out
            </span>
          </div>
        )}
      </div>
      <div className="pt-3">
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-medium tracking-wide">{product.name}</p>
          <p className="text-sm text-white/70">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
