import shoe from '../assets/images/product-shoe.png'
import shirt from '../assets/images/product-shirt.png'
import { Search } from 'lucide-react'

const Cart = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-12 border-l-8 border-black pl-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="font-audiowide text-3xl text-black uppercase leading-none tracking-tighter">
              Your <span className="text-gecko-orange">Cart</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="w-full bg-gray-50 border-b-2 border-black py-3 px-4 font-audiowide text-[10px] uppercase tracking-widest focus:outline-none focus:bg-gray-100 transition-colors"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-black" size={16} strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Cart Items */}
          <div className="flex-1">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 font-audiowide text-sm uppercase tracking-widest text-gray-400">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-8 border-b border-gray-100">
              <div className="col-span-1 md:col-span-6 flex gap-6 items-center">
                <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <img src={shoe} alt="Apex Runner" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-audiowide text-lg uppercase">Apex Runner</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Size: 10 | Color: Onyx</p>
                  <button className="text-xs uppercase tracking-widest text-gray-400 underline mt-4 hover:text-black transition-colors">Remove</button>
                </div>
              </div>
              <div className="hidden md:block col-span-2 text-center font-bold text-lg">LKR 14 500.00</div>
              <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                <div className="flex items-center border border-gray-200">
                  <button className="px-4 py-2 hover:bg-gray-50">-</button>
                  <span className="px-4 font-audiowide">1</span>
                  <button className="px-4 py-2 hover:bg-gray-50">+</button>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 text-left md:text-right font-bold text-lg">LKR 14 500.00</div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-8 border-b border-gray-100">
              <div className="col-span-1 md:col-span-6 flex gap-6 items-center">
                <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <img src={shirt} alt="Core Compression" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-audiowide text-lg uppercase">Core Compression</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Size: M | Color: Crimson</p>
                  <button className="text-xs uppercase tracking-widest text-gray-400 underline mt-4 hover:text-black transition-colors">Remove</button>
                </div>
              </div>
              <div className="hidden md:block col-span-2 text-center font-bold text-lg">LKR 6 500.00</div>
              <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                <div className="flex items-center border border-gray-200">
                  <button className="px-4 py-2 hover:bg-gray-50">-</button>
                  <span className="px-4 font-audiowide">2</span>
                  <button className="px-4 py-2 hover:bg-gray-50">+</button>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 text-left md:text-right font-bold text-lg">LKR 13 000.00</div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-audiowide text-xl uppercase mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 text-sm font-medium">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold text-black">LKR 27 500.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-black">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="font-bold text-black">LKR 0.00</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center">
                <span className="font-audiowide uppercase tracking-widest text-gray-900">Total</span>
                <span className="font-bold text-2xl text-black">LKR 27 500.00</span>
              </div>

              <button className="w-full py-5 bg-black text-white font-audiowide uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gecko-orange">
                Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart
