import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default async function MusicItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <DetailPage category="Music" id={id} />
    </main>
  );
}


