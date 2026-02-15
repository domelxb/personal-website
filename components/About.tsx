import React from 'react';
import { GraduationCap, FlaskConical } from 'lucide-react';
import { LocalizedContent, TimelineItem } from '../types';
import { socialLinks } from '../data';

interface AboutProps {
  content: LocalizedContent;
  education: TimelineItem[];
}

const About: React.FC<AboutProps> = ({ content, education }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12">
      {/* Avatar Column */}
      <div className="flex-shrink-0 mx-auto md:mx-0 flex flex-col items-center">
        <div className="relative group cursor-default mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/sf0SZ8k2/me.png" 
              alt="Chengbang Lu" 
              className="w-full h-full object-cover object-[center_20%]" 
            />
          </div>
        </div>

        {socialLinks.researchGate && (
            <a 
                href={socialLinks.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-100 dark:border-emerald-800/50"
            >
                <FlaskConical size={16} />
                <span>ResearchGate Profile</span>
            </a>
        )}
      </div>

      {/* Text Column */}
      <div className="flex-1 text-center md:text-left w-full">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          {content.hero.role}
        </h3>
        
        <p 
          className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
          dangerouslySetInnerHTML={{ __html: content.hero.aboutDesc }}
        />
        
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
          <p className="text-slate-500 dark:text-slate-400 italic">
            "{content.hero.intro}"
          </p>
        </div>

        {/* Education Section embedded in About */}
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <GraduationCap className="text-blue-500" size={24} />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{content.sectionTitles.education}</h4>
            </div>
            
            <div className="space-y-6">
                {education.map(edu => (
                    <div key={edu.id} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors">
                        <div className="text-left">
                            <h5 className="font-bold text-slate-900 dark:text-white text-lg">{edu.institution}</h5>
                            <p className="text-slate-600 dark:text-slate-400">{edu.role}</p>
                        </div>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                            {edu.period}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;