import { FiCheckCircle } from "react-icons/fi";

const PricingCard = ({
  name,
  price,
  duration,
  features,
  button,
  buttonStyle,
  popular,
}) => {
  return (
    <div className="relative rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-300">

      {/* Popular Badge */}

      {popular && (
        <span className="absolute top-5 right-5 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      )}

      <h3 className="text-3xl font-semibold text-slate-900">
        {name}
      </h3>

      <div className="mt-4 flex items-end">
        <span className="text-6xl font-bold text-slate-900">
          {price}
        </span>

        <span className="mb-2 ml-2 text-lg text-gray-500">
          {duration}
        </span>
      </div>

      <ul className="mt-8 space-y-5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-600"
          >
            <FiCheckCircle className="text-lg text-slate-700" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full rounded-xl py-4 font-semibold transition ${
          buttonStyle === "primary"
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "bg-gray-100 text-slate-900 hover:bg-gray-200"
        }`}
      >
        {button}
      </button>
    </div>
  );
};

export default PricingCard;