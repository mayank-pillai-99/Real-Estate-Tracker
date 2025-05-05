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
        className="relative flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/about/team_photo.png')`, 
        }}
      >
        <div className="absolute inset-0 bg-[#1A3C5A]/70" />
        <div className="z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
          About Us
          </h1>
          <p className="text-xl">
          We're dedicated to providing transparent real estate information, helping you make informed decisions about your next home.
          </p>
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