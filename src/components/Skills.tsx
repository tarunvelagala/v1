
import React from 'react';

const skillCategories = [
  {
    title: 'Design',
    skills: [
      'UI/UX Design', 
      'User Research', 
      'Design Systems', 
      'Wireframing', 
      'Prototyping', 
      'Visual Design', 
      'Interaction Design',
      'Accessibility',
    ],
  },
  {
    title: 'Development',
    skills: [
      'HTML/CSS', 
      'JavaScript', 
      'React', 
      'TypeScript', 
      'Tailwind CSS', 
      'Next.js', 
      'Responsive Design',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Figma', 
      'Adobe XD', 
      'Sketch', 
      'Adobe Photoshop', 
      'Adobe Illustrator', 
      'Principle', 
      'InVision', 
      'Zeplin',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-3xl font-bold">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="reveal-animation" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="neopop-card p-6 h-full">
                <h3 className="text-xl font-display font-bold mb-6 inline-block relative">
                  {category.title}
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-neopop-purple"></span>
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
