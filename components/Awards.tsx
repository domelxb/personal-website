import React from 'react';
import { Award as AwardType } from '../types';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

interface AwardsProps {
  awards: AwardType[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, index) => (
        <motion.div
          key={award.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 h-full"
        >
           {/* Top Row: Icon and Year */}
          <div className="flex justify-between items-start mb-4 w-full">
             <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 text-amber-500 dark:text-amber-400">
                {index === 0 ? <Trophy size={18} strokeWidth={1.5} /> : <Star size={18} strokeWidth={1.5} />}
             </div>
             {award.year && (
                 <span className="text-xs font-bold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {award.year}
                 </span>
             )}
          </div>

          <div className="flex-1">
             <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3 leading-snug">
               {award.title}
             </h3>
          </div>
          
           {/* Decorative corner accent */}
           <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-blue-50/50 to-transparent dark:from-blue-900/20 rounded-br-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
};

export default Awards;