"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CarouselItems() {
  const carouselRef = useRef(null);

  const carouselItems = [
    {
      image: '/home/property-search.jpg',
      title: 'Find Your Dream Home',
      description: 'Explore a wide range of properties to find your perfect match.',
      link: '/properties',
    },
    {
      image: '/home/property-value.jpg',
      title: 'Unlock Property Value',
      description: 'Get accurate property valuations to make informed decisions.',
      link: '/properties',
    },
    {
      image: '/home/property-management.jpg',
      title: 'Effortless Property Management',
      description: 'We handle the complexities, you enjoy peace of mind.',
      link: '/properties',
    },
    {
      image: '/home/smart-investments.jpg',
      title: 'Smart Investments, Informed Decisions',
      description: 'Data-driven insights to guide your property investments.',
      link: '/properties',
    },
    {
      image: '/home/property-history.jpg',
      title: 'Property Pricing and Tax-Pricing History',
      description: 'Graphs and Data about the Property and Tax History lets you make an informed decision.',
      link: '/properties',
    },
    {
      image: '/home/search.jpg',
      title: 'Search Function',
      description: 'The search function allows you to finds houses by specific cities and you and can also sort them by their prices and number of bathrooms and bedrooms.',
      link: '/properties',
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -384, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 384, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#1A3C5A] text-[#F9FAFB] py-8">
      <div className="relative px-8">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2  bg-[#D4A017] text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 bg-[#D4A017] text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 pb-6"
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex-none w-96  bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-base">{item.description}</p>
                <Link href={item.link}>
                  <button className="px-4 py-2 bg-[#D4A017] text-[#333333] rounded-lg hover:bg-[#A8B5A2] transition-colors duration-200">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}