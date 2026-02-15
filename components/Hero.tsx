import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { LocalizedContent, ResearchArea } from '../types';

interface HeroProps {
  content: LocalizedContent;
  onSelectResearch: (area: ResearchArea) => void;
}

const Hero: React.FC<HeroProps> = ({ content, onSelectResearch }) => {
  const [text, setText] = useState('');
  const fullName = "Chengbang Lu";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = fullName;
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden flex flex-col justify-center items-center text-center px-6">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse-slow pointer-events-none"></div>

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        
        <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter text-slate-900 dark:text-white leading-tight min-h-[1.2em]">
          {text}
          <span className="animate-pulse text-blue-500 font-light">|</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-light mb-16 max-w-4xl leading-relaxed">
          {content.hero.role}
          {content.hero.labName && (
            <>
              {content.hero.labConnector}
              {" "}
              <a 
                href={content.hero.labUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-4 transition-all font-normal hover:text-blue-700 dark:hover:text-blue-300"
              >
                {content.hero.labName}
              </a>
            </>
          )}
        </p>
        
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-4 mb-8 justify-center opacity-60">
            <div className="h-px bg-slate-300 dark:bg-slate-700 w-16"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {content.hero.researchAreasTitle}
            </span>
            <div className="h-px bg-slate-300 dark:bg-slate-700 w-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.researchAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => onSelectResearch(area)}
                className="group relative h-full p-6 rounded-2xl text-left bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                  {area.title}
                </h3>
                
                <div className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors shrink-0">
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;