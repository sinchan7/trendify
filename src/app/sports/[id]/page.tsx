'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default function SportsItemPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = use(params);
  return (
    <main>
      <Navbar />
      <DetailPage category="Sports" id={resolvedParams.id} />
    </main>
  );
} 