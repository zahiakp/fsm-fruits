import { StoreInfo } from '@/app/page';
import { heroImage, storeInfo } from '@/data/demo';
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Hero() {
    const typedStoreInfo = storeInfo as StoreInfo;
  return (
      <section
        id="home"
        className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex flex-col items-center relative z-2 text-center px-4 mt-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to KSM Fruits
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            {typedStoreInfo.tagline}
          </p>
          <Link
            href={'/fruits'}
            className="bg-[#FF7B00] hover:bg-[#e66d00] flex items-center w-fit text-white px-6 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Shop Our Fruits
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
  )
}

export default Hero
