import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function YouTubeItemPage({ params }: PageProps) {
  return (
    <main>
      <Navbar />
      <DetailPage category="YouTube" id={params.id} />
    </main>
  );
} 