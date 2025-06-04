
import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Sparkle,
  Search,
  Target,
  Eye,
  Lock,
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
      name: "Threat Hunting", 
      icon: Search, 
      description: "Proactive threat detection"
    },
    { 
      name: "Penetration Testing", 
      icon: Target, 
      description: "Vulnerability assessment"
    },
    { 
      name: "SIEM Analysis", 
      icon: Eye, 
      description: "Security event monitoring"
    },
    { 
      name: "Incident Response", 
      icon: Lock, 
      description: "Rapid threat mitigation"
    },
  ];

  return (
    <div className="mt-8 mb-6" data-aos="fade-up" data-aos-delay="900">
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        
        <div className="relative bg-black/30 backdrop-blur-2xl border border-[#9b87f5]/30 rounded-2xl p-6 overflow-hidden">
          {/* Subtle background effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-6 w-1 h-1 bg-[#ff6b6b] rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-8 left-1/3 w-1.5 h-1.5 bg-[#4ecdc4] rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">Core Expertise</h3>
                <p className="text-xs text-[#9b87f5]">Cybersecurity Specializations</p>
              </div>
            </div>

            {/* Skills Grid - Perfectly Aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="group/item flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-300 min-h-[100px]"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <IconComponent className="w-6 h-6 text-[#9b87f5] group-hover/item:text-white transition-colors duration-300" />
                      <div>
                        <span className="text-white text-sm font-semibold block">{skill.name}</span>
                        <span className="text-[#9b87f5] text-xs">{skill.description}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
CoreSkills.displayName = "CoreSkills";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-t from-[#0f0f1a] via-[#0a0a15] to-[#0f0f1a]">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-4">
            <StatusBadge />
          </div>

          <div className="mb-8">
            <MainTitle />
          </div>

          <p
            className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl leading-relaxed text-left"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Hi, I'm a Cybersecurity Engineer with hands-on experience in SOC
            analysis, vulnerability assessment, and penetration testing. I
            specialize in identifying vulnerabilities and crafting robust
            defense strategies to protect digital environments from emerging
            threats.
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
                <span className="relative z-10 font-semibold">Explore My Arsenal</span>
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
                <span className="relative z-10 font-semibold">Initiate Contact</span>
              </a>
            </Button>
          </div>
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
