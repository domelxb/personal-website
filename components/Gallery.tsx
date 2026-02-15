import React from 'react';
import { GalleryItem } from '../types';
import { motion } from 'framer-motion';
import { ZoomIn, Images } from 'lucide-react';

interface GalleryProps {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
}

const Gallery: React.FC<GalleryProps> = ({ items, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {items.map((item, index) => {
        // Special handling for the skateboarding image to show side-by-side view
        const isSkateItem = item.id === 'g_skate_1';
        
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onSelect(item)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {isSkateItem ? (
                <div className="flex w-full h-full bg-slate-200 dark:bg-slate-800">
                    {item.images.slice(0, 2).map((img, i) => (
                        <div key={i} className="relative w-1/2 h-full overflow-hidden border-r border-white/10 last:border-0">
                            {/* Blurred Background to fill gaps */}
                            <img 
                                src={img} 
                                alt="" 
                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-125"
                                aria-hidden="true"
                            />
                            {/* Main Image - Contain to show full content (person + skateboard) */}
                            <img 
                                src={img} 
                                alt={`${item.title} ${i + 1}`} 
                                className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <img 
                    src={item.coverUrl} 
                    alt={item.title || "Gallery image"} 
                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </>
            )}

            {/* Overlay - Common for both */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title && (
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                )}
                {item.date && (
                  <p className="text-slate-300 text-sm">{item.date}</p>
                )}
                <div className="flex items-center gap-1 text-slate-400 text-xs mt-2">
                   <Images size={14} />
                   <span>{item.images.length} photos</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ZoomIn size={20} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Gallery;