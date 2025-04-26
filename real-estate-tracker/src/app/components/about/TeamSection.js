"use client"
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TeamSection() {
  const carouselRef = useRef(null);
  const teamMembers = [
    {
      id: 1,
      name: "Jennifer Reynolds",
      role: "CEO & Founder",
      bio: "Former real estate agent with 15+ years of experience. Passionate about bringing transparency to the property market.",
      image: "home/customer1.jpg",

    },
    {
      id: 2,
      name: "David Wong",
      role: "CTO",
      bio: "Data scientist and software engineer with expertise in real estate analytics and property valuation models.",
      image: "home/customer2.jpg",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Head of Property Research",
      bio: "Real estate economist with a background in market analysis and property valuation across diverse metropolitan areas.",
      image: "home/customer3.jpg",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "UX Design Lead",
      bio: "User experience specialist focused on making complex property data accessible and intuitive for all users.",
      image: "home/customer4.jpg",
    }
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
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Team</h2>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#D4A017] text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#D4A017] text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-4 pb-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-none w-96 snap-center bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-8"
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <h3 className="text-xl font-semibold">{member.role}</h3>
              <p className="text-lg italic mb-6">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

