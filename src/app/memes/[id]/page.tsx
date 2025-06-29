import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

// In Next.js App Router, params are already resolved
// We don't need to await them
export default async function MemesItemPage({ params }: PageProps) {
  // ✅ Params are already resolved, no need to await
  const { id } = params;
  
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={id} />
    </main>
  );
}
