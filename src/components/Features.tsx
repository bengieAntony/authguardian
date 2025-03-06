
import React from 'react';
import { useScrollAnimation } from '@/animations/SecurityAnimations';
import { ShieldAnimation, ScanAnimation } from '@/animations/SecurityAnimations';
import { 
  ShieldCheck, 
  Lock, 
  Fingerprint, 
  Bot, 
  Shield, 
  BarChart3, 
  BrainCircuit, 
  Bell 
} from 'lucide-react';

const Features: React.FC = () => {
  useScrollAnimation();

  return (
    <section 
      id="features" 
      className="py-20 bg-secure-50/50 relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secure-200/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-gradient">Security</span> Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SecureAuth combines powerful authentication with advanced web protection to give you complete security against modern threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-secure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Factor Authentication</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Verify user identity with SMS, USSD, or voice calls for an additional layer of security beyond passwords.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-600">Trusted device support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                <Shield className="w-7 h-7 text-secure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Protection</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Block brute-force attacks, SQL injections, and XSS attacks with our advanced Web Application Firewall integration.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-600">Real-time threat blocking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                <Bot className="w-7 h-7 text-secure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bot Detection</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Identify and block malicious bots with Google reCAPTCHA integration and sophisticated honeypot technologies.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-600">Automated threat prevention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                <BrainCircuit className="w-7 h-7 text-secure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Fraud Detection</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Machine learning algorithms analyze login behavior to detect suspicious activity and prevent account takeovers.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-600">Behavior anomaly detection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-secure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security Dashboard</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Monitor threats in real-time with a comprehensive dashboard showing blocked attacks, failed logins, and bot activity.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-600">Custom security settings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-secure-50 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                <Bell className="w-7 h-7 text-secure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk-Based Authentication</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Adjust authentication requirements based on risk level, requesting additional verification when suspicious activity is detected.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-600">Contextual security challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlight */}
        <div className="mt-24 animate-on-scroll">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-security-grid security-grid opacity-20"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center rounded-full bg-secure-100 px-3 py-1 text-sm font-medium text-secure-800">
                  <span className="font-medium">Advanced Protection</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold">Real-Time Threat Monitoring & Prevention</h3>
                
                <p className="text-gray-600">
                  Our intelligent system continuously monitors for suspicious activities across your web applications, 
                  blocking threats before they can do harm. With SecureAuth, you get comprehensive visibility into 
                  security events and automatic protection against evolving attack vectors.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secure-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Automated blocking of malicious IP addresses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secure-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Real-time threat intelligence integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secure-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Customizable security rules and policies</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-secure-50 to-teal-50 rounded-xl overflow-hidden h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <ScanAnimation />
                    <div className="absolute bottom-6 right-6">
                      <div className="glass-card rounded-lg p-3 animate-pulse-slow">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">Protection Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
