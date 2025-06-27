import { motion } from 'framer-motion';
import { ChartBarIcon, TagIcon, ClockIcon, ShareIcon, UserIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingItem } from '@/types/trending';

type TrendingCardProps = TrendingItem;

export default function TrendingCard({
  id,
  title,
  description,
  category,
  timestamp,
  trendingScore,
  imageUrl,
  tags,
  source,
  artist,
  creator,
  platform,
  shares,
  readTime,
  author,
  album,
  duration,
  link,
}: TrendingCardProps) {
  const getCardLink = () => {
    if (category === 'Memes' && link) {
      return link;
    }
    return link || (category ? `/${category.toLowerCase()}/${id}` : '#');
  };

  const cardLink = getCardLink();
  const isExternalLink = Boolean(link) || category === 'Memes';
  
  const handleClick = (e: React.MouseEvent) => {
    if (isExternalLink) {
      e.preventDefault();
      window.open(cardLink, '_blank', 'noopener,noreferrer');
    }
  };

  const getOptimizedImageUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('unsplash.com')) {
      // Add quality and format parameters for Unsplash images
      return `${url}?q=80&fm=jpg&w=800&fit=crop`;
    }
    return url;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Link 
        href={cardLink}
        onClick={handleClick}
        className="block h-full"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full border border-white/10">
          {imageUrl && (
            <div className="relative h-48 w-full">
              <Image
                src={getOptimizedImageUrl(imageUrl)}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
                quality={80}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    {category && (
                      <span className="text-sm font-medium px-2 py-1 bg-indigo-600 rounded-full">
                        {category}
                      </span>
                    )}
                    {isExternalLink && (
                      <span className="text-sm font-medium px-2 py-1 bg-gray-600/50 rounded-full flex items-center">
                        <ArrowTopRightOnSquareIcon className="h-3 w-3 mr-1" />
                        External
                      </span>
                    )}
                  </div>
                  {trendingScore && (
                    <div className="flex items-center space-x-1">
                      <ChartBarIcon className="h-4 w-4 text-red-400" />
                      <span className="text-sm">{trendingScore}k</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
            
            {/* Category-specific details */}
            <div className="space-y-2 mb-4">
              {category === 'Music' && (
                <div className="space-y-1">
                  {artist && (
                    <div className="flex items-center text-sm text-gray-300">
                      <UserIcon className="h-4 w-4 mr-2" />
                      <span>{artist}</span>
                    </div>
                  )}
                  {album && (
                    <div className="flex items-center text-sm text-gray-300">
                      <TagIcon className="h-4 w-4 mr-2" />
                      <span>{album}</span>
                    </div>
                  )}
                  {duration && (
                    <div className="flex items-center text-sm text-gray-300">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span>{duration}</span>
                    </div>
                  )}
                </div>
              )}
              {category === 'News' && (
                <div className="space-y-1">
                  {author && (
                    <div className="flex items-center text-sm text-gray-300">
                      <UserIcon className="h-4 w-4 mr-2" />
                      <span>{author}</span>
                    </div>
                  )}
                  {source && (
                    <div className="flex items-center text-sm text-gray-300">
                      <TagIcon className="h-4 w-4 mr-2" />
                      <span>{source}</span>
                    </div>
                  )}
                  {readTime && (
                    <div className="flex items-center text-sm text-gray-300">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span>{readTime}</span>
                    </div>
                  )}
                </div>
              )}
              {(category === 'Memes' || category === 'YouTube') && (
                <div className="space-y-1">
                  {creator && (
                    <div className="flex items-center text-sm text-gray-300">
                      <UserIcon className="h-4 w-4 mr-2" />
                      <span>{creator}</span>
                    </div>
                  )}
                  {platform && (
                    <div className="flex items-center text-sm text-gray-300">
                      <TagIcon className="h-4 w-4 mr-2" />
                      <span>{platform}</span>
                    </div>
                  )}
                  {shares && (
                    <div className="flex items-center text-sm text-gray-300">
                      <ShareIcon className="h-4 w-4 mr-2" />
                      <span>{shares.toLocaleString()} shares</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-200"
                  >
                    <TagIcon className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="text-xs text-gray-400">+{tags.length - 3} more</span>
                )}
              </div>
            )}

            {timestamp && (
              <div className="text-sm text-gray-400">
                {moment(timestamp).fromNow()}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 