'use client';

import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext';

export default function SearchBar() {
  const { setFilters } = useSearch();
  const [city, setCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [propertyType, setPropertyType] = useState('All Types');
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');

  const popularCities = [
    'New York',
    'Buffalo',
    'San Francisco',
    'Chicago',
    'Miami',
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const newFilters = { city, minPrice, maxPrice, propertyType, bedrooms, bathrooms };
    setFilters(newFilters);
  };

  return (
    <div className="w-full bg-[#1A3C5A] text-[#F9FAFB] p-6">
      <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
      <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
        <div className="flex bg-[#F9FAFB] rounded-lg p-2 flex-1">
          <span className="mr-2 text-[#333333]">🏠</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className=" outline-none w-full text-[#333333] placeholder-[#333333]"
            placeholder="Enter city"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-[#D4A017] text-[#333333] rounded-lg flex items-center hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <span className="mr-2">🔍</span> Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block mb-1">Price Range</label>
          <div className="flex space-x-2">
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full p-2 bg-[#F9FAFB] rounded-lg text-[#333333]"
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
              className="w-full p-2 bg-[#F9FAFB] rounded-lg text-[#333333]"
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
            className="w-full p-2 bg-[#F9FAFB] rounded-lg text-[#333333]"
          >
            <option value="All Types">All Types</option>
            <option value="townhome">TownHomes</option>
            <option value="singleFamily">Houses</option>
            <option value="multiFamily">Multi-Family</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full p-2 bg-[#F9FAFB] rounded-lg text-[#333333]"
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Bathrooms</label>
          <select
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="w-full p-2 bg-[#F9FAFB] rounded-lg text-[#333333]"
          >
            <option value="Any">Any</option>
            <option value="OnePlus">1+</option>
            <option value="OneHalfPlus">1.5+</option>
            <option value="TwoPlus">2+</option>
            <option value="ThreePlus">3+</option>
            <option value="FourPlus">4+</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-[#D4A017]">Popular:</span>
        <div className="flex flex-col md:flex-row  space-y-2 space-x-0 md:space-y-0 md:space-x-2 mt-2">
          {popularCities.map((cityName) => (
            <button
              key={cityName}
              onClick={() => setCity(cityName)}
              className={`px-4 py-2 rounded-full ${
                city === cityName ? 'bg-[#D4A017] text-[#333333]' : 'bg-[#F9FAFB] text-[#333333]'
              } hover:bg-[#A8B5A2] transition-colors duration-200`}
            >
              {cityName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}