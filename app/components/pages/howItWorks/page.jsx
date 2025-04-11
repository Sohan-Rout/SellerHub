import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              For Sustainable Sellers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A Marketplace That <span className="text-green-600">Works For You</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process helps eco-conscious brands focus on what matters - creating sustainable products.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Your Shop",
                  description: "Set up your digital storefront in minutes with our intuitive dashboard. Showcase your brand story and values.",
                  color: "from-green-100 to-green-50"
                },
                {
                  step: "02",
                  title: "Add Your Products",
                  description: "Upload product details, highlight sustainability features, and set your pricing. We handle the technical details.",
                  color: "from-emerald-100 to-emerald-50"
                },
                {
                  step: "03",
                  title: "Start Selling",
                  description: "Reach our community of conscious consumers. Manage orders and track performance from one dashboard.",
                  color: "from-teal-100 to-teal-50"
                }
              ].map((item) => (
                <div 
                  key={item.step}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${item.color}`}>
                    <span className="text-2xl font-bold text-gray-800">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to join our sustainable marketplace?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Grow your eco-friendly business with our community of conscious consumers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors duration-300">
                Get Started - It's Free
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3.5 rounded-lg font-medium text-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}