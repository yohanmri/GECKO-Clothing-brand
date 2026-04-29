import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Zap, CreditCard, Banknote } from 'lucide-react'
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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-[550px] flex gap-4 lg:sticky lg:top-40 h-fit">
            {/* Thumbnails - Desktop */}
            <div className="hidden lg:flex flex-col gap-3 w-20 shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`bg-gray-50 aspect-square cursor-pointer border-2 transition-all duration-300 ${i === 1 ? 'border-black' : 'border-transparent hover:border-gray-300'}`}>
                  <img src={shoe} alt="" className={`w-full h-full object-cover ${i !== 1 && 'opacity-60'}`} />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1">
              <div className="bg-gray-50 aspect-[4/5] overflow-hidden">
                <img src={shoe} alt="Apex Runner" className="w-full h-full object-cover" />
              </div>
              {/* Thumbnails - Mobile */}
              <div className="grid grid-cols-4 gap-3 mt-4 lg:hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-50 aspect-square">
                    <img src={shoe} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="flex-1 lg:py-8 lg:pr-12">
            
            {/* Header */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <p className="text-[10px] uppercase tracking-widest text-gecko-orange font-audiowide mb-2">
                Footwear
              </p>
              <h1 className="font-audiowide text-3xl text-black uppercase leading-tight mb-3">
                Apex Runner X-1
              </h1>
              <p className="font-bold text-2xl text-black">
                LKR {id === '1' ? '14500' : id === '2' ? '6500' : '8500'}.00
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-500 mb-6 text-sm font-medium tracking-tight leading-relaxed">
              Engineered for the elite. The Apex Runner X-1 provides unprecedented grip and dynamic support, designed to withstand the most demanding ascents and unpredictable terrains.
            </p>

            {/* Selectors */}
            <div className="space-y-6 mb-8">
              {/* Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-audiowide text-xs uppercase tracking-widest">Select Size</span>
                  <button className="text-[10px] text-gray-400 uppercase tracking-widest underline hover:text-black">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['8', '8.5', '9', '9.5', '10', '10.5', '11'].map(size => (
                    <button key={size} className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 font-audiowide text-xs text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <span className="block font-audiowide text-xs uppercase tracking-widest mb-3">Color: <span className="text-gray-500">Onyx Black</span></span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-black border-2 border-black ring-2 ring-offset-2 ring-transparent focus:ring-gray-300"></button>
                  <button className="w-10 h-10 bg-gray-200 border-2 border-gray-200 ring-2 ring-offset-2 ring-transparent hover:ring-gray-300"></button>
                  <button className="w-10 h-10 bg-gecko-orange border-2 border-gecko-orange ring-2 ring-offset-2 ring-transparent hover:ring-gray-300"></button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex-1 py-4 bg-black text-white font-audiowide text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gecko-orange flex items-center justify-center gap-2">
                <ShoppingCart size={18} strokeWidth={1.5} />
                <span>Add to Cart</span>
              </button>
              <button className="flex-1 py-4 bg-gecko-orange text-white font-audiowide text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black flex items-center justify-center gap-2">
                <Zap size={18} strokeWidth={1.5} />
                <span>Order Now</span>
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
