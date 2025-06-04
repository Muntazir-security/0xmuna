
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/Muntazir-security",
    icon: null,
    logoSrc: "/assets/images/github.svg",
    hoverColor: "hover:shadow-[0_0_30px_rgba(88,166,255,0.4)]",
    description: "View my projects"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muntaz1r9/",
    icon: null,
    logoSrc: "/assets/images/linkedin.svg",
    hoverColor: "hover:shadow-[0_0_30px_rgba(10,102,194,0.4)]",
    description: "Connect with me"
  },
  {
    name: "TryHackMe",
    url: "https://tryhackme.com/p/Muntazir",
    icon: null,
    logoSrc: "https://assets.tryhackme.com/img/THMlogo.png",
    hoverColor: "hover:shadow-[0_0_30px_rgba(212,46,46,0.4)]",
    description: "Check my progress"
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate email sending (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll show a success message
      // In a real implementation, you would send this to your backend
      console.log('Form submitted:', {
        ...formData,
        to: 'info@muntazirmehdi.com'
      });

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background to match other pages */}
      <div className="absolute inset-0 bg-[#0B0B1E]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#9b87f5]">Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>
        
        {/* Contact Form and Social Links Grid with consistent heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col h-[600px]">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#6366f1]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#a855f7]/20 rounded-full blur-3xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/90 text-sm">Name</label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    required
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5]" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/90 text-sm">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email" 
                    required
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5]" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/90 text-sm">Subject</label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  required
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5]" 
                />
              </div>
              
              <div className="space-y-2 flex-1 flex flex-col">
                <label htmlFor="message" className="text-white/90 text-sm">Message</label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message" 
                  required
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-[#9b87f5] flex-1 min-h-[150px] resize-none" 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 transition-opacity text-white border-none disabled:opacity-50 mt-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Social Links Section with matching height */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col h-[600px]">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#a855f7]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#6366f1]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-white/60 text-lg">Follow me on social media for updates and insights</p>
              </div>
              
              <div className="flex flex-col space-y-6 flex-1">
                {socialLinksData.map((platform, index) => (
                  <motion.a 
                    key={platform.name} 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 transition-all duration-500 ease-out hover:scale-105 hover:border-white/40 focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B1E] outline-none ${platform.hoverColor} flex-1 flex items-center`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-4 w-full">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                          <img 
                            src={platform.logoSrc} 
                            alt={`${platform.name} logo`} 
                            className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110" 
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-white transition-colors">
                          {platform.name}
                        </h4>
                        <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                          {platform.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                         style={{
                           background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                           backgroundSize: '200% 200%',
                           animation: 'shimmer 2s infinite'
                         }}>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
