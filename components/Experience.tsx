
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Professional Path</h2>
          <h3 className="text-4xl font-bold">Experience & Education</h3>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience Section */}
        <div className="space-y-10">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center mb-8">
            <div className="w-8 h-[1px] bg-indigo-500 mr-4"></div>
            Industry Experience
          </h4>
          
          <div className="relative pl-8 border-l border-white/5 space-y-12">
            <div className="relative">
              <div className="absolute -left-[36.5px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-[3px] border-gray-950"></div>
              <div className="glass-card p-8 rounded-[2rem] border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <h5 className="text-lg font-bold text-white tracking-tight">SOFTWARE ENGINEER INTERN</h5>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full">JUNE 2025 — SEP 2025</span>
                </div>
                <p className="text-gray-300 font-bold text-sm mb-4 uppercase tracking-widest">Statnetics DSoft Pvt. Ltd.</p>
                <ul className="text-gray-400 text-[13px] space-y-3 font-medium leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500/40 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    Contributed to CloudQA, an enterprise test automation platform reducing complex web testing overhead.
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500/40 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    Optimized automated testing workflows and visual regression components.
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500/40 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    Collaborated on improving vision-based UI validation accuracy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-10">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center mb-8">
            <div className="w-8 h-[1px] bg-blue-500 mr-4"></div>
            Academic Background
          </h4>
          
          <div className="relative pl-8 border-l border-white/5 space-y-12">
            <div className="relative">
              <div className="absolute -left-[36.5px] top-1 w-4 h-4 rounded-full bg-blue-600 border-[3px] border-gray-950"></div>
              <div className="glass-card p-8 rounded-[2rem] border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <h5 className="text-lg font-bold text-white tracking-tight uppercase">BTech in CS (AI & ML)</h5>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">2023 — 2027</span>
                </div>
                <p className="text-gray-300 font-bold text-sm mb-4 uppercase tracking-widest">KR Mangalam University</p>
                <p className="text-gray-400 text-[13px] font-medium leading-relaxed">
                  Focused on core foundations of Machine Learning, Vision Architectures, and Agentic Frameworks. 
                  Currently developing innovative POCs in the EdTech and Automation sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
