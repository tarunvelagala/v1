
import React, { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import { setupRevealAnimations } from '../lib/motion';
import { ThemeProvider } from '../components/ThemeProvider';

const Index = () => {
  useEffect(() => {
    // Initialize reveal animations
    setupRevealAnimations();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
};

export default Index;
