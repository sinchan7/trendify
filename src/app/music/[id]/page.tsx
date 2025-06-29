import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MusicItemPage({ params }: PageProps) {
  const { id } = params;
  
  return (
    <main>
      <Navbar />
      <DetailPage category="Music" id={id} />
    </main>
  );
} 