import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesTrends } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SalesTrends = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full text-[10px] md:text-[10px] mt-10">
      <h2
        className="text-[12px] text-center font-bold mb-4"
        style={{ color: darkMode ? "#0ff" : "#000" }}
      >
        Sales Trends Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesTrends}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#444" : "#ccc"}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: darkMode ? "#0ff" : "#086f9e" }}
          />
          <YAxis tick={{ fill: darkMode ? "#0ff" : "#086f9e" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff",
              borderRadius: "6px",
              borderColor: darkMode ? "#0ff" : "#000",
              color: darkMode ? "#0ff" : "#000",
            }}
          />
          <Legend wrapperStyle={{ color: darkMode ? "#0ff" : "#000" }} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke={darkMode ? "#0ff" : "#000"}
            activeDot={{ r: 8 }}
            strokeWidth={1}
            style={{
              filter: darkMode
                ? "drop-shadow(0px 0px 8px #0ff)"
                : "drop-shadow(0px 0px 8px #ff00ae)", // Adjusted for light mode
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesTrends;
