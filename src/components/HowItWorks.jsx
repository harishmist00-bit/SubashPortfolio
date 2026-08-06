import { steps } from "../data/steps";
import StepCard from "./StepCard";

const HowItWorks = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle,#d1d5db 1px,transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            How It <span className="text-blue-600">Works</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            Rank Pilot uses advanced browser automation and AI to simulate
            a real user experience and provide deep SEO insights.
          </p>

        </div>

        {/* Cards */}

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Connecting line */}

          <div className="hidden lg:block absolute top-[45%] left-[16.5%] w-[67%] border-t border-dashed border-gray-300 -z-10"></div>

          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;