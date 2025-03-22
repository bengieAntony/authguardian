import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SecurityGrid } from '@/animations/SecurityAnimations';
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll('.parallax');
        
        elements.forEach((el) => {
          const speed = el.getAttribute('data-speed') || '2';
          const element = el as HTMLElement;
          element.style.transform = `translateY(${scrollY / parseInt(speed)}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative isolate min-h-screen bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Secure Authentication Made Simple
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience seamless and secure authentication with our modern platform. Get started in minutes and protect your application with industry-standard security.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              size="lg"
              onClick={() => navigate('/register')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          {/* Add a nice hero image or animation here */}
          <div className="w-full h-[600px] bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
