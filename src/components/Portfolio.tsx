import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Building2,
  GraduationCap,
  Database as DatabaseIcon, // Aliasing to avoid potential conflicts
  ShoppingCart,
  CheckSquare,
  Car,
  Home,
  Briefcase,
  ArrowRight,
  X as XIcon // Added XIcon for lightbox close
} from 'lucide-react';
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  tags: string[]; // Mapped from 'tech'
  image?: string; // Kept for potential future use, though icons are primary now
  category?: string;
  features?: string[];
  overview?: string;
  problem?: string;
  solution?: string;
}

// Interface for the raw project data structure
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
    {
      id: 1,
    title: "Red Hat System Administration I (RH124)",
    issuingBody: "Red Hat",
    imageSrc: "/assets/images/RH124.png",
  },
  {
    id: 2,
    title: "SOC Analyst Learning Path",
    issuingBody: "LetsDefend",
    imageSrc: "/assets/images/SOC_Analyst_LetsDefend.png",
  },
  {
    id: 3,
    title: "eLearnSecurity Junior Penetration Tester (eJPT)",
    issuingBody: "INE (eLearnSecurity)",
    imageSrc: "/assets/images/eJPT.png",
  },
  {
    id: 4,
    title: "INE Certified Cloud Associate (ICCA)",
    issuingBody: "INE",
    imageSrc: "/assets/images/ICCA.png",
  },
  {
    id: 5,
    title: "Google Cybersecurity Certificate",
    issuingBody: "Google",
    imageSrc: "/assets/images/Google_cert.png",
  },
  {
    id: 6,
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuingBody: "Cisco Networking Academy",
    imageSrc: "/assets/images/SRE_cert.png",
  },
];

const techStackData = [
  { id: 1, name: "AWS", logoSrc: "/assets/images/aws.svg" },
  { id: 2, name: "Azure", logoSrc: "/assets/images/azure.svg" },
  { id: 3, name: "Docker", logoSrc: "/assets/images/docker.svg" },
  { id: 4, name: "Kubernetes", logoSrc: "/assets/images/kubernets.svg" }, 
  { id: 5, name: "YARA", logoSrc: "/assets/images/yara.png" },
  { id: 6, name: "Nessus", logoSrc: "/assets/images/nessus-professional.svg" },
  { id: 7, name: "TheHive", logoSrc: "/assets/images/thehive.png" },
  { id: 8, name: "John the Ripper", logoSrc: "/assets/images/johntheripper.png" },
  { id: 9, name: "Burp Suite", logoSrc: "/assets/images/burp-suite.svg" },
  { id: 10, name: "Snort", logoSrc: "/assets/images/snort.svg" },
  { id: 11, name: "Splunk", logoSrc: "/assets/images/splunk.svg" },
  { id: 12, name: "Elastic Stack", logoSrc: "/assets/images/elastic.svg" }, 
  { id: 13, name: "WireGuard", logoSrc: "/assets/images/wireguard.svg" },
  { id: 14, name: "Red Hat", logoSrc: "/assets/images/redhat.svg" },
  { id: 15, name: "Ubuntu", logoSrc: "/assets/images/ubuntu.svg" },
  { id: 16, name: "Arch Linux", logoSrc: "/assets/images/archlinux.svg" },
  { id: 17, name: "Tailwind CSS", logoSrc: "/assets/images/tailwind-css.svg" }, // Assuming user adds tailwind.svg
  { id: 18, name: "Fortinet", logoSrc: "/assets/images/fortinet.svg" }, // Assuming user adds fortinet.svg
  { id: 19, name: "Wazuh", logoSrc: "/assets/images/wazuh.svg" },    // Assuming user adds wazuh.svg
  { id: 20, name: "Zeek", logoSrc: "/assets/images/zeek.png" },      // Assuming user adds zeek.svg
];

const Portfolio: React.FC = () => {
  const [activeSubSection, setActiveSubSection] = useState('projects');
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload certificate images
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
      .catch(() => setImagesLoaded(true)); // Still set to true even if some fail
  }, []);

  const projectsInput: ProjectInputData[] = [
    {
      title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN",
      description: "Designed and implemented an advanced anomaly detection system to protect Software-Defined Networks (SDN) from DDoS attacks. The system uses a statistical approach for real-time analysis of network traffic, ensuring robust security against SYN flooding attacks.",
      iconName: "Shield",
      tags: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis"],
      category: "Security",
      features: [
        "Real-time analysis of network traffic",
        "Detection and prevention of TCP SYN flooding",
        "Enhancement of critical infrastructure protection",
        "Statistical anomaly detection"
      ],
      overview: "An advanced anomaly detection system designed to protect Software-Defined Networks from TCP SYN flooding-based DDoS attacks using statistical approaches.",
      problem: "TCP SYN flooding-based DDoS attacks can overwhelm SDN controllers, leading to network downtime and security breaches. This project aimed to mitigate such attacks using statistical anomaly detection.",
      solution: "Developed a statistical approach to detect anomalies in network traffic in real-time. The system identifies and mitigates TCP SYN flooding attacks, ensuring the stability and security of SDN environments."
    },
    {
      title: "SABB Bank Management System",
      description: "Developed a Python-based banking system with multi-level authentication and secure transaction handling. The system ensures robust security and prevents fraudulent activities.",
      iconName: "Building2",
      tags: ["Python", "CLI", "File I/O", "User Authentication"],
      category: "Banking",
      features: [
        "Multi-level user authentication for enhanced security.",
        "Secure handling of transactions to prevent fraud."
      ],
      overview: "A Python-based banking system with multi-level authentication, offering secure transaction handling and comprehensive account management features.",
      problem: "The banking system needed to ensure secure transactions and protect user data from unauthorized access.",
      solution: "Implemented multi-level authentication and secure transaction handling to enhance security."
    },
    {
      title: "University Information Management System",
      description: "Created a recommendation engine for the Malaysian Ministry of Higher Education to evaluate university rankings. The system features user-specific interfaces and data analysis tools.",
      iconName: "GraduationCap",
      tags: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis"],
      category: "Education",
      features: [
        "University ranking system",
        "User-specific interfaces",
        "Data analysis tools"
      ],
      overview: "A recommendation engine for the Malaysian Ministry of Higher Education to help evaluate global higher education options using QS university rating data.",
      problem: "Students needed a reliable way to evaluate universities based on various criteria.",
      solution: "Developed a recommendation engine that analyzes university data and provides tailored suggestions."
    },
    {
      title: "APU e-Bookstore Database Management System",
      description: "A robust database system for APU's e-Bookstore, streamlining book management and order processing with normalized database design.",
      iconName: "DatabaseIcon",
      tags: ["Database Design", "SQL", "ERD Modeling", "Normalization"],
      category: "Database",
      features: [
        "ERD modeling",
        "Database normalization",
        "Order processing"
      ],
      overview: "A database management system for APU's e-Bookstore, enhancing book management and order processing.",
      problem: "The e-Bookstore required an efficient way to manage books and orders.",
      solution: "Implemented a normalized database design to streamline operations."
    },
    {
      title: "Minimart Management System",
      description: "An Assembly Language application providing essential tools for minimart operations, including inventory management and sales analysis.",
      iconName: "ShoppingCart",
      tags: ["Assembly Language", "Low-level Programming", "Inventory Management"],
      category: "Retail",
      features: [
        "Inventory management",
        "Sales analysis"
      ],
      overview: "An Assembly Language application providing essential tools for minimart operations.",
      problem: "Minimarts needed a simple yet effective way to manage inventory and sales.",
      solution: "Developed an application that streamlines inventory management and sales tracking."
    },
    {
      title: "Personal Task Management System",
      description: "A CLI-based task management solution in C, enabling efficient organization and tracking of tasks with priority-based scheduling.",
      iconName: "CheckSquare",
      tags: ["C", "CLI", "File I/O", "Task Management"],
      category: "Productivity",
      features: [
        "Task organization",
        "Priority scheduling"
      ],
      overview: "A CLI-based task management solution that helps users organize and track tasks effectively.",
      problem: "Users needed a way to manage tasks efficiently in a command-line environment.",
      solution: "Created a CLI application that allows users to organize tasks with priority scheduling."
    },
    {
      title: "Car Rental System",
      description: "A Java-based rental management system showcasing OOP principles with features for vehicle booking, customer management, and reporting.",
      iconName: "Car",
      tags: ["Java", "OOP", "Database Management", "User Authentication"],
      category: "Transportation",
      features: [
        "Vehicle booking",
        "Customer management"
      ],
      overview: "A Java-based rental management system that simplifies vehicle booking and customer management.",
      problem: "Car rental companies needed an efficient way to manage bookings and customers.",
      solution: "Developed a system that streamlines vehicle booking and customer management processes."
    },
    {
      title: "House Rent Prediction Analysis",
      description: "A data analysis project using R Studio to explore and visualize housing market trends with comprehensive statistical modeling.",
      iconName: "Home",
      tags: ["R", "Data Analysis", "Data Visualization", "Statistical Modeling"],
      category: "Analytics",
      features: [
        "Data preprocessing",
        "Statistical modeling"
      ],
      overview: "A data analysis project that explores housing market trends using statistical modeling.",
      problem: "Homebuyers needed insights into housing market trends to make informed decisions.",
      solution: "Conducted data analysis and visualization to provide insights into market trends."
    },
    {
      title: "Portfolio Website", // Retained project
      description: "This personal portfolio website, built with React, TypeScript, Tailwind CSS, and Framer Motion, showcasing my projects and skills.",
      iconName: "Briefcase",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      category: "Web Development",
      overview: "My personal space on the web to showcase my journey, projects, and skills as a Cybersecurity Engineer."
    }
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    Shield, Building2, GraduationCap, DatabaseIcon, ShoppingCart, CheckSquare, Car, Home, Briefcase
  };

  const projects: Project[] = projectsInput.map((p, index) => ({
    ...p,
    id: index + 1,
    icon: iconMap[p.iconName],
  }));

  const projectsToDisplay = showAllProjects ? projects : projects.slice(0, 3);

  const subNavItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'techstack', label: 'Tech Stack' },
  ];

  const currentProjectsInput: ProjectInputData[] = projectsInput; 
  const currentIconMap: { [key: string]: React.ElementType } = iconMap;
  const currentProjects: Project[] = currentProjectsInput.map((p, index) => ({ ...p, id: index + 1, icon: currentIconMap[p.iconName] }));
  const currentCertificationsData = certificationsData;
  const currentSubNavItems = subNavItems;

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-[#9b87f5]">Portfolio</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Here's a collection of my work, certifications, and the technologies I work with.
          </p>
        </div>
        
        <div className="flex justify-center space-x-3 md:space-x-4 mb-16">
          {currentSubNavItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSubSection === item.id ? 'default' : 'outline'}
              onClick={() => setActiveSubSection(item.id)}
              className={`
                px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ease-in-out 
                ${activeSubSection === item.id 
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white border-none shadow-lg shadow-[#9b87f5]/30' 
                  : 'bg-transparent text-white/60 border-white/20 hover:bg-white/5 hover:text-white hover:border-[#9b87f5]/50'
                }
              `}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {activeSubSection === 'projects' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsToDisplay.map((project) => (
            <Card 
              key={project.id} 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out group hover:scale-[1.02] hover:border-[#9b87f5]/70 hover:shadow-2xl hover:shadow-[#9b87f5]/20 flex flex-col"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#6366f1]/20 via-transparent to-[#a855f7]/20 flex items-center justify-center p-6 border-b border-white/5 group-hover:border-[#9b87f5]/30 transition-colors duration-300">
                    {project.icon ? (
                      <project.icon className="w-16 h-16 md:w-20 md:h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    ) : (
                      <Briefcase className="w-16 h-16 md:w-20 md:h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    )}
                  </div>
                  <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-[#9b87f5] transition-colors duration-300">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed flex-grow line-clamp-3 md:line-clamp-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/10 text-[#9b87f5] px-2.5 py-1 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                    <Button variant="outline" className="mt-auto w-full border-white/20 text-white hover:bg-[#9b87f5]/20 hover:border-[#9b87f5] hover:text-white transition-all duration-300 group flex items-center justify-center space-x-2">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
              </CardContent>
            </Card>
          ))}
        </div>
            {projects.length > 3 && (
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-[#9b87f5]/70 transition-all duration-300 px-8 py-3 text-base"
                  onClick={() => setShowAllProjects(!showAllProjects)}
          >
                  {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
          </Button>
        </div>
            )}
          </>
        )}

        {activeSubSection === 'certifications' && (
          <div className="pt-4 pb-8">
            {!imagesLoaded && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9b87f5]"></div>
                <span className="ml-3 text-white/70">Loading certificates...</span>
              </div>
            )}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {currentCertificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCertImage(cert.imageSrc)}
                  className="cursor-pointer"
                >
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out group hover:scale-[1.03] hover:border-[#6366f1]/70 hover:shadow-2xl hover:shadow-[#6366f1]/20 flex flex-col h-full">
                    <div className="aspect-video overflow-hidden border-b border-white/5 group-hover:border-[#6366f1]/30 transition-colors duration-300">
                      <img 
                        src={cert.imageSrc} 
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2 md:p-4 bg-black/10"
                        loading="eager"
                      />
                    </div>
                    <CardContent className="p-5 flex flex-col flex-grow">
                      <h4 className="text-md md:text-lg font-semibold text-white mb-1 group-hover:text-[#6366f1] transition-colors duration-300">{cert.title}</h4>
                      <p className="text-sm text-white/70 mb-0">{cert.issuingBody}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeSubSection === 'techstack' && (
          <div className="pt-4 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
              {techStackData.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 aspect-square transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-400/20"
                >
                  <img 
                    src={tech.logoSrc} 
                    alt={`${tech.name} logo`} 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="absolute bottom-4 text-center text-xs md:text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for Certificate Images */}
      {selectedCertImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertImage(null)}
        >
          <motion.div
            className="relative max-w-3xl max-h-[80vh] bg-white/10 p-2 rounded-lg shadow-2xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedCertImage} 
              alt="Selected Certificate - Full View" 
              className="block max-w-full max-h-[calc(80vh-1rem)] object-contain rounded-md"
            />
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 md:w-10 md:h-10"
              onClick={() => setSelectedCertImage(null)}
            >
              <XIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
