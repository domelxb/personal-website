import React, { useState } from 'react';
import { X, Mail, Phone, MessageSquare, Twitter, Linkedin, Instagram, ArrowLeft, ScanLine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialLinks } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: SocialLinks;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, links }) => {
  const [showWeChatQR, setShowWeChatQR] = useState(false);

  // Reset internal state when modal opens/closes
  React.useEffect(() => {
    if (!isOpen) setShowWeChatQR(false);
  }, [isOpen]);

  const contactItems = [
    { icon: <Mail size={24} />, label: "Email", value: links.email, href: `mailto:${links.email}`, color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" },
    { icon: <Phone size={24} />, label: "Phone", value: links.phone, href: links.phone ? `tel:${links.phone}` : undefined, color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400" },
    { icon: <MessageSquare size={24} />, label: "WeChat", value: links.wechat, href: undefined, action: () => setShowWeChatQR(true), color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400" },
    { icon: <Twitter size={24} />, label: "X (Twitter)", value: "Follow me", href: links.x, color: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", value: "Connect", href: links.linkedin, color: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" },
    { icon: <Instagram size={24} />, label: "Instagram", value: "Follow me", href: links.instagram, color: "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {showWeChatQR && (
                  <button onClick={() => setShowWeChatQR(false)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                )}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {showWeChatQR ? "Scan WeChat QR" : "Get in Touch"}
                </h3>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Content Switcher */}
            <div className="relative overflow-hidden h-96">
                <AnimatePresence initial={false} mode="wait">
                    {!showWeChatQR ? (
                        <motion.div 
                            key="list"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 p-6 overflow-y-auto"
                        >
                            <div className="grid grid-cols-2 gap-4">
                              {contactItems.map((item, idx) => (
                                <a 
                                  key={idx}
                                  href={item.href}
                                  target={item.href && !item.href.startsWith('mailto') && !item.href.startsWith('tel') ? "_blank" : undefined}
                                  rel="noopener noreferrer"
                                  className={`flex flex-col items-center justify-center p-6 rounded-2xl gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-slate-50 dark:border-slate-800 ${item.href || item.value ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}
                                  onClick={(e) => {
                                    if (item.action) {
                                        e.preventDefault();
                                        item.action();
                                    } else if (!item.href) {
                                        e.preventDefault();
                                    }
                                  }}
                                >
                                  <div className={`p-4 rounded-full ${item.color} shadow-sm`}>
                                    {item.icon}
                                  </div>
                                  <div className="text-center">
                                    <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.label}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[120px] truncate">
                                      {item.value || "Not available"}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="qr"
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                        >
                             <div className="bg-white p-3 rounded-2xl shadow-xl mb-6">
                                <img 
                                    src="https://i.postimg.cc/C1RsdYdt/19441771040889-pic.jpg" 
                                    alt="WeChat QR Code" 
                                    className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl"
                                />
                             </div>
                             <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                <ScanLine size={20} className="animate-pulse" />
                                <span className="font-medium">Scan with WeChat to add me</span>
                             </div>
                             <p className="text-sm text-slate-400 mt-2">ID: {links.wechat}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;