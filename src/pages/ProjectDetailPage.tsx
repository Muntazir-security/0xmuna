
import React, { useEffect } from 'react';
import PageBackground from '@/components/PageBackground';
import Navbar from '@/components/Navbar';
import ProjectDetail from '@/components/ProjectDetail';

const ProjectDetailPage: React.FC = () => {
  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-inter">
      <PageBackground />
      <Navbar />
      <main>
        <ProjectDetail />
      </main>
      <footer className="py-6 bg-[#0B0B1E]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© 2024 Muntazir Mehdi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
