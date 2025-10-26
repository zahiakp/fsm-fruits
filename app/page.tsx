'use client'
import React from 'react';
import { ShoppingCart, Leaf, Award, Heart, ChevronRight } from 'lucide-react';
import { featuredProducts, heroImage, aboutImage, storeInfo, addToCart } from '../data/demo'; 
import { toast } from 'sonner';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/About';
import CtaSection from '@/components/home/CAT';
import FeaturedProductsSection from '@/components/home/Products';




export interface Product {
  id: string | number;
  name: string;
  image: string;
  inStock: boolean;
  description: string;
  price: number;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}


export interface StoreInfo {
  tagline: string;
  whatsapp: string;
}


const typedStoreInfo = storeInfo as StoreInfo;
const typedFeaturedProducts = featuredProducts as Product[];



interface HomepageProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeroSectionProps {
  onShopClick: () => void;
}

export interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export interface AboutSectionProps {
}

interface CtaSectionProps {
  onExploreClick: () => void;
}



















const Homepage: React.FC<HomepageProps> = ({ isCartOpen, setIsCartOpen }) => {
  


  

  const handleAddToCart = (product: Product) => {
    const updatedCart = addToCart(product) as CartItem[];
    
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${product.name} added to cart!`);
  };


  

  

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero/>
      <FeaturedProductsSection
        products={typedFeaturedProducts}
        onAddToCart={handleAddToCart}
      />
      <AboutSection/>
      <CtaSection/>
    </div>
  );
};

export default Homepage;