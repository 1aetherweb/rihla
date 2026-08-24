"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart";

export default function CartDrawer() {
  const { items, remove, total, count, open, setOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-[#0e0e0e] border-l border-white/5 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <p className="text-sm font-black tracking-widest uppercase">
            Cart {count > 0 && <span className="text-white/40">({count})</span>}
          </p>
          <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors text-xl leading-none">
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <p className="text-white/30 text-sm tracking-widest uppercase text-center mt-16">
              Your cart is empty
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-[#111] flex-shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium tracking-wide leading-snug">{item.product.name}</p>
                    <p className="text-xs text-white/40 tracking-widest uppercase mt-1">Size: {item.size}</p>
                    <p className="text-xs text-white/40 tracking-widest uppercase">Qty: {item.quantity}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm text-white/70">${item.product.price * item.quantity}</p>
                      <button
                        onClick={() => remove(item.product.id, item.size)}
                        className="text-xs text-white/30 hover:text-white transition-colors tracking-widest uppercase"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-white/5">
            <div className="flex justify-between items-baseline mb-6">
              <p className="text-xs tracking-widest uppercase text-white/40">Total</p>
              <p className="text-xl font-black">${total}</p>
            </div>
            <button className="w-full bg-white text-black text-xs tracking-[0.3em] uppercase py-4 hover:bg-white/90 transition-colors">
              Checkout
            </button>
            <p className="text-center text-xs text-white/20 tracking-widest uppercase mt-4">
              Payments coming soon
            </p>
          </div>
        )}
      </div>
    </>
  );
}
