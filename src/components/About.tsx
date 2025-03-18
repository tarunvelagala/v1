
import React, { useEffect, useRef } from 'react';
import { images } from '../assets/images';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div ref={aboutRef} className="reveal-animation">
          <div className="inline-block">
            <span className="block text-sm font-mono text-neopop-purple mb-2">HELLO, I'M</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-neopop-black mb-4 leading-tight">
              John Doe
            </h1>
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-display text-neopop-black/80 mb-6">
              Senior Product Designer
            </h2>
            <p className="text-lg text-neopop-black/70 mb-8 max-w-lg">
              I'm a product designer specializing in creating intuitive digital experiences that combine aesthetics with functionality. With 8+ years of experience spanning multiple industries, I bring a human-centered approach to every project.
            </p>
            <a 
              href="mailto:john.doe@example.com" 
              className="neopop-button inline-flex items-center gap-2"
            >
              Let's Connect <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        {/* Profile image that hides on mobile */}
        <div className={`relative ${isMobile ? 'hidden' : 'block'}`}>
          <div className="w-full h-full max-w-md mx-auto">
            <div className="w-full aspect-[3/4] relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-neopop-black bg-neopop-yellow"></div>
              <div className="absolute left-0 top-0 w-full h-full border-2 border-neopop-black shadow-neopop overflow-hidden bg-white">
                <img 
                  src={images.profile} 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.remove('image-shimmer')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
