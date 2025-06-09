export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PropertyDetailsClient from './PropertyDetailsClient'

export default function PropertyDetails() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-[#D4A017]">Loading...</p>
            </div>
          </div>
        }
      >
        <PropertyDetailsClient />
      </Suspense>
      <Footer />
    </>
  )
}