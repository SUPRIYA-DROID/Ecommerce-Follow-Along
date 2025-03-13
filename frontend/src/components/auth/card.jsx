const Card = ({ name, price, image, onAddToCart, onBuyNow, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-rose-200 w-full max-w-sm">
      
      {/* Product Image with Edit Button */}
      <div className="relative w-full h-64 flex justify-center items-center bg-pink-50">
        <img src={image} alt={name} className="object-contain h-full w-full p-6" />
        
        {/* Edit Button */}
        <button 
          onClick={onEdit} 
          className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-rose-200 transition-all shadow-md"
          title="Edit Product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
            <path d="M14.5 5.5L3 17 3 21 7 21 18.5 9.5zM21.2 2.8c-1.1-1.1-2.9-1.1-4 0L16 4l4 4 1.2-1.2C22.3 5.7 22.3 3.9 21.2 2.8z"></path>
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="text-center p-5">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-lg text-green-600 font-bold mt-2">₹{price}</p>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          
          {/* Add to Cart */}
          <button onClick={onAddToCart} title="Add to Cart" className="flex items-center justify-center">
            <img
              src="https://th.bing.com/th/id/OIP.KUbJUQENTwusA_vixyzjeQHaHa?rs=1&pid=ImgDetMain"
              alt="Cart"
              className="h-8 cursor-pointer hover:scale-110 transition-transform"
            />
          </button>

          {/* Buy Now */}
          <button
            onClick={onBuyNow}
            className="bg-rose-500 text-white py-2 px-5 rounded-xl hover:bg-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-rose-300 shadow-md font-medium"
          >
            Buy Now
          </button>

          {/* Delete */}
          <button
            onClick={onDelete}
            className="bg-red-500 text-white p-2 rounded-xl hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md"
            title="Delete Product"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;
