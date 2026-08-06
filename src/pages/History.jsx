import { FiSearch, FiFilter, FiArrowDown, FiArrowUp } from "react-icons/fi";
import Navbar from "../components/Navbar";
import HistoryItem from "../components/HistoryItem";
import { history } from "../data/history";

const History = () => {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-14">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-5xl font-bold">
              Analysis <span className="text-blue-600">History</span>
            </h1>

            <p className="mt-3 text-gray-500">
              View and manage all your past SEO analyses.
            </p>

          </div>

          <button className="bg-slate-900 text-white px-7 py-3 rounded-xl hover:bg-slate-800">
            New Analysis
          </button>

        </div>

        {/* Search */}

        <div className="flex flex-col lg:flex-row gap-4 mt-10">

          <div className="flex-1 flex items-center border rounded-xl px-4">

            <FiSearch className="text-gray-400" />

            <input
              className="w-full py-4 px-3 outline-none"
              placeholder="Search by URL..."
            />

          </div>

          <button className="border rounded-xl px-6 py-4 flex items-center gap-2">
            <FiFilter />
            All Status
          </button>

          <button className="border rounded-xl px-6 py-4 flex items-center gap-2">
            <FiArrowDown />
            Newest First
          </button>

        </div>

        {/* History */}

        <div className="space-y-5 mt-8">

          {history.map((item) => (
            <HistoryItem key={item.id} {...item} />
          ))}

        </div>

      </section>
    </>
  );
};

export default History;