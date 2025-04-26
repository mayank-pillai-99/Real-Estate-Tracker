import React from 'react';

export default function HeroSection() {
  return (
    <main className="w-full min-h-[400px] bg-[url('/blog/blog.jpg')] bg-cover bg-center relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[#1A3C5A]/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center py-16">
        <h1 className="text-4xl font-bold text-[#F9FAFB] mb-6">Real Estate Blog</h1>
        <p className="text-lg text-[#F9FAFB] max-w-3xl mx-auto">
          Stay informed with the latest market trends, home buying tips, and property investment strategies.
        </p>
      </div>
    </main>
  );
}