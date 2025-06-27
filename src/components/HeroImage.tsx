'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-lg mx-auto xl:max-w-none xl:mx-0"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=80"
          alt="Man smiling while using phone and listening to music"
          fill
          className="object-cover rounded-2xl shadow-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-2xl" />
        
        {/* Floating music notes animation */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 text-white"
          animate={{ y: [-10, 10], rotate: [0, 20] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          ♪
        </motion.div>
        <motion.div
          className="absolute -top-8 -right-8 w-8 h-8 text-white"
          animate={{ y: [-15, 5], rotate: [0, -20] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        >
          ♫
        </motion.div>
      </div>
    </motion.div>
  );
} 