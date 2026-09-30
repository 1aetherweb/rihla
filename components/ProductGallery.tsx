/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function ProductGallery({ images, name, tag }: { images: string[]; name: string; tag?: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-3">
      {/* Thumbnail strip — left */}
      {images.length > 1 && (
        <div className="flex flex-col gap-2 w-16 md:w-20 shrink-0">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative aspect-[3/4] w-full overflow-hidden border transition-all duration-200 ${
                i === active ? "border-white" : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              <img src={src} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="relative flex-1 aspect-[3/4] bg-[#111] overflow-hidden">
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
    </div>
  );
}
