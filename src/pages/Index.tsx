import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import TreatmentCard from '../components/TreatmentCard';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight } from 'lucide-react';
import ServiceDetailModal from '../components/ServiceDetailModal';
import AwardsCarousel from '../components/AwardsCarousel';
import { motion } from 'framer-motion';

const Index = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
    // Scroll to top when route changes or component mounts
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Hero image
  const heroImage = "/home%20page%20banner.jpg";
  
  // Update to use the same treatments as in ServicesPage
  const featuredTreatments = [
    {
      title: "Panchakarma Therapies",
      description: "Complete detox and rejuvenation treatments according to classical Ayurvedic procedures.",
      image: "/panjakarma.jpg",
      id: "panchakarma",
      fullDescription: "At Vaidyabhavan Ayurveda & Unani Healthcare and Rehabilitation Centre, we offer Panchakarma Therapies for complete detox and rejuvenation using time-tested Ayurvedic procedures.",
      benefits: [
        "Helps eliminate toxins from the body (Ama)",
        "Improves metabolism and immunity",
        "Restores balance to the doshas (Vata, Pitta, Kapha)",
        "Recommended for chronic ailments, fatigue, and preventive care"
      ],
      procedures: [
        "Consultation with Ayurvedic physician",
        "Personalized treatment plan creation",
        "Pre-purification procedures (Purvakarma)",
        "Main purification processes",
        "Post-treatment recovery and dietary guidelines"
      ]
    },
    {
      title: "Cupping & Hijama Center",
      description: "Therapeutic cupping and hijama treatments for pain relief, detox, and circulation improvement.",
      image: "/cupping.jpg",
      id: "cupping-hijama",
      fullDescription: "Our Cupping & Hijama Center offers ancient healing techniques involving therapeutic suction and wet cupping (Hijama).",
      benefits: [
        "Enhances blood circulation",
        "Relieves muscle pain and stiffness",
        "Detoxifies internal systems",
        "Supports healing from chronic fatigue, inflammation, and migraines"
      ],
      procedures: [
        "Initial assessment of condition",
        "Selection of appropriate cupping points",
        "Application of cups with vacuum creation",
        "Therapeutic duration based on condition",
        "Post-treatment care instructions"
      ]
    },
    {
      title: "Steam Bath & Oil Massage",
      description: "Herbal steam therapy and traditional oil massages to promote relaxation, detox, and wellness.",
      image: "/oil massage and steam bath.jpg",
      id: "steam-massage",
      fullDescription: "Our Steam Bath & Herbal Oil Massage treatments combine relaxing herbal steam and traditional Abhyanga massage.",
      benefits: [
        "Opens skin pores and promotes toxin release",
        "Enhances blood flow and skin tone",
        "Relieves joint stiffness and body ache",
        "Promotes deep relaxation and improved sleep"
      ],
      procedures: [
        "Selection of appropriate herbal formulas and oils",
        "Preparatory warm-up techniques",
        "Massage using traditional strokes and pressures",
        "Herbal steam application",
        "Cool-down period and hydration"
      ]
    }
  ];

  const handleOpenServiceDetail = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection backgroundImage={heroImage} />
        
        {/* Combined Welcome and Recognition Section */}
        <section className="section-padding bg-vaidya-light">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Welcome Text */}
                <motion.div 
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center lg:text-left"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-vaidya-primary">Welcome to Vaidyabhavan</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    At Vaidyabhavan, we are committed to providing holistic healing through traditional practices and experienced guidance. Our centre embraces the ancient wisdom of Ayurveda, complemented by modern therapeutic approaches.
                  </p>
                  <p className="text-lg text-gray-700">
                    Our dedication to excellence and traditional healing methods has been recognized through various awards and certifications, showcasing our commitment to quality healthcare.
                  </p>
                </motion.div>

                {/* Awards Carousel */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <AwardsCarousel />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Treatments Preview */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vaidya-primary">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Discover our specialized therapeutic treatments designed to restore balance and promote healing throughout the body.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTreatments.map((treatment, index) => (
                <motion.div 
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    y: 50
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2
                  }}
                >
                  <TreatmentCard
                    title={treatment.title}
                    description={treatment.description}
                    imageSrc={treatment.image}
                    id={treatment.id}
                    onViewDetails={() => handleOpenServiceDetail(treatment)}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.6
              }}
              className="mt-10 text-center"
            >
              <Button asChild size="lg" className="bg-vaidya-primary text-white hover:bg-vaidya-secondary group">
                <Link to="/services" className="flex items-center">
                  View All Services
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Doctors Preview */}
        <section className="section-padding bg-vaidya-light">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vaidya-primary">Our Doctors</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Meet our team of experienced practitioners dedicated to providing the highest quality care through traditional healing methods.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3
                }}
              >
                <Button asChild size="lg" className="bg-vaidya-primary text-white hover:bg-vaidya-secondary group">
                  <Link to="/doctors" className="flex items-center">
                    Meet Our Doctors
                    <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Preview */}
        <section className="section-padding bg-vaidya-primary text-white">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Healing Journey Today</h2>
              <p className="text-lg mb-4">
                Experience the transformative power of our holistic treatments. Our expert practitioners are ready to guide you toward improved health and well-being.
              </p>
              <p className="text-lg mb-8">
                Email us at: <a href="mailto:vaidyabhavanayurveda@gmail.com" className="underline hover:text-vaidya-accent">vaidyabhavanayurveda@gmail.com</a>
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3
                }}
              >
                <Button asChild size="lg" className="bg-white text-vaidya-primary hover:bg-vaidya-accent transition-all hover:scale-105 active:scale-95">
                  <Link to="/contact">Contact & Book Appointment</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService}
            onClose={handleCloseModal}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Index;
