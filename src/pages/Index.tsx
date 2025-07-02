
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import UnifiedBackground from "@/components/UnifiedBackground";
import { Toaster } from "@/components/ui/toaster";

const Index: React.FC = () => {
  return (
    <>
      {/* Unified Background System */}
      <UnifiedBackground />
      
      <div className="min-h-screen relative overflow-x-hidden font-inter">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <motion.main 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
          <AboutMe />
          <Portfolio />
          <Contact />
        </motion.main>
        
        {/* Footer */}
        <footer className="py-6 backdrop-blur-sm border-t border-white/10 relative z-10">
          <div className="container mx-auto px-4 text-center text-white/60">
            <p>© 2024 Muntazir Mehdi. All rights reserved.</p>
          </div>
        </footer>
        
        {/* Toast notifications */}
        <Toaster />
      </div>
    </>
  );
};

export default Index;
