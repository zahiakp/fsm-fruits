import { AboutSectionProps } from "@/app/page";
import { aboutImage } from "@/data/demo";
import { Award, Heart, Leaf } from "lucide-react";
import Link from "next/link";

const AboutSection: React.FC<AboutSectionProps> = () => (
  <section id="about" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quality. Taste. Sustainability.
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our commitment to quality, taste, and sustainability makes us your
            perfect partner in healthy living. We work directly with local
            farmers to bring you the freshest fruits at the best prices.
          </p>
          <div className="space-y-4 mb-8">
            {/* Farm Fresh */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#FBCB0A]/20 flex items-center justify-center flex-shrink-0">
                <Leaf className="text-[#285430]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Farm Fresh
                </h3>
                <p className="text-gray-600">
                  Sourced directly from local farms for maximum freshness
                </p>
              </div>
            </div>
            {/* Premium Quality */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#FF7B00]/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-[#FF7B00]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Handpicked fruits that meet our strict quality standards
                </p>
              </div>
            </div>
            {/* Customer Care */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#285430]/20 flex items-center justify-center flex-shrink-0">
                <Heart className="text-[#285430]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Customer Care
                </h3>
                <p className="text-gray-600">
                  Dedicated to serving you with the best fruits and service
                </p>
              </div>
            </div>
          </div>
          <Link
            href='/fruits'
            className="border border-[#285430] text-[#285430] hover:bg-[#285430] hover:text-white rounded-full px-6 py-3 transition-all duration-200"
          >
            Learn Our Story
          </Link>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={aboutImage}
            alt="Fresh produce at our store"
            className="rounded-2xl shadow-xl w-full h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;