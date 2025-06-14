'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PropertyFeatures from '../components/property-details/PropertyFeatures'
import PhotoCarousel from '../components/property-details/PhotoCarousel'
import PriceHistoryGraph from '../components/property-details/PriceHistory'
import TaxHistory from '../components/property-details/TaxHistory'

export default function PropertyDetailsClient() {
  const searchParams = useSearchParams()
  const zpid = searchParams.get('zpid')
  const [propertyDetails, setPropertyDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      if (!zpid) {
        setError('No property ID provided')
        setLoading(false)
        return
      }
      setLoading(true)
      setError(null)
      try {
        const url = `/api/property-details?zpid=${zpid}`
        const response = await fetch(url)
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        console.log('PropertyDetailsClient: API response:', result)
        setPropertyDetails(result)
      } catch (err) {
        console.error('PropertyDetailsClient: API error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPropertyDetails()
  }, [zpid])

  if (loading) {
    return (
      <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[#D4A017]">Loading property details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-red-400">Error: {error}</p>
        </div>
      </div>
    )
  }

  if (!propertyDetails) {
    return (
      <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[#F9FAFB]">No property details found.</p>
        </div>
      </div>
    )
  }

  const property = propertyDetails
  const taxHistory = propertyDetails.taxHistory || []
  const priceHistory = propertyDetails.priceHistory || []
  const photoZpid = propertyDetails.zpid || zpid

  return (
    <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <PropertyFeatures property={property} />
        <PhotoCarousel zpid={photoZpid} />
        <PriceHistoryGraph priceHistory={priceHistory} />
        <TaxHistory taxHistory={taxHistory} />
      </div>
    </div>
  )
}