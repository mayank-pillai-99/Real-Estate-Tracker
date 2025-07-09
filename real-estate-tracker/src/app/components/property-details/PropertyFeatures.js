
    'use client'

    import { useFavorites } from '../../context/FavoritesContext'
    import { useSession } from 'next-auth/react'
    import { FaHeart, FaRegHeart } from 'react-icons/fa'

    export default function PropertyFeatures({ property }) {
      const { data: session } = useSession()
      const { addFavorite, removeFavorite, isFavorite } = useFavorites()
      const zpid = property.zpid || ''

      const address = property.address || {
        streetAddress: "Unknown Address",
        city: "Unknown City",
        state: "Unknown State",
        zipcode: "Unknown Zipcode",
      }

      const bedrooms = property.bedrooms || 0
      const bathrooms = property.bathrooms || 0
      const description = property.description || "No description available."
      const yearBuilt = property.yearBuilt || "Unknown"
      const propertyType = property.homeType || "Unknown Type"

      const resoFacts = property.resoFacts?.atAGlanceFacts?.map(fact => ({
        factLabel: fact.factLabel,
        factValue: fact.factValue || "N/A",
      })) || [
        { factLabel: "Type", factValue: "N/A" },
        { factLabel: "Year Built", factValue: "N/A" },
        { factLabel: "Heating", factValue: "N/A" },
        { factLabel: "Cooling", factValue: "N/A" },
        { factLabel: "Parking", factValue: "N/A" },
        { factLabel: "HOA", factValue: "N/A" },
      ]

      const appliances = property.resoFacts?.appliances || ["None listed"]
      const parkingFeatures = property.resoFacts?.parkingFeatures || ["None listed"]
      const associationAmenities = property.resoFacts?.associationAmenities || ["None listed"]
      const schools = property.schools?.map(school => ({
        name: school.name || "Unknown School",
        distance: school.distance || 0,
        rating: school.rating || "N/A",
        level: school.level || "Unknown Level",
        link: school.link || "#",
      })) || []

      return (
        <section className="bg-[#1A3C5A] text-[#F9FAFB] py-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-5xl font-bold text-center">
                {address.streetAddress}, {address.city}, {address.state} {address.zipcode}
              </h1>
              {zpid && (
                <button
                  onClick={() => isFavorite(zpid) ? removeFavorite(zpid) : addFavorite(zpid)}
                  className="text-[#D4A017] hover:text-[#A8B5A2] disabled:opacity-50"
                  disabled={!session}
                  title={session ? (isFavorite(zpid) ? "Remove from Favorites" : "Add to Favorites") : "Sign in to add to favorites"}
                >
                  {isFavorite(zpid) ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
                </button>
              )}
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Overview</h2>
              <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                <div className="flex justify-around mb-4">
                  <div>
                    <p className="text-lg">{bedrooms} Bed</p>
                    <p className="text-base text-[#333333]/80">Bedrooms</p>
                  </div>
                  <div>
                    <p className="text-lg">{bathrooms} Bath</p>
                    <p className="text-base text-[#333333]/80">Bathrooms</p>
                  </div>
                  <div>
                    <p className="text-lg">{yearBuilt}</p>
                    <p className="text-base text-[#333333]/80">Year Built</p>
                  </div>
                  <div>
                    <p className="text-lg">{propertyType}</p>
                    <p className="text-base text-[#333333]/80">Property Type</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Description</h2>
              <div className="bg-[#D4A017]/90 border-2 border-[#F9FAFB] rounded-lg shadow-md p-6">
                <p className="text-lg text-[#333333]">{description}</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Property Facts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resoFacts.map((fact, index) => (
                  <div key={index} className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                    <p className="text-lg">{fact.factValue}</p>
                    <p className="text-base text-[#333333]/80">{fact.factLabel}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Appliances</h2>
                <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                  <ul className="list-disc pl-5 text-lg">
                    {appliances.map((appliance, index) => (
                      <li key={index}>{appliance}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Parking Features</h2>
                <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                  <ul className="list-disc pl-5 text-lg">
                    {parkingFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Association Amenities</h2>
                <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                  <ul className="list-disc pl-5 text-lg">
                    {associationAmenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Nearby Schools</h2>
                <div className="space-y-6">
                  {schools.map((school, index) => (
                    <div key={index} className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                      <a href={school.link} target="_blank" className="text-[#D4A017] hover:underline text-lg">
                        {school.name}
                      </a>
                      <p className="text-base mt-2">Level: {school.level}</p>
                      <p className="text-base">Distance: {school.distance} miles</p>
                      <p className="text-base">Rating: {school.rating}/10</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }