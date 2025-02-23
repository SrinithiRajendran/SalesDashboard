import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { conversionData } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ConversionData = () => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? "#0ff" : "#007bff";
  const gridColor = darkMode ? "#444" : "#ccc";
  const viewsColor = darkMode ? "#ff0" : "#069118";
  const ordersColor = darkMode ? "#0ff" : "#1b29e3";

  return (
    <div className="w-full md:p-4 mb-10 md:mb-6 mt-10 text-[10px]">
      <h2
        className={`text-[10px] font-bold mb-8 md:mb-4 text-center ${
          darkMode ? "text-[#0ff]" : "text-[#333]"
        }`}
      >
        Order Conversion Rate
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={conversionData}
          margin={{ top: 10, right: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: textColor }} />
          <YAxis tick={{ fontSize: 10, fill: textColor }} />
          <Tooltip
            cursor={{ stroke: textColor, strokeWidth: 1 }}
            contentStyle={{
              backgroundColor: darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff",
              borderColor: textColor,
              borderRadius: "6px",
              color: textColor,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 10, color: textColor }} />
          <Line
            type="monotone"
            dataKey="views"
            stroke={viewsColor}
            strokeWidth={1.5}
            dot={{ stroke: viewsColor, strokeWidth: 2, r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke={ordersColor}
            strokeWidth={1.5}
            dot={{ stroke: ordersColor, strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConversionData;
