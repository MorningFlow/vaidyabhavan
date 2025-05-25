import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when route changes or component mounts
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header Section */}
        <section className="py-16 px-4 bg-vaidya-accent">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vaidya-primary mb-6 animate-fade-in">Contact & Booking</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Reach out to us to schedule an appointment or learn more about our services. We're here to guide you on your healing journey.
            </p>
          </div>
        </section>
        
        {/* Contact & Booking Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Booking Form */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vaidya-primary">Book an Appointment</h2>
                <BookingForm />
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vaidya-primary">Contact Information</h2>
                
                <div className="mb-8 bg-vaidya-light p-6 sm:p-8 rounded-lg shadow-sm">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <MapPin className="h-6 w-6 text-vaidya-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Address</h3>
                        <p className="text-base sm:text-lg">Vaidyabhavan Ayurveda Unani Healthcare & Rehabilitation Center</p>
                        <p className="text-base sm:text-lg">Valanchery Road, Koppam</p>
                        <p className="text-base sm:text-lg">Vaidyarpadi, Pulasseri Post, 679307</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-6 w-6 text-vaidya-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                        <p className="text-base sm:text-lg">Every day: 9:00 AM – 6:00 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-6 w-6 text-vaidya-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <p className="text-base sm:text-lg">
                          <a href="tel:+918943757522" className="hover:text-vaidya-primary transition-colors">📞 9074023960</a>
                        </p>
                        <p className="text-base sm:text-lg">
                          <a href="tel:+917907658682" className="hover:text-vaidya-primary transition-colors">📞 79076 58682</a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="h-6 w-6 text-vaidya-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-base sm:text-lg">
                          <a href="mailto:vaidyabhavanayurveda@gmail.com" className="hover:text-vaidya-primary transition-colors">vaidyabhavanayurveda@gmail.com</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-vaidya-light p-6 sm:p-8 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-vaidya-primary">Visit Us</h3>
                  <div className="aspect-video w-full rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!4v1747642477973!6m8!1m7!1sbYmN7geJhVadQFdr_OUt3g!2m2!1d10.86623033304603!2d76.17959678281987!3f251.8726334078361!4f-12.989266859119468!5f0.4000000000000002" 
                      width="100%" 
                      height="450" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vaidyabhavan Location"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
