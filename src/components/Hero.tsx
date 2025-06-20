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
  <div className="inline-block animate-float" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-4 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text text-sm font-medium flex items-center">
          <Sparkle className="w-4 h-4 mr-2 text-blue-400" />
          Safeguarding Digital Futures
        </span>
      </div>
    </div>
  </div>
));
StatusBadge.displayName = 'StatusBadge';

const MainTitle = memo(() => (
  <div className="space-y-4" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
      <span className="relative inline-block">
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Muntazir
        </span>
      </span>
      <br />
      <span className="relative inline-block">
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
    <div className="mt-12 mb-8" data-aos="fade-up" data-aos-delay="900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-[#9b87f5]/50 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <IconComponent className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-white text-sm font-medium text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
CoreSkills.displayName = "CoreSkills";

const TryHackMeBadge = memo(() => (
  <div className="flex justify-center lg:justify-end lg:pr-4" data-aos="fade-left" data-aos-delay="1200">
    <div className="relative group cursor-pointer w-full max-w-xs">
      {/* Subtle gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
      
      {/* Badge container */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
        {/* Clean header */}
        <div className="bg-gradient-to-r from-white/5 to-white/5 px-4 py-3 border-b border-white/10">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#6366f1] rounded-full"></div>
            <span className="text-sm font-medium text-white/90">
              TryHackMe Profile
            </span>
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full"></div>
          </div>
        </div>
        
        {/* Tight badge iframe container */}
        <div className="relative bg-gradient-to-b from-black/5 to-black/20 p-2">
          <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=996369" 
              className="w-full h-20 border-0 transition-transform duration-300 block"
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
      </div>
    </div>
  </div>
));
TryHackMeBadge.displayName = "TryHackMeBadge";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B1E]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center min-h-[70vh]">
          {/* Left side - Main content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <StatusBadge />
              <MainTitle />
            </div>

            <div className="space-y-8">
              <p
                className="text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Cybersecurity Engineer with expertise in <span className="text-white font-medium">threat detection</span>, <span className="text-white font-medium">vulnerability assessment</span>, and <span className="text-white font-medium">digital forensics</span>. I specialize in transforming complex security challenges into robust defense strategies.
              </p>

              <CoreSkills />

              <div className="flex flex-col sm:flex-row gap-6 pt-4" data-aos="fade-up" data-aos-delay="1400">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-transparent border-2 border-[#9b87f5] text-white hover:bg-[#9b87f5] px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(155,135,245,0.4)] transform transition-all duration-300 ease-in-out hover:scale-[1.02]"
                >
                  <a
                    href="#portfolio"
                    className="flex items-center justify-center relative z-10 group-hover:text-white transition-colors duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <span className="relative z-10 font-semibold">View Portfolio</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white border-2 border-transparent hover:border-white/30 px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transform transition-all duration-300 ease-in-out hover:scale-[1.02]"
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center relative z-10"
                  >
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10 font-semibold">Get In Touch</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - TryHackMe Badge */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <TryHackMeBadge />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <a
          href="#about"
          className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center cursor-pointer
                     hover:border-[#9b87f5] transition-colors duration-300 animate-pulse-slow
                     group relative"
        >
          <div
            className="w-1 h-2.5 bg-white/60 rounded-full mt-2
                       group-hover:bg-[#9b87f5] transition-colors duration-300"
          ></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
