"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/produkt/${product.handle}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-rose-600 hover:bg-rose-700">
              -{discount}%
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-3">
        <Link href={`/produkt/${product.handle}`}>
          <h3 className="text-sm font-medium line-clamp-2 group-hover:text-rose-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-rose-600">{product.price} zł</span>
          {product.compareAtPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.compareAtPrice} zł
            </span>
          )}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Rozmiar: {product.sizes.join(", ")}
        </div>
      </CardContent>
    </Card>
  );
}
