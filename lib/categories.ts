export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "sukienki",
    name: "Sukienki",
    slug: "sukienki",
    description: "Eleganckie i casualowe sukienki w rozmiarach XL–6XL",
    image: "https://images.unsplash.com/photo-1539008835657-9e6ccbda9a55?auto=format&fit=crop&w=600&h=400",
  },
  {
    id: "bluzki",
    name: "Bluzki i tuniki",
    slug: "bluzki-i-tuniki",
    description: "Stylowe bluzki i tuniki dla kobiet z krągłościami",
    image: "https://images.unsplash.com/photo-1551163943-3f6a29e39426?auto=format&fit=crop&w=600&h=400",
  },
  {
    id: "spodnie",
    name: "Spodnie",
    slug: "spodnie",
    description: "Wygodne spodnie w dużych rozmiarach",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad7f75f06?auto=format&fit=crop&w=600&h=400",
  },
  {
    id: "bluzy",
    name: "Bluzy i dresy",
    slug: "bluzy-i-dresy",
    description: "Sportowe bluzy i dresy na co dzień",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47df?auto=format&fit=crop&w=600&h=400",
  },
  {
    id: "okrycia",
    name: "Okrycia wierzchnie",
    slug: "okrycia-wierzchnie",
    description: "Kurtki i płaszcze w rozmiarach plus size",
    image: "https://images.unsplash.com/photo-1539533018447-1fc9b6c3b8b5?auto=format&fit=crop&w=600&h=400",
  },
  {
    id: "spodnice",
    name: "Spódnice",
    slug: "spodnice",
    description: "Kobiece spódnice w dużych rozmiarach",
    image: "https://images.unsplash.com/photo-1583496661160-fb0336cc319f?auto=format&fit=crop&w=600&h=400",
  },
];

export const sizeOptions = ["XL", "2XL", "3XL", "4XL", "5XL", "6XL"];
