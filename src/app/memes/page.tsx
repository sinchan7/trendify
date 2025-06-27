'use client';

import Navbar from '@/components/Navbar';
import CategoryPage from '@/components/CategoryPage';

export default function MemesPage() {
  return (
    <main>
      <Navbar />
      <CategoryPage category="Memes" />
    </main>
  );
} 