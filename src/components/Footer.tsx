
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neopop-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-white font-display font-bold text-2xl">
              Portfolio.
            </a>
            <p className="mt-2 text-white/70 max-w-md">
              Creating meaningful digital experiences through thoughtful design and clean code.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Github profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Twitter profile"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Instagram profile"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
