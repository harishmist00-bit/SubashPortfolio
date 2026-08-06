const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Icon className="text-3xl text-gray-800 mb-6" />

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-500 leading-7">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;