
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SecurityGrid } from '@/animations/SecurityAnimations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-secure-50/30">
        <SecurityGrid />
      </div>
      
      {/* Floating elements */}
      <div className="absolute w-64 h-64 rounded-full bg-teal-300/10 blur-3xl -top-10 -right-20 parallax" data-speed="3"></div>
      <div className="absolute w-72 h-72 rounded-full bg-secure-300/10 blur-3xl -bottom-20 -left-20 parallax" data-speed="4"></div>
      
      {/* Content */}
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center justify-center space-x-1 rounded-full bg-secure-50 px-3 py-1 text-sm font-medium text-secure-800 ring-1 ring-inset ring-secure-100/50 mb-4">
              <span>New</span>
              <svg className="w-1 h-1 fill-secure-600" viewBox="0 0 4 4" aria-hidden="true">
                <circle cx="2" cy="2" r="2" />
              </svg>
              <span className="font-semibold text-secure-600">Web Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight">
              Secure Authentication <span className="text-gradient">with Real-time</span> Protection
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              More than just authentication—SecureAuth provides real-time web security to prevent cyber threats like brute-force attacks, phishing, bots, and fraud.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button className="bg-secure-600 hover:bg-secure-700 text-white h-12 px-8 rounded-md">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-secure-200 hover:bg-secure-50 h-12 px-8 rounded-md group">
                <span>See Live Demo</span>
                <svg 
                  className="ml-2 w-5 h-5 text-secure-600 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Hero image/animation */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-security-grid security-grid opacity-40"></div>
              
              {/* Animated Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secure-400/30 to-teal-400/30 animate-pulse-slow"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-secure-500/40 to-teal-500/40"></div>
                  
                  {/* Shield Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      className="w-32 h-32 md:w-40 md:h-40 text-secure-600" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M9 12L11 14L15 10" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 rounded-full border-2 border-secure-200/30 animate-spin-slow"></div>
                  
                  <div className="absolute top-4 left-16 w-4 h-4 rounded-full bg-secure-400 animate-pulse-slow"></div>
                  <div className="absolute top-12 right-4 w-3 h-3 rounded-full bg-teal-400 animate-pulse-slow"></div>
                  <div className="absolute bottom-8 left-4 w-5 h-5 rounded-full bg-secure-300 animate-pulse-slow"></div>
                  <div className="absolute bottom-12 right-12 w-6 h-6 rounded-full bg-teal-300 animate-pulse-slow"></div>
                </div>
              </div>
              
              {/* Animated scan line */}
              <div className="absolute inset-x-0 top-0 h-full">
                <div className="h-1/2 w-full bg-gradient-to-b from-transparent to-secure-200/10 animate-scan"></div>
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-6 -left-6 glass-card rounded-lg p-3 shadow-glass animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M7 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Attacks Blocked</div>
                  <div className="font-semibold">1,342</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card rounded-lg p-3 shadow-glass animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Security Score</div>
                  <div className="font-semibold">98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#f0f9ff"
            fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
