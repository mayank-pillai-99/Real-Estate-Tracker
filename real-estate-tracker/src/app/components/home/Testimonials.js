"use client";

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialCarousel() {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Realytics made finding my dream home so easy! The process was smooth and the support was exceptional.',
      photo: '/home/customer1.jpg',
    },
    {
      name: 'Michael Lee',
      review: 'The property valuation service was spot on. Helped me make a confident investment decision.',
      photo: '/home/customer2.jpg',
    },
    {
      name: 'Emily Davis',
      review: 'Effortless property management with Realytics—saved me so much time and stress!',
      photo: '/home/customer3.jpg',
    },
    {
      name: 'David Brown',
      review: 'Great insights for smart investments. Highly recommend their services!',
      photo: '/home/customer4.jpg',
    },
    {
      name: 'Lisa Carter',
      review: 'The property pricing history was incredibly helpful in finding the perfect property for me.',
      photo: '/home/customer5.jpg',
    },
    {
      name: 'James Taylor',
      review: 'Realytics search features exceeded my expectations with their capabilities.',
      photo: '/home/customer6.jpg',
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
        <h2 className="text-3xl font-bold mb-6 text-center">Customer Testimonials</h2>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 bg-[#D4A017] text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
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
          className="flex overflow-x-auto scroll-smooth space-x-4 pb-4"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-none w-96  bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-8"
            >
              {item.photo && (
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
              )}
              <p className="text-lg italic mb-8">"{item.review}"</p>
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}