import {
  FiSearch,
  FiFilter,
  FiPlus,
} from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaBullseye } from "react-icons/fa";
import Navbar from "../components/Navbar";

const RankTracker = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <h1 className="text-5xl font-bold text-slate-900">
              Rank <span className="text-blue-600">Tracker</span>
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Track your keyword rankings on Google — updated daily.
            </p>
          </div>

          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition">
            <FiPlus />
            Track Keyword
          </button>

        </div>

        {/* Search */}

        <div className="mt-10 flex flex-col lg:flex-row gap-4">

          <div className="flex-1 relative">

            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search keywords or domains..."
              className="w-full h-14 pl-14 pr-5 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button className="h-14 px-6 border rounded-2xl flex items-center gap-2 hover:bg-gray-50">
            <FiFilter />
            All Status
          </button>

          <button className="h-14 px-6 border rounded-2xl flex items-center gap-2 hover:bg-gray-50">
            <HiOutlineAdjustmentsHorizontal />
            Newest First
          </button>

        </div>

        {/* Empty State */}

        <div className="mt-8 border border-gray-200 rounded-3xl h-[420px] flex items-center justify-center">

          <div className="text-center">

            <div className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center mx-auto">

              <FaBullseye className="text-4xl text-gray-400" />

            </div>

            <h2 className="text-3xl font-bold mt-8">
              No keywords tracked yet
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              Add your first keyword and URL to start tracking your Google
              rankings.
            </p>

            <button className="mt-8 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-medium transition">
              Track Your First Keyword
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RankTracker;