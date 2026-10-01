export default function ShippingPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-24">
      <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4">Policies</p>
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-16">Shipping & Returns</h1>

      <div className="flex flex-col gap-12 text-sm text-white/50 leading-relaxed">

        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Shipping</p>
          <div className="flex flex-col gap-4">
            <p>All Rihla orders are packed and shipped from the United States.</p>
            <p>Orders are typically processed within 2–5 business days after your order is placed. Once your order ships, you'll receive a tracking number by email.</p>
            <p>Shipping times may vary depending on your location and carrier. Rihla is not responsible for delays caused by the shipping carrier, weather, holidays, or other circumstances outside of our control.</p>
            <p>Please make sure your shipping address is correct before placing your order. We are not responsible for orders shipped to an incorrect address provided at checkout.</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Returns & Exchanges</p>
          <div className="flex flex-col gap-4">
            <p>We want you to be happy with your order. If something isn't right, you can request a return within 14 days of delivery.</p>
            <p>To be eligible for a return, items must be:</p>
            <ul className="flex flex-col gap-2 pl-4 text-white/35">
              <li>— Unworn and unused</li>
              <li>— Unwashed</li>
              <li>— In their original condition</li>
              <li>— Returned with original tags attached</li>
            </ul>
            <p>Sale items and limited-drop items may be final sale and may not be eligible for return or exchange.</p>
            <p>Customers are responsible for return shipping costs unless the item arrived damaged or we made an error with the order.</p>
            <p>Once your return is received and inspected, we'll let you know whether your refund has been approved. Approved refunds will be issued to the original payment method.</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Damaged or Incorrect Orders</p>
          <p>Received the wrong item or something arrived damaged? Contact us at <a href="mailto:info@rihlaapparel.com" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">info@rihlaapparel.com</a> within 7 days of delivery with your order number and a photo of the item. We'll take care of it.</p>
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Questions?</p>
          <p>For any questions about your order, shipping, or returns, reach out to us at <a href="mailto:info@rihlaapparel.com" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">info@rihlaapparel.com</a> or through our Instagram <a href="https://instagram.com/rihlaapparel" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">@rihlaapparel</a>.</p>
        </div>

      </div>
    </div>
  );
}
