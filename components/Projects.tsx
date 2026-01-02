
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  tags: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, features, tags }) => {
  return (
    <div className="group glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:translate-y-[-8px] flex flex-col h-full border-white/5 hover:border-indigo-500/30">
      {/* Video Placeholder Area */}
      <div className="aspect-video bg-gray-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors"></div>
        <div className="text-center p-8 z-10">
          <svg className="w-12 h-12 text-indigo-500/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Project Demo Video</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[9px] font-bold text-indigo-400 border border-white/5 uppercase tracking-widest">
            Case Study
          </div>
        </div>
      </div>

      <div className="p-10 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] font-bold text-gray-400 bg-white/5 px-2 py-1 rounded uppercase tracking-[0.15em] border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        
        <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors uppercase">{title}</h4>
        
        <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
          {description}
        </p>

        <div className="space-y-4 mb-10 flex-grow">
          {features.map((f, i) => (
            <div key={i} className="flex items-start text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 mt-1.5 flex-shrink-0 opacity-60"></div>
              {f}
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-gray-900 hover:bg-indigo-600 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-3 border border-white/5 uppercase tracking-widest">
          <span>Explore Architecture</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const projectList = [
    {
      title: "PHOTO → DIGITAL AVATAR",
      description: "AI-driven identity preservation system that transforms personal photos into high-fidelity digital avatars and professional headshots without manual editing.",
      tags: ["Vision", "Python", "Generative AI"],
      features: [
        "Keeps actual face identity intact",
        "Automated lighting and angle correction",
        "Optimized for LinkedIn and professional profiles",
        "One-click high-clarity processing"
      ]
    },
    {
      title: "Assistive AI for Classrooms",
      description: "An interactive, visual-first whiteboard solution for students aged 5-15. Explains complex logic and science through real-time generative visuals.",
      tags: ["EdTech", "Agentic AI", "Voice"],
      features: [
        "Real-time visual concept generation",
        "Adaptive step-by-step voice guidance",
        "Hands-on interactive interface",
        "Multi-modal learning paths"
      ]
    },
    {
      title: "Visual Validation Engine",
      description: "Automated high-precision testing tool designed for UI/UX validation. Detects pixel-level inconsistencies between design iterations and production.",
      tags: ["Automation", "OpenCV", "QA"],
      features: [
        "Instant pixel-perfect comparison",
        "Highlighted visual regression reporting",
        "Optimized for rapid UI/UX testing cycles",
        "High accuracy difference spotting"
      ]
    }
  ];

  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
        <div>
          <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Recent Works</h2>
          <h3 className="text-4xl font-bold">Featured Projects</h3>
        </div>
        <p className="max-w-md text-gray-500 mt-6 md:mt-0 text-sm leading-relaxed">
          Specialized systems leveraging advanced computer vision and agentic reasoning to bridge the gap between AI and human interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};
