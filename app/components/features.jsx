// app/features/page.jsx
export default function FeaturesPage() {
    const features = [
      {
        title: "Sustainable Selling",
        description: "Showcase your eco-friendly products to conscious consumers who value sustainability."
      },
      {
        title: "Easy Logistics",
        description: "Integrated shipping solutions with carbon-neutral delivery options available."
      },
      {
        title: "Growth Tools",
        description: "Analytics dashboard to track your sales and understand customer preferences."
      },
      {
        title: "Community Support",
        description: "Join a network of like-minded sellers and get featured in our sustainability spotlight."
      },
      {
        title: "Verified Badges",
        description: "Get certified as a sustainable seller with our verification program."
      },
      {
        title: "Eco-Packaging",
        description: "Access to affordable, biodegradable packaging solutions for your products."
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-600 to-green-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full mb-6 inline-block">
              <span className="text-sm font-medium">WHY CHOOSE SELLERHUB</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Features Designed for Sustainable Sellers</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Everything you need to grow your eco-friendly business in one place.
            </p>
          </div>
        </section>
  
        {/* Features Grid */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full mb-5 flex items-center justify-center text-green-600 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Testimonial Section */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-green-300 text-4xl mx-auto mb-6">"</div>
              <p className="text-xl text-gray-700 mb-8">
                "SellerHub helped me triple my sustainable clothing business while staying true to my eco-values. 
                The platform connects me with customers who genuinely care about the environment."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="/avatar-1.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full border-2 border-white shadow"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-green-600">Founder, EarthWear</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }