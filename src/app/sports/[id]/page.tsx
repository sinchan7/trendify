import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SportsItemPage({ params }: PageProps) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Sports" id={params.id} />
    </main>
  );
} 