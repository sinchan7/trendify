import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default async function YouTubeItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <DetailPage category="YouTube" id={id} />
    </main>
  );
}
