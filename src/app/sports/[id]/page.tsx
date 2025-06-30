import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

export default async function SportsItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <DetailPage category="Sports" id={id} />
    </main>
  );
}
