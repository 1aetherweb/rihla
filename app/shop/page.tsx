import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-2">SS26</p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Hoodies</h1>
      </div>

      <p className="text-xs text-white/30 tracking-widest uppercase mb-8">
        {products.length} styles
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
