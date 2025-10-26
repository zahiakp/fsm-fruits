"use client"; // Required for Next.js App Router

import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Grid3x3,
  List,
  ShoppingCart,
  Tag,
  TrendingUp,
  Sparkles,
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  LucideIcon, // Renamed to avoid conflicts
} from 'lucide-react'; // Assuming these mocks provide typed data or 'any'
import { toast } from 'sonner';
import { addToCart, allProducts, categories, getCart, getCartTotal, popularProducts, removeFromCart, seasonalSpecials, storeInfo, todaysOffers, updateCartQuantity } from '@/data/demo';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

// --- Type Definitions ---

interface ProductType {
  // IDs in the demo data may be numbers or strings, allow both to avoid invalid casts.
  id: string | number;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  unit: string;
  inStock: boolean;
  category: string;
  isOffer: boolean;
  discount?: number;
  isPopular: boolean;
}

interface CartItemType extends ProductType {
  quantity: number;
}

interface CategoryType {
  // Category ids may also be numeric in some demo datasets
  id: string | number;
  name: string;
}

interface StoreInfoType {
  whatsapp: string;
}

// Props for the main component
interface OurFruitsProps {
}

// Specific types for state
type SortByType = 'popular' | 'price-low' | 'price-high' | 'name';
type ViewModeType = 'grid' | 'list';

// --- Component ---

const OurFruits: React.FC<OurFruitsProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string|number>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortByType>('popular');
  const [viewMode, setViewMode] = useState<ViewModeType>('grid');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    // Assuming getCart() returns CartItemType[]
    setCart(getCart());
    window.scrollTo(0, 0);
  }, []);

  // --- Cart Handlers ---

  const handleAddToCart = (product: ProductType) => {
    // Assuming addToCart takes ProductType and returns CartItemType[]
    const updatedCart = addToCart(product);
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${product.name} added to cart!`);
  const handleRemoveFromCart = (productId: string | number) => {
    // Assuming removeFromCart accepts string | number and returns CartItemType[]
    const updatedCart = removeFromCart(productId);
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success('Item removed from cart');
  };

  const handleUpdateQuantity = (productId: string | number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    // Assuming updateCartQuantity accepts string | number and returns CartItemType[]
    const updatedCart = updateCartQuantity(productId, newQuantity);
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    let message = `Hello! I'd like to order the following items:\n\n`;
    cart.forEach((item) => {
      message += `• ${item.name} - ${item.quantity} ${item.unit} @ ₹${item.price}/${item.unit} = ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${getCartTotal()}\n\nThank you!`; // Assuming getCartTotal() returns number

    // Assuming storeInfo is of type StoreInfoType
    const whatsappUrl = `https://wa.me/${(storeInfo as StoreInfoType).whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --- Product Filtering & Sorting ---

  const filteredProducts = useMemo(() => {
    // Assuming allProducts is ProductType[]
    let products: ProductType[] = [...(allProducts as ProductType[])];

    if (searchQuery) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }

    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (showInStockOnly) {
      products = products.filter(p => p.inStock);
    }

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popular':
        products.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
      default:
        break;
    }

    return products;
  }, [searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  // --- Sub-components (Typed) ---

  interface ProductCardProps {
    product: ProductType;
    isListView?: boolean;
  }

  const ProductCard: React.FC<ProductCardProps> = ({ product, isListView = false }) => (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
        isListView ? 'flex flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${isListView ? 'w-48 h-48' : 'h-56'}`}>
        <Image height={200} width={200}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.inStock ? (
          <span className="absolute top-4 right-4 bg-[#285430] text-white px-3 py-1 rounded-full text-sm font-semibold">
            In Stock
          </span>
        ) : (
          <span className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Out of Stock
          </span>
        )}
        {product.isOffer && (
          <span className="absolute top-4 left-4 bg-[#FF7B00] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.discount}% OFF
          </span>
        )}
      </div>

      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-[#285430] bg-[#285430]/10 px-2 py-1 rounded">
            {/* Assuming categories is CategoryType[] */}
            {(categories as CategoryType[]).find(c => c.id === product.category)?.name}
          </span>
          {product.isPopular && (
            <span className="text-xs font-semibold text-[#FF7B00] bg-[#FF7B00]/10 px-2 py-1 rounded">
              Popular
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            {product.isOffer && product.originalPrice ? (
              <div>
                <span className="text-2xl font-bold text-[#FF7B00]">
                  ₹{product.price}
                </span>
                <span className="text-gray-400 line-through ml-2 text-sm">
                  ₹{product.originalPrice}
                </span>
                <span className="text-gray-600 ml-1 text-sm">/ {product.unit}</span>
              </div>
            ) : (
              <div>
                <span className="text-2xl font-bold text-[#FF7B00]">
                  ₹{product.price}
                </span>
                <span className="text-gray-600 ml-1">/ {product.unit}</span>
              </div>
            )}
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            disabled={!product.inStock}
            className="bg-[#285430] flex items-center cursor-pointer hover:bg-[#1f4024] text-white text-sm rounded-full px-4 py-2 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add
          </button>
        </div>
      </div>
    </div>
  );

  interface SpecialSectionProps {
    title: string;
    icon: LucideIcon; // Use the imported LucideIcon type
    products: ProductType[];
    color: string;
  }

  const SpecialSection: React.FC<SpecialSectionProps> = ({ title, icon: Icon, products, color }) => (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
          <Icon size={24} style={{ color }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  // --- Render ---

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Fresh Fruits Collection
          </h1>
          <p className="text-lg text-gray-600">
            Explore our wide variety of farm-fresh fruits
          </p>
        </div> */}


{/* Special Sections */}
        {/* {!searchQuery && selectedCategory === 'all' && ( */}
          <div className="my-16">
            {(todaysOffers as ProductType[]).length > 0 && (
              <SpecialSection
                title="Today's Special Offers"
                icon={Tag}
                products={todaysOffers as ProductType[]}
                color="#FF7B00"
              />
            )}

            {(seasonalSpecials as ProductType[]).length > 0 && (
              <SpecialSection
                title="Seasonal Specials"
                icon={Sparkles}
                products={seasonalSpecials as ProductType[]}
                color="#FBCB0A"
              />
            )}

            {(popularProducts as ProductType[]).length > 0 && (
              <SpecialSection
                title="Most Popular"
                icon={TrendingUp}
                products={popularProducts as ProductType[]}
                color="#285430"
              />
            )}
          </div>
        {/* )} */}



        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search fruits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 w-full rounded-lg border border-gray-300 hover:outline-emerald-800"
              />
            </div>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortByType)}>
              <SelectTrigger className="w-full lg:w-48 h-12 rounded-lg border-gray-200 outline-gray-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className='bg-white border-gray-200'>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 bg-gray-100 rounded-lg p-1.5">
              <button
                // variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                className={`${viewMode === 'grid' ? 'bg-white' : ''} rounded-lg flex items-center justify-center h-10 w-10`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                // variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className={`${viewMode === 'list' ? 'bg-white' : ''} rounded-lg flex items-center justify-center h-10 w-10`}
              >
                <List size={20} />
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 px-4 flex items-center border border-gray-300 rounded-lg"
            >
              <SlidersHorizontal size={20} className="mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 relative">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-sm font-semibold mb-3 block">Category</label>
                  <div className={`space-y-2 grid md:grid-cols-6 gap-2`}>
                    {(categories as CategoryType[]).map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-center px-5 py-3 rounded-lg transition-colors duration-200 ${
                          selectedCategory === cat.id
                            ? 'bg-[#285430] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div>
                  <label className="text-sm font-semibold mb-3 block">
                    Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <div className="px-2 pt-2">
                    <Slider
                      value={priceRange}
                      // shadcn Slider onValueChange returns number[], not [number, number]
                      onValueChange={(value) => setPriceRange([value[0], value[1]])}
                      min={0}
                      max={500}
                      step={10}
                      className="mb-4 bg-primary rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹0</span>
                    <span>₹500</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-3 block">Availability</label>
                  <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg">
                    <Switch
                      checked={showInStockOnly}
                      onCheckedChange={setShowInStockOnly}
                    />
                    <label className="cursor-pointer">Show in stock only</label>
                  </div>
                </div><div className='flex items-end'><button
                //   variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 500]);
                    setShowInStockOnly(false);
                  }}
                  className="text-white w-full font-semibold right-0 bg-red-600 hover:bg-red-700 rounded-lg py-3 px-6 flex items-center"
                >
                  <X size={20} className="mr-2" />
                  Clear All Filters
                </button></div></div>
              </div>

                
            </div>
          )}
        </div>

        

        {/* All Products */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            All Fruits ({filteredProducts.length})
          </h2>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No fruits found matching your criteria.</p>
            </div>
          ) : (
            <div
              className={`${
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isListView={viewMode === 'list'}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurFruits;