import { FaSearch, FaChartLine, FaCalculator, FaMapMarkedAlt, FaFileAlt, FaBell } from 'react-icons/fa';

export default function ServiceCards() {
  const services = [
    {
      id: 1,
      title: "Property Search",
      description: "Find properties with our advanced search filters for location, price range, property type, and more.",
      icon: <FaSearch className="text-3xl text-[#D4A017]" />,
      primaryFeature: "Detailed filters"
    },
    {
      id: 2,
      title: "Price History Analysis",
      description: "View interactive charts showing a property's complete price history and market value fluctuations.",
      icon: <FaChartLine className="text-3xl text-[#D4A017]" />,
      primaryFeature: "Visual trends"
    },
    {
      id: 3,
      title: "Tax History Records",
      description: "Access comprehensive property tax history with assessment values and payment records over time.",
      icon: <FaCalculator className="text-3xl text-[#D4A017]" />,
      primaryFeature: "Tax insights"
    },
    {
      id: 4,
      title: "Neighborhood Analysis",
      description: "Explore detailed information about schools, amenities, crime rates, and property values in any area.",
      icon: <FaMapMarkedAlt className="text-3xl text-[#D4A017]" />,
      primaryFeature: "Local insights"
    },
    {
      id: 5,
      title: "Property Reports",
      description: "Generate comprehensive reports with all property details, history, and market comparisons.",
      icon: <FaFileAlt className="text-3xl text-[#D4A017]" />,
      primaryFeature: "Downloadable"
    },
    {
      id: 6,
      title: "Market Alerts",
      description: "Receive notifications about price changes, new listings, and market trends in your areas of interest.",
      icon: <FaBell className="text-3xl text-[#D4A017]" />,
      primaryFeature: "Customizable"
    }
  ];

  return (
    <section className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
      <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6 text-center">Our Core Services</h2>
      <p className="text-[#F9FAFB] max-w-3xl mx-auto text-center mb-12">
        Discover how our specialized tools and services can help you navigate the real estate market with confidence.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service) => (
          <div key={service.id} className="bg-[#F9FAFB] rounded-lg shadow-md p-8 hover:shadow-xl hover:bg-[#A8B5A2]/20 transition-shadow">
            <div className="mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">{service.title}</h3>
            <p className="text-[#333333] mb-4">{service.description}</p>
            <div className="inline-block bg-[#D4A017]/20 text-[#D4A017] text-sm font-semibold px-3 py-1 rounded-full">
              {service.primaryFeature}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}