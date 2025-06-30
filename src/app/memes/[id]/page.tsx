import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default async function MemesItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={id} />
    </main>
  );
}
