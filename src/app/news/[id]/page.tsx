'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default function NewsItemPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = use(params);
  return (
    <main>
      <Navbar />
      <DetailPage category="News" id={resolvedParams.id} />
    </main>
  );
} 