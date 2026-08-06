import { useState } from "react";

function SearchBox() {
  const [url, setUrl] = useState("");

  const handleAnalyze = () => {
    console.log(url);
  };

  return (
    <div className="mt-10 flex w-full max-w-2xl">

      <input
        type="text"
        placeholder="Enter Website URL..."
        className="flex-1 border rounded-l-full px-6 py-4 outline-none"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        className="bg-black text-white px-8 rounded-r-full hover:bg-gray-800"
      >
        Analyze
      </button>

    </div>
  );
}

export default SearchBox;