import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { revenueData } from "../data";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const RevenueData = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full p-4 text-[10px]">
      <h2
        className="text-[10px] md:text-[12px] font-bold text-center mb-4"
        style={{ color: darkMode ? "#0ff" : "#000" }}
      >
        Weekly Sales Revenue
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={revenueData}
          margin={{ top: 10, right: 15, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "rgba(0, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"}
          />
          <XAxis
            dataKey="week"
            tick={{ fontSize: 10, fill: darkMode ? "#0ff" : "#1b29e3" }}
          />
          <YAxis tick={{ fontSize: 10, fill: darkMode ? "#0ff" : "#1b29e3" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff",
              borderRadius: "6px",
              borderColor: darkMode ? "#0ff" : "#000",
              color: darkMode ? "#0ff" : "#000",
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: "10px",
              color: darkMode ? "#0ff" : "#1b29e3",
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={darkMode ? "#0ff" : "#1b29e3"}
            strokeWidth={1}
            dot={{ fill: darkMode ? "#0ff" : "#000", r: 4 }} // Fixed Syntax
            style={{
              filter: darkMode ? "drop-shadow(0px 0px 8px #0ff)" : "none", // Apply glow only in dark mode
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueData;
