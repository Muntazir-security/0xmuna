
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
          <p className="text-white/60 mb-2">Or connect with me</p>
          <div className="flex justify-center space-x-6">
            {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="text-white/80 hover:text-[#9b87f5] transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
