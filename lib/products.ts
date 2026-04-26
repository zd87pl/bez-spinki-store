export interface Product {
  id: string;
  title: string;
  handle: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  sizes: string[];
  description: string;
  available: boolean;
}

export const fallbackProducts: Product[] = [
  // Sukienki (12)
  {
    id: "prod-1", title: "Sukienka maxi w kwiaty", handle: "sukienka-maxi-w-kwiaty",
    category: "sukienki", price: 129, compareAtPrice: 179,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL"], description: "Zwiewna sukienka maxi w kwiatowy wzór. Idealna na wiosnę i lato.", available: true,
  },
  {
    id: "prod-2", title: "Sukienka wieczorowa czarna", handle: "sukienka-wieczorowa-czarna",
    category: "sukienki", price: 199, compareAtPrice: 259,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Elegancka czarna sukienka wieczorowa. Doskonała na wyjścia.", available: true,
  },
  {
    id: "prod-3", title: "Sukienka casual z kieszeniami", handle: "sukienka-casual-kieszenie",
    category: "sukienki", price: 99, compareAtPrice: 139,
    image: "https://images.unsplash.com/photo-1485968579169-4f93cc7a0ec3?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1485968579169-4f93cc7a0ec3?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Wygodna sukienka na co dzień z praktycznymi kieszeniami.", available: true,
  },
  {
    id: "prod-4", title: "Sukienka ołówkowa czerwona", handle: "sukienka-olowkowa-czerwona",
    category: "sukienki", price: 149, compareAtPrice: 199,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL"], description: "Klasyczna sukienka ołówkowa w odważnym czerwonym kolorze.", available: true,
  },
  {
    id: "prod-5", title: "Sukienka boho w stylu etno", handle: "sukienka-boho-etno",
    category: "sukienki", price: 119, compareAtPrice: 159,
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Zwiewna sukienka w stylu boho z etnicznym wzorem.", available: true,
  },
  {
    id: "prod-6", title: "Sukienka koktajlowa granatowa", handle: "sukienka-koktajlowa-granatowa",
    category: "sukienki", price: 179, compareAtPrice: 239,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Elegancka sukienka koktajlowa w głębokim granacie.", available: true,
  },
  {
    id: "prod-7", title: "Sukienka letnia w paski", handle: "sukienka-letnia-paski",
    category: "sukienki", price: 89, compareAtPrice: 119,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Lekka letnia sukienka w marynarskie paski.", available: true,
  },
  {
    id: "prod-8", title: "Sukienka z dekoltem V", handle: "sukienka-dekolt-v",
    category: "sukienki", price: 109, compareAtPrice: 149,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL"], description: "Kobieca sukienka z dekoltem w serek. Wygoda i styl.", available: true,
  },
  {
    id: "prod-9", title: "Sukienka dzianinowa szara", handle: "sukienka-dzianinowa-szara",
    category: "sukienki", price: 139, compareAtPrice: 189,
    image: "https://images.unsplash.com/photo-1485968579169-4f93cc7a0ec3?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1485968579169-4f93cc7a0ec3?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Miękka dzianinowa sukienka w uniwersalnym szarym kolorze.", available: true,
  },
  {
    id: "prod-10", title: "Sukienka koronkowa bordo", handle: "sukienka-koronkowa-bordo",
    category: "sukienki", price: 169, compareAtPrice: 229,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Romantyczna sukienka koronkowa w kolorze bordowym.", available: true,
  },
  {
    id: "prod-11", title: "Sukienka kopertowa zielona", handle: "sukienka-kopertowa-zielona",
    category: "sukienki", price: 129, compareAtPrice: 169,
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL"], description: "Stylowa sukienka kopertowa w żywej zieleni.", available: true,
  },
  {
    id: "prod-12", title: "Sukienka plisowana beżowa", handle: "sukienka-plisowana-bezowa",
    category: "sukienki", price: 159, compareAtPrice: 209,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Elegancka plisowana sukienka w ciepłym beżu.", available: true,
  },
  // Bluzki i tuniki (3)
  {
    id: "prod-13", title: "Bluzka szyfonowa biała", handle: "bluzka-szyfonowa-biala",
    category: "bluzki", price: 79, compareAtPrice: 109,
    image: "https://images.unsplash.com/photo-1589810635657-fc98b91c16e1?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1589810635657-fc98b91c16e1?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Lekka szyfonowa bluzka. Idealna do pracy i na spotkania.", available: true,
  },
  {
    id: "prod-14", title: "Tunika długa w kratę", handle: "tunika-dluga-krata",
    category: "bluzki", price: 89, compareAtPrice: 119,
    image: "https://images.unsplash.com/photo-1551163943-3f6a29e39426?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1551163943-3f6a29e39426?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Długa tunika w klasyczną kratę. Świetna z legginsami.", available: true,
  },
  {
    id: "prod-15", title: "Bluzka z falbankami różowa", handle: "bluzka-falbanki-rozowa",
    category: "bluzki", price: 69, compareAtPrice: 99,
    image: "https://images.unsplash.com/photo-1589810635657-fc98b91c16e1?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1589810635657-fc98b91c16e1?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL"], description: "Kobieca bluzka z falbankami w delikatnym różu.", available: true,
  },
  // Spodnie (1)
  {
    id: "prod-16", title: "Spodnie cygaretki czarne", handle: "spodnie-cygaretki-czarne",
    category: "spodnie", price: 119, compareAtPrice: 159,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad7f75f06?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad7f75f06?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Klasyczne czarne cygaretki. Must have w szafie.", available: true,
  },
  // Bluzy i dresy (2)
  {
    id: "prod-17", title: "Bluza oversize szara", handle: "bluza-oversize-szara",
    category: "bluzy", price: 99, compareAtPrice: 139,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47df?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47df?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Wygodna bluza oversize. Idealna na chłodniejsze dni.", available: true,
  },
  {
    id: "prod-18", title: "Dres welurowy brązowy", handle: "dres-welurowy-brazowy",
    category: "bluzy", price: 149, compareAtPrice: 199,
    image: "https://images.unsplash.com/photo-1578587018452-892b8fd30dae?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1578587018452-892b8fd30dae?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Elegancki welurowy dres w kolorze brązowym.", available: true,
  },
  // Okrycia wierzchnie (1)
  {
    id: "prod-19", title: "Płaszcz trencz beżowy", handle: "plaszcz-trencz-bezowy",
    category: "okrycia", price: 249, compareAtPrice: 329,
    image: "https://images.unsplash.com/photo-1539533018447-1fc9b6c3b8b5?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1539533018447-1fc9b6c3b8b5?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL"], description: "Klasyczny trencz w beżu. Elegancja na każdą okazję.", available: true,
  },
  // Spódnice (1)
  {
    id: "prod-20", title: "Spódnica midi czarna", handle: "spodnica-midi-czarna",
    category: "spodnice", price: 89, compareAtPrice: 119,
    image: "https://images.unsplash.com/photo-1583496661160-fb0336cc319f?auto=format&fit=crop&w=400&h=600",
    images: ["https://images.unsplash.com/photo-1583496661160-fb0336cc319f?auto=format&fit=crop&w=400&h=600"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Uniwersalna czarna spódnica midi. Pasuje do wszystkiego.", available: true,
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return fallbackProducts.filter((p) => p.category === slug);
}

export function getAllProducts(): Product[] {
  return fallbackProducts;
}

export function getProductByHandle(handle: string): Product | undefined {
  return fallbackProducts.find((p) => p.handle === handle);
}
