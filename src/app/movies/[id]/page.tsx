import DetailPage from '@/components/DetailPage'
import Navbar from '@/components/Navbar'

interface PageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function MovieDetailPage({ params }: PageProps) {
  return (
    <main>
      <Navbar />
      <DetailPage 
        category="Movies"
        id={params.id}
      />
    </main>
  )
} 