import React, { useState, useEffect } from 'react';

const awards = [
  '/award1.jpg',
  '/award2.jpg',
  '/award3.jpg',
  '/award4.jpg',
  '/award5.jpg',
  '/award6.jpg',
  '/award7.jpg',
];

const AwardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-vaidya-primary text-center mb-6">Our Recognition</h2>
      
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Main Image Container */}
        <div className="relative h-[400px] bg-gray-100">
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ 
              width: `${awards.length * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / awards.length}%)`
            }}
          >
            {awards.map((award, index) => (
              <div 
                key={index}
                className="h-full flex-shrink-0"
                style={{ width: `${100 / awards.length}%` }}
              >
                <img
                  src={award}
                  alt={`Award ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {awards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-vaidya-primary w-4' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsCarousel; 