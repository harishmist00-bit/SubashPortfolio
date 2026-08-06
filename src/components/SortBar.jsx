const SortBar = ({ totalProducts, sortOption, setSortOption }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      
      {/* Product Count */}
      <h2 className="text-gray-700 text-sm md:text-base font-medium">
        Showing <span className="font-bold">{totalProducts}</span> Products
      </h2>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="sort"
          className="text-gray-700 text-sm font-medium"
        >
          Sort By
        </label>

        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="latest">Latest</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="nameAZ">Name: A - Z</option>
          <option value="nameZA">Name: Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;