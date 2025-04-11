export default function HowItWorksPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#ecfdf5] to-[#f7fdf9] text-gray-900 px-6 py-20 font-poppins">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            How It <span className="text-green-600">Works</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mb-14 max-w-2xl">
            Whether you're just getting started or scaling your eco-friendly shop, our process is simple, powerful, and designed for sellers like you.
          </p>
  
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">1. Create Your Store</h2>
              <p className="text-gray-600 leading-relaxed">
                Sign up and set up your store in minutes. No technical skills required. Customize your shop to match your brand.
              </p>
            </div>
  
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">2. Add Sustainable Products</h2>
              <p className="text-gray-600 leading-relaxed">
                Upload your eco-friendly products, set pricing, and manage your listings. Highlight what makes your products ethical.
              </p>
            </div>
  
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">3. Connect with Customers</h2>
              <p className="text-gray-600 leading-relaxed">
                Launch your store, get discovered, and grow your business. We handle the rest — from hosting to marketplace support.
              </p>
            </div>
          </div>
  
          <div className="mt-14 flex flex-wrap gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base shadow-md hover:bg-green-700 transition duration-300 flex items-center gap-2">
         Start Selling <span className="font-bold text-lg">→</span>
         </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  