"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductByHandle } from "@/lib/products";
import { categories } from "@/lib/categories";
import { ShoppingBag, Truck, RotateCcw } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const handle = params.handle as string;
  const product = getProductByHandle(handle);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  if (!product) return notFound();

  const category = categories.find((c) => c.id === product.category);
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  function addToCart() {
    if (!selectedSize || !product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find(
      (i: any) => i.id === product.id && i.size === selectedSize
    );
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        handle: product.handle,
        image: product.image,
        price: product.price,
        size: selectedSize,
        qty: 1,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-rose-600">Strona główna</Link>
        {" / "}
        {category && (
          <Link href={`/kategoria/${category.slug}`} className="hover:text-rose-600">
            {category.name}
          </Link>
        )}
        {" / "}
        <span className="text-foreground">{product.title}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-rose-600 text-base px-3 py-1">
              -{discount}%
            </Badge>
          )}
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-rose-600">{product.price} zł</span>
            {product.compareAtPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {product.compareAtPrice} zł
              </span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          <div>
            <p className="text-sm font-medium mb-2">Wybierz rozmiar:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                    selectedSize === s
                      ? "border-rose-600 bg-rose-50 text-rose-600"
                      : "border-gray-200 hover:border-rose-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={addToCart}
            disabled={!selectedSize}
            className="w-full md:w-auto min-w-[200px] bg-rose-600 hover:bg-rose-700 h-12 text-base"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            {added ? "Dodano do koszyka!" : "Dodaj do koszyka"}
          </Button>

          <Separator />

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-rose-600 mt-0.5" />
              <div>
                <p className="font-medium">Darmowa dostawa</p>
                <p className="text-muted-foreground">od 200 zł</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RotateCcw className="h-5 w-5 text-rose-600 mt-0.5" />
              <div>
                <p className="font-medium">14 dni na zwrot</p>
                <p className="text-muted-foreground">bez podania przyczyny</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
