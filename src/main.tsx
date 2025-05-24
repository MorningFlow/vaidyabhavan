
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = () => {
    const elements = document.querySelectorAll('[data-aos]');
    const windowHeight = window.innerHeight;
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Adjust this value to control when animations trigger (0.85 means 85% of the viewport)
      if (rect.top <= windowHeight * 0.85) {
        el.classList.add('aos-animate');
      } else {
        // Optional: remove the class if element goes out of view
        // Uncomment if you want animations to replay when scrolling back up
        // el.classList.remove('aos-animate');
      }
    });
  };
  
  // Initial check
  animateElements();
  
  // Scroll event with throttling for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        animateElements();
        scrollTimeout = null;
      }, 10); // Adjust the delay as needed for performance
    }
  });
  
  // Resize event to recalculate positions
  window.addEventListener('resize', animateElements);
});

createRoot(document.getElementById("root")!).render(<App />);
