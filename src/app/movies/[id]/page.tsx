import DetailPage from '@/components/DetailPage';
import Navbar from '@/components/Navbar';

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <DetailPage category="Movies" id={id} />
    </main>
  );
}
