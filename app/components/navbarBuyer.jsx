import Link from 'next/link';
import { FaLeaf, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';

const EcoShopNavbar = ({ cartCount = 0, wishlistCount = 0, onSearchChange }) => {
  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FaLeaf className="text-green-500 text-2xl" />
            <span className="text-xl font-bold text-white">
              Eco<span className="text-green-600">Shop</span>
            </span>
          </Link>
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sustainable products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/wishlist" className="relative">
              <FaHeart className="text-2xl text-red-600" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EcoShopNavbar;