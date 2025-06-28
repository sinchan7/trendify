import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default function YouTubeItemPage({ params }: PageProps) {
  const { id } = params;
  return (
    <main>
      <Navbar />
      <DetailPage category="YouTube" id={id} />
    </main>
  );
} 