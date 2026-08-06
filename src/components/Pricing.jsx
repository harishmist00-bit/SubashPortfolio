import PricingCard from "./PricingCard";
import { pricingPlans } from "../data/pricing";

const Pricing = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle,#d1d5db 1px,transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-5xl font-bold text-slate-900">
            Simple <span className="text-blue-600">Pricing</span>
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Start free. Upgrade when you need more.
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;