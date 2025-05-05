"use client"
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight } from 'react-icons/fa';

export default function BlogList() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Property Tax Assessments: What Every Homeowner Should Know",
      excerpt: "Property taxes can be confusing, but they're an essential part of homeownership. Learn how assessments work and what factors influence your tax bill.",
      author: "Jennifer Reynolds",
      date: "June 15, 2023",
      image: "/blog/blog1.jpg",
      comments: 8,
      category: "Property Taxes"
    },
    {
      id: 2,
      title: "How to Read Price History Trends When Buying a Home",
      excerpt: "Price history can reveal important information about a property's value. This guide helps you interpret trends and use them to negotiate effectively.",
      author: "David Wong",
      date: "May 28, 2023",
      image: "/blog/blog2.jpg",
      comments: 12,
      category: "Price History"
    },
    {
      id: 3,
      title: "5 Warning Signs in a Property's History You Shouldn't Ignore",
      excerpt: "Not all red flags are obvious when buying a home. Learn what patterns in a property's history might indicate potential problems.",
      author: "Aisha Patel",
      date: "May 10, 2023",
      image: "/blog/blog3.jpg",
      comments: 6,
      category: "Home Buying"
    },
    {
      id: 4,
      title: "The Impact of Interest Rate Changes on Property Values",
      excerpt: "Interest rates have a profound effect on the real estate market. Discover how rate fluctuations influence property values and what it means for buyers and sellers.",
      author: "Marcus Johnson",
      date: "April 22, 2023",
      image: "/blog/blog4.jpg",
      comments: 15,
      category: "Market Trends"
    },
    {
      id: 5,
      title: "Using Tax History to Estimate Future Property Costs",
      excerpt: "Property tax history can help you predict future expenses. This article explains how to analyze historical tax data to budget for homeownership costs.",
      author: "Jennifer Reynolds",
      date: "April 5, 2023",
      image: "/blog/blog5.jpg",
      comments: 4,
      category: "Property Taxes"
    }
  ];

  return (
    <section className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6">Latest Articles</h2>
        <div className="space-y-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-[#F9FAFB] rounded-lg shadow-md  hover:bg-[#A8B5A2]/10 ">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 md:h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6"> 
                    <span className="inline-block bg-[#D4A017]/20 text-[#D4A017] text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {post.category}
                    </span>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{post.title}</h3>
                  <p className="text-[#333333] mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-[#333333] mb-4">
                    <div className="flex items-center">
                      <FaUser className="mr-1 text-[#A8B5A2]" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 text-[#A8B5A2]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaComment className="mr-1 text-[#A8B5A2]" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                  <Link href="https://www.zillowgroup.com/news/" className="inline-flex items-center text-[#A8B5A2] hover:text-[#D4A017]">
                    Read More <FaArrowRight className="ml-1 text-[#A8B5A2] hover:text-[#D4A017]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}