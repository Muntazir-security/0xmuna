
import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, 
  Mail,
  ShieldCheck,
  ScanSearch,
  Fingerprint,
  AlertOctagon
} from 'lucide-react';

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-inter">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20 animate-pulse-slow"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-fade-in">
          Muntazir
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20 animate-pulse-slow"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent animate-fade-in">
          Mehdi
        </span>
      </span>
    </h1>
  </div>
));
MainTitle.displayName = 'MainTitle';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-8">
            <MainTitle />
          </div>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="500"
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed text-justify font-inter animate-fade-in"
          >
            Hi, I'm a Cybersecurity Engineer with hands-on experience in SOC analysis, vulnerability assessment, and penetration testing. I specialize in identifying vulnerabilities and crafting robust defense strategies to protect digital environments from emerging threats.
          </p>

          <div 
            data-aos="fade-up" 
            data-aos-delay="700" 
            className="my-6 md:my-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-xl hover:from-[#6366f1]/20 hover:to-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9b87f5]/25" data-aos="fade-up" data-aos-delay="800">
                <ShieldCheck className="w-5 h-5 text-[#9b87f5]" />
                <span className="text-white/90 text-sm font-medium font-inter">SOC Analyst</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-xl hover:from-[#6366f1]/20 hover:to-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9b87f5]/25" data-aos="fade-up" data-aos-delay="900">
                <ScanSearch className="w-5 h-5 text-[#9b87f5]" />
                <span className="text-white/90 text-sm font-medium font-inter">Vulnerability Assessment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-xl hover:from-[#6366f1]/20 hover:to-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9b87f5]/25" data-aos="fade-up" data-aos-delay="1000">
                <Fingerprint className="w-5 h-5 text-[#9b87f5]" />
                <span className="text-white/90 text-sm font-medium font-inter">Penetration Tester</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-xl hover:from-[#6366f1]/20 hover:to-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9b87f5]/25" data-aos="fade-up" data-aos-delay="1100">
                <AlertOctagon className="w-5 h-5 text-[#9b87f5]" />
                <span className="text-white/90 text-sm font-medium font-inter">Incident Response</span>
              </div>
            </div>
          </div>
          
          <div 
            data-aos="fade-up" 
            data-aos-delay="1200"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white border-none px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:shadow-[#6366f1]/40 hover:scale-[1.05] transform transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 font-inter"
            >
              <a href="#portfolio">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group text-white bg-transparent border-white/40 hover:border-[#9b87f5] hover:bg-[#9b87f5]/20 px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:shadow-[#9b87f5]/30 hover:scale-[1.05] transform transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 font-inter"
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center hover:border-[#9b87f5] transition-colors duration-300">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
