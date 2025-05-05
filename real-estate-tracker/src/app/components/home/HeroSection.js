import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  const stats = [
    { label: 'Happy Customers', value: '200+' },
    { label: 'Properties For Clients', value: '10k+' },
    { label: 'Years Experience', value: '16+' },
  ];

  return (
    <div className="w-full bg-[#1A3C5A] text-[#F9FAFB]">
      <div
        className="relative flex flex-col items-center justify-center  min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/home/selling_house.png')`, 
        }}
      >
        <div className="absolute inset-0 bg-[#1A3C5A]/70" />
        <div className="z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Your Dream Property with Realytics
          </h1>
          <p className="text-xl">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          <div className="flex justify-center">
            <Link href="/properties">
              <button className="px-6 py-3 bg-[#D4A017] text-[#333333] rounded-lg hover:bg-[#A8B5A2] transition-colors duration-200">
                Browse Properties
              </button>
            </Link>
          </div>
          <div className="flex justify-center space-x-14 mt-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}