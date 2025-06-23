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
    // Force home state multiple times to ensure it sticks
    setActiveSection("home");
    
    const forceHomeState = () => {
      setActiveSection("home");
    };
    
    // Force home immediately
    forceHomeState();
    
    // Force home after DOM is ready
    setTimeout(forceHomeState, 50);
    setTimeout(forceHomeState, 200);
    setTimeout(forceHomeState, 500);
    
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);
      
      // Skip section detection if user is manually navigating
      if (isManuallyNavigating.current) {
        return;
      }
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Always default to home at the top
      if (scrollY < 200) {
        setActiveSection("home");
        return;
      }
      
      // Check for about section
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        const aboutRect = aboutElement.getBoundingClientRect();
        const aboutTop = scrollY + aboutRect.top;
        if (scrollY >= aboutTop - 200 && scrollY < aboutTop + aboutElement.offsetHeight - 200) {
          setActiveSection("about");
          return;
        }
      }
      
      // Check for portfolio section
      const portfolioElement = document.getElementById("portfolio");
      if (portfolioElement) {
        const portfolioRect = portfolioElement.getBoundingClientRect();
        const portfolioTop = scrollY + portfolioRect.top;
        if (scrollY >= portfolioTop - 200 && scrollY < portfolioTop + portfolioElement.offsetHeight - 200) {
          setActiveSection("portfolio");
          return;
        }
      }
      
      // Check for contact section - only at the very bottom
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        const contactRect = contactElement.getBoundingClientRect();
        const contactTop = scrollY + contactRect.top;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Only activate contact if we're in the last 400px of the page or actively in contact section
        if (scrollY + windowHeight >= documentHeight - 100 || 
            (scrollY >= contactTop - 200 && scrollY < contactTop + contactElement.offsetHeight)) {
          setActiveSection("contact");
          return;
        }
      }
      
      // Default to home if no other section matches
      setActiveSection("home");
    };
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    console.log(`Attempting to scroll to: ${sectionId}`);
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Temporarily disable scroll detection
    isManuallyNavigating.current = true;
    
    // Immediately update active state for visual feedback
    setActiveSection(sectionId);
    
    // Find the target element
    const element = document.getElementById(sectionId);
    console.log(`Found element:`, element);
    
    if (element) {
      try {
        // Method 1: Try scrollIntoView first
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Adjust for navbar after scrolling
        setTimeout(() => {
          const navbarHeight = 80;
          const currentScroll = window.scrollY;
          window.scrollTo({
            top: currentScroll - navbarHeight,
            behavior: 'smooth'
          });
        }, 100);
        
        console.log(`Successfully scrolled to ${sectionId} using scrollIntoView`);
      } catch (error) {
        console.error('scrollIntoView failed, trying fallback method:', error);
        
        // Method 2: Fallback to manual calculation
        const rect = element.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const navbarHeight = 80;
        const targetPosition = absoluteTop - navbarHeight;
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
        
        console.log(`Fallback scroll to ${sectionId} at position ${targetPosition}`);
      }
    } else {
      console.error(`Element with id '${sectionId}' not found!`);
      
      // List all available IDs for debugging
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log('Available element IDs:', allIds);
    }
    
    // Re-enable scroll detection after animation
    setTimeout(() => {
      isManuallyNavigating.current = false;
      console.log(`Re-enabled scroll detection for ${sectionId}`);
    }, 1500);
  };

  const handleMobileLinkClick = (sectionId: string) => {
    console.log(`Mobile menu clicked: ${sectionId}`);
    setIsMobileMenuOpen(false);
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      handleSmoothScroll(sectionId);
    }, 200);
  };

  const handleLogoClick = () => {
    handleSmoothScroll("home");
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/10"
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
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
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
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
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
              className="absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2"
            >
                {navItems.map((item, index) => (
                <motion.button
                    key={item.id}
                    className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-base font-medium",
                      activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
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


