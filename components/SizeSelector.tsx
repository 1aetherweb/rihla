"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export default function SizeSelector({ product }: { product: Product }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const { add } = useCart();

  function handleAdd() {
    if (!selected) return;
    add(product, selected);
    setFlash(true);
    setTimeout(() => setFlash(false), 1500);
  }

  async function handleBuyNow() {
    if (!selected || !product.variantId) return;
    setCheckingOut(true);
    try {
      const { createCheckout } = await import("@/lib/shopify");
      const url = await createCheckout(product.variantId, 1);
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      setCheckingOut(false);
    }
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

      <div className="flex flex-col gap-3">
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

        {product.variantId && (
          <button
            onClick={handleBuyNow}
            disabled={!selected || checkingOut}
            className={`w-full text-xs tracking-[0.3em] uppercase py-4 border transition-all duration-300 ${
              selected && !checkingOut
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-white/10 text-white/20 cursor-not-allowed"
            }`}
          >
            {checkingOut ? "Redirecting…" : "Buy Now"}
          </button>
        )}
      </div>
    </div>
  );
}
