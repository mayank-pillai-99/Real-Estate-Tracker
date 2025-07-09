'use client'

import { useEffect, useState } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useSession } from 'next-auth/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function Favorites() {
  const { data: session } = useSession()
  const { favorites } = useFavorites()
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFavoriteProperties = async () => {
      if (!session || favorites.length === 0) {
        setLoading(false)
        return
      }
      setLoading(true)
      setError(null)
      try {
        const fetchedProperties = []
        for (const zpid of favorites) {
          const url = `https://zillow69.p.rapidapi.com/property?zpid=${zpid}`
          console.log('Fetching property details for zpid:', zpid)
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
              'x-rapidapi-host': 'zillow69.p.rapidapi.com',
            },
          })
          console.log('Response status:', response.status, 'OK:', response.ok)
          if (!response.ok) {
            const text = await response.text()
            console.error('Response body:', text)
            throw new Error(`HTTP error! status: ${response.status}, body: ${text.substring(0, 100)}`)
          }
          const result = await response.json()
          console.log('Property details:', result)
          fetchedProperties.push(result)
        }
        setProperties(fetchedProperties)
      } catch (err) {
        console.error('Favorites: API error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchFavoriteProperties()
  }, [favorites, session])

  if (!session) {
    return (
      <>
        <Navbar />
        <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-red-400">Please sign in to view favorites.</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[#D4A017]">Loading favorites...</p>
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

  if (favorites.length === 0) {
    return (
      <>
        <Navbar />
        <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[#F9FAFB]">No favorite properties yet.</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Favorite Properties</h1>
          {properties.map((property) => (
            <div key={property.zpid} className="mb-4">
              <Link href={`/property-details?zpid=${property.zpid}`}>
                <h2 className="text-xl hover:text-[#D4A017]">
                  {property.address?.streetAddress || 'Unknown Address'}, {property.address?.city || 'Unknown City'}, {property.address?.state || 'Unknown State'} {property.address?.zipcode || 'Unknown Zipcode'}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}