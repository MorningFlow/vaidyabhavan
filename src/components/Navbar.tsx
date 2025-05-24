import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Our Doctors', href: '/doctors' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300",
      scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/Logo.png" 
                alt="Vaidyabhavan Logo" 
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-medium hover:text-vaidya-primary transition-colors story-link relative",
                  location.pathname === item.href 
                    ? "text-vaidya-primary" 
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button asChild className="bg-vaidya-primary hover:bg-vaidya-secondary hover:scale-105 transition-all">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-[72px] left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden z-50",
          isOpen ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "block px-4 py-3 text-base font-medium rounded-lg transition-all",
                location.pathname === item.href 
                  ? "text-vaidya-primary bg-vaidya-accent/30" 
                  : "text-gray-700 hover:bg-vaidya-accent/10 hover:text-vaidya-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4 pt-4">
            <Button asChild className="w-full bg-vaidya-primary hover:bg-vaidya-secondary text-lg py-6">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
