
import React, { useEffect } from 'react';
import UnifiedBackground from '@/components/UnifiedBackground';
import Navbar from '@/components/Navbar';
import ProjectDetail from '@/components/ProjectDetail';

const ProjectDetailPage: React.FC = () => {
  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <UnifiedBackground />
      <div className="min-h-screen relative overflow-x-hidden font-inter">
        <Navbar />
        <main>
          <ProjectDetail />
        </main>
        <footer className="py-6 backdrop-blur-sm border-t border-white/10 relative z-10">
          <div className="container mx-auto px-4 text-center text-white/60">
            <p>© 2024 Muntazir Mehdi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjectDetailPage;
