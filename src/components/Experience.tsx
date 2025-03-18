
import React from 'react';
import { images } from '../assets/images';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Product Designer',
    company: 'Google',
    logo: images.companyLogos.google,
    period: 'Jan 2020 - Present',
    location: 'Mountain View, CA',
    description: 'Led the redesign of Google Analytics dashboard, improving user engagement by 40%. Collaborated with engineering and product teams to develop and implement new features.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Microsoft',
    logo: images.companyLogos.microsoft,
    period: 'Mar 2017 - Dec 2019',
    location: 'Seattle, WA',
    description: 'Designed user interfaces for Microsoft 365 applications, focusing on accessibility and user experience. Created design systems and component libraries for cross-platform consistency.',
  },
  {
    title: 'Product Designer',
    company: 'Apple',
    logo: images.companyLogos.apple,
    period: 'Jun 2015 - Feb 2017',
    location: 'Cupertino, CA',
    description: 'Contributed to the design of Apple Music interface across iOS and macOS platforms. Participated in user research and testing to iterate on product features.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-3xl font-bold">Work Experience</h2>
        
        <div className="space-y-12 mt-16">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="reveal-animation neopop-card p-6 relative" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden border-2 border-neopop-black p-2">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain company-logo"
                      onLoad={(e) => e.currentTarget.classList.remove('image-shimmer')}
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-display font-bold">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-neopop-black/80 mt-1">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-neopop-black/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-neopop-black/70">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
