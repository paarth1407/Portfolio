
import React from 'react';

const SkillBadge: React.FC<{ name: string; category: string }> = ({ name, category }) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'AI': return 'bg-indigo-500/5 text-indigo-400 border-indigo-500/10';
      case 'Vision': return 'bg-blue-500/5 text-blue-400 border-blue-500/10';
      case 'Core': return 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10';
      default: return 'bg-gray-500/5 text-gray-400 border-gray-500/10';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-lg border text-[13px] font-medium transition-all hover:bg-white/5 ${getCategoryStyles()}`}>
      {name}
    </div>
  );
};

export const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', category: 'Core' },
    { name: 'Langgraph', category: 'AI' },
    { name: 'RAG Systems', category: 'AI' },
    { name: 'MySQL', category: 'Core' },
    { name: 'OpenCV', category: 'Vision' },
    { name: 'Agentic AI', category: 'AI' },
    { name: 'AI Agents', category: 'AI' },
    { name: 'Vision Systems', category: 'Vision' },
    { name: 'Voice Systems', category: 'Vision' },
    { name: 'Pytorch', category: 'Core' },
    { name: 'GenAI', category: 'AI' },
    { name: 'API Design', category: 'Core' },
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Expertise</h2>
        <h3 className="text-4xl font-bold">Core Tech Stack</h3>
      </div>

      <div className="glass-card p-10 lg:p-16 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[100px] -z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center">
              <svg className="w-5 h-5 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.364 17.636l-.707.707M12 21v-1m0-17a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
              Agentic & LLM AI
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'AI').map(s => <SkillBadge key={s.name} {...s} />)}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center">
              <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Vision & Multi-modal
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'Vision').map(s => <SkillBadge key={s.name} {...s} />)}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center">
              <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Core & Infra
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'Core').map(s => <SkillBadge key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
