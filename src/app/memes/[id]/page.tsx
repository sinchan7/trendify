import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

// ✅ No 'use client'
// ✅ No async
// ✅ No imported PageProps

export default function MemesItemPage({ params }: PageProps) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={params.id} />
    </main>
  );
}
