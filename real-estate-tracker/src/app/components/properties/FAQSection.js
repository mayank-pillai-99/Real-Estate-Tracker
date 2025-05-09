import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: 'How accurate is the price history data?',
      answer: 'Our price history data comes directly from the Zillow API and public records, ensuring high accuracy. The data includes historical listing prices, sales prices, and estimated market values over time. We update this information regularly to maintain accuracy.'
    },
    {
      question: 'What information is included in the tax history?',
      answer: 'Tax history includes annual property tax assessments, tax payments, assessment values, and any relevant tax exemptions. This data helps you understand how property taxes have changed over time and what you might expect to pay as an owner.'
    },
    {
      question: 'Can I save properties to view later?',
      answer: 'Yes, you can save any property by clicking the star icon. Your saved properties will be stored locally on your device and can be accessed anytime you return to the site. We\'re also developing a user account system to sync your saved properties across devices.'
    },
    {
      question: 'How often is property data updated?',
      answer: 'Property listings and details are updated daily through our integration with the Zillow API. Price estimates and tax information typically update monthly or when there\'s a significant change to the property or market conditions.'
    },
    {
      question: 'Are the price trend predictions accurate?',
      answer: 'Our price trend predictions use advanced algorithms analyzing historical data, local market conditions, and broader economic indicators. While no prediction can be 100% accurate, our models aim to provide the most reliable forecasts possible based on available data.'
    },
  ];
  
  return (
    <section className="py-12 bg-[#1A3C5A] text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600">
              <AccordionItem value={`item-${index}`} >
                <AccordionTrigger className="text-lg  text-white hover:text-[#D4A017] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-lg pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>

        
        <div className="mt-12 p-6 bg-[#F9FAFB] rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please reach out to our customer support team.
          </p>
          <Link href="/services/">
            <button className="px-6 py-3 bg-[#D4A017] text-[#333333] rounded-lg hover:bg-[#A8B5A2] transition-colors duration-200">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}