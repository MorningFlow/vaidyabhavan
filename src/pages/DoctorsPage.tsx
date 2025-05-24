import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DoctorCard from '../components/DoctorCard';
import { Button } from '@/components/ui/button';
import BookingForm from '../components/BookingForm';
import { Link, useLocation } from 'react-router-dom';

const DoctorsPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const doctorsData = [{
    id: "dr-rahila",
    name: "Dr. Rahila Thasneem K",
    qualifications: "BAMS",
    position: "Chief Consultant, RMO",
    imageSrc: "/Rahila Thasneem.png",
    description: "Dr. Rahila specializes in traditional Ayurvedic medicine with a focus on women's health and chronic conditions.",
    phoneNumber: "79076 58682"
  }, {
    id: "dr-muneer",
    name: "Dr. Muhammed Muneer E",
    qualifications: "BAMS, MDYN",
    position: "Chief Consultant",
    imageSrc: "/Mohammad Muneer.png",
    description: "With extensive experience in Ayurveda and Yoga, Dr. Muneer provides comprehensive care for various health disorders.",
    phoneNumber: "90740 23960"
  }, {
    id: "dr-anil",
    name: "Dr. Anil Kumar T",
    qualifications: "Chief Physiologist",
    position: "Specializes in Counseling",
    imageSrc: "/Anil Kumar.png",
    description: "Dr. Anil Kumar offers expert counseling and physiological support for patients with complex health conditions.",
    phoneNumber: "79026 42460",
    email: "rosancva@gmail.com"
  }, {
    id: "dr-hakeem",
    name: "Hakeem A Raheem",
    qualifications: "Unani Consultant",
    position: "Director of Vaidyabhavan",
    imageSrc: "/Hakeem A Raheem.png",
    description: "As the director, Hakeem A Raheem brings his expertise in Unani medicine to provide holistic healing approaches.",
    phoneNumber: "94476 23660"
  }];
  
  return <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header Section */}
        <section className="py-12 px-4 bg-vaidya-accent" id="top">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vaidya-primary mb-4 animate-fade-in">Our Doctors</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{
            animationDelay: '100ms'
          }}>
              Meet our team of experienced practitioners dedicated to providing the highest quality care through traditional healing methods.
            </p>
          </div>
        </section>
        
        {/* Main Content - Doctors and Booking Form side by side */}
        <section className="py-8 sm:py-12 px-4 md:py-16 md:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Doctors Grid - Left Side */}
              <div className="lg:w-3/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {doctorsData.map((doctor, index) => (
                    <div 
                      key={index} 
                      className="animate-fade-in" 
                      style={{ animationDelay: `${index * 100}ms` }}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <DoctorCard 
                        id={doctor.id} 
                        name={doctor.name} 
                        qualifications={doctor.qualifications} 
                        position={doctor.position} 
                        imageSrc={doctor.imageSrc} 
                        description={doctor.description} 
                        phoneNumber={doctor.phoneNumber} 
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Booking Form - Right Side */}
              <div className="lg:w-2/5 animate-fade-in" 
                style={{ animationDelay: '400ms' }}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vaidya-primary text-center">Schedule an Appointment</h2>
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Introduction */}
        <section className="py-8 sm:py-12 px-4 md:py-16 md:px-8 bg-vaidya-light" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vaidya-primary animate-fade-in">Our Approach to Healing</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                At Vaidyabhavan, our medical team combines centuries of traditional wisdom with modern therapeutic approaches. We believe in treating the whole person - mind, body, and spirit.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Our practitioners are highly trained in their specialties and work collaboratively to create personalized treatment plans for each patient's unique needs.
              </p>
              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Button asChild size="lg" className="bg-vaidya-primary hover:bg-vaidya-secondary transition-all hover:scale-105 active:scale-95 text-white text-base sm:text-lg py-6 sm:py-7">
                  <Link to="/contact">Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default DoctorsPage;
