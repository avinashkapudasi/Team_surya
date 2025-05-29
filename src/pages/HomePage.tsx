import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Team Surya | Traditional Event Management';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
};

export default HomePage;