
import React, { useState } from 'react';
import { useScrollAnimation } from '@/animations/SecurityAnimations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Demo: React.FC = () => {
  useScrollAnimation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset submitted state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="demo" className="py-20 relative bg-gradient-to-b from-white to-secure-50/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Demo preview */}
            <div className="bg-gradient-to-br from-secure-600 to-teal-600 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-security-grid security-grid"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl"></div>
              
              <div className="relative space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">See SecureAuth in Action</h3>
                <p className="text-secure-100">
                  Experience the power of our security platform with a personalized demo tailored to your business needs.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">1</div>
                    <span>Schedule a personalized demo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">2</div>
                    <span>Get implementation guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">3</div>
                    <span>Start protecting your applications</span>
                  </div>
                </div>
                
                {/* Mock dashboard preview */}
                <div className="mt-8 relative bg-secure-800/40 backdrop-blur-sm rounded-lg p-4 border border-secure-400/30">
                  <div className="text-xs uppercase text-secure-200 mb-2">Live Security Dashboard</div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-secure-700/50 rounded-md p-3">
                      <div className="text-xs text-secure-200">Total Traffic</div>
                      <div className="text-xl font-semibold mt-1">12,852</div>
                      <div className="h-2 w-full bg-secure-600/30 rounded-full mt-2">
                        <div className="h-2 bg-gradient-to-r from-teal-400 to-secure-400 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-secure-700/50 rounded-md p-3">
                      <div className="text-xs text-secure-200">Blocked Attacks</div>
                      <div className="text-xl font-semibold mt-1">347</div>
                      <div className="h-2 w-full bg-secure-600/30 rounded-full mt-2">
                        <div className="h-2 bg-gradient-to-r from-red-400 to-secure-400 rounded-full" style={{width: '23%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-secure-700/50 rounded-md p-3">
                      <div className="text-xs text-secure-200">Security Score</div>
                      <div className="text-xl font-semibold mt-1">98%</div>
                      <div className="h-2 w-full bg-secure-600/30 rounded-full mt-2">
                        <div className="h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs text-secure-200 text-center">
                    Live data from an active SecureAuth implementation
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Request demo form */}
            <div className="p-8 md:p-12 space-y-6">
              <h3 className="text-2xl font-bold">Request Your Demo</h3>
              <p className="text-gray-600">
                Fill out the form below to get access to a free demo and consultation with our security experts.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your company name" 
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@company.com" 
                    className="w-full" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                  <select 
                    id="role" 
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-secure-500 focus:border-secure-500"
                  >
                    <option value="">Select your role</option>
                    <option value="ciso">CISO / Security Leader</option>
                    <option value="developer">Developer / Engineer</option>
                    <option value="it">IT Administrator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="company-size" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                  <select 
                    id="company-size"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-secure-500 focus:border-secure-500"
                  >
                    <option value="">Select company size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-secure-600 to-teal-500 hover:from-secure-700 hover:to-teal-600 text-white h-11"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? 'Processing...' : isSubmitted ? 'Request Submitted!' : 'Request Your Free Demo'}
                  </Button>
                </div>
              </form>
              
              <div className="text-sm text-gray-500 text-center pt-2">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-secure-600 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-secure-600 hover:underline">Privacy Policy</a>.
              </div>
              
              {/* Client logos */}
              <div className="pt-6">
                <div className="text-xs text-gray-400 text-center mb-4">TRUSTED BY LEADING COMPANIES</div>
                <div className="flex flex-wrap justify-center gap-6 opacity-60">
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
