// app/about/page.jsx
import { FaLeaf, FaRecycle, FaShippingFast, FaHandshake, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaRecycle className="text-green-500 text-4xl" />,
      title: "Sustainable Products",
      description: "Every product listed meets strict eco-friendly standards to ensure minimal environmental impact."
    },
    {
      icon: <FaShippingFast className="text-green-500 text-4xl" />,
      title: "Carbon-Neutral Shipping",
      description: "We offset all shipping emissions through verified environmental projects."
    },
    {
      icon: <FaHandshake className="text-green-500 text-4xl" />,
      title: "Direct Seller Connection",
      description: "Buy directly from eco-conscious artisans and sustainable brands."
    },
    {
      icon: <FaChartLine className="text-green-500 text-4xl" />,
      title: "Impact Tracking",
      description: "See exactly how your purchases contribute to environmental conservation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* About Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 2023, SellerHub emerged from a simple idea: what if every purchase could help heal the planet? 
              We noticed a growing gap between eco-conscious consumers and sustainable sellers struggling to reach their audience.
            </p>
            <p>
              Our platform was built to bridge this gap, creating a marketplace where sustainability isn't just an option - 
              it's the foundation of every transaction. We verify all sellers and products to ensure they meet our rigorous 
              environmental standards.
            </p>
            <p>
              Today, we're proud to support a community of over 1,200 sustainable sellers and 50,000 eco-conscious buyers 
              who together have prevented an estimated 250 tons of waste from entering landfills.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How Eco-Friendly Commerce Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* For Sellers */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600 mb-4">For Sustainable Sellers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Get your eco-friendly products in front of thousands of conscious consumers</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Earn our sustainability verification badge to build trust</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Access our eco-packaging partners for sustainable shipping solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Join our seller community to share best practices and resources</span>
                </li>
              </ul>
              <div className="mt-8">
                <a 
                  href="/seller" 
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition inline-block"
                >
                  Start Selling Sustainably
                </a>
              </div>
            </div>

            {/* For Buyers */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600 mb-4">For Conscious Consumers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Shop with confidence knowing every product meets strict environmental standards</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Track your personal environmental impact through your purchases</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Discover the stories behind the sustainable brands you support</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4">
                    <FaLeaf className="text-lg" />
                  </span>
                  <span>Join our rewards program for eco-friendly shopping habits</span>
                </li>
              </ul>
              <div className="mt-8">
                <a 
                  href="/buyer" 
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition inline-block"
                >
                  Start Shopping Sustainably
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose SellerHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Sustainable Commerce Movement</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Whether you're a seller or buyer, your choices create real environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/seller" 
              className="bg-white text-green-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition duration-200"
            >
              Become a Seller
            </a>
            <a 
              href="/buyer" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-green-600 transition duration-200"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;