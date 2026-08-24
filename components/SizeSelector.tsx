"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export default function SizeSelector({ product }: { product: Product }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const { add } = useCart();

  function handleAdd() {
    if (!selected) return;
    add(product, selected);
    setFlash(true);
    setTimeout(() => setFlash(false), 1500);
  }

  return (
    <div className="mb-8">
      <p className="text-xs tracking-widest uppercase text-white/40 mb-3">Size</p>
      <div className="flex gap-2 flex-wrap mb-6">
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
              selected === size
                ? "border-white bg-white text-black"
                : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <button
        onClick={handleAdd}
        disabled={!selected}
        className={`w-full text-xs tracking-[0.3em] uppercase py-4 transition-all duration-300 ${
          flash
            ? "bg-white/20 text-white border border-white/20"
            : selected
            ? "bg-white text-black hover:bg-white/90"
            : "bg-white/10 text-white/20 cursor-not-allowed"
        }`}
      >
        {flash ? "Added to Cart ✓" : selected ? "Add to Cart" : "Select a Size"}
      </button>
    </div>
  );
}
