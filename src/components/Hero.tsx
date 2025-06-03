
import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  ScanSearch,
  Fingerprint,
  AlertOctagon,
  Sparkle,
} from "lucide-react";

type Skill = {
  icon: React.ElementType;
  name: string;
};

const skills: Skill[] = [
  { icon: ShieldCheck, name: "SOC Analyst" },
  { icon: ScanSearch, name: "Vulnerability Assessment" },
  { icon: Fingerprint, name: "Penetration Tester" },
  { icon: AlertOctagon, name: "Incident Response" },
];

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
      <div className="relative px-4 sm:px-6 py-3 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 shadow-xl">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-xs font-semibold flex items-center">
          <Sparkle className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400 animate-pulse" />
          Safeguarding Digital Futures
        </span>
      </div>
    </div>
  </div>
));
StatusBadge.displayName = 'StatusBadge';

const MainTitle = memo(() => (
  <div className="space-y-3" data-aos="fade-up" data-aos-delay="600">
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

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-6">
            <StatusBadge />
          </div>

          <div className="mb-8">
            <MainTitle />
          </div>

          <p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed text-left"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Hi, I'm a Cybersecurity Engineer with hands-on experience in SOC
            analysis, vulnerability assessment, and penetration testing. I
            specialize in identifying vulnerabilities and crafting robust
            defense strategies to protect digital environments from emerging
            threats.
          </p>

          {/* Enhanced Skill Badges */}
          <div className="my-8 md:my-12 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative overflow-hidden cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={900 + index * 100}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Main content */}
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-300 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-[#6366f1]/20">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#a855f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon and text */}
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 group-hover:from-[#6366f1]/30 group-hover:to-[#a855f7]/30 transition-all duration-300">
                        <skill.icon className="w-6 h-6 text-[#9b87f5] group-hover:text-purple-300 transition-colors duration-300" />
                      </div>
                      <span className="text-white text-base font-semibold group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#6366f1]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                    <div className="absolute bottom-3 right-4 w-1.5 h-1.5 bg-[#a855f7]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden
                         bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white
                         border-none px-6 py-3 rounded-lg
                         shadow-md hover:shadow-xl hover:shadow-[#6366f1]/40
                         transform transition-all duration-300 ease-in-out
                         flex items-center justify-center
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-background"
            >
              <a
                href="#portfolio"
                className="flex items-center justify-center relative z-10 py-1 transition-all duration-300 group-hover:w-auto w-[140px]"
              >
                <span className="transition-all duration-300">
                  View My Work
                </span>
                <ArrowRight
                  className="w-5 h-5 ml-0 opacity-0 -translate-x-2
                           group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2
                           transition-all duration-300 ease-in-out"
                />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative overflow-hidden
                         text-white bg-transparent border-white/40
                         hover:border-[#9b87f5] hover:bg-[#9b87f5]/20
                         px-6 py-3 rounded-lg shadow-md
                         hover:shadow-xl hover:shadow-[#9b87f5]/30
                         transform transition-all duration-300 ease-in-out
                         flex items-center justify-center
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-background"
            >
              <a
                href="#contact"
                className="flex items-center justify-center relative z-10 py-1"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Contact Me</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
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
