import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vaidya-primary text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center sm:text-left">
            <img 
              src="/Logo.png" 
              alt="Vaidyabhavan Logo" 
              className="h-16 sm:h-20 w-auto mx-auto sm:mx-0 mb-4"
            />
            <p className="mb-4 text-base sm:text-lg">Holistic Healing Through Traditional Wisdom</p>
            <p className="text-sm sm:text-base">Healing Through Tradition, Guided by Experience</p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-vaidya-accent transition-colors text-base sm:text-lg">Home</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-vaidya-accent transition-colors text-base sm:text-lg">Our Doctors</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-vaidya-accent transition-colors text-base sm:text-lg">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-vaidya-accent transition-colors text-base sm:text-lg">Contact & Booking</Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg">Koppam Town</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+918943757522" className="text-base sm:text-lg hover:text-vaidya-accent transition-colors">89437 57522</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:vaidyabhavanayurveda@gmail.com" className="text-base sm:text-lg hover:text-vaidya-accent transition-colors">vaidyabhavanayurveda@gmail.com</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-base sm:text-lg">9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Vaidyabhavan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
