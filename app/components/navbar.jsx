// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <Link href="/seller" className="text-2xl font-bold">
          Seller Hub
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/seller/upload" className="hover:text-green-200 transition duration-200">
            Upload Product
          </Link>
          <Link href="/seller/products" className="hover:text-green-200 transition duration-200">
            My Products
          </Link>
          <Link href="/" className="hover:text-green-200 transition duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </nav>
  );
}