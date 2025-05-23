import React from "react";
// Badge import will be removed if no longer used after this change
// import { Badge } from "@/components/ui/badge"; 
import { motion } from "framer-motion";
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const workExperience = [
  {
    id: 1,
    title: "Security Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Jan 2024 - April 2024",
    responsibilities: [
      "Conducted vulnerability assessments and penetration testing on university lab devices.",
      "Identified and resolved two critical vulnerabilities, preventing potential disruptions.",
      "Formulated strategic recommendations to mitigate identified vulnerabilities.",
      "Compiled detailed reports documenting findings and suggested remediation actions.",
    ],
  },
  {
    id: 2,
    title: "IT Intern - LAB Security Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Sep 2023 - Jan 2024",
    responsibilities: [
      "Collaborated with teams to deeply understand products for precise documentation.",
      "Wrote easy-to-understand user interface text, online help, and developer guides.",
      "Conducted penetration testing on APU technology lab environment.",
      "Provided suggestion and improvement within APU technology lab environment.",
    ],
  },
  {
    id: 3,
    title: "Security Operations Center (SOC) Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Apr 2023 - July 2023",
    responsibilities: [
      "Monitored event logs across networks, systems, and devices for unusual activity.",
      "Reviewed and categorized security alerts and potential threats.",
      "Conducted active monitoring and collaborated with team leads and SOC Manager.",
      "Experienced with SIEM (MSSGard), including content creation and reporting.",
    ],
  },
];

const educationHistory = [
  {
    id: 1,
    degree: "B.Sc. of Computer Science Specializing in Cyber Security",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Sep 2021 - Aug 2024",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "New World International School",
    location: "Al Khobar, Saudi Arabia",
    dateRange: "Sep 2014 - June 2021",
  },
];

const AboutMe: React.FC = () => {
  // const skills = [...] array will be removed

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          <div className="lg:w-2/5">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 relative overflow-hidden hover:border-[#9b87f5] hover:shadow-2xl hover:shadow-[#9b87f5]/50 transition-all duration-300 ease-out"
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#6366f1]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#a855f7]/20 rounded-full blur-2xl"></div>
              <div className="aspect-square rounded-xl overflow-hidden relative z-10">
                <img 
                  src="/assets/images/profile.png" 
                  alt="Muntazir Mehdi - Profile Picture" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About <span className="text-[#9b87f5]">Me</span>
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mb-6"></div>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed text-justify" data-aos="fade-up" data-aos-delay="800">
              A Cybersecurity Engineer with a passion for securing digital environments. I hold a degree in Computer Science, specializing in Cybersecurity, from Asia Pacific University of Technology & Innovation. With hands-on experience in SOC analysis, vulnerability assessment, and penetration testing, I've developed a strong foundation in identifying and mitigating security risks. My expertise in SIEM implementation, threat detection, and security documentation is further strengthened by industry certifications, including eJPT and ICCA. I blend technical expertise with analytical thinking to build robust security solutions, always staying ahead of emerging threats to protect critical infrastructure.
            </p>
            
            <div className="mt-8 text-center md:text-left" data-aos="fade-up" data-aos-delay="900">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white border-none px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:shadow-[#9b87f5]/40 hover:scale-[1.03] transform transition-all duration-300 ease-in-out group inline-flex items-center justify-center space-x-2 sm:w-auto"
              >
                <a 
                  href="/assets/documents/Syed_Muntazir_Mehd_CV.pdf" 
                  download="Syed_Muntazir_Mehdi_CV.pdf" 
                >
                  <Download className="w-5 h-5 mr-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Work <span className="text-[#9b87f5]">Experience</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2 hidden md:block" style={{ zIndex: 0 }}></div>

            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                className="mb-12 md:flex items-start relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`relative ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className={`absolute top-2 w-4 h-4 bg-[#9b87f5] rounded-full border-4 border-[#0B0B1E] hidden md:block ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`} style={{ zIndex: 2 }}></div>
                    <div className="absolute left-0 top-2 bottom-0 ml-[0.4rem] w-0.5 bg-[#9b87f5] md:hidden" style={{ height: 'calc(100% - 0.5rem)', zIndex: 1 }}></div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 ml-6 md:ml-0 relative z-10 hover:border-[#9b87f5]/80 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-xl font-semibold text-white mb-1 sm:mb-0">{job.title}</h3>
                        <span className="text-sm text-[#9b87f5] whitespace-nowrap mt-1 sm:mt-0">{job.dateRange}</span>
                      </div>
                      <p className="text-md text-white/90 mb-1">{job.institution}</p>
                      <p className="text-sm text-white/70 mb-3">{job.location}</p>
                      <ul className="list-disc list-outside ml-5 text-white/80 space-y-1.5 text-sm leading-relaxed">
                        {job.responsibilities.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Edu<span className="text-[#9b87f5]">cation</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2 hidden md:block" style={{ zIndex: 0 }}></div>

            {educationHistory.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="mb-12 md:flex items-start relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`relative ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className={`absolute top-2 w-4 h-4 bg-[#6366f1] rounded-full border-4 border-[#0B0B1E] hidden md:block ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`} style={{ zIndex: 2 }}></div>
                    <div className="absolute left-0 top-2 bottom-0 ml-[0.4rem] w-0.5 bg-[#6366f1] md:hidden" style={{ height: 'calc(100% - 0.5rem)', zIndex: 1 }}></div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 ml-6 md:ml-0 relative z-10 hover:border-[#6366f1]/80 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-xl font-semibold text-white mb-1 sm:mb-0">{edu.degree}</h3>
                        <span className="text-sm text-[#6366f1] whitespace-nowrap mt-1 sm:mt-0">{edu.dateRange}</span>
                      </div>
                      <p className="text-md text-white/90 mb-1">{edu.institution}</p>
                      <p className="text-sm text-white/70 mb-3">{edu.location}</p>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
