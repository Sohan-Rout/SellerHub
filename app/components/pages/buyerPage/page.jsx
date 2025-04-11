'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EcoShopNavbar from '@/app/components/navbarBuyer';
import EcoShopFooter from '@/app/components/footerBuyer';
import { FaLeaf } from 'react-icons/fa';

const BuyerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://recyclehub-production.up.railway.app/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add to cart function
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Toggle wishlist function
  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <EcoShopNavbar 
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)} 
        wishlistCount={wishlist.length}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {['All', 'Home', 'Fashion', 'Beauty', 'Kitchen', 'Office'].map(category => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-green-600 text-green-600 rounded-full whitespace-nowrap hover:bg-green-50 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Sustainable Products'}
          </h2>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => toggleWishlist(product._id)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
                    >
                      <FaHeart 
                        className={`text-lg ${wishlist.includes(product._id) ? 'text-red-500' : 'text-gray-300'}`} 
                      />
                    </button>
                    {product.isEcoFriendly && (
                      <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Eco-Friendly
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-600">${product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <EcoShopFooter />
    </div>
  );
};

export default BuyerPage;