'use client';
import { useState } from "react";
import axios from "axios";

export default function SellerForm() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

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

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://recyclehub-production.up.railway.app/api/add-product",
        formData
      );
      alert("Product uploaded successfully!");
      // Reset form
      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert(`Failed to upload product: ${error.response?.data?.error || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Upload a New Product
        </h2>

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

        <button
          onClick={uploadProduct}
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md transition duration-300 font-semibold ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isLoading ? 'Uploading...' : 'Upload Product'}
        </button>
      </div>
    </div>
  );
}