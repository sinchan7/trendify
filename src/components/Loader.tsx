'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 1.2 }}
      onAnimationComplete={() => {
        const loader = document.getElementById('loader');
        if (loader) {
          loader.style.display = 'none';
        }
      }}
      id="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900"
    >
      <div className="w-24 h-24 relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-t-4 border-indigo-500 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
          className="absolute top-2 left-2 right-2 bottom-2 border-t-4 border-purple-500 rounded-full"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-white font-medium"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
} 