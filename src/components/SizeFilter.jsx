const sizes = ["S", "M", "L", "XL", "XXL"];

const SizeFilter = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Filter by Size
      </h3>

      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() =>
              setSelectedSize(selectedSize === size ? "" : size)
            }
            className={`w-12 h-12 rounded-lg border text-sm font-semibold transition duration-300
              ${
                selectedSize === size
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-pink-100 hover:border-pink-500"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;