
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import {
  Shield, Building2, GraduationCap, Database as DatabaseIcon,
  ShoppingCart, CheckSquare, Car, Home, Briefcase
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  tags: string[];
  category: string;
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  image?: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const iconMap: { [key: string]: React.ElementType } = {
    Shield, Building2, GraduationCap, DatabaseIcon, ShoppingCart, CheckSquare, Car, Home, Briefcase
  };

  const projectsData = [
    {
      id: 1,
      title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN",
      description: "Designed and implemented an advanced anomaly detection system to protect Software-Defined Networks (SDN) from DDoS attacks.",
      iconName: "Shield",
      tags: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis"],
      category: "Network Security",
      features: [
        "Real-time traffic analysis and monitoring",
        "Statistical anomaly detection algorithms",
        "Automated threat response system",
        "SDN controller integration",
        "Performance metrics dashboard"
      ],
      overview: "This project addresses the critical security vulnerabilities in Software-Defined Networks by implementing a comprehensive DDoS mitigation system. The solution uses advanced statistical analysis to detect and prevent TCP SYN flooding attacks in real-time.",
      problem: "Software-Defined Networks are increasingly vulnerable to DDoS attacks, particularly TCP SYN flooding, which can overwhelm network resources and disrupt service availability. Traditional security measures often fail to provide adequate protection in SDN environments.",
      solution: "Developed a multi-layered defense system that combines real-time traffic monitoring, statistical anomaly detection, and automated response mechanisms. The system integrates seamlessly with SDN controllers to provide immediate threat mitigation."
    },
    {
      id: 2,
      title: "SABB Bank Management System",
      description: "Developed a Python-based banking system with multi-level authentication and secure transaction handling.",
      iconName: "Building2",
      tags: ["Python", "CLI", "File I/O", "User Authentication"],
      category: "Financial Software",
      features: [
        "Multi-level user authentication",
        "Secure transaction processing",
        "Account management system",
        "Transaction history tracking",
        "Fraud detection mechanisms"
      ],
      overview: "A comprehensive banking management system built in Python, featuring robust security measures and efficient transaction handling for financial institutions.",
      problem: "Traditional banking systems often lack proper security measures and efficient transaction processing capabilities, making them vulnerable to fraud and operational inefficiencies.",
      solution: "Implemented a secure, CLI-based banking system with multi-level authentication, encrypted data storage, and comprehensive transaction monitoring to ensure both security and operational efficiency."
    },
    {
      id: 3,
      title: "University Information Management System",
      description: "Created a recommendation engine for the Malaysian Ministry of Higher Education to evaluate university rankings.",
      iconName: "GraduationCap",
      tags: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis"],
      category: "Educational Technology",
      features: [
        "University ranking algorithms",
        "Data analysis and visualization",
        "User-specific interfaces",
        "Performance metrics tracking",
        "Recommendation engine"
      ],
      overview: "An intelligent system designed to assist the Malaysian Ministry of Higher Education in evaluating and ranking universities based on multiple criteria and performance indicators.",
      problem: "Manual evaluation of university performance is time-consuming and prone to bias, making it difficult to maintain consistent and fair ranking systems.",
      solution: "Developed an automated recommendation engine that uses data-driven algorithms to evaluate universities based on multiple criteria, providing objective and consistent ranking results."
    },
    {
      id: 4,
      title: "APU e-Bookstore Database Management System",
      description: "A robust database system for APU's e-Bookstore, streamlining book management and order processing.",
      iconName: "DatabaseIcon",
      tags: ["Database Design", "SQL", "ERD Modeling", "Normalization"],
      category: "Database Systems",
      features: [
        "Normalized database design",
        "Inventory management",
        "Order processing system",
        "Customer management",
        "Reporting and analytics"
      ],
      overview: "A comprehensive database management system designed specifically for APU's e-Bookstore operations, featuring optimized data structures and efficient query processing.",
      problem: "Managing book inventory, customer orders, and sales data manually leads to inefficiencies, errors, and poor customer experience.",
      solution: "Designed and implemented a fully normalized database system with optimized queries, automated inventory tracking, and streamlined order processing workflows."
    },
    {
      id: 5,
      title: "Minimart Management System",
      description: "An Assembly Language application providing essential tools for minimart operations.",
      iconName: "ShoppingCart",
      tags: ["Assembly Language", "Low-level Programming", "Inventory Management"],
      category: "Retail Management",
      features: [
        "Low-level system programming",
        "Inventory tracking",
        "Sales processing",
        "Performance optimization",
        "Hardware integration"
      ],
      overview: "A high-performance minimart management system built in Assembly Language, demonstrating expertise in low-level programming and system optimization.",
      problem: "Standard retail management software often has unnecessary overhead and may not perform optimally on older or resource-constrained hardware.",
      solution: "Developed a lightweight, highly optimized system using Assembly Language to maximize performance and minimize resource usage while providing essential retail management features."
    },
    {
      id: 6,
      title: "Personal Task Management System",
      description: "A CLI-based task management solution in C, enabling efficient organization and tracking of tasks.",
      iconName: "CheckSquare",
      tags: ["C", "CLI", "File I/O", "Task Management"],
      category: "Productivity Tools",
      features: [
        "Command-line interface",
        "Priority-based scheduling",
        "Task categorization",
        "Progress tracking",
        "File-based storage"
      ],
      overview: "A lightweight, efficient task management system built in C, designed for users who prefer command-line interfaces and need robust task organization capabilities.",
      problem: "Many task management applications are bloated with unnecessary features and require significant system resources, making them unsuitable for minimalist workflows.",
      solution: "Created a streamlined, CLI-based task management system that focuses on core functionality while maintaining high performance and minimal resource usage."
    }
  ];

  const project = projectsData.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => navigate('/#portfolio')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.iconName] || Briefcase;

  const handleBackToPortfolio = () => {
    navigate('/#portfolio');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 mb-6"
            onClick={handleBackToPortfolio}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-2xl flex items-center justify-center border border-white/10">
              <IconComponent className="w-10 h-10 text-[#9b87f5]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
              <span className="inline-block px-3 py-1 bg-[#9b87f5]/20 text-[#9b87f5] rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
                <p className="text-white/80 leading-relaxed">{project.overview}</p>
              </CardContent>
            </Card>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Problem</h3>
                  <p className="text-white/80 leading-relaxed">{project.problem}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Solution</h3>
                  <p className="text-white/80 leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#9b87f5] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-[#9b87f5] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white hover:opacity-90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
