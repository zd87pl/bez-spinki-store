"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/categories";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-rose-600">
          <span className="text-2xl">Bez Spinki</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/kategoria/${c.slug}`}
              className="transition-colors hover:text-rose-600"
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/koszyk">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Koszyk</span>
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Kategorie
                </p>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/kategoria/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-rose-600"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
