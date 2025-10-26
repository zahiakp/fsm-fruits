'use client';
import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { getCartCount } from "../../data/demo"; 
import { CartSidebar } from "./CartSidebar";
import Link from "next/link";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);



  useEffect(() => {
    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateCartCount = () => {
    
    setCartCount(getCartCount());
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
    
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    
    setIsMenuOpen(false);
  };

  const NavItems =[
    {label:"Home", path:"/"},
    {label:"About Us", path:"/#about"},
    {label:"Our Fruits", path:"/fruits"},
    {label:"Contact", path:"/contact"},
  ]

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="whitespace-nowrap">
            <h1
              className="text-xl md:text-2xl font-bold"
              style={{ color: "#285430" }}
            >
              KSM Fruits
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavItems.map((nav)=>(
            <Link href={nav.path} key={nav.label}
              className="text-gray-700 hover:text-[#285430] after:h-0.5 after:w-full after:-bottom-2 after:left-0 after:duration-300 after:rounded-3xl after:opacity-0 hover:after:opacity-100 after:bg-[#FF7B00] after:absolute relative hover:after:-translate-y-1 after:-translate-y-3 transition-colors duration-200 font-medium"
            >
              {nav.label}
            </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Phone (Desktop only) */}
            <Link
              href="tel:+919876543210"
              className="hidden border p-2 px-4 rounded-2xl lg:flex items-center space-x-2 text-gray-700 hover:text-[#FF7B00] transition-colors duration-200"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={()=>setIsCartOpen(true)}
              className="relative p-2.5 rounded-2xl text-gray-700 hover:text-[#FF7B00] bg-gray-200/70 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#FF7B00" }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#285430] hover:bg-gray-50 rounded transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => navigateToPage("/our-fruits")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#285430] hover:bg-gray-50 rounded transition-colors duration-200"
              >
                Our Fruits
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#285430] hover:bg-gray-50 rounded transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#285430] hover:bg-gray-50 rounded transition-colors duration-200"
              >
                Contact
              </button>
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#FF7B00] hover:bg-gray-50 rounded transition-colors duration-200"
              >
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
    <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Header;
