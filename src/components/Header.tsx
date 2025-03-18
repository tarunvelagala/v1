
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Adjust the path to your actual resume file
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-neopop-black/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            className="text-neopop-black dark:text-white font-display font-bold text-2xl"
          >
            Portfolio.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-neopop-black dark:text-white font-medium text-sm hover:text-neopop-purple transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-neopop-purple transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              
              <Button 
                onClick={handleResumeDownload}
                className="neopop-button flex items-center space-x-2 !text-neopop-black dark:!text-white"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            
            <button 
              className="flex items-center" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} className="text-neopop-black dark:text-white" /> : <Menu size={24} className="text-neopop-black dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-neopop-black/10 animate-fade-in">
          <div className="px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neopop-black dark:text-white font-medium py-2 hover:text-neopop-purple transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={handleResumeDownload}
                className="neopop-button flex items-center space-x-2 !text-neopop-black dark:!text-white mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
