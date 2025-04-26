import Navbar from '../components/layout/Navbar';
import ServicesOverview from '../components/services/ServicesOverview';
import ServiceCards from '../components/services/ServiceCards';
import ContactUs from '../components/services/ContactUs';
import Footer from '../components/layout/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <ServicesOverview />
      <ServiceCards />
      <ContactUs />
      <Footer />
    </div>
  );
}
