import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

const Features = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle,#d1d5db 1px,transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Everything You Need to Rank{" "}
            <span className="text-blue-600">Higher</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            Comprehensive SEO analysis powered by real browser rendering and
            artificial intelligence.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;