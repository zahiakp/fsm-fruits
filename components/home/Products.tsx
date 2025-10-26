import { CartItem, FeaturedProductsProps, Product } from "@/app/page";
import { addToCart, featuredProducts } from "@/data/demo";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const FeaturedProductsSection: React.FC<FeaturedProductsProps> = () => {
    const products = featuredProducts as Product[];
    const handleAddToCart = (product: Product) => {
        const updatedCart = addToCart(product) as CartItem[];
        window.dispatchEvent(new Event('cartUpdated'));
        toast.success(`${product.name} added to cart!`);
      };
    return(
       <section id="products" className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Our Seasonal Picks
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handpicked fresh fruits delivered straight from local farms
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-64 overflow-hidden">
              <Image height={200} width={200}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {product.inStock && (
                <span className="absolute top-4 right-4 bg-[#285430] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  In Stock
                </span>
              )}
            </div>
            <div className="p-6 ">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#FF7B00]">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-600 ml-1">/ {product.unit}</span>
                </div>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#285430] hover:bg-[#1f4024] flex items-center cursor-pointer text-white rounded-full px-4 py-2 transition-all duration-200"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href={'/fruits'}
          className="border border-[#285430] flex w-fit mx-auto items-center text-[#285430] hover:bg-[#285430] hover:text-white rounded-full px-6 py-4 text-lg font-semibold transition-all duration-300"
        >
          View All Fruits
          <ChevronRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  </section> 
    )
}
export default FeaturedProductsSection;