import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#112A40] text-[#F9FAFB] py-6">
      <div className="w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 ">
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-[#A8B5A2] transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/properties" className="hover:text-[#A8B5A2] transition-colors duration-200">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#A8B5A2] transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#A8B5A2] transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#A8B5A2] transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-[#A8B5A2] transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Phone: <a href="tel:+91 9999999999" className="hover:text-[#A8B5A2] transition-colors duration-200">+91 9999999999</a></li>
            <li>Email: <a href="mailto:support@realytics.com" className="hover:text-[#A8B5A2] transition-colors duration-200">support@realytics.com</a></li>
            <li>
              <Link href="/services" className="hover:text-[#A8B5A2] transition-colors duration-200">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank"  className="hover:text-[#D4A017] transition-colors duration-200 ">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-[#D4A017] transition-colors duration-200">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-[#D4A017] transition-colors duration-200">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank"  className="hover:text-[#D4A017] transition-colors duration-200">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        © 2025 Realytics. All rights reserved.
      </div>
    </footer>
  );
}