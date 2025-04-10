'use client';
import { useState } from 'react';
import SellerForm from '@/app/components/sellerform';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const SellerPage = () => {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seller Dashboard</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Manage your sustainable products and grow your eco-friendly business
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2 font-medium ${activeTab === 'upload' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Upload Product
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 font-medium ${activeTab === 'products' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            My Products
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 font-medium ${activeTab === 'analytics' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Analytics
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'upload' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
              <SellerForm />
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Products</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-700">You haven't listed any products yet.</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Upload Your First Product
              </button>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sales Analytics</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-700">Your analytics dashboard will appear here once you make your first sale.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SellerPage;