import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default function MemesItemPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={params.id} />
    </main>
  );
} 