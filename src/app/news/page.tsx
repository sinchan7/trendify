'use client';

import Navbar from '@/components/Navbar';
import CategoryPage from '@/components/CategoryPage';

export default function NewsPage() {
  return (
    <main>
      <Navbar />
      <CategoryPage category="News" />
    </main>
  );
} 