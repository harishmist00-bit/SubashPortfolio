import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-pink-500 hover:text-white transition"
        >
          {liked ? (
            <FaHeart className="text-pink-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>

      </div>

      {/* Product Details */}
      <div className="p-5">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold mt-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 mt-2">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span className="text-gray-500 text-sm ml-2">
            (5.0)
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">

          <span className="text-xl font-bold text-pink-600">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>

        </div>

        {/* Button */}
        <button className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-pink-600 transition font-medium">
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;