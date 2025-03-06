
import React from 'react';
import { useScrollAnimation } from '@/animations/SecurityAnimations';
import { ShieldAnimation } from '@/animations/SecurityAnimations';
import { Shield, Lock, Clock, Zap, Users, Globe } from 'lucide-react';

const Benefits: React.FC = () => {
  useScrollAnimation();

  return (
    <section id="benefits" className="py-20 relative bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secure-50 to-white"></div>
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center space-x-1 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 ring-1 ring-inset ring-teal-100/50 mb-4">
            <span className="font-semibold text-teal-600">Benefits</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Protected with <span className="text-gradient">SecureAuth</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive security solution offers multiple advantages for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-secure-50 to-teal-50 rounded-2xl p-6 md:p-10 relative overflow-hidden animate-on-scroll">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-teal-100/50 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secure-100/50 blur-2xl"></div>
              
              <div className="relative">
                <ShieldAnimation />
                
                {/* Real-time stats */}
                <div className="absolute top-4 left-4 glass-card rounded-lg p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-xs font-medium text-gray-500">Threats Blocked</div>
                  <div className="text-lg font-bold flex items-center">
                    <span className="text-secure-700">7,349</span>
                    <span className="text-xs text-green-500 ml-2 flex items-center">
                      <svg className="w-3 h-3 mr-0.5" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      24%
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 glass-card rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xs font-medium text-gray-500">Security Score</div>
                  <div className="text-lg font-bold flex items-center">
                    <span className="text-secure-700">98%</span>
                    <span className="text-xs text-green-500 ml-2 flex items-center">
                      <svg className="w-3 h-3 mr-0.5" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      3%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-teal-50 rounded-md p-2">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Security Posture</h3>
                    <p className="text-gray-600">
                      Strengthen your overall security with multiple layers of protection, from authentication to web application security.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-secure-50 rounded-md p-2">
                    <Lock className="w-5 h-5 text-secure-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reduced Risk of Breaches</h3>
                    <p className="text-gray-600">
                      Prevent unauthorized access and data leaks with intelligent threat detection and automated response mechanisms.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-teal-50 rounded-md p-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Time and Cost Savings</h3>
                    <p className="text-gray-600">
                      Automate security responses and reduce the need for manual intervention, allowing your team to focus on strategic initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional benefits cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
          <div className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm animate-on-scroll">
            <div className="flex flex-col items-start">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                <Zap className="w-6 h-6 text-secure-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Implementation</h3>
              <p className="text-gray-600">
                Deploy SecureAuth quickly with our easy-to-integrate SDK and comprehensive documentation.
              </p>
            </div>
          </div>
          
          <div className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm animate-on-scroll">
            <div className="flex flex-col items-start">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                <Users className="w-6 h-6 text-secure-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Improved User Experience</h3>
              <p className="text-gray-600">
                Balance security with usability using risk-based authentication that adapts to user behavior.
              </p>
            </div>
          </div>
          
          <div className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm animate-on-scroll">
            <div className="flex flex-col items-start">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                <Globe className="w-6 h-6 text-secure-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Protection</h3>
              <p className="text-gray-600">
                Protect your applications from threats worldwide with our global threat intelligence network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
