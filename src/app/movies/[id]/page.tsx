import DetailPage from '@/components/DetailPage'

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  return (
    <DetailPage 
      category="Movies"
      id={params.id}
    />
  )
} 