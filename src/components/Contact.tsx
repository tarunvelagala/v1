
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-3xl font-bold">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="reveal-animation">
            <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neopop-purple/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-neopop-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-neopop-black/60 font-medium mb-1">Email</h4>
                  <a href="mailto:john.doe@example.com" className="text-neopop-black hover:text-neopop-purple transition-colors">
                    john.doe@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neopop-purple/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-neopop-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-neopop-black/60 font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-neopop-black hover:text-neopop-purple transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neopop-purple/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-neopop-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-neopop-black/60 font-medium mb-1">Location</h4>
                  <p className="text-neopop-black">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" style={{ transitionDelay: '0.1s' }}>
            <form className="neopop-card p-6">
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neopop-black/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-2 border-neopop-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neopop-purple"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neopop-black/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-2 border-neopop-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neopop-purple"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neopop-black/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border-2 border-neopop-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neopop-purple"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="neopop-button inline-flex items-center gap-2 mt-2"
                >
                  Send Message <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
