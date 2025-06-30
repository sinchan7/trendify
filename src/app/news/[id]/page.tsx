import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default async function NewsItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <DetailPage category="News" id={id} />
    </main>
  );
}
