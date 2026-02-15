import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Activate scrolling state
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 260, damping: 20 }
          }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ y: -8 }}
          whileTap={{ y: -50, scale: 1.1, opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 group focus:outline-none"
          aria-label="Back to Top"
        >
          {/* Floating Glow Behind - Intensifies on scroll */}
          <motion.div 
            animate={{ 
                scale: isScrolling ? 1.8 : 1.5,
                opacity: isScrolling ? 0.6 : 0.3
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/30 blur-xl rounded-full pointer-events-none"
          />

          {/* 3D Capsule Container - Smaller size (w-10 h-24) */}
          <motion.div 
            animate={isScrolling ? {
                y: [0, -2, 0, 2, 0], // Jitter effect when scrolling
                rotate: [0, 1, 0, -1, 0], // Slight vibration
            } : {
                y: [0, -6, 0], // Gentle float when idle
                rotate: 0
            }}
            transition={isScrolling ? {
                duration: 0.2,
                repeat: Infinity
            } : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="relative w-10 h-24 rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] bg-transparent"
          >
            
            {/* Top Half (Blue/Tech) */}
            <div className="absolute top-0 w-full h-[52%] bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-400 rounded-t-full z-20 overflow-hidden shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.3)]">
               {/* Specular Highlight (Gloss) */}
               <div className="absolute top-3 left-2 w-1.5 h-6 bg-gradient-to-b from-white/60 to-transparent rounded-full blur-[1px] -rotate-12"></div>
               <div className="absolute top-4 right-2 w-0.5 h-2 bg-white/30 rounded-full blur-[1px]"></div>
               
               {/* Internal "Circuit" Light - Pulses fast on scroll */}
               <motion.div 
                 animate={{ opacity: isScrolling ? [0.6, 1, 0.6] : [0.6, 0.8, 0.6] }}
                 transition={{ duration: isScrolling ? 0.2 : 2, repeat: Infinity }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-200 rounded-full shadow-[0_0_12px_4px_rgba(147,197,253,0.8)]"
               >
                  <div className="w-full h-full bg-white rounded-full opacity-60"></div>
               </motion.div>
            </div>

            {/* Middle Divider Ring */}
            <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-slate-300 dark:bg-slate-500 z-30 shadow-sm"></div>

            {/* Bottom Half (White/Matte) */}
            <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-300 rounded-b-full z-20 shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.1)] overflow-hidden">
                {/* Shadow Gradient for curvature */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10 pointer-events-none"></div>
                
                {/* Subtle grip lines */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-slate-300 rounded-full"></div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-slate-300 rounded-full"></div>
            </div>

          </motion.div>

          {/* Hover Text */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
             <span className="text-[10px] font-bold text-blue-500 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full shadow-lg border border-blue-100 dark:border-blue-900 uppercase tracking-widest">Top</span>
          </div>

        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;