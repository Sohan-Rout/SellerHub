'use client';
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/Hero";
import Feature from "@/app/components/features";
import Footer from "@/app/components/footer";

export default function SellerLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Feature />
      <Footer />
    </div>
  );
}