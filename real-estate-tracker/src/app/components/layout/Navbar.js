import Link from 'next/link';
import React from 'react'; 

export default function Navbar() {
  const navLinks = [
    { href: '/', label: 'Home' }, 
    { href: '/about', label: 'About Us' }, 
    { href: '/properties', label: 'Properties' },
    { href: '/services', label: 'Services' }, 
    { href: '/blog', label: 'Blog' }, 
  ];

  return (
    <>
      <header className="w-full bg-[#F9FAFB] shadow-md flex items-center justify-between px-8 p-1">
        <Link href="/">
          <img src="/Realytics.png" alt="logo" className="h-12 w-32" />
        </Link>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-[#333333] hover:text-[#A8B5A2] focus:text-[#A8B5A2] active:text-[#A8B5A2] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}