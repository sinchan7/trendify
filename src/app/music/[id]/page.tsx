import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function MusicItemPage({ params }: PageProps) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Music" id={params.id} />
    </main>
  );
} 