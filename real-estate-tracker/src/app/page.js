import Head from 'next/head';
import Navbar from './components/layout/Navbar';
import SearchBar from './components/home/SearchBar';
import HeroSection from './components/home/HeroSection';
import CarouselItems from './components/home/CarouselItems';
// import FeaturedProperties from './components/home/FeaturedProperties';
import Testimonials from './components/home/Testimonials';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Real Estate Market Tracker | Home</title>
        <meta name="description" content="Find your dream home with our real estate market tracker. Search properties, view price history, and make informed decisions." />
      </Head>

      <Navbar />
      <HeroSection />
      <CarouselItems />
      <SearchBar />
      <Testimonials />
      <Footer />
    
    </div>
  );
}
