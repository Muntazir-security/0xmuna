
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/Muntazir-security",
    icon: null,
    logoSrc: "/assets/images/github.svg",
    hoverColor: "hover:bg-gray-700",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muntaz1r9/",
    icon: null,
    logoSrc: "/assets/images/linkedin.svg",
    hoverColor: "hover:bg-blue-600",
  },
  {
    name: "X",
    url: "https://x.com/muntaz1r9",
    icon: null,
    logoSrc: "/assets/images/X.svg",
    hoverColor: "hover:bg-gray-800",
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
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
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
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/90 text-sm">Message</label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message" 
                  required
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50 min-h-32 focus-visible:ring-[#9b87f5]" 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 transition-opacity text-white border-none disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-6 text-lg">Connect with me</p>
          <div className="flex justify-center space-x-6">
            {socialLinksData.map((platform) => (
              <a 
                key={platform.name} 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={platform.name}
                className={`group relative bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:border-white/40 ${platform.hoverColor} focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B1E] outline-none hover:shadow-xl hover:shadow-black/20`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={platform.logoSrc} 
                    alt={`${platform.name} logo`} 
                    className="w-6 h-6 object-contain transition-all duration-300 group-hover:scale-110" 
                  />
                </div>
                <span 
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-white/10"
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
