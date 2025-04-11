'use client';
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Feature from "@/app/components/features";
import About from "@/app/components/about";
import Footer from "@/app/components/footer";

export default function SellerLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="feature">
        <Feature />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}