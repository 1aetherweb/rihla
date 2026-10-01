"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";

export default function HeroSplit() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let velocity = 0;
    let raf: number;

    function tick() {
      velocity += (target - current) * 0.065;
      velocity *= 0.70;
      current += velocity;

      const t = Math.max(0, Math.min(1, current));
      const MAX = 160;

      if (leftRef.current)  leftRef.current.style.transform  = `translateX(${-t * MAX}px) scale(${1 + t * 0.02})`;
      if (rightRef.current) rightRef.current.style.transform = `translateX(${t * MAX}px) scale(${1 + t * 0.02})`;
      if (textRef.current)  textRef.current.style.opacity    = String(Math.min(1, t * 1.6));
      if (btnRef.current)   btnRef.current.style.opacity     = String(Math.min(1, t * 1.6));

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    const el = document.getElementById("hoodie-container");
    const onEnter = () => { target = 1; };
    const onLeave = () => { target = 0; };
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const panel = (pos: string): React.CSSProperties => ({
    backgroundImage: "url('/products/hoodies-all.webp')",
    backgroundSize: "300% auto",
    backgroundPosition: `${pos} center`,
    backgroundRepeat: "no-repeat",
  });

  return (
    <section className="w-full h-screen bg-[#f4f2ee] flex flex-col items-center justify-center relative overflow-hidden select-none">

      {/* Revealed text behind panels */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        style={{ opacity: 0 }}
      >
        <p className="text-[10px] tracking-[0.65em] uppercase text-black/30 mb-5">Rihla · Drop 001</p>
        <h2 className="text-5xl md:text-[5.5rem] font-black uppercase tracking-tight text-black leading-[0.88] text-center">
          Presence<br />Hoodie
        </h2>
        <p className="text-xs text-black/40 mt-5 tracking-[0.4em] uppercase">3 Colorways · $60</p>
      </div>

      {/* Three hoodie panels */}
      <div
        id="hoodie-container"
        className="relative flex items-stretch z-10 cursor-crosshair"
        style={{ width: "min(900px, 90vw)", height: "min(580px, 62vh)" }}
      >
        <div ref={leftRef}  className="flex-1" style={{ ...panel("0%"),   pointerEvents: "none" }} />
        <div               className="flex-1" style={{ ...panel("50%"),  pointerEvents: "none" }} />
        <div ref={rightRef} className="flex-1" style={{ ...panel("100%"), pointerEvents: "none" }} />
      </div>

      {/* Shop button fades in below panels */}
      <div ref={btnRef} className="mt-8 z-20" style={{ opacity: 0 }}>
        <Link
          href="/shop"
          className="inline-block bg-black text-white text-[11px] tracking-[0.4em] uppercase px-12 py-4 hover:bg-black/80 transition-colors"
        >
          Shop The Drop →
        </Link>
      </div>

      <p className="absolute bottom-10 text-[10px] tracking-[0.5em] uppercase text-black/20 pointer-events-none">
        Hover to explore
      </p>
    </section>
  );
}
