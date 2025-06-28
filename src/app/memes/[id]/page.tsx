import Navbar from '@/components/Navbar';
import DetailPage from '@/components/DetailPage';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function MemesItemPage({ params }: Props) {
  return (
    <main>
      <Navbar />
      <DetailPage category="Memes" id={params.id} />
    </main>
  );
} 