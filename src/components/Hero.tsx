import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  ScanSearch,
  Fingerprint,
  AlertOctagon,
  Sparkle, // <--- Sparkle is imported now
} from "lucide-react";

// You will likely integrate Lottie Player here if you decide to use it.
// import { Player } from "@lottiefiles/react-lottie-player";
// const CYBERSECURITY_LOTTIE_URL = "https://lottie.host/YOUR_LOTTIE_JSON_URL_HERE";


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

// --- Status Badge component copied from your previous code ---
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


// Main Title component (remains as per last agreed-upon version)
const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600"> {/* Delay adjusted */}
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        {/* Glow effect for Muntazir */}
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Muntazir
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        {/* Glow effect for Mehdi */}
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
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
      {/* Container for main content, positioned above any background animations */}
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Status Badge - Now correctly rendered here */}
          <div className="mb-4"> {/* Added a div for spacing */}
            <StatusBadge />
          </div>

          {/* Main Title (Muntazir Mehdi) */}
          <div className="mb-8">
            <MainTitle />
          </div>

          {/* About Me Paragraph */}
          <p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed text-left font-inter"
            data-aos="fade-up"
            data-aos-delay="800" // Delay adjusted
          >
            Hi, I'm a Cybersecurity Engineer with hands-on experience in SOC
            analysis, vulnerability assessment, and penetration testing. I
            specialialize in identifying vulnerabilities and crafting robust
            defense strategies to protect digital environments from emerging
            threats.
          </p>

          {/* Skill Cards Grid (remains as per last agreed-upon version) */}
          <div className="my-6 md:my-8 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center space-x-3 p-4 rounded-lg bg-transparent border border-white/10
                             relative group overflow-hidden cursor-pointer
                             transition-all duration-300 ease-in-out
                             hover:bg-transparent hover:border-transparent
                             focus-within:border-transparent`}
                  data-aos="fade-up" // AOS for skill cards
                  data-aos-delay={900 + index * 100} // Staggered delay for each card
                >
                  {/* Gradient border on hover/focus-within */}
                  <div className="absolute inset-0 rounded-lg p-[2px] opacity-0
                                  bg-gradient-to-r from-[#6366f1] to-[#a855f7]
                                  group-hover:opacity-100 group-focus-within:opacity-100
                                  transition-opacity duration-300 ease-in-out">
                    <div className="bg-slate-900 rounded-[calc(0.5rem-2px)] w-full h-full"></div>
                  </div>

                  <div className="relative z-10 flex items-center space-x-3 w-full">
                    <skill.icon className="w-6 h-6 text-[#9b87f5] group-hover:text-purple-300 transition-colors duration-300" />
                    <span className="text-white text-base font-medium font-inter">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons (remains as per last agreed-upon version) */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="1400" // Delay adjusted
          >
            {/* Primary Button: View My Work */}
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden
                         bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white
                         border-none px-6 py-3 rounded-lg
                         shadow-md hover:shadow-xl hover:shadow-[#6366f1]/40
                         transform transition-all duration-300 ease-in-out
                         flex items-center justify-center font-inter
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-background"
            >
              <a
                href="#portfolio"
                className="flex items-center justify-center relative z-10 py-1"
              >
                <span className="transition-all duration-300 group-hover:pr-2">
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

            {/* Secondary Button: Contact Me */}
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
                         flex items-center justify-center font-inter
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

      {/* Placeholder for Lottie Animation on the right (Uncomment and configure when ready) */}
      {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4
                      w-[min(600px,80vw)] h-[min(600px,80vw)]
                      lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px]
                      pointer-events-none z-0"
                      data-aos="fade-in" // AOS for the Lottie animation
                      data-aos-delay="1800" // Delayed reveal
                      data-aos-duration="1000">
        <Player
          autoplay
          loop
          src={CYBERSECURITY_LOTTIE_URL}
          className="w-full h-full"
        />
      </div> */}

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="2000" // Delay adjusted to appear last
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