'use client';

import Navbar from '@/components/Navbar';
import CategoryPage from '@/components/CategoryPage';

export default function MusicPage() {
  return (
    <main>
      <Navbar />
      <CategoryPage category="Music" />
    </main>
  );
} 