import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const products = getProductsByCategory(category.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      <p className="text-muted-foreground mb-8">{category.description}</p>
      {products.length === 0 ? (
        <p className="text-muted-foreground">Brak produktów w tej kategorii.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
