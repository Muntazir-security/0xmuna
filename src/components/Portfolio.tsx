import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Shield, Building2, GraduationCap, Database as DatabaseIcon,
  ShoppingCart, CheckSquare, Car, Home, Briefcase
} from 'lucide-react';
import { ProjectCardSkeleton } from "@/components/ui/loading-skeleton";
import ModernProjectCard from "@/components/portfolio/ModernProjectCard";
import CertificationGrid from "@/components/portfolio/CertificationGrid";
import TechStackGrid from "@/components/portfolio/TechStackGrid";
import ImageLightbox from "@/components/portfolio/ImageLightbox";

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  tags: string[];
  image?: string;
  category?: string;
  features?: string[];
  overview?: string;
  problem?: string;
  solution?: string;
}

interface ProjectInputData {
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  category?: string;
  features?: string[];
  overview?: string;
  problem?: string;
  solution?: string;
}

const certificationsData = [
  { id: 1, title: "Red Hat System Administration I (RH124)", issuingBody: "Red Hat", imageSrc: "/assets/images/RH124.png", },
  { id: 2, title: "SOC Analyst Learning Path", issuingBody: "LetsDefend", imageSrc: "/assets/images/SOC_Analyst_LetsDefend.png", },
  { id: 3, title: "eLearnSecurity Junior Penetration Tester (eJPT)", issuingBody: "INE (eLearnSecurity)", imageSrc: "/assets/images/eJPT.png", },
  { id: 4, title: "INE Certified Cloud Associate (ICCA)", issuingBody: "INE", imageSrc: "/assets/images/ICCA.png", },
  { id: 5, title: "Google Cybersecurity Certificate", issuingBody: "Google", imageSrc: "/assets/images/Google_cert.png", },
  { id: 6, title: "CCNAv7: Switching, Routing, and Wireless Essentials", issuingBody: "Cisco Networking Academy", imageSrc: "/assets/images/SRE_cert.png", },
];

const techStackData = [
  { id: 1, name: "AWS", logoSrc: "/assets/images/aws.svg" },
  { id: 2, name: "Azure", logoSrc: "/assets/images/azure.svg" },
  { id: 3, name: "Docker", logoSrc: "/assets/images/docker.svg" },
  { id: 4, name: "Kubernetes", logoSrc: "/assets/images/kubernets.svg" },
  { id: 5, name: "Portainer", logoSrc: "/assets/images/portainer.svg" },
  { id: 6, name: "Nessus", logoSrc: "/assets/images/nessus-professional.svg" },
  { id: 7, name: "TheHive", logoSrc: "/assets/images/thehive.png" },
  { id: 8, name: "John the Ripper", logoSrc: "/assets/images/johntheripper.png" },
  { id: 9, name: "Burp Suite", logoSrc: "/assets/images/burpsuite.svg" },
  { id: 10, name: "Snort", logoSrc: "/assets/images/Snort.svg" },
  { id: 11, name: "Splunk", logoSrc: "/assets/images/splunk.svg" },
  { id: 12, name: "Elastic Stack", logoSrc: "/assets/images/elastic.svg" },
  { id: 13, name: "WireGuard", logoSrc: "/assets/images/wireguard.svg" },
  { id: 14, name: "Red Hat", logoSrc: "/assets/images/redhat.svg" },
  { id: 15, name: "Wazuh", logoSrc: "/assets/images/wazuh.png" },
  { id: 16, name: "Arch Linux", logoSrc: "/assets/images/archlinux.svg" },
  { id: 17, name: "Suricata", logoSrc: "/assets/images/suricata.png" },
  { id: 18, name: "Fortinet", logoSrc: "/assets/images/fortinet.svg" },
];


const Portfolio: React.FC = () => {
  const [activeSubSection, setActiveSubSection] = useState('projects');
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [techStackVisible, setTechStackVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setProjectsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const imagePromises = certificationsData.map((cert) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = cert.imageSrc;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, []);

  useEffect(() => {
    if (activeSubSection === 'techstack') {
      setTechStackVisible(true);
    } else {
      setTechStackVisible(false);
    }
  }, [activeSubSection]);

  const projectsInput: ProjectInputData[] = [
    { 
      title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN", 
      description: "Advanced anomaly detection system protecting Software-Defined Networks from DDoS attacks using statistical analysis and real-time traffic monitoring. Implemented comprehensive security measures to prevent SYN flooding attacks while maintaining network performance.", 
      iconName: "Shield", 
      tags: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis", "Real-time Monitoring"],
      category: "Network Security"
    },
    { 
      title: "SABB Bank Management System", 
      description: "Comprehensive Python-based banking system featuring multi-level authentication, secure transaction processing, and fraud prevention mechanisms. Includes account management, transaction history, and robust security protocols.", 
      iconName: "Building2", 
      tags: ["Python", "CLI Interface", "File I/O Operations", "User Authentication", "Security"],
      category: "Financial Software"
    },
    { 
      title: "University Information Management System", 
      description: "Intelligent recommendation engine designed for the Malaysian Ministry of Higher Education to evaluate and rank universities. Features user-specific interfaces, comprehensive data analysis, and ranking algorithms.", 
      iconName: "GraduationCap", 
      tags: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis", "Ranking System"],
      category: "Educational Technology"
    },
    { 
      title: "APU e-Bookstore Database Management System", 
      description: "Robust database system for APU's e-Bookstore with normalized design, efficient book catalog management, order processing, and inventory tracking. Features optimized queries and data integrity controls.", 
      iconName: "DatabaseIcon", 
      tags: ["Database Design", "SQL Optimization", "ERD Modeling", "Normalization", "Data Integrity"],
      category: "Database Systems"
    },
    { 
      title: "Minimart Management System", 
      description: "Low-level Assembly Language application providing comprehensive minimart operations including inventory management, sales tracking, reporting systems, and performance optimization for retail environments.", 
      iconName: "ShoppingCart", 
      tags: ["Assembly Language", "Low-level Programming", "Inventory Management", "Sales Analytics"],
      category: "Retail Management"
    },
    { 
      title: "Personal Task Management System", 
      description: "Efficient CLI-based task management solution built in C, featuring priority-based scheduling, task categorization, deadline tracking, and productivity analytics for personal workflow optimization.", 
      iconName: "CheckSquare", 
      tags: ["C Programming", "CLI Interface", "File I/O", "Task Management", "Priority Scheduling"],
      category: "Productivity Tools"
    },
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    Shield, Building2, GraduationCap, DatabaseIcon, ShoppingCart, CheckSquare, Car, Home, Briefcase
  };

  const projects: Project[] = projectsInput.map((p, index) => ({
    ...p,
    id: index + 1,
    icon: iconMap[p.iconName],
  }));

  const subNavItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'techstack', label: 'Tech Stack' },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 lg:py-32 relative scroll-section"
      style={{
        background: 'radial-gradient(circle at 90% 10%, rgba(168, 85, 247, 0.05), transparent 30%), radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.05), transparent 30%)',
      }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Here's a collection of my work, certifications, and the technologies I work with.
          </p>
        </div>

        {/* Modern Navigation Tabs - Enhanced for Mobile */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 w-full max-w-md md:max-w-none md:w-auto overflow-x-auto">
            {subNavItems.map((item) => (
              <motion.button
                key={item.id}
                className={cn(
                  "relative px-4 lg:px-6 py-2.5 md:py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap min-h-[44px] md:min-h-auto touch-manipulation",
                  activeSubSection === item.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setActiveSubSection(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        {activeSubSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!projectsLoaded ? (
              // Loading skeletons
              [...Array(6)].map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            ) : (
              projects.map((project, index) => (
                <ModernProjectCard key={project.id} project={project} index={index} />
              ))
            )}
          </div>
        )}

        {activeSubSection === 'certifications' && (
          <CertificationGrid
            certificationsData={certificationsData}
            onImageClick={setSelectedCertImage}
          />
        )}

        {activeSubSection === 'techstack' && (
          <TechStackGrid
            techStackData={techStackData}
            techStackVisible={techStackVisible}
          />
        )}
      </div>

      <ImageLightbox
        selectedImage={selectedCertImage}
        onClose={() => setSelectedCertImage(null)}
      />
    </section>
  );
};

export default Portfolio;
