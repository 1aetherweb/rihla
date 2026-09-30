/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function ProductGallery({ images, name, tag }: { images: string[]; name: string; tag?: string }) {
  const [active, setActive] = useState(0);

  // 2 images: show side by side
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {images.map((src, i) => (
          <div key={src} className="relative aspect-[3/4] bg-[#111] overflow-hidden">
            <img src={src} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
            {i === 0 && tag && (
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white text-black px-2 py-1 font-bold">
                {tag}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  // 3+ images: main + thumbnails
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[3/4] bg-[#111] overflow-hidden">
        <img
          src={images[active]}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {tag && (
          <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white text-black px-2 py-1 font-bold">
            {tag}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`relative aspect-[3/4] flex-1 overflow-hidden border transition-all duration-200 ${
              i === active ? "border-white" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={src} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
