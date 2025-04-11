import Link from 'next/link';

const EcoShopFooter = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About <span className='text-green-500'>Eco</span>Shop</h3>
            <p className="text-gray-400">
              Connecting conscious consumers with sustainable sellers for a greener future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-green-400">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-green-400">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-green-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-500 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-green-400">FAQs</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-green-400">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-green-400">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-500 mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for eco-friendly tips and new products.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-700 text-white rounded-l focus:outline-none w-full"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r hover:bg-green-700 transition">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SellerHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EcoShopFooter;