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
    description: "View my projects"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muntaz1r9/",
    icon: null,
    logoSrc: "/assets/images/linkedin.svg",
    description: "Connect with me"
  },
  {
    name: "TryHackMe",
    url: "https://tryhackme.com/p/Muntazir",
    icon: null,
    logoSrc: "https://assets.tryhackme.com/img/THMlogo.png",
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
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
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
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      
      // More specific error handling
      let errorMessage = "Failed to send message. Please try again or contact me directly at info@muntazirmehdi.com";
      
      if (error instanceof Error) {
        if (error.message.includes('fetch')) {
          errorMessage = "Unable to connect to email server. Please contact me directly at info@muntazirmehdi.com";
        } else if (error.message.includes('required fields')) {
          errorMessage = error.message;
        } else if (error.message.includes('valid email')) {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-32 relative scroll-section"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.1), transparent 40%)',
      }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>
        
        {/* Contact Form and Social Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-white/85 text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                      placeholder="Your full name" 
                    required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-all duration-300 hover:border-white/30" 
                  />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-white/85 text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                    required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-all duration-300 hover:border-white/30" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                  <label htmlFor="subject" className="text-white/85 text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                    placeholder="What is this about?" 
                  required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-all duration-300 hover:border-white/30" 
                />
              </div>
              
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/85 text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                    placeholder="Your message here..." 
                  required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-all duration-300 hover:border-white/30 resize-none" 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 transition-all duration-400 text-white border-none disabled:opacity-50 h-12 text-base font-medium"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#9b87f5]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-white/85 text-base">
                  Follow me on social media and check out my work
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 flex-1">
                {socialLinksData.map((platform, index) => (
                  <motion.a 
                    key={platform.name} 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-400 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B1E] outline-none flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className="relative">
                        <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                          <img 
                            src={platform.logoSrc} 
                            alt={`${platform.name} logo`} 
                            className="w-6 h-6 object-contain" 
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-white transition-colors">
                          {platform.name}
                        </h4>
                        <p className="text-white/85 text-sm group-hover:text-white/90 transition-colors">
                          {platform.description}
                        </p>
                      </div>

                      <div className="text-white/50 group-hover:text-white/70 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/85 text-sm text-center">
                  Or email me directly at{" "}
                  <a 
                    href="mailto:info@muntazirmehdi.com" 
                    className="text-[#9b87f5] hover:text-[#9b87f5]/80 transition-colors font-medium"
                  >
                    info@muntazirmehdi.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
