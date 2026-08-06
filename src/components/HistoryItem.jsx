import {
  FiAlertCircle,
  FiClock,
  FiExternalLink,
  FiTrash2,
} from "react-icons/fi";

const HistoryItem = ({ website, url, date, status }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="w-14 h-14 rounded-2xl border flex items-center justify-center">
            <FiAlertCircle className="text-red-500 text-xl" />
          </div>

          <div>

            <h3 className="font-semibold text-lg text-slate-900">
              {website}
            </h3>

            <p className="text-gray-500 text-sm">
              {url}
            </p>

            <div className="flex items-center gap-3 mt-3">

              <span className="flex items-center gap-1 text-sm text-gray-500">
                <FiClock size={14} />
                {date}
              </span>

              <span className="px-2 py-1 rounded-full bg-red-100 text-red-500 text-xs font-medium">
                {status}
              </span>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <button className="text-gray-500 hover:text-slate-900">
            <FiExternalLink size={20} />
          </button>

          <button className="text-gray-500 hover:text-red-500">
            <FiTrash2 size={20} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default HistoryItem;