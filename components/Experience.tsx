import React from 'react';
import { TimelineItem, LocalizedContent } from '../types';
import { motion } from 'framer-motion';

interface ExperienceProps {
  experience: TimelineItem[];
  content: LocalizedContent;
}

const Experience: React.FC<ExperienceProps> = ({ experience, content }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Scrollable Container with Mask */}
      <div className="relative h-[600px] overflow-hidden group">
        {/* Gradients for fading effect */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent dark:from-black z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-black z-20 pointer-events-none"></div>

        <div className="h-full overflow-y-auto no-scrollbar py-24 px-4 snap-y snap-mandatory space-y-12">
          {experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "-10% 0px -10% 0px", amount: 0.6 }} // Trigger when center
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="snap-center relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-black"></div>
              
              <div className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {item.period}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {item.role}
              </h3>
              <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-2">
                {item.institution}
              </h4>
              {item.supervisor && (
                <div className="text-sm text-slate-500 mb-2">
                  Supervisor: <span className="font-medium">{item.supervisor}</span>
                </div>
              )}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
              {item.affiliation && (
                 <div className="mt-2 text-xs text-slate-400 italic">{item.affiliation}</div>
              )}
            </motion.div>
          ))}
          
          {/* Spacer for bottom scroll */}
          <div className="h-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;