import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-24">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.5em] uppercase text-white/20 mb-3">Drop 001 · SS26</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">Presence<br />Hoodie</h1>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">
          {products.length} styles
        </p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">All $60</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
