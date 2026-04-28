import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, Banknote } from 'lucide-react'
import shoe from '../assets/images/product-shoe.png'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Back Button */}
        <div className="flex justify-end mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-audiowide text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Product Image Gallery */}
          <div className="flex-1">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative group">
              {/* Tag */}
              <div className="absolute top-6 left-6 z-10 bg-black text-white px-4 py-2 text-xs font-audiowide uppercase tracking-widest">
                New Arrival
              </div>
              <img 
                src={shoe} 
                alt="Product" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="aspect-[4/5] bg-gray-100 cursor-pointer border-2 border-transparent hover:border-black transition-colors">
                  <img src={shoe} alt={`Thumbnail ${num}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="flex-1 lg:py-8 lg:pr-12">
            
            {/* Header */}
            <div className="mb-8 border-b border-gray-200 pb-8">
              <p className="text-xs uppercase tracking-widest text-gecko-orange font-audiowide mb-3">
                Footwear
              </p>
              <h1 className="font-audiowide text-4xl lg:text-5xl text-black uppercase leading-tight mb-4">
                Apex Runner X-1
              </h1>
              <p className="font-audiowide text-3xl text-black">
                $145.00
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-500 mb-10 font-medium tracking-tight leading-relaxed">
              Engineered for the elite. The Apex Runner X-1 provides unprecedented grip and dynamic support, designed to withstand the most demanding ascents and unpredictable terrains.
            </p>

            {/* Selectors */}
            <div className="space-y-8 mb-12">
              {/* Size */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-audiowide text-sm uppercase tracking-widest">Select Size</span>
                  <button className="text-xs text-gray-400 uppercase tracking-widest underline hover:text-black">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['8', '8.5', '9', '9.5', '10', '10.5', '11'].map(size => (
                    <button key={size} className="w-14 h-14 flex items-center justify-center border-2 border-gray-200 font-audiowide text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <span className="block font-audiowide text-sm uppercase tracking-widest mb-4">Color: <span className="text-gray-500">Onyx Black</span></span>
                <div className="flex gap-4">
                  <button className="w-12 h-12 bg-black border-2 border-black ring-2 ring-offset-2 ring-transparent focus:ring-gray-300"></button>
                  <button className="w-12 h-12 bg-gray-200 border-2 border-gray-200 ring-2 ring-offset-2 ring-transparent hover:ring-gray-300"></button>
                  <button className="w-12 h-12 bg-gecko-orange border-2 border-gecko-orange ring-2 ring-offset-2 ring-transparent hover:ring-gray-300"></button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-10">
              <button className="w-full py-5 bg-black text-white font-audiowide uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gecko-orange">
                Add to Cart
              </button>
              <button className="w-full py-5 bg-gecko-orange text-white font-audiowide uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black">
                Order Now
              </button>
            </div>

            {/* Payment Options */}
            <div className="bg-gray-50 p-6 border border-gray-100">
              <h3 className="font-audiowide text-xs uppercase tracking-widest text-gray-500 mb-4">Accepted Payment Methods</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-black">
                  <CreditCard strokeWidth={1.5} />
                  <span className="font-audiowide text-sm uppercase">Card</span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Banknote strokeWidth={1.5} />
                  <span className="font-audiowide text-sm uppercase">Cash on Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail
