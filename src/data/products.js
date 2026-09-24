const products = [
  {
    id: 1,
    name: { en: "iPhone 15", ar: "آيفون 15" },
    category: "Phones",
    price: 45000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 10
  },
  {
    id: 2,
    name: { en: "Samsung Galaxy S24", ar: "سامسونج جالاكسي S24" },
    category: "Phones",
    price: 35000,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 15
  },
  {
    id: 3,
    name: { en: "Google Pixel 9", ar: "جوجل بيكسل 9" },
    category: "Phones",
    price: 39000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 12
  },
  {
    id: 4,
    name: { en: "Xiaomi 14", ar: "شاومي 14" },
    category: "Phones",
    price: 28000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    stock: 20
  },
  {
    id: 5,
    name: { en: "OnePlus 12", ar: "وان بلس 12" },
    category: "Phones",
    price: 32000,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 14
  },
  {
    id: 6,
    name: { en: "Huawei P60 Pro", ar: "هواوي P60 برو" },
    category: "Phones",
    price: 30000,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    stock: 8
  },

  {
    id: 7,
    name: { en: "MacBook Air", ar: "ماك بوك إير" },
    category: "Laptops",
    price: 65000,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    stock: 7
  },
  {
    id: 8,
    name: { en: "Dell XPS 15", ar: "ديل XPS 15" },
    category: "Laptops",
    price: 58000,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 9
  },
  {
    id: 9,
    name: { en: "HP Spectre x360", ar: "إتش بي Spectre x360" },
    category: "Laptops",
    price: 52000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 11
  },
  {
    id: 10,
    name: { en: "Lenovo ThinkPad", ar: "لينوفو ثينك باد" },
    category: "Laptops",
    price: 42000,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    stock: 13
  },

  {
    id: 11,
    name: { en: "Apple Watch", ar: "ساعة أبل" },
    category: "Watches",
    price: 22000,
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    stock: 12
  },
  {
    id: 12,
    name: { en: "Samsung Galaxy Watch", ar: "ساعة سامسونج جالاكسي" },
    category: "Watches",
    price: 12000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 18
  },
  {
    id: 13,
    name: { en: "Garmin Smartwatch", ar: "ساعة جارمن الذكية" },
    category: "Watches",
    price: 16000,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 10
  },

  {
    id: 14,
    name: { en: "Sony Headphones", ar: "سماعات سوني" },
    category: "Accessories",
    price: 8500,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 20
  },
  {
    id: 15,
    name: { en: "AirPods Pro", ar: "إيربودز برو" },
    category: "Accessories",
    price: 9500,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 25
  },
  {
    id: 16,
    name: { en: "Wireless Keyboard", ar: "كيبورد لاسلكي" },
    category: "Accessories",
    price: 2500,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    stock: 30
  },
  {
    id: 17,
    name: { en: "Gaming Mouse", ar: "ماوس جيمنج" },
    category: "Accessories",
    price: 1800,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 35
  },
  {
    id: 18,
    name: { en: "Laptop Backpack", ar: "حقيبة لابتوب" },
    category: "Accessories",
    price: 1500,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.1,
    stock: 22
  }
];

export default products;