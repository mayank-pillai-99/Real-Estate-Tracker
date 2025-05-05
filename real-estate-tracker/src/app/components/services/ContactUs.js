"use client"
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: null
      });
    }, 1000);
  };

  return (
    <section className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F9FAFB] mb-4">Contact Us</h2>
          <p className="text-[#F9FAFB] max-w-2xl mx-auto">
            Have questions about our services or need assistance with your property search? Reach out to our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#F9FAFB] rounded-lg shadow-md p-8">
            {formStatus.submitted ? (
              <div className="text-center py-8">
                <div className="bg-[#A8B5A2]/20 text-[#333333] p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Thank you for contacting us!</h3>
                  <p>We've received your message and will get back to you shortly.</p>
                </div>
                <button
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      message: '',
                      service: 'general'
                    });
                    setFormStatus({ submitted: false, error: null });
                  }}
                  className="bg-[#D4A017] hover:bg-[#A8B5A2] text-[#333333] font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#333333] font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#D4A017]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-[#333333] placeholder-[#333333]/70"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-[#333333] font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#D4A017]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-[#333333] placeholder-[#333333]/70"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-[#333333] font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#D4A017]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-[#333333] placeholder-[#333333]/70"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-[#333333] font-medium mb-2">What service are you interested in?</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#D4A017]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-[#333333] placeholder-[#333333]/70"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="property-search">Property Search</option>
                    <option value="price-history">Price History Analysis</option>
                    <option value="tax-history">Tax History Records</option>
                    <option value="reports">Property Reports</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#333333] font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-[#D4A017]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-[#333333] placeholder-[#333333]/70"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-[#D4A017] hover:bg-[#A8B5A2] text-[#333333] font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-[#112A40] text-[#F9FAFB] rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">
                Our team is available Monday through Friday, 9am to 5pm IST to answer your questions and provide assistance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#D4A017]/20 p-2 rounded-full mr-4">
                    <FaEnvelope className="text-[#D4A017]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <a href="mailto:support@realestate-tracker.com" className="text-[#A8B5A2] hover:text-[#D4A017] transition-colors">
                      support@realytics.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4A017]/20 p-2 rounded-full mr-4">
                    <FaPhone className="text-[#D4A017]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <a href="tel:+919999999999" className="text-[#A8B5A2] hover:text-[#D4A017] transition-colors">
                      +91 9999999999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4A017]/20 p-2 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-[#D4A017]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-[#A8B5A2] hover:text-[#D4A017] transition-colors">
                      Newton School of Technology, Rishihood University, Sonipat, Haryana
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#333333] mb-1">Do you offer premium or subscription services?</h4>
                  <p className="text-[#333333]">Yes, we offer both free basic property information and premium subscription plans with enhanced features and detailed analytics.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#333333] mb-1">How accurate is your property data?</h4>
                  <p className="text-[#333333]">Our data comes directly from multiple reliable sources including public records, MLS listings, and the Zillow API, ensuring high accuracy.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#333333] mb-1">Can I access international property information?</h4>
                  <p className="text-[#333333]">Currently, we focus on U.S. properties, with plans to expand to international markets in the future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}