const categories = ["Men", "Women", "Boys", "Girls", "Kids"];

const FilterSidebar = ({
  price,
  setPrice,
  availability,
  setAvailability,
  selectedCategories,
  setSelectedCategories,
}) => {
  // Handle Category Selection
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Clear All Filters
  const clearFilters = () => {
    setPrice(5000);
    setAvailability(false);
    setSelectedCategories([]);
  };

  return (
    <aside className="w-full lg:w-72 bg-white border rounded-lg p-6 shadow-sm">

      {/* Heading */}
      <h2 className="text-xl font-bold mb-6">
        Filters
      </h2>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Price
        </h3>

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-pink-500 cursor-pointer"
        />

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>₹0</span>
          <span>₹{price}</span>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Availability
        </h3>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={availability}
            onChange={() => setAvailability(!availability)}
            className="accent-pink-500"
          />

          <span className="text-gray-700">
            In Stock Only
          </span>
        </label>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="accent-pink-500"
              />

              <span className="text-gray-700">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Button */}
      <button
        onClick={clearFilters}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
      >
        Clear Filters
      </button>

    </aside>
  );
};

export default FilterSidebar;