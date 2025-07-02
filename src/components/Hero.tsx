import React, { memo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Shield, Lock, Terminal, Globe } from "lucide-react";
import { motion } from "framer-motion";

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
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider">
          PENETRATION TESTER TURNED ENGINEER
          </span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  </div>
));
StatusBadge.displayName = 'StatusBadge';

const TryHackMeBadge = memo(() => (
  <motion.div 
    className="flex justify-center"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 1.0 }}
  >
    <div className="w-full max-w-sm relative group">
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      {/* Main container */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 px-4 py-3 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">TryHackMe Profile</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span className="text-xs text-white/60">Live</span>
            </div>
          </div>
        </div>
        
        {/* Badge content */}
        <div className="p-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=996369" 
              className="w-full h-20 border-0 block"
              title="TryHackMe Badge"
              scrolling="no"
              style={{
                minWidth: '100%',
                height: '80px',
                backgroundColor: 'transparent'
              }}
            />
          </div>
          
          {/* Quick stats overlay */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-white/60">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Rank: 45,054</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Badges: 17</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </motion.div>
));
TryHackMeBadge.displayName = "TryHackMeBadge";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden scroll-section"
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
              <motion.div 
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <StatusBadge />
              </motion.div>

              {/* Main Heading with Holographic Effect */}
              <motion.div 
                className="space-y-6" 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                      MUNTAZIR
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                      MEHDI
                    </span>
                  </motion.div>
                </h1>
                
                <motion.div 
                  className="max-w-3xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <p className="text-lg md:text-xl text-white/85 leading-relaxed text-justify">
                    As an IT Engineer at <span className="font-bold text-white">Neotek</span>, my mission is to build the systems that drive business forward. My approach is grounded in a strong academic foundation from <span className="font-bold text-white">De Montfort University</span> and sharpened by hands-on experience in <span className="font-semibold text-cyan-300">penetration testing</span> and <span className="font-semibold text-cyan-300">security analysis</span>. This allows me to see infrastructure through an attacker's eyes and engineer solutions that are not just functional, but fortified by design.
                  </p>
                </motion.div>
              </motion.div>

              {/* Expertise Icons - Enhanced for Mobile */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                {[
                  { name: "SIEM", icon: Shield, color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { name: "Network Security", icon: Lock, color: "text-purple-400", bg: "bg-purple-400/10" },
                  { name: "Penetration Testing", icon: Terminal, color: "text-green-400", bg: "bg-green-400/10" },
                  { name: "Cloud Security", icon: Globe, color: "text-pink-400", bg: "bg-pink-400/10" },
                ].map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div 
                      key={skill.name} 
                      className="relative group inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 min-h-[44px] md:min-h-[48px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-4 h-4 md:w-5 md:h-5 ${skill.color} transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                        <IconComponent className="w-full h-full" />
                      </div>
                      <span className="text-white text-xs md:text-sm font-medium leading-none">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons - Enhanced for Mobile */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
              <Button
                asChild
                size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transform transition-all duration-300 hover:scale-105 min-h-[48px] md:min-h-[56px] touch-manipulation"
              >
                  <a href="#portfolio" className="flex items-center justify-center">
                    <span className="font-semibold text-base md:text-lg">Explore My Work</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                  className="group relative overflow-hidden bg-transparent border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 md:px-10 md:py-5 rounded-xl transition-all duration-300 min-h-[48px] md:min-h-[56px] touch-manipulation"
              >
                  <a href="#contact" className="flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold text-base md:text-lg">Connect</span>
                </a>
              </Button>
            </motion.div>
          </div>

                         {/* Right Column - Interactive Elements */}
             <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <TryHackMeBadge />
              </motion.div>
             </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
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
      </motion.div>
    </section>
  );
};

export default Hero;
