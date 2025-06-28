import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default function NewsItemPage({ params }: PageProps) {
  const { id } = params;
  return (
    <main>
      <Navbar />
      <DetailPage category="News" id={id} />
    </main>
  );
} 