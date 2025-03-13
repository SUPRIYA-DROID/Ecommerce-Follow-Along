import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
    const { id } = useParams();  // Get product ID from URL
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });

    // Fetch existing product details
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/products/${id}`, product);
            console.log("Product updated successfully!");
            navigate("/");  // Redirect to product list
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-50 p-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg border border-rose-200">
                <h2 className="text-3xl font-bold text-center text-rose-600 mb-8 underline underline-offset-4">
                    Edit Product ✨
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className="w-full p-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 bg-pink-50"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full p-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 bg-pink-50"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            placeholder="Write a short description..."
                            rows="4"
                            className="w-full p-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 bg-pink-50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 transition-all font-semibold"
                    >
                        Update Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
