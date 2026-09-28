import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="text-lg font-black tracking-[0.35em] uppercase mb-4">RIHLA</p>
          <p className="text-white/30 text-xs leading-relaxed max-w-[200px]">
            The journey shapes the traveller. Streetwear for those in motion.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-4">Shop</p>
          <ul className="flex flex-col gap-2.5 text-xs text-white/50">
            <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/lookbook" className="hover:text-white transition-colors">Lookbook</Link></li>
            <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-4">Info</p>
          <ul className="flex flex-col gap-2.5 text-xs text-white/50">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-4">Connect</p>
          <ul className="flex flex-col gap-2.5 text-xs text-white/50">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-white/15 text-[10px] tracking-[0.25em] uppercase">
        <p>© 2026 Rihla. All rights reserved.</p>
        <p>Made with intention.</p>
      </div>
    </footer>
  );
}
