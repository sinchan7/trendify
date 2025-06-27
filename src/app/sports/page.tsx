'use client';

import Navbar from '@/components/Navbar';
import CategoryPage from '@/components/CategoryPage';

export default function SportsPage() {
  return (
    <main>
      <Navbar />
      <CategoryPage category="Sports" />
    </main>
  );
} 