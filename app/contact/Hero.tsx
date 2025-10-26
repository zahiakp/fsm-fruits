import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="h-[400px] w-full bg-primary relative">
      <div className="p-20 px-[15%] flex flex-col items-center mt-10 gap-5 h-full  justify-end text-white  relative overflow-hidden">
        <div className="flex items-center py-2 px-4 rounded-3xl border border-orange-500 text-sm text-gray-300 -mt-2">
          <Link href="/">Home</Link>
              <ChevronRight size={20} className="text-orange-500"/>
            <p>Contact</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium text-white">
Contact Us
        </h1>
        {/* <p className="text-lime-400 text-lg -mt-2">Explore our wide variety of farm-fresh fruits
</p> */}
      </div>
      <div className="absolute bottom-0 right-10"><Image alt="fruits photo" src={'/page-header.png'} height={400} width={400}/></div>
      <div className="absolute top-10 left-10 rotate-180"><Image alt="fruits photo" src={'/page-header.png'} height={400} width={400}/></div>
    </div>
  );
}

export default Hero;
