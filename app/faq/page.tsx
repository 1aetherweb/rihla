const FAQS = [
  {
    q: "When will my order ship?",
    a: "Orders ship within 2–4 business days. You'll receive a tracking number via email once your order is on the way.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently we ship within the US and Canada. International shipping is coming soon.",
  },
  {
    q: "What's your return policy?",
    a: "We accept returns on unworn, unwashed items within 30 days of delivery. Items must be in original condition with tags attached.",
  },
  {
    q: "How do I know my size?",
    a: "Our hoodies are cut with a relaxed, dropped-shoulder fit. Check the size guide for full measurements. If you're between sizes, size down for a more fitted look.",
  },
  {
    q: "Will sold-out items restock?",
    a: "We operate in limited drops. Once a colorway is gone, it's gone. Follow us on Instagram to be notified about new drops.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Orders can be changed or cancelled within 12 hours of placement. Contact us at contact@rihla.com as soon as possible.",
  },
  {
    q: "What material are the hoodies made from?",
    a: "380gsm heavyweight French terry, 100% ring-spun cotton. Built to last.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-24">
      <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4">Help</p>
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-16">FAQ</h1>

      <div className="flex flex-col divide-y divide-white/5">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-6 cursor-pointer">
            <summary className="flex items-center justify-between text-sm font-medium tracking-wide list-none">
              <span>{item.q}</span>
              <span className="text-white/25 group-open:rotate-45 transition-transform duration-200 text-xl leading-none ml-4 shrink-0">+</span>
            </summary>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
