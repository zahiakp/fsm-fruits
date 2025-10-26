// Mock data for KSM FRUITS website

import { Product } from "@/app/page";

export const storeInfo = {
  name: "KSM FRUITS, UDUPI",
  tagline: "Where Freshness Meets Flavor! Straight from farms to your table.",
  phone: "+91 98765 43210",
  email: "contact@ksmfruits.com",
  whatsapp: "+919876543210",
  socialMedia: {
    facebook: "https://facebook.com/ksmfruits",
    instagram: "https://instagram.com/ksmfruits",
    whatsapp: "https://wa.me/+919876543210"
  },
  locations: [
    {
      id: 1,
      name: "Main Store - Udupi",
      address: "123, Main Road, Udupi, Karnataka - 576101",
      mapLink: "https://maps.google.com"
    },
    {
      id: 2,
      name: "Branch - Manipal",
      address: "456, MIT Circle, Manipal, Karnataka - 576104",
      mapLink: "https://maps.google.com"
    },
    {
      id: 3,
      name: "Branch - Mangalore",
      address: "789, KS Rao Road, Mangalore, Karnataka - 575001",
      mapLink: "https://maps.google.com"
    }
  ]
};

export const categories = [
  { id: 'all', name: 'All Fruits' },
  { id: 'tropical', name: 'Tropical' },
  { id: 'berries', name: 'Berries' },
  { id: 'citrus', name: 'Citrus' },
  { id: 'seasonal', name: 'Seasonal' },
  { id: 'exotic', name: 'Exotic' }
];

export const allProducts = [
  {
    id: 1,
    name: "Premium Green Apples",
    price: 180,
    originalPrice: 200,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1661601876847-a24a1d99eb90",
    description: "Crisp and sweet green apples, handpicked for quality",
    category: "seasonal",
    inStock: true,
    isOffer: true,
    isPopular: true,
    discount: 10
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 250,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1529082790703-f8a22cd2c208",
    description: "Juicy, farm-fresh strawberries perfect for desserts",
    category: "berries",
    inStock: true,
    isPopular: true,
    isSeasonal: true
  },
  {
    id: 3,
    name: "Tropical Fruit Mix",
    price: 200,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
    description: "A delicious mix of oranges, grapes, and tropical fruits",
    category: "tropical",
    inStock: true,
    isPopular: true
  },
  {
    id: 4,
    name: "Assorted Berries",
    price: 300,
    originalPrice: 350,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1444459094717-a39f1e3e0903",
    description: "Premium berries bursting with flavor and nutrients",
    category: "berries",
    inStock: true,
    isOffer: true,
    discount: 14
  },
  {
    id: 5,
    name: "Fresh Papaya",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305",
    description: "Ripe, sweet papayas rich in vitamins",
    category: "tropical",
    inStock: true,
    isSeasonal: true
  },
  {
    id: 6,
    name: "Mixed Fruit Bowl",
    price: 220,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1712495023077-87b30e5ba50a",
    description: "Perfect blend of apples, oranges and seasonal fruits",
    category: "seasonal",
    inStock: true
  },
  {
    id: 7,
    name: "Local Alphonso Mango",
    price: 280,
    originalPrice: 320,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    description: "Premium Alphonso mangoes, the king of fruits",
    category: "tropical",
    inStock: true,
    isOffer: true,
    isPopular: true,
    isSeasonal: true,
    discount: 13
  },
  {
    id: 8,
    name: "Sweet Oranges",
    price: 90,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    description: "Juicy, sweet oranges packed with Vitamin C",
    category: "citrus",
    inStock: true,
    isPopular: true
  },
  {
    id: 9,
    name: "Fresh Bananas",
    price: 50,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    description: "Premium quality bananas, fresh from farms",
    category: "tropical",
    inStock: true,
    isPopular: true
  },
  {
    id: 10,
    name: "Red Grapes",
    price: 120,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
    description: "Sweet, seedless red grapes",
    category: "seasonal",
    inStock: true
  },
  {
    id: 11,
    name: "Watermelon",
    price: 40,
    originalPrice: 50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784422",
    description: "Fresh, juicy watermelons perfect for summer",
    category: "seasonal",
    inStock: true,
    isOffer: true,
    isSeasonal: true,
    discount: 20
  },
  {
    id: 12,
    name: "Pineapple",
    price: 60,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9",
    description: "Sweet and tangy tropical pineapples",
    category: "tropical",
    inStock: true,
    isSeasonal: true
  },
  {
    id: 13,
    name: "Dragon Fruit",
    price: 180,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888",
    description: "Exotic dragon fruit with unique taste",
    category: "exotic",
    inStock: true
  },
  {
    id: 14,
    name: "Kiwi Fruit",
    price: 240,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a",
    description: "Fresh, tangy kiwis rich in nutrients",
    category: "exotic",
    inStock: true
  },
  {
    id: 15,
    name: "Pomegranate",
    price: 150,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe",
    description: "Sweet pomegranates full of antioxidants",
    category: "seasonal",
    inStock: true,
    isPopular: true
  },
  {
    id: 16,
    name: "Fresh Blueberries",
    price: 400,
    originalPrice: 450,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
    description: "Premium imported blueberries",
    category: "berries",
    inStock: true,
    isOffer: true,
    discount: 11
  },
  {
    id: 17,
    name: "Sweet Lime (Mosambi)",
    price: 70,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562",
    description: "Fresh sweet lime, perfect for juice",
    category: "citrus",
    inStock: true
  },
  {
    id: 18,
    name: "Guava",
    price: 60,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46",
    description: "Fresh, aromatic guavas",
    category: "tropical",
    inStock: false
  },
  {
    id: 19,
    name: "Custard Apple",
    price: 120,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
    description: "Sweet custard apples with creamy texture",
    category: "seasonal",
    inStock: true,
    isSeasonal: true
  },
  {
    id: 20,
    name: "Fresh Lemon",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587486937292-e42bb7ffe233",
    description: "Tangy, fresh lemons for your kitchen",
    category: "citrus",
    inStock: true
  }
];

export const featuredProducts = allProducts.slice(0, 6);

export const todaysOffers = allProducts.filter(p => p.isOffer);
export const seasonalSpecials = allProducts.filter(p => p.isSeasonal);
export const popularProducts = allProducts.filter(p => p.isPopular);

export const heroImage = "https://images.unsplash.com/photo-1498579397066-22750a3cb424";
export const aboutImage = "https://images.unsplash.com/photo-1550989460-0adf9ea622e2";

// Cart management (using localStorage)
export const getCart = () => {
  const cart = localStorage.getItem('ksmFruitsCart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: { id: number; quantity: number }[]) => {
  localStorage.setItem('ksmFruitsCart', JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find((item: { id: number }) => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: number|string) => {
  let cart = getCart();
  cart = cart.filter((item: { id: number }) => item.id !== productId);
  saveCart(cart);
  return cart;
};

export const updateCartQuantity = (productId: number|string, quantity: number) => {
  const cart = getCart();
  const item = cart.find((item: { id: number }) => item.id === productId);
  
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
  
  return cart;
};

export const clearCart = () => {
  localStorage.removeItem('ksmFruitsCart');
  return [];
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total: number, item: { price: number; quantity: number }) => total + (item.price * item.quantity), 0);
};

export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce((count: number, item: { quantity: number }) => count + item.quantity, 0);
};