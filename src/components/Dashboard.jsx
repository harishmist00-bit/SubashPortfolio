import SearchBar from "./SearchBar";
import StatCard from "./StatCard";
import AnalysisCard from "./AnalysisCard";

import { stats } from "../data/stats";
import { analyses } from "../data/analyses";

const Dashboard = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      {/* Welcome */}

      <div>

        <h1 className="text-5xl font-bold">
          Welcome back,
          <span className="text-blue-600"> Harish</span>
        </h1>

        <p className="text-gray-500 mt-3">
          Analyze websites and boost your SEO performance.
        </p>

      </div>

      {/* Search */}

      <div className="mt-10">
        <SearchBar />
      </div>

      {/* Stats */}

      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}

      </div>

      {/* Recent */}

      <div className="flex justify-between items-center mt-14">

        <h2 className="text-3xl font-semibold">
          Recent Analyses
        </h2>

        <button className="text-blue-600 font-medium">
          View All →
        </button>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

        {analyses.map((item) => (
          <AnalysisCard key={item.website} {...item} />
        ))}

      </div>

    </section>
  );
};

export default Dashboard;