import Link from 'next/link';
import React from 'react'; 

export default function Navbar() {
  const navLinks = [
    { href: '/', label: 'Home' }, 
    { href: '/about', label: 'About Us' }, 
    { href: '/properties', label: 'Properties' },
    { href: '/products', label: 'Products' }, 
    { href: '/blog', label: 'Blog' }, 
  ];

  return (
    <>
      <header className="w-full bg-[#F6F6F6] shadow-md flex items-center justify-between px-8 p-1">
        <Link href="/">
          <img src="/Realytics.png" alt="logo" className="h-15 w-50" />
        </Link>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-[#161D6F] hover:text-blue-400 focus:text-blue-400 active:text-blue-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}