'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';

const CategoryPage = dynamic(() => import('@/components/CategoryPage'), {
  loading: () => (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
  ssr: true
});

export default function MemesPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      }>
        <CategoryPage category="Memes" />
      </Suspense>
    </main>
  );
} 