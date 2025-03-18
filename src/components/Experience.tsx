
import React from 'react';
import { images } from '../assets/images';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Application Engineer II',
    company: 'Amazon',
    logo: images.companyLogos.amazon,
    period: 'Oct 2023 - Feb 2025',
    location: 'Bengaluru, KA',
    description: [
      'Implemented disaster recovery components for a data transformation engine, reducing operational overhead by 20% and streamlining 5 ETL pipeline migrations.',
      'Migrated 2.6 PB of Redshift data to a private subnet using AWS and Python, ensuring 100% availability across 4 critical services with minimal downtime risk.',
      'Enhanced an internal data-sharing platform by purging 50 TB of seller data and integrating 5 essential services.',
      'Modernized a Balance Tracking Management service into a Java-based microservice on ECS and RDS, supporting payment corrections at 3 RPS with TestNG-based integration tests.'
    ]
  },
  {
    title: 'Software Application Engineer I',
    company: 'Amazon',
    logo: images.companyLogos.amazon,
    period: 'Apr 2022 - Sep 2023',
    location: 'Bengaluru, KA',
    description: [
      'Architected and deployed high-availability RESTful APIs for a Seller Payments Tracking Service (100K daily visits, 15 RPS), boosting query performance by 30% and mentoring interns.',
      'Spearheaded dataset migration to an upgraded data warehouse, improving analytics capabilities by 25% across teams.',
      'Engineered monitoring, CI/CD pipelines, and integration tests using TypeScript, CloudWatch, and TestNG for a Seller Payments Data Query Service, enhancing debugging and logging.',
      'Identified and resolved $5M in seller balance discrepancies through automated ticketing and financial reporting enhancements using AWS Athena and S3.'
    ]
  },
  {
    title: 'Support Engineer II',
    company: 'Amazon',
    logo: images.companyLogos.amazon,
    period: 'Apr 2020 - Mar 2022',
    location: 'Bengaluru, KA',
    description: [
      'Built Java-based server-side functionalities with REST APIs for a vendor-facing portal, improving response times by 15% using ORM, AWS API Gateway, and Lambda.',
      'Integrated a traffic-shaping tool into the vendor portal, optimizing resource protection and reducing server costs by 20% by filtering bad actor traffic.',
      'Optimized Java services using AWS profiling tools, identifying performance gaps and improving system efficiency by 10%.'
    ]
  }
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
                  <div className="w-16 h-16 bg-white overflow-hidden p-2">
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
                </div>
              </div>
              <div className="flex-grow">
                  {exp.description.map((point, index) => (
                  <p key={index} className="mt-2 text-neopop-black/70">{point}</p>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
