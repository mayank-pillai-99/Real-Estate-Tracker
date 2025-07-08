'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSession, signIn, signOut } from 'next-auth/react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/properties', label: 'Properties' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="w-full bg-[#F9FAFB] flex items-center justify-between px-6 py-3">
        <Link href="/">
          <img src="/Realytics.png" alt="logo" className="h-13 w-32" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#333333]">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#333333] hover:text-[#A8B5A2] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-[#333333]">Welcome, {session.user.name}</span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-[#D4A017] text-[#1A3C5A] px-4 py-2 rounded hover:bg-[#A8B5A2] transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn('google', { callbackUrl: '/properties' })}
              className="bg-[#D4A017] text-[#1A3C5A] px-4 py-2 rounded hover:bg-[#A8B5A2] transition-colors duration-200"
            >
              Sign In
            </button>
          )}
        </nav>
      </header>

      <div
        className={`md:hidden bg-[#F9FAFB] transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col items-center py-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#333333] hover:text-[#A8B5A2] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <>
              <span className="text-[#333333]">Welcome, {session.user.name}</span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-[#D4A017] text-[#1A3C5A] px-4 py-2 rounded hover:bg-[#A8B5A2] transition-colors duration-200"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn('google', { callbackUrl: '/properties' })}
              className="bg-[#D4A017] text-[#1A3C5A] px-4 py-2 rounded hover:bg-[#A8B5A2] transition-colors duration-200"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </>
  )
}

export default Navbar
