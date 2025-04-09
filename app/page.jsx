// app/seller/page.jsx
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SellerLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <Hero showSellerFormLink={true} />
      <Footer />
    </div>
  );
}