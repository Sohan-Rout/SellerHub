"use client";
import Image from "next/image";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('/images/leaf-pattern.svg')] bg-repeat bg-center"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <FaLeaf className="text-green-600" />
              <span className="text-sm font-medium">
                Eco-Friendly Marketplace
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sell Sustainable Products <br />
              <span className="text-green-600">With Confidence</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl">
              Join the fastest-growing platform for eco-conscious sellers. Reach
              thousands of customers who value sustainability and ethical
              production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
              <button
                onClick={() => router.push("components/pages/sellerPage")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition cursor-pointer"
              >
                Start Selling <FaArrowRight />
              </button>
              <button
                onClick={() => router.push("/components/pages/howItWorks")}
                className="border border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-700 px-6 py-3 rounded-md font-medium transition cursor-pointer"
              >
                How It Works
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`/avatar-${item}.jpg`}
                    alt={`Seller ${item}`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    onError={(e) => {
                      e.currentTarget.src = "/default-avatar.jpg";
                      e.currentTarget.alt = "Default avatar";
                    }}
                  />
                ))}
              </div>
              <span>Join 100+ sustainable sellers</span>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/cup.png"
                alt="Eco-friendly products"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm font-light">Featured Collection</p>
                  <h3 className="text-xl font-semibold">
                    Zero Waste Essentials
                  </h3>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block absolute -left-10 -bottom-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="hidden lg:block absolute -right-10 top-10 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;