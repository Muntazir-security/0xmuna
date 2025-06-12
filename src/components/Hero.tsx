
import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Sparkle,
  Shield,
  Search,
  Lock,
  Cloud,
} from "lucide-react";

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkle className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Safeguarding Digital Futures
        </span>
      </div>
    </div>
  </div>
));
StatusBadge.displayName = 'StatusBadge';

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Muntazir
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Mehdi
        </span>
      </span>
    </h1>
  </div>
));
MainTitle.displayName = "MainTitle";

const CoreSkills = memo(() => {
  const skills = [
    { 
      name: "SIEM", 
      icon: Shield, 
      color: "text-blue-400"
    },
    { 
      name: "Network Security", 
      icon: Lock, 
      color: "text-purple-400"
    },
    { 
      name: "Ethical Hacker", 
      icon: Search, 
      color: "text-green-400"
    },
    { 
      name: "Cloud Security", 
      icon: Cloud, 
      color: "text-orange-400"
    },
  ];

  return (
    <div className="mt-8 mb-6" data-aos="fade-up" data-aos-delay="900">
      <div className="flex flex-wrap gap-4 max-w-3xl">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={skill.name}
              className="group flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-[#9b87f5]/50 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <IconComponent className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} />
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
CoreSkills.displayName = "CoreSkills";

const TryHackMeBadge = memo(() => (
  <div className="hidden lg:flex flex-col items-center justify-center h-full" data-aos="fade-left" data-aos-delay="1200">
    <div className="relative group cursor-pointer">
      {/* Animated gradient border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#9b87f5] to-[#a855f7] rounded-xl blur-sm opacity-30 group-hover:opacity-60 animate-pulse transition-all duration-500"></div>
      
      {/* Badge container */}
      <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group-hover:border-[#9b87f5]/40 transition-all duration-300 group-hover:scale-[1.02]">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 p-3 border-b border-white/5">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              TryHackMe Profile
            </span>
            <div className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        {/* Badge iframe with fixed dimensions */}
        <div className="relative p-2 bg-gradient-to-br from-black/10 to-black/30">
          <div className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=996369" 
              style={{ 
                border: 'none',
                width: '280px',
                height: '90px',
                display: 'block'
              }}
              className="transform group-hover:scale-[1.01] transition-transform duration-300"
              title="TryHackMe Badge"
              scrolling="no"
            />
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-[#6366f1] rounded-full opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#a855f7] rounded-full opacity-60"></div>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  </div>
));
TryHackMeBadge.displayName = "TryHackMeBadge";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B1E]">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="max-w-4xl">
            <div className="mb-4">
              <StatusBadge />
            </div>

            <div className="mb-8">
              <MainTitle />
            </div>

            <p
              className="text-xl md:text-2xl text-white/80 mb-6 max-w-3xl leading-relaxed text-left"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Cybersecurity Engineer with expertise in <em className="text-[#9b87f5] font-medium">threat detection</em>, <em className="text-blue-300 font-medium">vulnerability assessment</em>, and <em className="text-green-300 font-medium">digital forensics</em>. I specialize in transforming complex security challenges into robust defense strategies that protect organizations against evolving cyber threats.
            </p>

            <CoreSkills />

            <div className="flex flex-col sm:flex-row gap-4 mt-10" data-aos="fade-up" data-aos-delay="1400">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-transparent border-2 border-[#9b87f5] text-white hover:bg-[#9b87f5] px-8 py-4 rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(155,135,245,0.5)] transform transition-all duration-500 ease-in-out hover:scale-105"
              >
                <a
                  href="#portfolio"
                  className="flex items-center justify-center relative z-10 group-hover:text-white transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <span className="relative z-10 font-semibold">View Portfolio</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white border-2 border-transparent hover:border-white/30 px-8 py-4 rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transform transition-all duration-500 ease-in-out hover:scale-105"
              >
                <a
                  href="#contact"
                  className="flex items-center justify-center relative z-10"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold">Get In Touch</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - TryHackMe Badge */}
          <TryHackMeBadge />
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <a
          href="#about"
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center cursor-pointer
                     hover:border-[#9b87f5] transition-colors duration-300 animate-pulse-slow
                     group relative"
        >
          <div
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2
                       group-hover:bg-[#9b87f5] transition-colors duration-300"
          ></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
