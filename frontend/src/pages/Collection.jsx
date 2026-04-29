import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart } from 'lucide-react'
import shoe from '../assets/images/product-shoe.png'
import shirt from '../assets/images/product-shirt.png'
import leggings from '../assets/images/product-leggings.png'

const products = [
  {
    id: 1,
    name: 'Apex Runner',
    category: 'Footwear',
    price: 14500,
    image: shoe,
    tag: 'New'
  },
  {
    id: 2,
    name: 'Core Compression',
    category: 'Top',
    price: 6500,
    image: shirt,
    tag: 'Best Seller'
  },
  {
    id: 3,
    name: 'Ascent Leggings',
    category: 'Bottom',
    price: 8500,
    image: leggings,
    tag: 'Featured'
  },
  {
    id: 4,
    name: 'Peak Performance Shorts',
    category: 'Bottom',
    price: 5500,
    image: leggings, // Reusing for placeholder
    tag: null
  },
  {
    id: 5,
    name: 'Gravity Tech Tee',
    category: 'Top',
    price: 4500,
    image: shirt, // Reusing for placeholder
    tag: 'Promo'
  },
  {
    id: 6,
    name: 'Terrain X-1',
    category: 'Footwear',
    price: 16500,
    image: shoe, // Reusing for placeholder
    tag: null
  },
]

const exploreFilters = {
  women: ['All', 'T-shirts', 'Polos', 'Crop tops', 'Sports Bras', 'Tanks', 'Leggings', 'Skirts', 'Shorts', 'Hoodies & Jackets', 'Jeans', 'Joggers & Pants'],
  men: ['All', 'T-shirts', 'Shirts', 'Polos', 'Shorts', 'Tanks', 'Compressions', 'Hoodies & Jackets', 'Jeans', 'Joggers & Pants', 'Underwear'],
  kids: ['All', 'T-shirts', 'Polos', 'Shorts', 'Tanks', 'Leggings', 'Hoodies & Jackets', 'Joggers & Pants'],
  accessories: ['All', 'Hats & Caps', 'Bags & Backpacks', 'Socks', 'Water Bottles', 'Gym Equipment', 'Towels']
}

const Collection = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const safeCategoryKey = category && exploreFilters[category.toLowerCase()] ? category.toLowerCase() : 'women'
  const currentFilters = exploreFilters[safeCategoryKey]

  // Format the title dynamically based on the URL parameter
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Women'
  const titlePrefix = category === 'accessories' ? 'Accessories' : `${formattedCategory}'s`

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Page Header */}
        <div className="mb-12 border-l-8 border-black pl-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="font-audiowide text-3xl text-black uppercase leading-none tracking-tighter">
              {titlePrefix} <span className="text-gecko-orange">Collection</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-2xl font-medium tracking-tight">
              Engineered for the elite. Explore our full range of high-performance gear designed to withstand the most demanding ascents.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="SEARCH PRODUCTS..." 
              className="w-full bg-gray-50 border-b-2 border-black py-3 px-4 font-audiowide text-[10px] uppercase tracking-widest focus:outline-none focus:bg-gray-100 transition-colors"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-black" size={16} strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Filters */}
          <aside className="w-full lg:w-52 flex-shrink-0">
            <div className="sticky top-40">
              <h3 className="font-audiowide text-sm uppercase tracking-widest text-gray-400 mb-6">Explore</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {currentFilters.map((filterName) => (
                  <button
                    key={filterName}
                    onClick={() => setActiveCategory(filterName)}
                    className={`px-4 py-2 text-left font-audiowide text-xs uppercase tracking-wider transition-all duration-300 border-2 ${activeCategory === filterName
                      ? 'bg-black text-white border-black'
                      : 'bg-transparent text-black border-gray-100 hover:border-black'
                      }`}
                  >
                    {filterName}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/collection/${safeCategoryKey}/${product.id}`)}
                  className="group relative bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:border-black cursor-pointer"
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
                  <div className="pt-3 pb-5 px-5 bg-white flex flex-col min-h-[150px]">
                    <div className="flex-1">
                      <p className="text-[9px] uppercase tracking-widest text-gecko-orange font-bold mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-sm text-black uppercase font-bold leading-tight mb-2">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-gray-50">
                      <p className="text-[12px] md:text-[14px] text-black font-bold whitespace-nowrap">
                        LKR {product.price.toLocaleString().replace(/,/g, ' ')}.00
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent navigating to product detail when clicking "Add to Cart"
                        }}
                        className="shrink-0 px-5 py-2.5 bg-black text-white font-audiowide text-[9px] uppercase tracking-widest transition-all duration-300 hover:bg-gecko-orange flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={13} strokeWidth={2} />
                        <span>Add</span>
                      </button>
                    </div>
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
