import React from 'react';
import { Patent } from '../types';
import { motion } from 'framer-motion';
import { ScrollText, FileCheck } from 'lucide-react';

interface PatentsProps {
  patents: Patent[];
}

const Patents: React.FC<PatentsProps> = ({ patents }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {patents.map((patent, index) => (
        <motion.div
          key={patent.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative flex flex-col md:flex-row gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
        >
          {/* Icon Box */}
          <div className="shrink-0">
             <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
               <ScrollText size={22} strokeWidth={1.5} />
             </div>
          </div>

          <div className="flex-1 min-w-0">
             <div className="flex flex-wrap gap-2 mb-2 items-center">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {patent.year}
                </span>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {patent.number}
                </span>
                {patent.status && (
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded ml-auto md:ml-0">
                        {patent.status}
                    </span>
                )}
             </div>

             <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-2">
               {patent.title}
             </h3>
             
             <p className="text-sm text-slate-600 dark:text-slate-400">
                {patent.authors.split(',').map((author, i, arr) => (
                    <span key={i} className={author.includes('Chengbang Lu') ? 'font-bold text-slate-900 dark:text-slate-200' : ''}>
                        {author.trim()}{i < arr.length - 1 ? ', ' : ''}
                    </span>
                ))}
             </p>
             
             <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-mono">
                <FileCheck size={12} />
                <span>{patent.type}</span>
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Patents;