import React from 'react';

export default function History() {
  const history = [
    { year: '2009', event: 'Realytics founded with a vision to simplify property searches.' },
    { year: '2012', event: 'Expanded services to include property valuation tools.' },
    { year: '2016', event: 'Introduced property management solutions for clients.' },
    { year: '2020', event: 'Launched advanced search and pricing history features.' },
    { year: '2025', event: 'Celebrating 16 years of excellence and innovation.' },
  ];

  return (
    <section className="bg-[#1A3C5A] text-[#F9FAFB] py-10">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-[#D4A017]/90 border-2 border-[#F9FAFB] rounded-lg shadow-md p-6 max-w-prose space-y-40 text-[#333333]">
            <p className="text-lg">
              Founded in 2009, Realytics began with a simple mission: to revolutionize the real estate experience by connecting people with their dream properties. Over the years, we’ve grown into a trusted name, offering innovative tools and services that empower buyers, sellers, and investors alike.
            </p>
            <p className="text-lg">
              From our early days of basic property listings to the introduction of advanced valuation and management solutions, Realytics has consistently adapted to meet the evolving needs of the market. Today, we celebrate 16 years of excellence, with a commitment to data-driven insights and exceptional customer support.
            </p>
          </div>
          <div className="space-y-6">
            {history.map((milestone, index) => (
              <div key={index} className="bg-[#F9FAFB] text-[#333333] rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#D4A017]">{milestone.year}</h3>
                <p className="text-base mt-2">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}