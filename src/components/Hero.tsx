import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Sparkle,
  Terminal,
  BookOpen,
  BrainCircuit,
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

          {/* Currently Working On - Styled */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6" data-aos="fade-up" data-aos-delay="900">
            <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 transition">
              <Terminal className="w-5 h-5 text-[#9b87f5] mt-1" />
              <div>
                <p className="text-white/70 text-sm">
                  <span className="text-white font-semibold">Now:</span> Developing automated threat hunting scripts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 transition">
              <BookOpen className="w-5 h-5 text-[#9b87f5] mt-1" />
              <div>
                <p className="text-white/70 text-sm">
                  <span className="text-white font-semibold">Learning:</span> Cloud Security & Kubernetes hardening.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 transition">
              <BrainCircuit className="w-5 h-5 text-[#9b87f5] mt-1" />
              <div>
                <p className="text-white/70 text-sm">
                  <span className="text-white font-semibold">Next:</span> Diving deeper into malware reverse engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10" data-aos="fade-up" data-aos-delay="1400">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden
                         bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white
                         border-none px-6 py-3 rounded-lg
                         shadow-md hover:shadow-xl hover:shadow-[#6366f1]/40
                         transform transition-all duration-300 ease-in-out
                         flex items-center justify-center"
            >
              <a
                href="#portfolio"
                className="flex items-center justify-center relative z-10 py-1 transition-all duration-300 group-hover:w-auto w-[140px]"
              >
                <span className="transition-all duration-300">View My Work</span>
                <ArrowRight className="w-5 h-5 ml-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2 transition-all duration-300 ease-in-out" />
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
                         flex items-center justify-center"
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
