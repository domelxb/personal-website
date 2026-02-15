import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { LocalizedContent, Publication, ResearchArea } from '../types';
import Publications from './Publications';
import { motion } from 'framer-motion';

interface ResearchDetailProps {
  area: ResearchArea;
  allPublications: Publication[];
  content: LocalizedContent;
  onBack: () => void;
  onSelectPublication: (pub: Publication) => void;
}

const ResearchDetail: React.FC<ResearchDetailProps> = ({ area, allPublications, content, onBack, onSelectPublication }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredPubs = allPublications.filter(pub => area.relatedPublicationIds.includes(pub.id));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-medium">{content.hero.backToHome}</span>
        </button>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
            <Layers size={14} />
            {content.hero.researchAreasTitle}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {area.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl border-l-4 border-blue-500 pl-6">
            {area.description}
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <BookOpen size={24} className="text-slate-700 dark:text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {content.sectionTitles.publications}
            </h2>
          </div>
          
          {filteredPubs.length > 0 ? (
            <Publications 
                publications={filteredPubs} 
                content={content} 
                onSelect={onSelectPublication}
            />
          ) : (
            <p className="text-slate-500 italic">No specific publications listed for this area yet.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchDetail;