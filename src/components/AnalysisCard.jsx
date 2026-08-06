import { FiAlertTriangle, FiClock } from "react-icons/fi";

const AnalysisCard = ({ website, url, date }) => {
  return (
    <div className="border rounded-2xl p-6 bg-white hover:shadow-lg transition">

      <div className="flex justify-between">

        <div>

          <h3 className="font-semibold text-lg">
            {website}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {url}
          </p>

        </div>

        <div className="w-12 h-12 rounded-xl border flex items-center justify-center">

          <FiAlertTriangle className="text-red-500 text-xl" />

        </div>

      </div>

      <div className="flex items-center gap-2 mt-8 text-gray-400">

        <FiClock />

        {date}

      </div>

    </div>
  );
};

export default AnalysisCard;