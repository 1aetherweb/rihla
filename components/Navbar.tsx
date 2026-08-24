"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#080808]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-[0.3em] uppercase">
          RIHLA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-white/60">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="hidden md:block text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
          >
            Cart ({count})
          </button>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#080808]">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm tracking-widest uppercase text-white/60">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Shop</Link>
            <button onClick={() => { setMenuOpen(false); setOpen(true); }} className="text-left hover:text-white transition-colors">
              Cart ({count})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
