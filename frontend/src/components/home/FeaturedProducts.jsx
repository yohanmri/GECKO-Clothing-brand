import shoe from '../../assets/images/product-shoe.png'
import shirt from '../../assets/images/product-shirt.png'
import leggings from '../../assets/images/product-leggings.png'

const products = [
  { id: 1, name: 'Apex Runner', price: 'LKR 14 500', image: shoe },
  { id: 2, name: 'Core Compression', price: 'LKR 6 500', image: shirt },
  { id: 3, name: 'Ascent Leggings', price: 'LKR 8 500', image: leggings },
]

const FeaturedProducts = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-audiowide text-5xl md:text-7xl text-black tracking-widest uppercase leading-none">
            New <br /> Arrivals
          </h2>
          <button className="hidden md:block font-audiowide text-xs tracking-widest bg-black text-white px-8 py-3.5 rounded-full border-2 border-black hover:bg-[#E17F1D] hover:border-[#E17F1D] transition-all duration-300">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-[#F5F5F5] aspect-square flex items-center justify-center p-12 rounded-tr-[80px] rounded-bl-[80px] transition-all duration-500 group-hover:bg-[#E17F1D]/10">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-darken transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="mt-8 flex justify-between items-center">
                <h3 className="font-audiowide text-xl text-black uppercase tracking-wider">{product.name}</h3>
                <span className="font-bold text-xl text-[#E17F1D]">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
