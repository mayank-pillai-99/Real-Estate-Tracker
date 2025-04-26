"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SearchBar() {
  const [city, setCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [propertyType, setPropertyType] = useState('All Types');
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');

  const popularCities = ['New York', 'San Francisco', 'Chicago', 'Miami', 'Seattle'];

  return (
    <div className="w-full bg-[#161D6F] text-[#F6F6F6] p-6">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center bg-[#F6F6F6] rounded-lg p-2 flex-1">
          <span className="mr-2 text-[#161D6F]">🏠</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent outline-none w-full text-[#161D6F] placeholder-[#161D6F]"
            placeholder="Enter city"
          />
        </div>
        <button className="px-4 py-2 bg-[#98DED9] text-[#161D6F] rounded-lg flex items-center hover:bg-blue-400 transition-colors duration-200">
          <span className="mr-2">🔍</span> Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div>
          <label className="block mb-1">Price Range</label>
          <div className="flex space-x-2">
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full p-2 bg-[#F6F6F6] rounded-lg text-[#161D6F]"
            >
              <option value="">$ Min Price</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
              <option value="300000">$300,000</option>
              <option value="500000">$500,000</option>
              <option value="750000">$750,000</option>
              <option value="1000000">$1M</option>
            </select>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full p-2 bg-[#F6F6F6] rounded-lg text-[#161D6F]"
            >
              <option value="">Max Price</option>
              <option value="500000">$500,000</option>
              <option value="1000000">$1M</option>
              <option value="1500000">$1.5M</option>
              <option value="2000000">$2M+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1">Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full p-2 bg-[#F6F6F6] rounded-lg text-[#161D6F]"
          >
            <option value="">All Types</option>
            <option value="townhome">TownHomes</option>
            <option value="singleFamily">Houses</option>
            <option value="multiFamily">Multi-Family</option>
            <option value="Condo">Condo</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full p-2 bg-[#F6F6F6] rounded-lg text-[#161D6F]"
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Bathrooms</label>
          <select
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="w-full p-2 bg-[#F6F6F6] rounded-lg text-[#161D6F]"
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-[#98DED9]">Popular:</span>
        <div className="flex space-x-2 mt-2">
          {popularCities.map((cityName) => (
            <button
              key={cityName}
              onClick={() => setCity(cityName)}
              className={`px-4 py-2 rounded-full ${
                city === cityName ? 'bg-[#98DED9] text-[#161D6F]' : 'bg-[#F6F6F6] text-[#161D6F]'
              } hover:bg-blue-400 transition-colors duration-200`}
            >
              {cityName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}