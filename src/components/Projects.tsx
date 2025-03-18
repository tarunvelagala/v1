
import React from 'react';
import { images } from '../assets/images';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Finance Dashboard',
    description: 'A comprehensive finance dashboard for tracking expenses, investments, and financial goals with data visualization.',
    image: images.projects.project1,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, user authentication, shopping cart, and payment integration.',
    image: images.projects.project2,
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, file sharing, and team collaboration features.',
    image: images.projects.project3,
    tags: ['Vue.js', 'Firebase', 'Sass', 'WebSockets'],
    liveLink: '#',
    repoLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-3xl font-bold">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="reveal-animation neopop-card overflow-hidden flex flex-col h-full"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video w-full overflow-hidden relative border-b-2 border-neopop-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.remove('image-shimmer')}
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-neopop-black/70 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="skill-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center gap-1 text-sm font-medium text-neopop-black hover:text-neopop-purple transition-colors"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.repoLink} 
                    className="flex items-center gap-1 text-sm font-medium text-neopop-black hover:text-neopop-purple transition-colors"
                    aria-label={`View source code for ${project.title}`}
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
