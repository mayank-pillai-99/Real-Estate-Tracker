import Navbar from '../components/layout/Navbar';
import BlogList from '../components/blog/BlogList';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/blog/HeroSection';

export default function Blog() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BlogList/>
      <Footer />
    </div>
  );
}
