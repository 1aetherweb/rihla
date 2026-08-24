"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "./products";

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartContext {
  items: CartItem[];
  add: (product: Product, size: string) => void;
  remove: (productId: string, size: string) => void;
  clear: () => void;
  total: number;
  count: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartCtx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((product: Product, size: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((productId: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.size === size)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartCtx.Provider value={{ items, add, remove, clear, total, count, open, setOpen }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
