import { NextResponse } from 'next/server';

// Mock data
const mockProducts = [
  {
    id: 1,
    name: "Sèche-cheveux Dyson",
    price: "349.99€",
    image: "https://cdn.pixabay.com/photo/2014/03/24/19/02/hairdryer-295617_1280.jpg",
    category: "Électronique",
    users: [
      { name: "Thomas", location: "France/Paris", avatar: "👨🏻‍🦱" },
      { name: "Sofia", location: "Maroc, Casablanca", avatar: "👩🏽" },
    ],
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    price: "1299.99€",
    image: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_1280.jpg",
    category: "Smartphone",
    users: [
      { name: "Jean", location: "États-Unis/New York", avatar: "👨🏼" },
      { name: "Maria", location: "Espagne, Madrid", avatar: "👱🏼‍♀️" },
    ],
  },
  {
    id: 3,
    name: "Lisseur GHD Platinum+",
    price: "269.99€",
    image: "https://cdn.pixabay.com/photo/2012/02/23/09/12/beauty-15932_1280.jpg",
    category: "Beauté",
    users: [
      { name: "Léa", location: "Allemagne/Berlin", avatar: "👩🏻‍🦰" },
      { name: "Karim", location: "Tunisie, Tunis", avatar: "👨🏽‍🦱" },
    ],
  },
  {
    id: 4,
    name: "Console PlayStation 5",
    price: "549.99€",
    image: "https://cdn.pixabay.com/photo/2017/04/09/12/00/gaming-2215601_1280.jpg",
    category: "Gaming",
    users: [
      { name: "Lucas", location: "Japon/Tokyo", avatar: "👨🏻" },
      { name: "Ines", location: "Algérie, Alger", avatar: "👩🏽‍🦱" },
    ],
  },
  {
    id: 5,
    name: "Nike Air Jordan 4",
    price: "199.99€",
    image: "https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992_1280.jpg",
    category: "Mode",
    users: [
      { name: "Alex", location: "Royaume-Uni/Londres", avatar: "🧑🏼" },
      { name: "Yasmine", location: "Égypte, Le Caire", avatar: "👩🏾‍🦱" },
    ],
  },
  {
    id: 6,
    name: "MacBook Air M3",
    price: "1199.99€",
    image: "https://cdn.pixabay.com/photo/2015/12/15/03/56/macbook-1093641_1280.jpg",
    category: "Informatique",
    users: [
      { name: "Pierre", location: "Canada/Toronto", avatar: "👨🏻‍🦰" },
      { name: "Amina", location: "Sénégal, Dakar", avatar: "👩🏿" },
    ],
  },
  {
    id: 7,
    name: "Casque Bose",
    price: "299.99€",
    image: "https://cdn.pixabay.com/photo/2017/08/10/04/07/bose-2618027_1280.jpg",
    category: "Audio",
    users: [
      { name: "Emma", location: "Australie/Sydney", avatar: "👩🏻" },
      { name: "Liam", location: "Irlande, Dublin", avatar: "👨🏻" },
    ],
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      products: mockProducts,
      success: true,
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching recent orders:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la récupération des commandes récentes', success: false },
      { status: 500 }
    );
  }
}