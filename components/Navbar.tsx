"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
];

const SECONDARY_LINKS = [
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping", label: "Shipping & Returns" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/8">
        <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-px bg-white" />
            <span className="block w-5 h-px bg-white" />
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img
              src="/logo.jpg"
              alt="Rihla"
              className="h-8 w-auto"
              style={{ filter: "invert(1)" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-white/50">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Help dropdown + Cart */}
          <div className="flex items-center gap-5">
            <div className="relative group hidden md:block">
              <button className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-200">
                Help
              </button>
              <div className="absolute right-0 top-full pt-3 w-44 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50"><div className="bg-black border border-white/10 flex flex-col py-2">
                <Link href="/contact" className="px-5 py-3 text-[11px] tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/5 transition-colors">
                  Contact Us
                </Link>
                <Link href="/shipping" className="px-5 py-3 text-[11px] tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/5 transition-colors">
                  Returns & Shipping
                </Link>
              </div></div>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {count > 0 && <span>{count}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col">
          <div className="flex items-center justify-between px-5 h-14 border-b border-white/5">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img src="/logo.jpg" alt="Rihla" className="h-8 w-auto" style={{ filter: "invert(1)" }} />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white/40 hover:text-white transition-colors text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tight text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="h-px bg-white/5 my-2" />
            {SECONDARY_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base tracking-[0.2em] uppercase text-white/30 hover:text-white/70 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <button
              onClick={() => { setMenuOpen(false); setOpen(true); }}
              className="w-full border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase py-4 hover:border-white hover:text-white transition-colors"
            >
              Cart {count > 0 ? `(${count})` : ""}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
