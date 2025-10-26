"use client";
import { CartItem, StoreInfo } from "@/app/page";

import {
  getCart,
  removeFromCart,
  storeInfo,
  updateCartQuantity,
} from "@/data/demo";
import {
  MessageCircle,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [total, setTotal] = useState(0);
  const typedStoreInfo = storeInfo as StoreInfo;

  useEffect(() => {
    if (isOpen) {
      const newCart = getCart() as CartItem[];
      setCart(newCart);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleCartUpdate = () => {
      const newCart = getCart() as CartItem[];
      setCart(newCart);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    let message = `Hello! I'd like to order the following items:\n\n`;
    cart.forEach((item: CartItem) => {
      message += `• ${item.name} - ${item.quantity} ${item.unit} @ ₹${
        item.price
      }/${item.unit} = ₹${item.price * item.quantity}\n`;
    });

    message += `\nTotal: ₹${total}\n\nThank you!`;

    const whatsappUrl = `https:
      typedStoreInfo.whatsapp
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleRemoveFromCart = (productId: number | string) => {
    const updatedCart = removeFromCart(productId) as CartItem[];
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
    toast.success("Item removed from cart");
  };

  const handleUpdateQuantity = (
    productId: number | string,
    newQuantity: number
  ) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    const updatedCart = updateCartQuantity(
      productId,
      newQuantity
    ) as CartItem[];
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-300">
          <h2 id="cart-heading" className="text-xl font-bold text-gray-900">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 curs rounded-full transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item: CartItem) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <Image height={100} width={100}
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-[#FF7B00] font-bold">
                      ₹{item.price}/{item.unit}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors duration-200"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-300 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-[#FF7B00]">
                ₹{total}
              </span>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              Order via WhatsApp
            </button>
            <p className="text-xs text-gray-500 text-center">
              Click to send your order details via WhatsApp
            </p>
          </div>
        )}
      </div>
    </>
  );
};
