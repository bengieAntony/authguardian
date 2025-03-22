/** @format */

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-secure-500 to-teal-500 flex items-center justify-center">
                <div className="absolute inset-0.5 rounded-full bg-white/90"></div>
                <span className="relative z-10 text-secure-600 font-bold text-lg">
                  S
                </span>
              </div>
              <span className="font-bold text-xl">SecureAuth</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-secure-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium hover:text-secure-600 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#demo"
              className="text-sm font-medium hover:text-secure-600 transition-colors"
            >
              Demo
            </a>
            <Button className="bg-gradient-to-r from-secure-600 to-teal-500 hover:from-secure-700 hover:to-teal-600 text-white border-0">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#demo"
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
              <div className="pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-secure-600 to-teal-500 hover:from-secure-700 hover:to-teal-600 text-white border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
