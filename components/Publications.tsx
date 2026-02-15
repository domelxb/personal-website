import React from 'react';
import { Publication, LocalizedContent } from '../types';
import { ImageIcon, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PublicationsProps {
  publications: Publication[];
  content: LocalizedContent;
  onSelect: (pub: Publication) => void;
}

const Publications: React.FC<PublicationsProps> = ({ publications, content, onSelect }) => {
  return (
    <div className="space-y-8">
      {publications.map((pub, index) => {
        const hasCover = !!pub.coverUrl;
        const hasImage = !!pub.imageUrl;
        const hasBoth = hasCover && hasImage;
        const hasContent = hasCover || hasImage;
        const isPending = pub.status?.toLowerCase().includes('pending');
        
        // Target specific publication 'pub8' (Spatiotemporally Gated CRISPR Platform)
        // Standard single image width is set to ~25-28%.
        // We want to enlarge 'pub8' by ~20%. 25% * 1.2 = 30%. 28% * 1.2 = ~33.6%.
        const isSpecialPub = pub.id === 'pub8';

        return (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.01, y: -2 }}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500 flex flex-col md:flex-row gap-6 lg:gap-8 cursor-pointer overflow-hidden items-start"
            onClick={() => onSelect(pub)}
          >
            {/* Soft Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-500 pointer-events-none" />

            {/* Content Section - Text */}
            <div className="flex-1 min-w-0 relative z-10 flex flex-col h-full justify-between py-2">
               <div>
                   <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      {pub.year && (
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800 shadow-sm">
                          {pub.year}
                        </span>
                      )}
                      {pub.journal && pub.journal !== "Pending Submission" && (
                        <span className="text-xs font-medium italic text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                          {pub.journal}
                        </span>
                      )}
                      {pub.status && (
                          <span className={`text-xs font-medium px-3 py-1 rounded-full border shadow-sm ${
                            isPending
                              ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border-amber-100 dark:border-amber-800"
                              : "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-100 dark:border-emerald-800"
                          }`}>
                              {pub.status}
                          </span>
                      )}
                   </div>

                   <h3 
                      className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight tracking-tight"
                      dangerouslySetInnerHTML={{ __html: pub.title }}
                   />

                   <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                      {pub.authors}
                   </p>
               </div>

               <div className="pt-2 mt-auto flex flex-col items-start gap-2">
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors z-20"
                    >
                      <span className="font-bold border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 text-[10px]">DOI</span>
                      <span className="truncate hover:underline underline-offset-2 decoration-dotted max-w-[250px] md:max-w-none">
                        {pub.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, 'DOI: ')}
                      </span>
                    </a>
                  )}

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                      View Abstract & Details <ArrowUpRight size={16} />
                  </span>
               </div>
            </div>

            {/* Image Section - Adaptive Layout */}
            <div className={`shrink-0 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-1 bg-white dark:bg-slate-800/30 order-1 md:order-2 flex items-center justify-center gap-1 transition-all duration-500 group-hover:border-blue-200 dark:group-hover:border-blue-800 ${
              hasBoth 
                ? "w-full md:w-[450px] lg:w-[500px] h-64 md:h-72" // Two images: fixed height container
                : hasContent 
                  ? isSpecialPub 
                    ? "w-full md:w-[30%] lg:w-[34%] h-auto self-start mt-1" // Enlarge pub8 by ~20%
                    : "w-full md:w-[25%] lg:w-[28%] h-auto self-start mt-1" // Standard single image
                  : "w-full md:w-64 aspect-[4/3]" // Placeholder
            }`}>
              
              {/* Image 1 (Standard Image) */}
              {hasImage && (
                <img 
                  src={pub.imageUrl} 
                  alt={pub.title} 
                  className={`relative rounded-lg transition-transform duration-700 group-hover:scale-[1.02] ${
                    hasBoth 
                      ? "w-1/2 h-full object-contain bg-slate-50 dark:bg-slate-900/50" 
                      : "w-full h-auto object-contain max-h-[500px]"
                  }`}
                />
              )}

              {/* Image 2 (ToC / Cover) */}
              {hasCover && (
                 <img 
                  src={pub.coverUrl} 
                  alt="Graphical Abstract / ToC" 
                  className={`relative rounded-lg transition-transform duration-700 group-hover:scale-[1.02] ${
                    hasBoth 
                      ? "w-1/2 h-full object-contain bg-slate-50 dark:bg-slate-900/50" 
                      : "w-full h-auto object-contain max-h-[500px]"
                  }`}
                />
              )}

              {/* Placeholder */}
              {!hasContent && (
                <div className="flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 w-full h-full bg-slate-50 dark:bg-slate-900/50">
                  <ImageIcon size={32} strokeWidth={1.5} />
                  <span className="text-[10px] mt-2 font-medium tracking-wide uppercase">No Image</span>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Publications;