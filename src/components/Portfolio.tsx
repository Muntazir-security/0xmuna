import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield, Building2, GraduationCap, Database as DatabaseIcon,
  ShoppingCart, CheckSquare, Car, Home, Briefcase, ArrowRight, X as XIcon
} from 'lucide-react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

// --- techStackData ---
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

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300
      hover:text-white
      text-sm
      font-medium
      transition-all
      duration-300
      ease-in-out
      flex
      items-center
      gap-2
      bg-white/5
      hover:bg-white/10
      rounded-md
      border
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform
          duration-300
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);


interface SimpleProjectCardProps {
  project: Project;
  aosDelay: string;
}

const SimpleProjectCard: React.FC<SimpleProjectCardProps> = ({ project, aosDelay }) => {
  const IconComponent = project.icon;

  return (
    <Card
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out group hover:scale-[1.02] hover:border-[#9b87f5]/70 hover:shadow-2xl hover:shadow-[#9b87f5]/20 flex flex-col"
      data-aos="fade-up" // Basic fade-up for card, staggered by parent grid
      data-aos-delay={aosDelay}
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#a855f7]/10 flex items-center justify-center p-6 border-b border-white/5 group-hover:border-[#9b87f5]/30 transition-colors duration-300">
        {IconComponent ? (
          <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
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
  );
};


// --- REVISED SimpleTechStackIcon component (Corrected text display - Attempt 3) ---
interface SimpleTechStackIconProps {
  iconSrc: string;
  language: string;
  aosDelay: string;
}

const SimpleTechStackIcon: React.FC<SimpleTechStackIconProps> = ({ iconSrc, language, aosDelay }) => (
  <div
    className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 aspect-square hover:bg-white/10 hover:border-[#9b87f5]/70 transition-all duration-300 ease-in-out group overflow-hidden" // overflow-hidden is key here
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    {/* This inner div takes up the majority of the card space, stacking content */}
    <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full">
      {/* Logo Image */}
      <img
        src={iconSrc}
        alt={`${language} logo`}
        className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-300 group-hover:scale-110 filter brightness-100"
      />
    </div>

    {/* Text name container - always present, but text itself slides into view */}
    {/* We use 'relative' on this div, and its 'bottom-0' is relative to its own parent (the flex-grow div). */}
    {/* `white-space-nowrap` prevents wrapping. `overflow-hidden text-ellipsis` handles overflow with dots. */}
    <div className="absolute inset-x-0 bottom-3 text-center transition-all duration-300 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
      <span className="text-sm text-white/80 font-medium white-space-nowrap overflow-hidden text-ellipsis block">
        {language}
      </span>
    </div>

    {/* Top gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/0 to-[#a855f7]/0 group-hover:from-[#6366f1]/10 group-hover:to-[#a855f7]/10 rounded-2xl transition-all duration-300"></div>
    {/* Bottom gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#9b87f5]/0 via-transparent to-transparent group-hover:from-[#9b87f5]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
  </div>
);


const Portfolio: React.FC = () => {
  const [activeSubSection, setActiveSubSection] = useState('projects');
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [techStackVisible, setTechStackVisible] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
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
      const timer = setTimeout(() => {
        setTechStackVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setTechStackVisible(false);
    }
  }, [activeSubSection]);

  const projectsInput: ProjectInputData[] = [
    { title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN", description: "Designed and implemented an advanced anomaly detection system to protect Software-Defined Networks (SDN) from DDoS attacks. The system uses a statistical approach for real-time analysis of network traffic, ensuring robust security against SYN flooding attacks.", iconName: "Shield", tags: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis"], },
    { title: "SABB Bank Management System", description: "Developed a Python-based banking system with multi-level authentication and secure transaction handling. The system ensures robust security and prevents fraudulent activities.", iconName: "Building2", tags: ["Python", "CLI", "File I/O", "User Authentication"], },
    { title: "University Information Management System", description: "Created a recommendation engine for the Malaysian Ministry of Higher Education to evaluate university rankings. The system features user-specific interfaces and data analysis tools.", iconName: "GraduationCap", tags: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis"], },
    { title: "APU e-Bookstore Database Management System", description: "A robust database system for APU's e-Bookstore, streamlining book management and order processing with normalized database design.", iconName: "DatabaseIcon", tags: ["Database Design", "SQL", "ERD Modeling", "Normalization"], },
    { title: "Minimart Management System", description: "An Assembly Language application providing essential tools for minimart operations, including inventory management and sales analysis.", iconName: "ShoppingCart", tags: ["Assembly Language", "Low-level Programming", "Inventory Management"], },
    { title: "Personal Task Management System", description: "A CLI-based task management solution in C, enabling efficient organization and tracking of tasks with priority-based scheduling.", iconName: "CheckSquare", tags: ["C", "CLI", "File I/O", "Task Management"], },
    { title: "Car Rental System", description: "A Java-based rental management system showcasing OOP principles with features for vehicle booking, customer management, and reporting.", iconName: "Car", tags: ["Java", "OOP", "Database Management", "User Authentication"], },
    { title: "House Rent Prediction Analysis", description: "A data analysis project using R Studio to explore and visualize housing market trends with comprehensive statistical modeling.", iconName: "Home", tags: ["R", "Data Analysis", "Data Visualization", "Statistical Modeling"], },
    { title: "Portfolio Website", description: "This personal portfolio website, built with React, TypeScript, Tailwind CSS, and Framer Motion, showcasing my projects and skills.", iconName: "Briefcase", tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"], }
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    Shield, Building2, GraduationCap, DatabaseIcon, ShoppingCart, CheckSquare, Car, Home, Briefcase
  };

  const projects: Project[] = projectsInput.map((p, index) => ({
    ...p,
    id: index + 1,
    icon: iconMap[p.iconName],
  }));

  const initialProjectItems = 3;
  const projectsToDisplay = showAllProjects ? projects : projects.slice(0, initialProjectItems);

  const subNavItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'techstack', label: 'Tech Stack' },
  ];

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
          {subNavItems.map((item) => (
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
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#a855f7]/10 flex items-center justify-center p-6 border-b border-white/5 group-hover:border-[#9b87f5]/30 transition-colors duration-300">
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
              {certificationsData.map((cert, index) => (
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {techStackData.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  animate={techStackVisible ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.03,
                      ease: [0.25, 0.25, 0, 1]
                    }
                  } : {}}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-white/8 via-white/5 to-white/2 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 aspect-square transition-all duration-300 ease-out hover:bg-gradient-to-br hover:from-[#6366f1]/15 hover:via-[#9b87f5]/10 hover:to-purple-500/5 hover:border-[#9b87f5]/40 hover:shadow-2xl hover:shadow-[#9b87f5]/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/0 to-[#a855f7]/0 group-hover:from-[#6366f1]/10 group-hover:to-[#a855f7]/10 rounded-2xl transition-all duration-300"></div>

                  {/* --- Start of Tech Stack Item Content --- */}
                  <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full">
                    {/* Logo Image */}
                    <img
                      src={tech.logoSrc}
                      alt={`${tech.name} logo`}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-300 group-hover:scale-110 filter brightness-100"
                    />

                    {/* Text name: Using a dedicated bottom section for the name */}
                    <div className="absolute bottom-0 inset-x-0 h-6 flex items-center justify-center overflow-hidden">
                      <span className="text-sm text-white/80 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                  {/* --- End of Tech Stack Item Content --- */}

                  {/* Outer gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9b87f5]/0 via-transparent to-transparent group-hover:from-[#9b87f5]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={techStackVisible ? {
                opacity: 1,
                y: 0,
                transition: { delay: techStackData.length * 0.03 + 0.2, duration: 0.5 }
              } : {}}
            >
            </motion.div>
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