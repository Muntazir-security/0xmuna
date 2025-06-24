import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageBackground from '@/components/PageBackground';
import ProjectDetail from '@/components/ProjectDetail';

const ProjectDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Force scroll to top immediately when component mounts or project changes
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]); // Re-run when project ID changes

  const handleBackToPortfolio = () => {
    navigate('/#portfolio');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-inter">
      <PageBackground />
      
      <main>
        <ProjectDetail onBackToPortfolio={handleBackToPortfolio} />
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
