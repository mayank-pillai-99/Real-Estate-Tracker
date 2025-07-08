'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PropertyFeatures from '../components/property-details/PropertyFeatures'
import PhotoCarousel from '../components/property-details/PhotoCarousel'
import PriceHistoryGraph from '../components/property-details/PriceHistory'
import TaxHistory from '../components/property-details/TaxHistory'

export default function PropertyDetails() {
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
        const url = `https://zillow69.p.rapidapi.com/property?zpid=${zpid}`
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            'x-rapidapi-host': 'zillow69.p.rapidapi.com'
          }
        }
        const response = await fetch(url, options)
        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
        }
        const result = await response.json()
        console.log('PropertyDetails: API response:', result)
        setPropertyDetails(result)
      } catch (err) {
        console.error('PropertyDetails: API error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPropertyDetails()
  }, [zpid])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[#D4A017]">Loading property details...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-red-400">Error: {error}</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!propertyDetails) {
    return (
      <>
        <Navbar />
        <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[#F9FAFB]">No property details found.</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const property = propertyDetails 
  const taxHistory = propertyDetails.taxHistory || []
  const priceHistory = propertyDetails.priceHistory || [] 
  const photoZpid = propertyDetails.zpid || zpid 

  return (
    <>
      <Navbar />
      <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <PropertyFeatures property={property} />
          <PhotoCarousel zpid={photoZpid} />
          <PriceHistoryGraph priceHistory={priceHistory} />
          <TaxHistory taxHistory={taxHistory} />
        </div>
      </div>
      <Footer />
    </>
  )
}