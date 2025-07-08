"use client";

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PhotoCarousel({ zpid }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!zpid) {
        setError('No property ID provided');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const url = `https://zillow69.p.rapidapi.com/photos?zpid=${zpid}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            'x-rapidapi-host': 'zillow69.p.rapidapi.com',
          },
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        const result = await response.json();
        console.log('PhotoCarousel: API response:', result);
        const photoUrls = result.photos?.map(photo => {
          const jpegSources = photo.mixedSources?.jpeg || [];
          const highestRes = jpegSources.find(source => source.width === 1536);
          return highestRes ? highestRes.url : photo.url || null;
        }).filter(url => url !== null) || [];
        setPhotos(photoUrls);
      } catch (err) {
        console.error('PhotoCarousel: API error:', err);
        setError(err.message);
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [zpid]);

  return (
    <section className="bg-[#1A3C5A] py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-[#D4A017] text-center">Property Photos</h2>
        {loading && (
          <div className="text-center text-[#F9FAFB]">
            <p>Loading photos...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-400">
            <p>Error: {error}</p>
          </div>
        )}
        {!loading && !error && photos.length === 0 && (
          <div className="text-center text-[#F9FAFB]">
            <p>No photos available for this property.</p>
          </div>
        )}
        {!loading && !error && photos.length > 0 && (
          <Carousel>
            <CarouselContent>
              {photos.map((link, index) => (
                <CarouselItem key={index}>
                  <img
                    src={link}
                    className="w-full h-[50vh] object-cover"
                    alt={`Property photo ${index + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
}