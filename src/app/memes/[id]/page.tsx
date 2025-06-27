'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default function MemesItemPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = use(params);
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={resolvedParams.id} />
    </main>
  );
} 