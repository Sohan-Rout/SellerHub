// app/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Seller Hub. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="mt-4 md:mt-0 space-x-6">
          <Link href="/about" className="text-sm hover:text-gray-300 transition duration-200">
            About Us
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-300 transition duration-200">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm hover:text-gray-300 transition duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}