import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        images: [],
        imagePreviews: [],
    });

    const handleInputChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviews = files.map((file) => URL.createObjectURL(file));

        setProductData({
            ...productData,
            images: files,
            imagePreviews,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", productData.name);
        formData.append("price", productData.price);
        productData.images.forEach((image) => formData.append("images", image));

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found in localStorage!");
                alert("You must be logged in to add a product.");
                return;
            }

            console.log("Sending token:", token);

            await axios.post("http://localhost:8000/products/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });

            console.log("Product added successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error adding product:", error.response ? error.response.data : error.message);
            alert("Failed to add product. Make sure you're logged in!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-screen bg-pink-50">
            <div className="p-8 max-w-lg w-full mx-auto bg-white shadow-xl rounded-3xl border border-rose-200">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Product Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Product Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            onChange={handleInputChange}
                            placeholder="Enter product name"
                            className="w-full p-3 border border-rose-300 rounded-xl bg-pink-50 focus:ring-2 focus:ring-rose-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Price (₹):</label>
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleInputChange}
                            placeholder="Enter price"
                            className="w-full p-3 border border-rose-300 rounded-xl bg-pink-50 focus:ring-2 focus:ring-rose-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Image Previews */}
                    {productData.imagePreviews.length > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {productData.imagePreviews.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`preview-${index}`}
                                    className="w-full h-24 object-cover rounded-xl border border-rose-300"
                                />
                            ))}
                        </div>
                    )}

                    {/* Upload Images */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Upload Images:</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-3 border border-rose-300 rounded-xl bg-pink-50 focus:ring-2 focus:ring-rose-400 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl shadow-md font-semibold text-lg transition-all duration-300 hover:from-rose-600 hover:to-pink-600"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
