import DetailPage from '@/components/DetailPage'
import Navbar from '@/components/Navbar'

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MovieDetailPage({ params }: PageProps) {
  const { id } = params;
  return (
    <main>
      <Navbar />
      <DetailPage 
        category="Movies"
        id={id}
      />
    </main>
  )
} 