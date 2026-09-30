import Link from "next/link";

const SIZES = [
  { size: "XS",  chest: "22.5", length: "23", sleeve: "22", shoulder: "20" },
  { size: "S",   chest: "24",   length: "24", sleeve: "23", shoulder: "21" },
  { size: "M",   chest: "25.5", length: "25", sleeve: "24", shoulder: "22" },
  { size: "L",   chest: "27",   length: "26", sleeve: "25", shoulder: "23" },
  { size: "XL",  chest: "28.5", length: "27", sleeve: "26", shoulder: "24" },
];

export default function SizeGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 pt-28 pb-24">
      <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4">Fit & Sizing</p>
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-6">Size Guide</h1>
      <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-16">
        Our hoodies are cut with a relaxed, dropped-shoulder fit. If you prefer a more fitted look, size down. All measurements in inches.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-[9px] tracking-[0.4em] uppercase text-white/25 pb-4 pr-8 font-normal w-28"></th>
              {SIZES.map((s) => (
                <th key={s.size} className="text-[9px] tracking-[0.4em] uppercase text-white/25 pb-4 pr-8 font-normal">{s.size}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Chest", key: "chest" },
              { label: "Length", key: "length" },
              { label: "Sleeve", key: "sleeve" },
              { label: "Shoulder", key: "shoulder" },
            ].map(({ label, key }, i) => (
              <tr key={label} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                <td className="py-4 pr-8 text-xs font-medium uppercase tracking-wider text-white/60">{label}</td>
                {SIZES.map((s) => (
                  <td key={s.size} className="py-4 pr-8 text-sm text-white/50">{s[key as keyof typeof s]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 border border-white/5 p-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4">How to measure</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/40 leading-relaxed">
          <div>
            <p className="text-white/60 mb-2 uppercase tracking-widest text-[10px]">Chest</p>
            <p>Measure around the fullest part of your chest, keeping the tape parallel to the floor.</p>
          </div>
          <div>
            <p className="text-white/60 mb-2 uppercase tracking-widest text-[10px]">Shoulder</p>
            <p>Measure from one shoulder seam to the other across the back.</p>
          </div>
          <div>
            <p className="text-white/60 mb-2 uppercase tracking-widest text-[10px]">Length</p>
            <p>Measure from the highest point of the shoulder down to the hem.</p>
          </div>
          <div>
            <p className="text-white/60 mb-2 uppercase tracking-widest text-[10px]">Sleeve</p>
            <p>Measure from the shoulder seam to the cuff along the outside of the arm.</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/25 mt-8 leading-relaxed">
        Still unsure? <Link href="/contact" className="underline underline-offset-2 hover:text-white transition-colors">Contact us</Link> — we'll help you find the right fit.
      </p>
    </div>
  );
}
