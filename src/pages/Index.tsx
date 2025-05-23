import React from "react";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background with animated orbs */}
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
    </div>
  );
};

export default Index;
