
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-32 pb-12 gap-12">
      <div className="flex-1 text-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Internships
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Building Intelligent <br />
          <span className="text-gradient">Voice & Vision Systems</span>
        </h1>
        
        <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed">
          I am Paarth Thakran. I specialize in crafting agentic AI, sophisticated RAG architectures, 
          and high-performance vision-based systems that solve real-world complexities.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 text-center"
          >
            View Projects
          </a>
          <a 
            href="#" 
            className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition-all border border-gray-700 text-center"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">10+</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Projects Built</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">AI/ML</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Specialization</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">RAG</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Expertise</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Python</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Core Stack</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
          
          <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop" 
              alt="Paarth Thakran"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              style={{ objectPosition: 'center top' }}
            />
            {/* Overlay for sleek look */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>
          </div>
          
          {/* Subtle floating badge */}
          <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl border-white/10 hidden sm:block">
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Based in India</p>
            <p className="text-sm font-bold text-white">Full Stack AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};
