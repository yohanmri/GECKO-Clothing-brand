import { useState } from 'react'
import { useParams } from 'react-router-dom'
import shoe from '../assets/images/product-shoe.png'
import shirt from '../assets/images/product-shirt.png'
import leggings from '../assets/images/product-leggings.png'

const products = [
  {
    id: 1,
    name: 'Apex Runner',
    category: 'Footwear',
    price: 145,
    image: shoe,
    tag: 'New'
  },
  {
    id: 2,
    name: 'Core Compression',
    category: 'Top',
    price: 65,
    image: shirt,
    tag: 'Best Seller'
  },
  {
    id: 3,
    name: 'Ascent Leggings',
    category: 'Bottom',
    price: 85,
    image: leggings,
    tag: 'Featured'
  },
  {
    id: 4,
    name: 'Peak Performance Shorts',
    category: 'Bottom',
    price: 55,
    image: leggings, // Reusing for placeholder
    tag: null
  },
  {
    id: 5,
    name: 'Gravity Tech Tee',
    category: 'Top',
    price: 45,
    image: shirt, // Reusing for placeholder
    tag: 'Promo'
  },
  {
    id: 6,
    name: 'Terrain X-1',
    category: 'Footwear',
    price: 165,
    image: shoe, // Reusing for placeholder
    tag: null
  },
]

const categories = ['All', 'Footwear', 'Top', 'Bottom', 'Accessories']

const Collection = () => {
  const { category } = useParams()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  // Format the title dynamically based on the URL parameter
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Women'
  const titlePrefix = category === 'accessories' ? 'Accessories' : `${formattedCategory}'s`

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-12 border-l-8 border-black pl-8">
          <h1 className="font-audiowide text-6xl text-black uppercase leading-none tracking-tighter">
            {titlePrefix} <span className="text-gecko-orange">Collection</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl font-medium tracking-tight">
            Engineered for the elite. Explore our full range of high-performance gear designed to withstand the most demanding ascents.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-40">
              <h3 className="font-audiowide text-sm uppercase tracking-widest text-gray-400 mb-6">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 text-left font-audiowide text-sm uppercase tracking-wider transition-all duration-300 border-2 ${
                      activeCategory === cat 
                        ? 'bg-black text-white border-black' 
                        : 'bg-transparent text-black border-gray-100 hover:border-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-12 hidden lg:block">
                <h3 className="font-audiowide text-sm uppercase tracking-widest text-gray-400 mb-6">Promotions</h3>
                <div className="bg-gecko-orange p-6 text-white">
                  <p className="font-audiowide text-xl leading-tight">BUNDLE & SAVE 15%</p>
                  <p className="text-xs mt-2 font-medium opacity-80 uppercase tracking-tighter">Purchase any Top + Bottom set</p>
                  <button className="mt-4 text-xs font-audiowide underline uppercase tracking-widest">Shop Bundles</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:border-black"
                >
                  {/* Tag */}
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-[10px] font-audiowide uppercase tracking-widest">
                      {product.tag}
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gecko-orange font-audiowide mb-1">
                          {product.category}
                        </p>
                        <h3 className="font-audiowide text-lg text-black uppercase leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      <p className="font-audiowide text-xl text-black">
                        ${product.price}
                      </p>
                    </div>
                    
                    <button className="w-full mt-6 py-4 bg-black text-white font-audiowide text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gecko-orange overflow-hidden relative">
                      <span className="relative z-10">Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-audiowide text-gray-400 text-xl uppercase">No products found in this category.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  )
}

export default Collection
