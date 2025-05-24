import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">Vaidyabhavan</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>Holistic Healing Through Traditional Wisdom</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Healing Through Tradition, Guided by Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="bg-vaidya-primary hover:bg-vaidya-secondary text-base sm:text-lg transition-all hover:scale-105 active:scale-95 py-6 sm:py-7">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" className="bg-vaidya-primary hover:bg-vaidya-secondary text-base sm:text-lg transition-all hover:scale-105 active:scale-95 py-6 sm:py-7">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
