import Navbar from '../components/layout/Navbar';
import SearchBar from '../components/properties/SearchBar';
import PropertyListings from '../components/properties/PropertyListings';
import FAQSection from '../components/properties/FAQSection';
import Footer from '../components/layout/Footer';

export default function Properties() {
  return (
    <div>
      <Navbar />    
      <SearchBar/>
      <PropertyListings/>
      <FAQSection />
      <Footer />
    </div>
  );
}
