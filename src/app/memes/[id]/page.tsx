import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default function MemesItemPage({ params }: PageProps) {
  const { id } = params;
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={id} />
    </main>
  );
} 