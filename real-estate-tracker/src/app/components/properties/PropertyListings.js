'use client'

import Link from "next/link"
import { useSearch } from '../../context/SearchContext' 
import { useState, useEffect } from 'react' 

const PropertyListings = () => {
  const { filters } = useSearch() 
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState(null) 
  const [page, setPage] = useState(0) 
  const [totalPages, setTotalPages] = useState(1) 
  const [hasSearched, setHasSearched] = useState(false)
  useEffect(() => {
    const fetchProperties = async () => {
      console.log('PropertyListings: Filters on useEffect:', filters)
      if (filters === null) {
        setHasSearched(false)
        setProperties([])
        return
      }
      setHasSearched(true)
      const effectiveFilters = {
        location: filters.location || 'Houston, TX',
        status_type: 'ForSale',
        minPrice: filters.minPrice ? parseInt(filters.minPrice) : 0,
        maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : 0,
        home_type: filters.home_type || '',
        bedsMin: filters.bedsMin || 0,
        bedsMax: filters.bedsMax || 0,
        bathsMin: filters.bathsMin || 0,
        bathsMax: filters.bathsMax || 0,
        sort: filters.sort || 'Homes_for_You',
      }
      console.log('PropertyListings: Mapped API filters:', effectiveFilters)
      setLoading(true)
      setError(null)
      const queryParams = new URLSearchParams({
        location: effectiveFilters.location,
        status_type: effectiveFilters.status_type,
        page: page,
        ...(effectiveFilters.minPrice && { minPrice: effectiveFilters.minPrice }),
        ...(effectiveFilters.maxPrice && { maxPrice: effectiveFilters.maxPrice }),
        ...(effectiveFilters.home_type && { home_type: effectiveFilters.home_type }),
        ...(effectiveFilters.bedsMin !== 0 && { bedsMin: effectiveFilters.bedsMin }),
        ...(effectiveFilters.bedsMax !== 0 && { bedsMax: effectiveFilters.bedsMax }),
        ...(effectiveFilters.bathsMin !== 0 && { bathsMin: effectiveFilters.bathsMin }),
        ...(effectiveFilters.bathsMax !== 0 && { bathsMax: effectiveFilters.bathsMax }),
        sort: effectiveFilters.sort,
      }).toString()
      const url = `/api/properties?${queryParams}`
      console.log('PropertyListings: Fetching URL:', url)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        console.log('PropertyListings: API response:', result)
        setTotalPages(result.totalPages || 1)
        const propsArray = Array.isArray(result.props) ? result.props : []
        console.log('PropertyListings: propsArray after validation:', propsArray)
        const mappedProperties = propsArray
          .filter(prop => {
            const isValidPrice = prop.price > 0
            console.log(`PropertyListings: Filtering property with zpid ${prop.zpid}, price: ${prop.price}, isValid: ${isValidPrice}`)
            return isValidPrice
          })
          .map(prop => ({
            bathrooms: prop.bathrooms || 0,
            bedrooms: prop.bedrooms || 0,
            livingArea: prop.livingArea || 0,
            lotAreaValue: prop.lotSize || prop.lotAreaValue || 0,
            lotAreaUnit: prop.lotAreaUnit || 'sqft',
            price: prop.price || 0,
            imgSrc: prop.carouselPhotos && prop.carouselPhotos[0] ? prop.carouselPhotos[0].url : 'https://via.placeholder.com/300',
            address: prop.address || 'Unknown Address',
            zpid: prop.zpid || '',
            detailUrl: prop.hdpUrl || prop.detailUrl || '#',
          }))
        console.log('PropertyListings: Mapped properties:', mappedProperties)
        setProperties(mappedProperties)
      } catch (err) {
        console.error('PropertyListings: API error:', err)
        setError(err.message)
        setProperties([])
      } finally {
        setLoading(false)
      }
    }
    fetchProperties()
  }, [filters, page])

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage(page + 1)
  }

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1)
  }

  return (
    <section className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#F9FAFB] mb-6">Available Properties</h2>
        {loading && (
          <p className="text-center text-[#D4A017]">Loading properties...</p>
        )}
        {error && (
          <p className="text-center text-red-400">Error: {error}</p>
        )}
        {!loading && !error && properties.length === 0 && (
          <p className="text-center text-[#F9FAFB]">
            {hasSearched
              ? "No properties found. Try adjusting your search."
              : "Search for properties to find your dream home!"}
          </p>
        )}
        {!loading && !error && properties.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.zpid} className="bg-[#F9FAFB] rounded-lg">
                  <img
                    src={property.imgSrc}
                    alt={property.address}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-[#333333]">
                    <h3 className="text-lg font-semibold text-[#D4A017] mb-2">{property.address}</h3>
                    <p className="text-xl font-bold mb-2">${property.price.toLocaleString()}</p>
                    <div className="flex gap-3 text-sm mb-4">
                      <span>{property.bedrooms} Beds</span> |
                      <span>{property.bathrooms} Baths</span> |
                      <span>{property.livingArea.toLocaleString()} sqft</span> |
                      <span>
                        {property.lotAreaValue.toLocaleString()} {property.lotAreaUnit}
                      </span>
                    </div>
                    <Link
                      href={`/property-details?zpid=${property.zpid}`}
                      className="inline-block py-2 px-4 bg-[#D4A017] text-[#333333] rounded-lg hover:bg-[#A8B5A2] transition-colors duration-200"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={handlePrevPage}
                  disabled={page === 0}
                  className={`px-4 py-2 rounded-lg ${
                    page === 0 ? 'bg-gray-400' : 'bg-[#D4A017] hover:bg-[#A8B5A2]'
                  } text-[#333333] transition-colors duration-200`}
                >
                  Previous
                </button>
                <span className="py-2">
                  Page {page + 1} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={page >= totalPages - 1}
                  className={`px-4 py-2 rounded-lg ${
                    page >= totalPages - 1 ? 'bg-gray-400' : 'bg-[#D4A017] hover:bg-[#A8B5A2]'
                  } text-[#333333] transition-colors duration-200`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default PropertyListings