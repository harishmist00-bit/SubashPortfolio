const StepCard = ({ number, icon: Icon, title, description }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-3xl p-10 text-center hover:shadow-xl transition-all duration-300">

      {/* Step Number */}

      <h1 className="text-6xl font-bold text-gray-100">
        {number}
      </h1>

      {/* Icon */}

      <div className="w-16 h-16 rounded-2xl border border-gray-300 flex items-center justify-center bg-white mx-auto mt-4">
        <Icon className="text-3xl text-gray-800" />
      </div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 text-gray-500 leading-7">
        {description}
      </p>
    </div>
  );
};

export default StepCard;