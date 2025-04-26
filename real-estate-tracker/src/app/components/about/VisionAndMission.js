import { FaChartLine, FaLightbulb, FaHandshake, FaEye } from 'react-icons/fa';

export default function VisionAndMission() {
  return (
    <section className="py-12 bg-[#1A3C5A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-[#F9FAFB] rounded-lg shadow-md p-8">
            <div className="inline-block p-3 bg-[#D4A017]/20 rounded-full mb-6">
              <FaEye className="text-2xl text-[#D4A017]" />
            </div>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">Our Vision</h2>
            <p className="text-[#333333] mb-6">
              We envision a real estate market where every buyer has access to comprehensive property data, empowering them to make confident decisions about one of life's most significant investments.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start">
                <div className="bg-[#D4A017]/20 p-2 rounded-full mr-4">
                  <FaChartLine className="text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Data-Driven Decisions</h3>
                  <p className="text-[#333333]">Transforming property shopping with complete historical insights</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#D4A017]/20 p-2 rounded-full mr-4">
                  <FaLightbulb className="text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Market Transparency</h3>
                  <p className="text-[#333333]">Creating a more informed and efficient real estate marketplace</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#F9FAFB] rounded-lg shadow-md p-8">
            <div className="inline-block p-3 bg-[#D4A017]/20 rounded-full mb-6">
              <FaHandshake className="text-2xl text-[#D4A017]" />
            </div>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">Our Mission</h2>
            <p className="text-[#333333] mb-6">
              Our mission is to provide homebuyers with the most comprehensive property data available, including detailed price and tax histories, enabling them to navigate the real estate market with confidence.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-[#D4A017] rounded-full h-2 w-2 mr-2"></span>
                <span className="text-[#333333]">Deliver accurate, detailed property histories</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#D4A017] rounded-full h-2 w-2 mr-2"></span>
                <span className="text-[#333333]">Simplify complex real estate data into accessible formats</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#D4A017] rounded-full h-2 w-2 mr-2"></span>
                <span className="text-[#333333]">Continuously expand our property database and coverage</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#D4A017] rounded-full h-2 w-2 mr-2"></span>
                <span className="text-[#333333]">Remain an unbiased source of property information</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#D4A017] rounded-full h-2 w-2 mr-2"></span>
                <span className="text-[#333333]">Educate homebuyers about market trends and property valuation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}