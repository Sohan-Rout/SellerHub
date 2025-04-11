import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FaLeaf className="text-green-500 text-2xl" />
            <span className="text-xl font-bold text-white">
              Seller<span className="text-green-600">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
          <Link 
              href="#home" 
              className="text-white hover:text-green-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="#feature" 
              className="text-white hover:text-green-600 transition-colors font-medium"
            >
              Features
            </Link>
            <Link 
              href="/sellers" 
              className="text-white hover:text-green-600 transition-colors font-medium"
            >
              For Sellers
            </Link>
            <Link 
              href="/components/pages/buyerPage" 
              className="text-white hover:text-green-600 transition-colors font-medium"
            >
              For Buyers
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-green-600 transition-colors font-medium"
            >
              About
            </Link>
            
            {/* CTA Buttons */}
            <div className="flex space-x-4 ml-6">
              <Link 
                href="/login" 
                className="px-4 py-2 text-white border rounded-lg border-white hover:text-green-600 hover:border-green-600 font-medium transition-colors"
              >
                Log In
              </Link>
              <Link 
                href="components/pages/sellerPage" 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium shadow-sm"
              >
                Start Selling
              </Link>
            </div>
          </div>

          {/* Mobile menu button (hidden on desktop) */}
          <button className="md:hidden text-gray-600 hover:text-green-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="md:hidden hidden bg-white pb-3 px-4">
        <div className="flex flex-col space-y-2">
          <Link href="/features" className="px-3 py-2 text-gray-600 hover:text-green-600">
            Features
          </Link>
          <Link href="/sellers" className="px-3 py-2 text-gray-600 hover:text-green-600">
            For Sellers
          </Link>
          <Link href="/buyers" className="px-3 py-2 text-gray-600 hover:text-green-600">
            For Buyers
          </Link>
          <Link href="/about" className="px-3 py-2 text-gray-600 hover:text-green-600">
            About
          </Link>
          <div className="border-t border-gray-200 pt-2">
            <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-green-600">
              Log In
            </Link>
            <Link 
              href="/seller" 
              className="block px-3 py-2 mt-2 bg-green-600 text-white rounded-md text-center"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}