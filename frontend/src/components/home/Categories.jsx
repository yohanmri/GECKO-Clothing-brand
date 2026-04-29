import { Link } from 'react-router-dom'
import menImg from '../../assets/images/category_men.png' // I'll assume these names or update later
import womenImg from '../../assets/images/category_women.png'
import kidsImg from '../../assets/images/category_kids.png'

const categories = [
  { name: 'MEN', path: '/collection/men', image: menImg },
  { name: 'WOMEN', path: '/collection/women', image: womenImg },
  { name: 'KIDS', path: '/collection/kids', image: kidsImg },
]

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path}
              className="group relative h-[600px] overflow-hidden bg-gray-100"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-audiowide text-4xl text-white tracking-[0.3em] uppercase leading-none drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  {cat.name}
                </h3>
                <div className="mt-6 w-12 h-1 bg-gecko-orange transition-all duration-500 group-hover:w-24"></div>
              </div>

              {/* Action Button (Hidden until hover) */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="font-audiowide text-xs text-white uppercase tracking-widest border-b-2 border-white pb-1">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
