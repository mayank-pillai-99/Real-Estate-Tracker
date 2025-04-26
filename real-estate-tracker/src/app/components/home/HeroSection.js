import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  const stats = [
    { label: 'Happy Customers', value: '200+' },
    { label: 'Properties For Clients', value: '10k+' },
    { label: 'Years Experience', value: '16+' },
  ];

  return (
    <div className="w-full bg-[#161D6F] text-[#F6F6F6]">
      <div
        className="relative flex flex-col items-center justify-center p-8 min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('home/selling_house.png')`, 
        }}
      >
        <div className="absolute inset-0 bg-[#161D6F]/30" />
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Dream Property with Realytics
          </h1>
          <p className="text-lg">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/properties">
              <button className="px-6 py-3 bg-[#F6F6F6] text-[#161D6F] rounded-lg hover:bg-blue-400 transition-colors duration-200">
                Browse Properties
              </button>
            </Link>
          </div>
          {/* Stats */}
          <div className="flex justify-center space-x-8 mt-6">
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