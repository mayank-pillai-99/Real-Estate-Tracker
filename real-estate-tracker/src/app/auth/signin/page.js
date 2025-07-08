'use client'

import { signIn } from 'next-auth/react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <button
            onClick={() => signIn('google', { callbackUrl: '/properties' })}
            className="bg-[#D4A017] text-[#1A3C5A] px-6 py-3 rounded hover:bg-[#A8B5A2]"
          >
            Sign in with Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}