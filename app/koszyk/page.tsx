"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Trash2 } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  handle: string;
  image: string;
  price: number;
  size: string;
  qty: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("cart", JSON.stringify(items));
  }, [items, mounted]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const freeShipping = total >= 200;

  function remove(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id: string, delta: number) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  }

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Twój koszyk</h1>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-lg font-medium">Koszyk jest pusty</h2>
          <p className="text-muted-foreground mt-1 mb-6">Dodaj coś, co Ci się spodoba!</p>
          <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-rose-600 text-white h-9 px-4 text-sm font-medium hover:bg-rose-700 transition-colors">
            Przeglądaj produkty
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 border rounded-lg p-4">
                <div className="relative w-24 h-32 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/produkt/${item.handle}`} className="font-medium hover:text-rose-600">
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">Rozmiar: {item.size}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded border flex items-center justify-center hover:bg-muted">-</button>
                    <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 rounded border flex items-center justify-center hover:bg-muted">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="font-bold">{item.price * item.qty} zł</span>
                  <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-rose-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">Podsumowanie</h3>
              <div className="flex justify-between text-sm mb-2">
                <span>Wartość produktów</span>
                <span>{total.toFixed(2)} zł</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span>Dostawa</span>
                <span className={freeShipping ? "text-green-600 font-medium" : ""}>
                  {freeShipping ? "Darmowa" : "15 zł"}
                </span>
              </div>
              {!freeShipping && (
                <p className="text-xs text-muted-foreground mb-3">
                  Do darmowej dostawy brakuje {(200 - total).toFixed(2)} zł
                </p>
              )}
              <Separator className="my-3" />
              <div className="flex justify-between font-bold text-lg">
                <span>Razem</span>
                <span>{(freeShipping ? total : total + 15).toFixed(2)} zł</span>
              </div>
              <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">
                Przejdź do płatności
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
