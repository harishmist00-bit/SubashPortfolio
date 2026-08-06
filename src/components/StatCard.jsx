const StatCard = ({ icon: Icon, value, title, color }) => {
  return (
    <div className="border rounded-2xl p-6 flex items-center gap-5 bg-white">

      <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center`}>
        <Icon className="text-2xl" />
      </div>

      <div>

        <h2 className="text-4xl font-bold">
          {value}
        </h2>

        <p className="text-gray-500">
          {title}
        </p>

      </div>

    </div>
  );
};

export default StatCard;