import { Calendar } from "lucide-react";
import PriceChart from "./price-chart";

const CoinChartSection = ({ coin, selectedPeriod, setSelectedPeriod }) => {
  const periodOptions = [
    { day: 1, label: "1G" },
    { day: 7, label: "7G" },
    { day: 30, label: "30G" },
    { day: 90, label: "90G" },
    { day: 365, label: "1Y" },
  ];
  return (
    <div className="detail-container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-gray-600 dark:text-gray-400 " />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Fiyat Gecmisi
          </h2>
        </div>

        <div className="flex gap-2">
          {periodOptions.map(({ day, label }) => (
            <button
              onClick={() => setSelectedPeriod(day)}
              className={`px-3 py-1 text-sm rounded-md transition ${
                selectedPeriod === day
                  ? "bg-blue-600 text-white"
                  : " bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Fiyat Grafigi */}
      <div></div>
      <PriceChart symbol={coin.symbol} />
    </div>
  );
};

export default CoinChartSection;
