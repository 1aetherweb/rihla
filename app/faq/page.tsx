const FAQS = [
  {
    q: "When will my order ship?",
    a: "Orders are typically processed within 2–5 business days after your order is placed. Once your order ships, you'll receive a tracking number by email.",
  },
  {
    q: "Where do you ship from?",
    a: "All Rihla orders are packed and shipped from the United States.",
  },
  {
    q: "What's your return policy?",
    a: "You can request a return within 14 days of delivery. Items must be unworn, unwashed, in their original condition, and returned with original tags attached. Sale and limited-drop items may be final sale.",
  },
  {
    q: "Who pays for return shipping?",
    a: "Customers are responsible for return shipping costs unless the item arrived damaged or we made an error with your order.",
  },
  {
    q: "My item arrived damaged — what do I do?",
    a: "Contact us at info@rihlaapparel.com within 7 days of delivery with your order number and a photo of the item. We'll take care of it.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Reach out to us at info@rihlaapparel.com as soon as possible. We'll do our best to catch it before it ships.",
  },
  {
    q: "Will sold-out items restock?",
    a: "We operate in limited drops. Once a colorway is gone, it's gone. Follow us on Instagram @rihlaapparel to stay updated on new drops.",
  },
  {
    q: "How do I know my size?",
    a: "Our hoodies are cut with a relaxed, dropped-shoulder fit. Check the size guide for full measurements.",
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
