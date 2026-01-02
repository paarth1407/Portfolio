
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-900 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg">
            P
          </div>
          <span className="text-lg font-bold tracking-tight">Paarth Thakran</span>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Paarth Thakran. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">Twitter</a>
          <a href="https://www.linkedin.com/in/paarth-thakran/" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
