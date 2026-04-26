import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";
import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const products = getAllProducts().slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-rose-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            Bez Spinki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Moda plus size dla kobiet, które kochają swój styl. Rozmiary XL–6XL.
            Darmowa dostawa od 200 zł.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kategoria/sukienki" className="inline-flex items-center justify-center rounded-lg bg-rose-600 text-white h-9 px-4 text-sm font-medium hover:bg-rose-700 transition-colors">
              Przeglądaj sukienki
            </Link>
            <Link href="/kategoria/bluzki-i-tuniki" className="inline-flex items-center justify-center rounded-lg border h-9 px-4 text-sm font-medium hover:bg-muted transition-colors">
              Nowości
            </Link>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-6 w-6 text-rose-600" />
              <p className="font-medium">Darmowa dostawa od 200 zł</p>
              <p className="text-sm text-muted-foreground">InPost Paczkomaty</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RotateCcw className="h-6 w-6 text-rose-600" />
              <p className="font-medium">14 dni na zwrot</p>
              <p className="text-sm text-muted-foreground">Bez podania przyczyny</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-rose-600" />
              <p className="font-medium">Bezpieczne płatności</p>
              <p className="text-sm text-muted-foreground">BLIK, Przelewy24, PayU</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Kategorie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/kategoria/${c.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Polecane produkty</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/kategoria/sukienki" className="inline-flex items-center justify-center rounded-lg border h-9 px-4 text-sm font-medium hover:bg-muted transition-colors">
              Zobacz wszystkie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
