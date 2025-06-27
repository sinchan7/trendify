import CategoryPage from '@/components/CategoryPage'
import Navbar from '@/components/Navbar'

export default function MoviesPage() {
  return (
    <>
      <Navbar />
      <CategoryPage 
        category="Movies"
        title="Trending Movies"
        description="Discover the latest blockbusters, indie gems, and must-watch films making waves in cinema."
      />
    </>
  )
} 