// app/seller/page.jsx
'use client';
import { useState } from "react";
import axios from "axios";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer"; // Corrected import (case-sensitive)

export default function SellerLanding() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Upload product to backend
  const uploadProduct = async () => {
    if (!productName || !productPrice || !productImage) {
      alert("Please fill all required fields: Name, Price, and Image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", parseFloat(productPrice));
    formData.append("description", productDescription || "");
    formData.append("image", productImage);

    try {
      const response = await axios.post(
        "https://recyclehub-production.up.railway.app/api/add-product",
        formData
      );
      alert("Product uploaded successfully!");
      console.log("Product uploaded:", response.data);
      // Reset form
      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error("❌ Upload failed:", error.response?.data || error.message);
      alert(`Failed to upload product: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-100 to-gray-100 py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to SellerHub
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage your products, upload new items, and grow your business with ease.
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Upload a New Product
          </h2>

          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Product Price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (Rs) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              placeholder="Describe your product"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            />
          </div>

          {/* Product Image */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Product Preview"
                className="mt-4 w-full h-48 object-cover rounded-md shadow-sm"
              />
            )}
          </div>

          {/* Upload Button */}
          <button
            onClick={uploadProduct}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 font-semibold"
          >
            Upload Product
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}