/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const SHOTS = [
  "/lookbook/7.jpg",
  "/lookbook/8.jpg",
  "/lookbook/9.jpg",
  "/lookbook/10.jpg",
  "/lookbook/11.jpg",
  "/lookbook/12.jpg",
  "/lookbook/13.jpg",
  "/lookbook/14.jpg",
  "/lookbook/15.jpg",
  "/lookbook/16.jpg",
  "/lookbook/17.jpg",
  "/lookbook/18.jpg",
  "/lookbook/19.jpg",
  "/lookbook/20.jpg",
  "/lookbook/21.jpg",
  "/lookbook/22.jpg",
  "/lookbook/23.jpg",
  "/lookbook/24.jpg",
  "/lookbook/25.jpg",
];

export default function LookbookPage() {
  return (
    <>
      <section className="pt-28 pb-10 max-w-7xl mx-auto px-5">
        <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4">SS26 · Drop 001</p>
        <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight">
          Dress the<br />Voyage
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {SHOTS.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden bg-[#111]">
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white flex flex-col items-center justify-center text-black py-20 text-center">
          <p className="text-[9px] tracking-[0.5em] uppercase text-black/30 mb-4">Drop 001</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Presence<br />Hoodie
          </h2>
          <p className="text-sm text-black/40 mb-10">3 colorways · $60</p>
          <Link
            href="/shop"
            className="bg-black text-white text-[10px] tracking-[0.35em] uppercase px-12 py-4 hover:bg-black/80 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
