import Hero from '../components/hero/Hero'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Benefits from '../components/home/Benefits'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Newsletter />
    </div>
  )
}

export default Home
