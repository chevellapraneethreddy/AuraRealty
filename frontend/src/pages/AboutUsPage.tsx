import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import StructuredData from '../components/common/StructuredData';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutHeritageSection from '../components/about/AboutHeritageSection';
import AboutStatsSection from '../components/about/AboutStatsSection';
import AboutValuesSection from '../components/about/AboutValuesSection';
import AboutAISection from '../components/about/AboutAISection';
import AboutCTASection from '../components/about/AboutCTASection';

const AboutUsPage: React.FC = () => {
  useSEO({
    title: 'About AuraRealty — Intelligent Real Estate & Living',
    description: 'AuraRealty is an AI-powered luxury real estate platform serving discerning buyers and sellers worldwide. Learn about our architectural vision and intelligence technology.',
    url: 'https://aurarealty.io/about',
  });

  return (
    <div className="bg-white min-h-screen">
      <StructuredData type="speakable" data={{ cssSelector: ['h1', '[data-speakable]'] }} />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AboutHeroSection />

      {/* Our Heritage Section */}
      <AboutHeritageSection />

      {/* Stats Section */}
      <AboutStatsSection />

      {/* Values Section - Driven by Purpose */}
      <AboutValuesSection />

      {/* AI Intelligence Section */}
      <AboutAISection />

      {/* CTA Section */}
      <AboutCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
