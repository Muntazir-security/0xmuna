import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Lucide imports will be removed if no custom SVGs are used for all three
// import { Github, Linkedin, Twitter as LucideTwitterIcon } from 'lucide-react'; 

const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/Muntazir-security",
    icon: null, // No Lucide icon
    logoSrc: "/assets/images/github.svg", // Path to custom SVG
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muntaz1r9/",
    icon: null, // No Lucide icon
    logoSrc: "/assets/images/linkedin.svg", // Path to custom SVG
  },
  {
    name: "X",
    url: "https://x.com/muntaz1r9",
    icon: null, // No Lucide icon
    logoSrc: "/assets/images/X.svg", // Path to custom SVG
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#9b87f5]">Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#6366f1]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#a855f7]/20 rounded-full blur-3xl"></div>
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/90 text-sm">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5]" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/90 text-sm">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5]" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/90 text-sm">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5]" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/90 text-sm">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50 min-h-32 focus-visible:ring-[#9b87f5]" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 transition-opacity text-white border-none"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-4 md:mb-6">Or connect with me</p>
          <div className="flex justify-center space-x-4 md:space-x-6">
            {socialLinksData.map((platform) => (
              <a 
                key={platform.name} 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="group relative bg-white/10 p-3 md:p-4 rounded-full transition-all duration-300 ease-in-out hover:bg-[#9b87f5] hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B1E] outline-none"
              >
                {platform.logoSrc ? (
                  <img 
                    src={platform.logoSrc} 
                    alt={`${platform.name} logo`} 
                    className="w-5 h-5 md:w-6 md:h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                ) : platform.icon ? (
                  // This part would effectively not be used if all have logoSrc
                  <platform.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                ) : null}
                <span 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg"
                >
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
