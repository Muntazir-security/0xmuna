import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        color: 'white'
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-white/70 mb-4">Oops! Page not found</p>
        <a href="/" className="text-cyan-400 hover:text-purple-400 underline transition-colors duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
