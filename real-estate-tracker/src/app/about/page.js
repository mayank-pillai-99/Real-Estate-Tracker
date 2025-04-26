import Navbar from '../components/layout/Navbar';
import HistorySection from '../components/about/HistorySection';
import VisionAndMission from '../components/about/VisionAndMission'
import HeroSection from '../components/about/HeroSection';
import TeamSection from '../components/about/TeamSection';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <HistorySection/>
      <VisionAndMission/>
      <TeamSection/>
      <Footer />
    </div>
  );
}
