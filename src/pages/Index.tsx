
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

const Index: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-inter bg-[#0B0B1E]">
      {/* Background with animated starfield */}
      <PageBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-6 bg-[#0B0B1E]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© 2024 Muntazir Mehdi. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
