import React, { memo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Shield, Lock, Terminal, Globe } from "lucide-react";

const TypewriterText = memo(({ 
  text, 
  delay = 0, 
  className = "",
  speed = 100 
}: { 
  text: string; 
  delay?: number; 
  className?: string;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, speed);
      return () => clearInterval(typeInterval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-pulse text-cyan-400">|</span>}
    </span>
  );
});
TypewriterText.displayName = 'TypewriterText';

const HolographicCard = memo(({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative group transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 rounded-2xl"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
});
HolographicCard.displayName = 'HolographicCard';



const StatusBadge = memo(() => (
  <div className="inline-block" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
      <div className="relative px-6 py-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-cyan-400/30">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text text-sm font-semibold">
            SECURITY SPECIALIST • ONLINE
          </span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  </div>
));
StatusBadge.displayName = 'StatusBadge';

const TryHackMeBadge = memo(() => (
  <div className="flex justify-center" data-aos="fade-left" data-aos-delay="1200">
    <HolographicCard className="w-full max-w-sm">
      <div className="bg-gradient-to-r from-white/5 to-white/5 px-4 py-3 border-b border-white/10 rounded-t-xl">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white/90">TryHackMe Profile</span>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      
      <div className="p-2">
        <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <iframe 
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=996369" 
            className="w-full h-20 border-0 block"
            title="TryHackMe Badge"
            scrolling="no"
            style={{
              minWidth: '280px',
              maxWidth: '280px',
              height: '80px'
            }}
          />
        </div>
      </div>
    </HolographicCard>
  </div>
));
TryHackMeBadge.displayName = "TryHackMeBadge";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto text-white">
          
          {/* Main Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
              
              {/* Status Badge */}
              <div className="flex justify-center lg:justify-start">
                <StatusBadge />
              </div>
              
              {/* Main Heading with Holographic Effect */}
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="600">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                  <div className="mb-4">
                    <TypewriterText 
                      text="MUNTAZIR" 
                      delay={800}
                      speed={120}
                      className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl"
                    />
                  </div>
                  <div>
                    <TypewriterText 
                      text="MEHDI" 
                      delay={2200}
                      speed={120}
                      className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl"
                    />
                  </div>
                </h1>
                
                <div className="space-y-4">
                  <div className="text-xl md:text-2xl font-semibold">
                    <TypewriterText 
                      text="IT Engineer at Neotek" 
                      delay={3800}
                      speed={80}
                      className="text-white/90"
                    />
                  </div>
                  <div className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0">
                    <TypewriterText 
                      text="Cybersecurity professional crafting digital fortresses and elegant solutions in the cyber realm." 
                      delay={5200}
                      speed={60}
                    />
                  </div>
                </div>
              </div>

              {/* Expertise Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="6500">
                {[
                  { name: "SIEM", icon: Shield, color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { name: "Network Security", icon: Lock, color: "text-purple-400", bg: "bg-purple-400/10" },
                  { name: "Penetration Testing", icon: Terminal, color: "text-green-400", bg: "bg-green-400/10" },
                  { name: "Cloud Security", icon: Globe, color: "text-pink-400", bg: "bg-pink-400/10" },
                ].map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <HolographicCard key={skill.name} delay={7000 + (index * 200)} className="text-center">
                      <IconComponent className={`w-8 h-8 ${skill.color} mx-auto mb-2`} />
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                    </HolographicCard>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="8000">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transform transition-all duration-300 hover:scale-105"
                >
                  <a href="#portfolio" className="flex items-center justify-center">
                    <span className="font-semibold">Explore My Work</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-transparent border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <a href="#contact" className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold">Connect</span>
                  </a>
                </Button>
              </div>
            </div>
            
                         {/* Right Column - Interactive Elements */}
             <div className="lg:col-span-4 space-y-6">
               <TryHackMeBadge />
             </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" data-aos="fade-up" data-aos-delay="9000">
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-white/60 hover:text-cyan-400 transition-all duration-300 group"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Discover More</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center group-hover:border-cyan-400 transition-colors duration-300">
              <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce group-hover:bg-cyan-400"></div>
            </div>
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ping opacity-20"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
