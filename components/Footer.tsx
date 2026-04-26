"use client";

import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-rose-600 mb-3">Bez Spinki</h3>
            <p className="text-sm text-muted-foreground">
              Moda plus size dla kobiet, które kochają swój styl. Duże rozmiary, duża dawka pewności siebie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kategorie</h4>
            <ul className="space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/kategoria/${c.slug}`} className="text-muted-foreground hover:text-rose-600 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Pomoc</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Darmowa dostawa od 200 zł</li>
              <li>Zwroty do 14 dni</li>
              <li>Płatność BLIK / Przelewy24</li>
              <li>InPost Paczkomaty</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bez Spinki. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
