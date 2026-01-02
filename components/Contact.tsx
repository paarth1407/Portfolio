
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="relative">
      <div className="glass-card rounded-[4rem] p-12 md:p-24 text-center overflow-hidden border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-indigo-600/5 blur-[150px] -z-10"></div>
        
        <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-6">Get in touch</h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">Let's collaborate on <br />intelligent systems.</h3>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          Seeking opportunities to apply expertise in Agentic AI and Multi-modal Vision systems 
          within forward-thinking engineering teams.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <a 
            href="mailto:paarth1407@gmail.com" 
            className="flex items-center justify-between p-8 bg-black/20 rounded-3xl border border-white/5 hover:border-indigo-500/40 transition-all group"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-500/5 rounded-2xl flex items-center justify-center mr-5 border border-indigo-500/10 group-hover:bg-indigo-500/10 transition-colors">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-sm font-bold text-white tracking-wide">paarth1407@gmail.com</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-700 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/in/paarth-thakran/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-8 bg-black/20 rounded-3xl border border-white/5 hover:border-blue-500/40 transition-all group"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/5 rounded-2xl flex items-center justify-center mr-5 border border-blue-500/10 group-hover:bg-blue-500/10 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-sm font-bold text-white tracking-wide">paarth-thakran</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-700 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
