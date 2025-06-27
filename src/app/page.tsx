'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import TrendingCard from '@/components/TrendingCard';
import { TrendingItem } from '@/types/trending';
import { motion } from 'framer-motion';
import { FireIcon, SparklesIcon, PlayIcon } from '@heroicons/react/24/solid';
import ContactButtons from '@/components/ContactButtons';
import HeroImage from '@/components/HeroImage';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  const [items, setItems] = useState<TrendingItem[]>([]);
  const [youtubeItems, setYoutubeItems] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responses = await Promise.all([
          fetch('/api/trending?category=news'),
          fetch('/api/trending?category=music'),
          fetch('/api/trending?category=memes'),
          fetch('/api/trending?category=sports'),
          fetch('/api/trending?category=movies'),
          fetch('/api/trending?category=youtube')
        ]);
        
        const [newsData, musicData, memesData, sportsData, moviesData, youtubeData] = await Promise.all(
          responses.map(response => response.json())
        );

        setItems([...newsData, ...musicData, ...memesData, ...sportsData, ...moviesData]);
        setYoutubeItems(youtubeData || []);
      } catch (error) {
        console.error('Error fetching trending items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const categories = ['News', 'Movies', 'Music', 'Memes', 'Sports'];
  const getItemsByCategory = (category: string) => {
    if (!Array.isArray(items)) return [];
    return items
      .filter(item => item.category === category)
      .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0))
      .slice(0, 2);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <ContactButtons />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 z-[1]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </motion.div>

        <div className="relative z-[2] max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left lg:pr-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <FireIcon className="h-16 w-16 mb-6 text-yellow-400" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
                Discover What's<br />Trending Now
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Your one-stop destination for the latest trends in news, music, and memes.
                Stay updated with what's happening around the world in real-time.
              </p>
            </motion.div>

            {/* Hero Image */}
            <HeroImage />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="space-y-20">
            {categories.map((category) => {
              const categoryItems = getItemsByCategory(category);
              return categoryItems.length > 0 ? (
                <ScrollAnimation key={category}>
                  <section className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="h-8 w-8 text-yellow-400" />
                        <h2 className="text-3xl font-bold text-white">
                          Trending in {category}
                        </h2>
                      </div>
                      <motion.a
                        href={`/${category.toLowerCase()}`}
                        className="text-indigo-300 hover:text-indigo-100 font-medium flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>View all {category}</span>
                        <span className="text-xl">→</span>
                      </motion.a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {categoryItems.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TrendingCard {...item} />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </ScrollAnimation>
              ) : null;
            })}

            {/* YouTube Section */}
            {youtubeItems.length > 0 && (
              <ScrollAnimation>
                <section className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <PlayIcon className="h-8 w-8 text-red-500" />
                      <h2 className="text-3xl font-bold text-white">
                        Trending on YouTube
                      </h2>
                    </div>
                    <motion.a
                      href="/youtube"
                      className="text-indigo-300 hover:text-indigo-100 font-medium flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>View all YouTube</span>
                      <span className="text-xl">→</span>
                    </motion.a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {youtubeItems.slice(0, 3).map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <TrendingCard {...item} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              </ScrollAnimation>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
