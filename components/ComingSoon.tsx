"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("rihla_unlocked") === "true") {
      setUnlocked(true);
    } else {
      setVisible(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === "Rihla") {
      localStorage.setItem("rihla_unlocked", "true");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 1500);
    }
  }

  if (unlocked || !visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-black tracking-[0.5em] uppercase text-white mb-3">RIHLA</p>
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/30">Coming Soon</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoComplete="off"
          className={`bg-transparent border ${error ? "border-red-500" : "border-white/20"} text-white text-[11px] tracking-[0.2em] uppercase text-center px-6 py-3 w-48 outline-none placeholder:text-white/20 focus:border-white/50 transition-colors`}
        />
        <button
          type="submit"
          className="text-[10px] tracking-[0.35em] uppercase text-white/30 hover:text-white transition-colors"
        >
          Enter
        </button>
        {error && (
          <p className="text-[10px] tracking-[0.3em] uppercase text-red-500/70">Incorrect</p>
        )}
      </form>
    </div>
  );
}
