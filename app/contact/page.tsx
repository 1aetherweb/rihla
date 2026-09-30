import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-24">
      <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4">Get in touch</p>
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-6">Contact Us</h1>
      <p className="text-white/40 text-sm leading-relaxed mb-16">
        Got a question about sizing, your order, or just want to talk? Reach out below. We usually respond within 24 hours.
      </p>

      <div className="flex flex-col gap-4 mb-16">
        <a href="mailto:info@rihlaapparel" className="border border-white/5 p-6 hover:border-white/20 transition-colors">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-2">Email</p>
          <p className="text-sm text-white/60">info@rihlaapparel</p>
          <p className="text-xs text-white/25 mt-1">Response within 24 hours</p>
        </a>
        <a href="https://instagram.com/rihlaapparel" target="_blank" rel="noopener noreferrer" className="border border-white/5 p-6 hover:border-white/20 transition-colors">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-2">Instagram</p>
          <p className="text-sm text-white/60">@rihlaapparel</p>
          <p className="text-xs text-white/25 mt-1">DMs open</p>
        </a>
        <a href="https://tiktok.com/@rihlaapparel" target="_blank" rel="noopener noreferrer" className="border border-white/5 p-6 hover:border-white/20 transition-colors">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-2">TikTok</p>
          <p className="text-sm text-white/60">@rihlaapparel</p>
        </a>
      </div>

      <div className="border-t border-white/5 pt-8">
        <p className="text-[10px] tracking-[0.35em] uppercase text-white/20 mb-4">Quick links</p>
        <div className="flex flex-col gap-2 text-xs text-white/40">
          <Link href="/faq" className="hover:text-white transition-colors">Check the FAQ first — your question may already be answered</Link>
          <Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns info</Link>
          <Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link>
        </div>
      </div>
    </div>
  );
}
