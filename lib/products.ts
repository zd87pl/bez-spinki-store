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
  { id: "prod-1", title: "Sukienka maxi w kwiaty", handle: "sukienka-maxi-w-kwiaty",
    category: "sukienki", price: 42, compareAtPrice: 50,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-2", title: "Sukienka wieczorowa czarna", handle: "sukienka-wieczorowa-czarna",
    category: "sukienki", price: 66, compareAtPrice: 79,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/2E/D0/3cd7b09c-1459-4bad-a81c-1c26e127dc4c.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/2E/D0/3cd7b09c-1459-4bad-a81c-1c26e127dc4c.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-3", title: "Sukienka casual z kieszeniami", handle: "sukienka-casual-z-kieszeniami",
    category: "sukienki", price: 30, compareAtPrice: 36,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/26/7B/2902f7f1-abdf-4ae5-a809-6d244c577ded.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/26/7B/2902f7f1-abdf-4ae5-a809-6d244c577ded.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-4", title: "Sukienka ołówkowa czerwona", handle: "sukienka-olowkowa-czerwona",
    category: "sukienki", price: 50, compareAtPrice: 60,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/54/07/523d1785-2840-49eb-86bc-b70eb3099c1e.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/54/07/523d1785-2840-49eb-86bc-b70eb3099c1e.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-5", title: "Sukienka boho w stylu etno", handle: "sukienka-boho-w-stylu-etno",
    category: "sukienki", price: 35, compareAtPrice: 42,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/BF/51/d3e7545d-3279-4b52-8a40-1b7c0cdab9ad.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/BF/51/d3e7545d-3279-4b52-8a40-1b7c0cdab9ad.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-6", title: "Sukienka koktajlowa granatowa", handle: "sukienka-koktajlowa-granatowa",
    category: "sukienki", price: 60, compareAtPrice: 72,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E3/26/3630352e-eeff-4267-a1dd-c105637f7847.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E3/26/3630352e-eeff-4267-a1dd-c105637f7847.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-7", title: "Sukienka letnia w paski", handle: "sukienka-letnia-w-paski",
    category: "sukienki", price: 33, compareAtPrice: 40,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-8", title: "Sukienka z dekoltem V", handle: "sukienka-z-dekoltem-v",
    category: "sukienki", price: 45, compareAtPrice: 54,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/2E/D0/3cd7b09c-1459-4bad-a81c-1c26e127dc4c.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/2E/D0/3cd7b09c-1459-4bad-a81c-1c26e127dc4c.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji sukienki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-9", title: "Bluzka szyfonowa biała", handle: "bluzka-szyfonowa-biala",
    category: "bluzki", price: 25, compareAtPrice: 30,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji bluzki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-10", title: "Tunika długa w kratę", handle: "tunika-dluga-w-kratę",
    category: "bluzki", price: 34, compareAtPrice: 41,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/39/1F/2d303ff6-01fe-45e3-86b0-3a00cef6f761.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/39/1F/2d303ff6-01fe-45e3-86b0-3a00cef6f761.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji bluzki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-11", title: "Bluzka z falbankami różowa", handle: "bluzka-z-falbankami-rozowa",
    category: "bluzki", price: 23, compareAtPrice: 28,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/40/DB/9f039586-406b-404a-8fd9-11409a148952.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/40/DB/9f039586-406b-404a-8fd9-11409a148952.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji bluzki. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-12", title: "Spodnie cygaretki czarne", handle: "spodnie-cygaretki-czarne",
    category: "spodnie", price: 39, compareAtPrice: 47,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/21/2223fcee-8489-43a6-8646-4d44440c442f.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji spodnie. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-13", title: "Spodnie dżinsowe ciemne", handle: "spodnie-dzinsowe-ciemne",
    category: "spodnie", price: 48, compareAtPrice: 58,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/43/46/0cb91e85-3b5a-4546-8c79-08366ed1ef99.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/43/46/0cb91e85-3b5a-4546-8c79-08366ed1ef99.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji spodnie. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-14", title: "Bluza oversize szara", handle: "bluza-oversize-szara",
    category: "bluzy", price: 33, compareAtPrice: 40,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/43/46/0cb91e85-3b5a-4546-8c79-08366ed1ef99.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/43/46/0cb91e85-3b5a-4546-8c79-08366ed1ef99.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji bluzy. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-15", title: "Dres welurowy brązowy", handle: "dres-welurowy-brazowy",
    category: "bluzy", price: 54, compareAtPrice: 65,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/16/30/0bf887e1-aed8-47d3-86da-5f2a1d3dc02f.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/16/30/0bf887e1-aed8-47d3-86da-5f2a1d3dc02f.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji bluzy. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-16", title: "Płaszcz trencz beżowy", handle: "plaszcz-trencz-bezowy",
    category: "okrycia", price: 90, compareAtPrice: 108,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/20/C3/b1cf1eb4-4580-4990-96da-87e01b900b4c.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/20/C3/b1cf1eb4-4580-4990-96da-87e01b900b4c.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji okrycia. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-17", title: "Spódnica midi czarna", handle: "spodnica-midi-czarna",
    category: "spodnice", price: 28, compareAtPrice: 34,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/39/1F/2d303ff6-01fe-45e3-86b0-3a00cef6f761.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/39/1F/2d303ff6-01fe-45e3-86b0-3a00cef6f761.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji spodnice. Dostępny w rozmiarach XL-6XL.", available: true },
  { id: "prod-18", title: "Spódnica plisowana beżowa", handle: "spodnica-plisowana-bezowa",
    category: "spodnice", price: 34, compareAtPrice: 41,
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/C7/D7/5a6d5a44-01a6-47c0-85ea-a350c0b94817.jpg.webp",
    images: ["https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/C7/D7/5a6d5a44-01a6-47c0-85ea-a350c0b94817.jpg.webp"],
    sizes: ["XL","2XL","3XL","4XL","5XL","6XL"], description: "Stylowy produkt z kolekcji spodnice. Dostępny w rozmiarach XL-6XL.", available: true },
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