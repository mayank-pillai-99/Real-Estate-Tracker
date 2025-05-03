import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PropertyFeatures from '../components/property-details/PropertyFeatures';
import PhotoCarousel from '../components/property-details/PhotoCarousel';
import PriceHistoryGraph from '../components/property-details/PriceHistory';
import TaxHistory from '../components/property-details/TaxHistory';

function propertyDetails() {
  return (
    <>
      <Navbar/>
      <PropertyFeatures />
      <PhotoCarousel/>
      <PriceHistoryGraph/>
      <TaxHistory/>
      <Footer/>
    </>
    
  )
}

export default propertyDetails