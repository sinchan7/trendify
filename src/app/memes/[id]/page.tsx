import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function MemesItemPage({ params }: PageProps) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={params.id} />
    </main>
  );
} 