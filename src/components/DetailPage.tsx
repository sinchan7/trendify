'use client';

import { useEffect, useState } from 'react';
import { TrendingItem } from '@/types/trending';
import Image from 'next/image';
import {
  TagIcon,
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import moment from 'moment';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DetailPage({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  const [item, setItem] = useState<TrendingItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedItems, setRelatedItems] = useState<TrendingItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // For memes, redirect immediately to Instagram
        if (category === 'Memes') {
          const response = await fetch(`/api/trending?id=${id}`);
          const data = await response.json();
          if (data.link) {
            window.location.href = data.link;
            return;
          }
        }

        const [itemResponse, relatedResponse] = await Promise.all([
          fetch(`/api/trending?id=${id}`),
          fetch(`/api/trending?category=${category.toLowerCase()}`),
        ]);

        if (!itemResponse.ok) {
          throw new Error('Failed to fetch item details');
        }

        const itemData = await itemResponse.json();
        if (itemData.error) {
          throw new Error(itemData.error);
        }

        const relatedData = await relatedResponse.json();
        if (!Array.isArray(relatedData)) {
          throw new Error('Invalid related items data');
        }

        setItem(itemData);
        setRelatedItems(
          relatedData
            .filter((i: TrendingItem) => i.id.toString() !== id.toString())
            .slice(0, 3)
        );
      } catch (err) {
        console.error('Error fetching item details:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
        setItem(null);
        setRelatedItems([]);
      } finally {
        setLoading(false);
      }
    };

    if (category && id) {
      fetchData();
    }
  }, [category, id]);

  const getOptimizedImageUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('unsplash.com')) {
      // Add quality and format parameters for Unsplash images
      return `${url}?q=90&fm=jpg&w=1200&fit=crop`;
    }
    return url;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          {error || 'Content not found'}
        </h2>
        <Link
          href={`/${category.toLowerCase()}`}
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mt-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Return to {category}
        </Link>
      </div>
    );
  }

  const handleExternalLink = (e: React.MouseEvent) => {
    e.preventDefault();
    if (item?.link) {
      window.location.href = item.link;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Link
        href={`/${category.toLowerCase()}`}
        className="inline-flex items-center text-gray-300 hover:text-white mb-8"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to {category}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/10"
      >
        {item.imageUrl && (
          <div className="relative h-96 w-full">
            <Image
              src={getOptimizedImageUrl(item.imageUrl)}
              alt={item.title}
              fill
              className="object-cover"
              priority
              quality={90}
              loading="eager"
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                {item.category}
              </span>
              {item.link && (
                <button
                  onClick={handleExternalLink}
                  className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white bg-gray-600/30 px-3 py-1 rounded-full transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                  Open External Link
                </button>
              )}
            </div>
            <span className="text-sm text-gray-400">
              {moment(item.timestamp).format('MMMM D, YYYY')}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">{item.title}</h1>

          {/* Category‑specific metadata */}
          <div className="mb-6 text-gray-300">
            {item.category === 'News' && (
              <div className="flex items-center justify-between text-sm">
                <span>
                  By {item.author} • {item.source}
                </span>
                <span>{item.readTime}</span>
              </div>
            )}

            {item.category === 'Music' && (
              <div className="space-y-2 text-sm">
                <p>Artist: {item.artist}</p>
                <p>Album: {item.album}</p>
                <p>Duration: {item.duration}</p>
              </div>
            )}

            {(item.category === 'Memes' || item.category === 'YouTube') && (
              <div className="flex items-center justify-between text-sm">
                <span>
                  Created by {item.creator} on {item.platform}
                </span>
                {item.shares && (
                  <span>{item.shares.toLocaleString()} shares</span>
                )}
              </div>
            )}
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-gray-300"
                >
                  <TagIcon className="h-4 w-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Full content */}
          <div className="prose prose-invert max-w-none">
            {item.fullContent?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Related items */}
      {relatedItems.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            More from {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedItems.map((relatedItem) => (
              <Link
                key={relatedItem.id}
                href={`/${category.toLowerCase()}/${relatedItem.id}`}
                className="block hover:opacity-75 transition-opacity"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow p-4 border border-white/10">
                  {relatedItem.imageUrl && (
                    <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={getOptimizedImageUrl(relatedItem.imageUrl)}
                        alt={relatedItem.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
                        quality={80}
                      />
                    </div>
                  )}
                  <h3 className="font-semibold text-white mb-2">
                    {relatedItem.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {relatedItem.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
