import Link from "next/link";

export default function ShippingPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-24">
      <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4">Policies</p>
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-16">Shipping & Returns</h1>

      <div className="flex flex-col gap-12">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Shipping</p>
          <div className="flex flex-col gap-4 text-sm text-white/40 leading-relaxed">
            <p>Orders are processed within 2–4 business days. You'll receive a tracking number via email once your package ships.</p>
            <div className="border border-white/5 divide-y divide-white/5">
              {[
                { label: "Standard (US)", time: "5–8 business days", price: "$8 / Free over $150" },
                { label: "Express (US)", time: "2–3 business days", price: "$18" },
                { label: "Canada", time: "7–12 business days", price: "$15" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center px-5 py-4">
                  <div>
                    <p className="text-xs text-white/60">{row.label}</p>
                    <p className="text-xs text-white/25 mt-0.5">{row.time}</p>
                  </div>
                  <p className="text-xs text-white/40">{row.price}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/25">Delivery times are estimates and not guaranteed. We are not responsible for delays caused by carriers.</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Returns</p>
          <div className="flex flex-col gap-4 text-sm text-white/40 leading-relaxed">
            <p>We accept returns on unworn, unwashed items within 30 days of delivery. Items must be in original condition with tags attached.</p>
            <p>To start a return, email us at contact@rihla.com with your order number. We'll send you a return label within 24 hours.</p>
            <p>Refunds are issued to the original payment method within 5–7 business days of receiving the return.</p>
            <p className="text-white/25 text-xs">Sale items and items marked final sale are not eligible for return.</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4">Questions?</p>
          <p className="text-sm text-white/40 leading-relaxed">
            Check our <Link href="/faq" className="underline underline-offset-2 hover:text-white transition-colors">FAQ</Link> or{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-white transition-colors">contact us</Link> directly.
          </p>
        </div>
      </div>
    </div>
  );
}
