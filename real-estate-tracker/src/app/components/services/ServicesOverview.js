export default function ServicesOverview() {
  return (
    <section className=" bg-[#1A3C5A] text-[#F9FAFB] py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center text-[#F9FAFB] mb-6">Our Services</h1>
        <p className="text-lg text-center text-[#F9FAFB] max-w-3xl mx-auto">
          Discover how we can help you navigate the real estate market with our comprehensive suite of tools and services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4">
        <div className="bg-[#F9FAFB] rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Comprehensive Real Estate Data Services</h2>
          <p className="text-[#333333] mb-4">
            At Realytics, we provide an extensive suite of services designed to give you the complete picture of any property you're considering. Our tools empower you to make informed decisions with confidence.
          </p>
          <p className="text-[#333333] mb-4">
            Our services go beyond just showing you what's available on the market today. We dive deep into historical data, market trends, and future projections to give you insights that most buyers never see.
          </p>
          <p className="text-[#333333]">
            Whether you're a first-time homebuyer, seasoned investor, or real estate professional, our platform provides the detailed information you need at every step of your journey.
          </p>
        </div>

        <div className="bg-[#F9FAFB] rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#333333] mb-4">Why Choose Our Services?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-[#D4A017] text-[#F9FAFB] flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">✓</span>
              <span className="text-[#333333]">Comprehensive property histories with no hidden information</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#D4A017] text-[#F9FAFB] flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">✓</span>
              <span className="text-[#333333]">Interactive price and tax history visualizations</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#D4A017] text-[#F9FAFB] flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">✓</span>
              <span className="text-[#333333]">Detailed neighborhood and market trend analysis</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#D4A017] text-[#F9FAFB] flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">✓</span>
              <span className="text-[#333333]">Accurate property valuations based on multiple data points</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#D4A017] text-[#F9FAFB] flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">✓</span>
              <span className="text-[#333333]">User-friendly interface with powerful search capabilities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}