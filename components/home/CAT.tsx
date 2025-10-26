import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CtaSection: React.FC = () => (
  <section className="py-16 md:py-20 bg-[#FBCB0A]/10">
    <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-6">
        Experience the <span className="text-secondary" > joy</span> of nature's best <br /> delivered fresh to your <span className="text-secondary" > door</span>!
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Browse our full collection of premium fruits and place your order today
      </p>
      <Link href={'/fruits'}
        className="bg-[#285430] flex items-center w-fit hover:bg-[#1f4024] text-white px-6 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Explore All Categories
        <ChevronRight className="ml-2" size={20} />
      </Link>
    </div>
  </section>
);
export default CtaSection;