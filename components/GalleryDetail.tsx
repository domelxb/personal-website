import React from 'react';
import { X, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';
import { motion } from 'framer-motion';

interface GalleryDetailProps {
  item: GalleryItem;
  onClose: () => void;
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white dark:bg-slate-900 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start bg-white dark:bg-slate-900 z-10">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                    </span>
                    {item.description && <span>{item.description}</span>}
                </div>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 bg-slate-50 dark:bg-black/50">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {item.images.map((imgUrl, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img 
                            src={imgUrl} 
                            alt={`${item.title} - ${index + 1}`} 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GalleryDetail;