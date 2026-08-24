import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-2xl font-black tracking-[0.3em] uppercase mb-4">RIHLA</p>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            The journey shapes the traveller. Streetwear for those in motion.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Navigate</p>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li><Link href="/shop" className="hover:text-white transition-colors">Hoodies</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Info</p>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li><Link href="#" className="hover:text-white transition-colors">Sizing Guide</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/20 text-xs tracking-widest uppercase">
        <p>© 2026 Rihla. All rights reserved.</p>
        <p>Made with intention.</p>
      </div>
    </footer>
  );
}
