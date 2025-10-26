import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { storeInfo } from '../../data/demo'; 
import { PiWhatsappLogo } from "react-icons/pi";





interface Location {
  id: string | number; 
  name: string;
  address: string;
}

interface StoreInfo {
  socialMedia: {
    facebook: string;
    instagram: string;
  };
  locations: Location[];
  phone: string;
  email: string;
}







const Footer: React.FC = () => {
  return (
    <footer className="bg-[#285430] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KSM FRUITS, UDUPI</h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Your trusted partner for fresh, quality fruits delivered straight
              from farms to your table.
            </p>
            <div className="flex space-x-4">
              <a
                href={storeInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={storeInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={storeInfo.socialMedia.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <PiWhatsappLogo size={20} />
              </a>
            </div>
          </div>

          {/* Our Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Our Locations</h3>
            <div className="space-y-4">
              {/* Explicitly type 'location' for type safety in the map function */}
              {storeInfo.locations.map((location: Location) => (
                <div key={location.id} className="text-gray-200">
                  <p className="font-semibold text-white mb-1">
                    {location.name}
                  </p>
                  <div className="flex items-start text-lime-300 space-x-2">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Quick Links */}
          <div className='md:ml-10'>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${storeInfo.phone}`}
                className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200"
              >
                <Phone size={18} />
                <span>{storeInfo.phone}</span>
              </a>
              <a
                href={`mailto:${storeInfo.email}`}
                className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} />
                <span>{storeInfo.email}</span>
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-3 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8 text-center flex items-center justify-between">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} KSM Fruits. All rights reserved.
          </p>
          <a href="https://abaqas.in" className="text-sm">
           ⚡<span className="hover:text-white text-white hover:underline"> abaqas.in</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;