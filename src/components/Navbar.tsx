import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isManuallyNavigating = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);
      
      // Skip section detection if user is manually navigating
      if (isManuallyNavigating.current) {
        return;
      }
      
      // Update active section based on scroll position
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 150; // Better offset for detection
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page (within 100px), activate contact
      if (window.scrollY + viewportHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }
      
      // Find the current section
      let currentSection = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    // Initial call
    handleScroll();
    
    // Add scroll listener with throttling
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  const handleSmoothScroll = (sectionId: string) => {
    // Immediately update active state for instant feedback
    setActiveSection(sectionId);
    
    // Disable scroll detection temporarily
    isManuallyNavigating.current = true;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Re-enable scroll detection after smooth scroll completes
    setTimeout(() => {
      isManuallyNavigating.current = false;
    }, 1000); // Adjust timeout based on scroll duration
  };

  const handleMobileLinkClick = (sectionId: string) => {
    handleSmoothScroll(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    handleSmoothScroll("home");
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#0B0B1E]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="text-xl md:text-2xl font-bold text-white group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-transparent bg-clip-text">
              Muntazir Mehdi
            </span>
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
              {navItems.map((item) => (
                <motion.button 
                  key={item.id}
                  className={cn(
                    "relative px-4 lg:px-6 py-2 rounded-full text-sm font-medium",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  )}
                  onClick={() => handleSmoothScroll(item.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XIcon size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full left-4 right-4 mt-2 bg-[#0B0B1E]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-base font-medium",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white"
                      : "text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  )}
                  onClick={() => handleMobileLinkClick(item.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
