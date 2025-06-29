import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function SportsItemPage({ params }: PageProps) {
  // ✅ Params are already resolved, no need to await
  const { id } = params;
  
  return (
    <main>
      <Navbar />
      <DetailPage category="Sports" id={id} />
    </main>
  );
} 