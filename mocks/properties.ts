import { Property, Category } from "@/types/property";

export const categories: Category[] = [
  {
    id: "1",
    name: "Resorts",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 1520,
    type: "resort",
  },
  {
    id: "2",
    name: "Chalets",
    image:
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 2340,
    type: "chalet",
  },
  {
    id: "3",
    name: "Cottages",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 1267,
    type: "cottage",
  },
  {
    id: "4",
    name: "Hotels",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 8890,
    type: "hotel",
  },
  {
    id: "5",
    name: "Stadiums",
    image:
      "https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 452,
    type: "stadium",
  },
  {
    id: "6",
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 4024,
    type: "sport",
  },
];

export const featuredProperties: Property[] = [
  {
    id: "101",
    name: "Arabian Resort",
    location: "Al Thumamah, Riyadh",
    type: "resort",
    rating: 5,
    price: 250,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    friendsVisited: 3,
  },
  {
    id: "102",
    name: "Sunset Beach Resort",
    location: "Jeddah, Saudi Arabia",
    type: "resort",
    rating: 4,
    price: 180,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:
      "Enjoy the breathtaking sunset views at this beachfront resort. Perfect for a relaxing getaway with family and friends.",
    friendsVisited: 2,
  },
];

export const properties: Property[] = [
  ...featuredProperties,
  {
    id: "201",
    name: "Arabian Chalet",
    location: "Al Thumamah, Riyadh",
    type: "chalet",
    rating: 5,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:
      "Experience the beauty of winter in this cozy chalet surrounded by snow-covered landscapes. The perfect retreat for those seeking tranquility and natural beauty.",
    friendsVisited: 5,
  },
  {
    id: "202",
    name: "Mountain View Cottage",
    location: "Abha, Saudi Arabia",
    type: "cottage",
    rating: 4,
    price: 150,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:
      "A charming cottage nestled in the mountains, offering breathtaking views and a peaceful atmosphere.",
    friendsVisited: 1,
  },
  {
    id: "203",
    name: "Luxury Downtown Hotel",
    location: "Riyadh, Saudi Arabia",
    type: "hotel",
    rating: 5,
    price: 280,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:
      "Experience luxury in the heart of the city with modern amenities and exceptional service.",
    friendsVisited: 4,
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((property) => property.id === id);
};

export const getPropertiesByType = (type: Property["type"]): Property[] => {
  return properties.filter((property) => property.type === type);
};
