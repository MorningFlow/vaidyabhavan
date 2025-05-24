import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TreatmentCard from '../components/TreatmentCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Droplet, Spline, User, Bandage, Thermometer, Brain, Heart, Pill } from 'lucide-react';
import ServiceDetailModal from '../components/ServiceDetailModal';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const treatmentData = [
    {
      title: "Panchakarma Therapies",
      description: "Complete detox and rejuvenation treatments according to classical Ayurvedic procedures.",
      image: "/panjakarma.jpg",
      icon: Droplet,
      id: "panchakarma",
      fullDescription: "At Vaidyabhavan Ayurveda & Unani Healthcare and Rehabilitation Centre, we offer Panchakarma Therapies for complete detox and rejuvenation using time-tested Ayurvedic procedures.The procedure is carefully customised according to the condition of the person.This include VAMANA (emesis),VIRECHANA (purgation),VASTHI (enema), NASYA (instillation of medicines through nose),RAKTHAMOKSHANA (blood letting)",
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
      icon: Bandage,
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
      icon: Thermometer,
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
    },
    {
      title: "Women's Clinic",
      description: "Specialized treatments addressing women's unique health concerns and wellness needs.",
      image: "/womens clinic.jpg",
      icon: User,
      details: [
        "Menstrual disorders",
        "Weight management",
        "Leukorrhea",
        "PCOS",
        "Postnatal care",
        "Beauty-related concerns"
      ],
      id: "womens-clinic",
      fullDescription: "Our Women's Clinic provides dedicated care for women's health, blending Ayurveda and Unani expertise.",
      benefits: [
        "Comprehensive care for women's health issues",
        "Natural approaches to hormonal balance",
        "Personalized treatment plans",
        "Holistic wellness support"
      ],
      procedures: [
        "Treatment for menstrual disorders (irregularity, pain)",
        "Management of weight-related issues and PCOS",
        "Treatment for white discharge (Leukorrhea)",
        "Postnatal rejuvenation",
        "Addressing skin and beauty concerns",
        "Holistic hormonal balance support"
      ]
    },
    {
      title: "Skin Clinic",
      description: "Expert Ayurvedic care for chronic skin conditions with natural, effective treatments.More over we are also providing several facial packs and facial massages to glow up your skin and make it healthy and beautiful",
      image: "/skin clinic.jpg",
      details: [
        "Psoriasis",
        "Eczema",
        "Other chronic skin conditions"
      ],
      id: "skin-clinic",
      fullDescription: "Our Skin Clinic offers specialized Ayurvedic dermatology for chronic and recurring skin conditions.",
      benefits: [
        "Natural treatment approaches for skin disorders",
        "Improved skin texture and appearance",
        "Reduced inflammation and irritation",
        "Internal cleansing for lasting relief"
      ],
      procedures: [
        "Treatment for psoriasis",
        "Management of eczema",
        "Care for dermatitis",
        "Treatment for fungal infections",
        "Solutions for skin allergies"
      ]
    },
    {
      title: "Spine Clinic",
      description: "Targeted therapies for various spine and joint disorders using traditional healing methods.",
      image: "/spine clinic.jpg",
      icon: Spline,
      details: [
        "Spondylitis",
        "Spondylosis",
        "Disc prolapse",
        "Joint and spinal disorders"
      ],
      id: "spine-clinic",
      fullDescription: "Our Spine Clinic provides focused therapies for spine and joint health using traditional and integrative methods.",
      benefits: [
        "Pain relief for chronic back conditions",
        "Improved mobility and flexibility",
        "Reduced inflammation in joints",
        "Natural approaches to structural issues"
      ],
      procedures: [
        "Treatment for spondylitis and spondylosis",
        "Management of disc prolapse",
        "Care for chronic lower back or neck pain",
        "Therapy for joint degeneration and stiffness",
        "Combined approaches using massage, herbal poultices, physiotherapy, and detox regimens"
      ]
    },
    {
      title: "Lifestyle Disorders",
      description: "Ayurvedic management for common modern lifestyle-related health issues.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=500",
      icon: Heart,
      details: [
        "Diabetes",
        "Cholesterol issues",
        "Obesity",
        "High blood pressure"
      ],
      id: "lifestyle-disorders",
      fullDescription: "Our Lifestyle Disorder Management program offers natural solutions to modern lifestyle-related diseases.",
      benefits: [
        "Natural management of chronic conditions",
        "Improved health markers and vitality",
        "Reduced dependency on conventional medications",
        "Sustainable lifestyle modifications"
      ],
      procedures: [
        "Management of diabetes (Prameha)",
        "Treatment for obesity",
        "Care for high cholesterol and triglycerides",
        "Management of hypertension (Raktachapa)",
        "Emphasis on personalized diet, herbal medication, detox, and activity plans"
      ]
    },
    {
      title: "Counseling & Psychotherapy",
      description: "Professional guidance for mental health concerns using holistic Ayurvedic approaches.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=500",
      icon: Brain,
      details: [
        "Learning disabilities",
        "Anger issues",
        "Behavioral disorders in children",
        "ADHD and hyperactivity",
        "Marital problems",
        "Anxiety and suspicion disorders",
        "Alcohol dependency"
      ],
      id: "counseling",
      fullDescription: "Our Counseling & Psychotherapy service provides a compassionate space for mental and emotional well-being.",
      benefits: [
        "Holistic approach to mental health",
        "Natural support for emotional balance",
        "Improved coping mechanisms",
        "Enhanced family and relationship dynamics"
      ],
      procedures: [
        "Support for children's learning disabilities and behavioral issues",
        "Anger management and stress coping strategies",
        "Treatment for ADHD and hyperactivity",
        "Counseling for marital challenges and relationship conflicts",
        "Care for anxiety, suspicion, and substance abuse (alcohol dependency)",
        "Therapies include talk therapy, Ayurvedic psychiatry, and supportive counseling"
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
        {/* Header Section */}
        <section className="py-16 px-4 bg-vaidya-accent">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vaidya-primary mb-6 animate-fade-in">Our Services</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Discover our comprehensive range of traditional healing treatments designed to restore balance and promote overall wellbeing.
            </p>
          </div>
        </section>
        
        {/* Treatments Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {treatmentData.map((treatment, index) => (
                <div key={index} 
                     className="animate-fade-in" 
                     style={{ animationDelay: `${index * 100}ms` }}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     data-aos-once="true">
                  <TreatmentCard
                    title={treatment.title}
                    description={treatment.description}
                    imageSrc={treatment.image}
                    id={treatment.id}
                    details={treatment.details}
                    onViewDetails={() => handleOpenServiceDetail(treatment)}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Our treatments are tailored to individual needs. Contact us for more detailed information about each service.
              </p>
              <Button asChild size="lg" className="bg-vaidya-primary text-white hover:bg-vaidya-secondary transition-all hover:scale-105 active:scale-95 text-base sm:text-lg py-6 sm:py-7">
                <Link to="/contact">Book a Treatment</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Treatment Philosophy */}
        <section className="section-padding bg-vaidya-light">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vaidya-primary" data-aos="fade-up">Our Treatment Philosophy</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="100">
                At Vaidyabhavan, we believe in addressing the root cause of health issues rather than just treating symptoms. Our holistic approach considers the unique constitution and needs of each patient.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="200">
                Our treatments draw from centuries-old healing traditions, refined and adapted to meet modern health challenges. We combine the wisdom of Ayurveda, Unani medicine, and other traditional practices to provide comprehensive care.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="300">
                Each treatment plan is carefully designed by our experienced practitioners to help restore balance, enhance vitality, and promote long-term health and wellbeing.
              </p>
            </div>
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

export default ServicesPage;
