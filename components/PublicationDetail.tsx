import React from 'react';
import { X, Calendar, BookOpen, ImageIcon, Users } from 'lucide-react';
import { Publication } from '../types';
import { motion } from 'framer-motion';

interface PublicationDetailProps {
  publication: Publication;
  onClose: () => void;
}

const PublicationDetail: React.FC<PublicationDetailProps> = ({ publication, onClose }) => {
  const hasCover = !!publication.coverUrl;
  const hasImage = !!publication.imageUrl;
  const hasBoth = hasCover && hasImage;
  const hasAny = hasCover || hasImage;
  
  // Parse authors string into an array
  const authorsList = publication.authors
    .replace(/\.\.\./g, ',') 
    .split(/,|&| and /) 
    .map(a => a.trim())
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {publication.year && (
              <span className="flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full">
                <Calendar size={14} />
                {publication.year}
              </span>
            )}
            <span className="flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium italic rounded-full">
              <BookOpen size={14} className="not-italic" />
              {publication.journal}
            </span>
            {publication.status && (
                <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
                  {publication.status}
                </span>
            )}
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: publication.title }}
          />

          <div className="mb-10 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Users size={16} />
                <span>Author List</span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {authorsList.map((author, i) => {
                    const isMe = author.includes("Chengbang Lu");
                    return (
                        <span key={i} className="inline-flex items-center">
                            <span className={isMe ? "font-bold text-slate-900 dark:text-white underline decoration-blue-500 decoration-2 underline-offset-4" : ""}>
                                {author}
                            </span>
                            {i < authorsList.length - 1 && <span className="opacity-40 ml-1 mr-1">,</span>}
                        </span>
                    );
                })}
            </div>
          </div>

          {/* Images Section */}
          <div className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl mb-10 border-2 border-dashed border-slate-300 dark:border-slate-700 p-4 ${
            hasBoth ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex items-center justify-center min-h-[300px]"
          }`}>
             {hasImage ? (
                 <div className={`flex items-center justify-center bg-white dark:bg-black/20 rounded-lg p-2 ${hasBoth ? "w-full h-full min-h-[300px]" : "w-auto max-w-full h-auto"}`}>
                    <img src={publication.imageUrl} alt="Figures" className="max-w-full max-h-[500px] object-contain" />
                 </div>
             ) : !hasCover && (
                 <div className="flex flex-col items-center text-slate-400">
                     <ImageIcon size={48} className="mb-2" />
                     <span className="text-sm font-medium">Paper Figures / Visual Abstract</span>
                 </div>
             )}
             
             {hasCover && (
                 <div className={`flex items-center justify-center bg-white dark:bg-black/20 rounded-lg p-2 ${hasBoth ? "w-full h-full min-h-[300px]" : "w-auto max-w-full h-auto"}`}>
                    <img src={publication.coverUrl} alt="Cover / ToC" className="max-w-full max-h-[500px] object-contain" />
                 </div>
             )}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-bold mb-4">Abstract</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                {publication.abstract || "No abstract available."}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PublicationDetail;