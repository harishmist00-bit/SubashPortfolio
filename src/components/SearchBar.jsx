import { FiSearch, FiArrowRight } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex bg-white border rounded-full overflow-hidden">

      <div className="flex items-center flex-1 px-6">

        <FiSearch className="text-xl text-gray-400" />

        <input
          type="text"
          placeholder="Enter a URL to analyze..."
          className="w-full px-4 py-5 outline-none"
        />

      </div>

      <button className="bg-slate-900 text-white px-10 flex items-center gap-2 rounded-full m-2">
        Analyze
        <FiArrowRight />
      </button>

    </div>
  );
};

export default SearchBar;