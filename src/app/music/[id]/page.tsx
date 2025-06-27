'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default function MusicItemPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = use(params);
  return (
    <main>
      <Navbar />
      <DetailPage category="Music" id={resolvedParams.id} />
    </main>
  );
} 