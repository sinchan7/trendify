import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface Props {
  params: {
    id: string;
  };
}

export default function MemesItemPage({ params }: Props) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={params.id} />
    </main>
  );
} 