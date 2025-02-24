import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { monthlyExchangesAndReturns } from "../data";

const ReturnsExchange = () => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? "#0ff" : "#333";
  const bgColor = darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff";
  const borderColor = darkMode ? "#0ff" : "#333";
  const exchangesColor = darkMode ? "#0ff" : "#007bff";
  const returnsColor = darkMode ? "#F44336" : "#ff5722";

  return (
    <div className="w-full text-[12px] md:text-[10px]">
      <h2
        className={`text-[10px] font-bold mb-6 text-center mt-10 ${
          darkMode ? "text-[#0ff]" : "text-[#333]"
        }`}
      >
        Exchanges & Returns
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={monthlyExchangesAndReturns}
          stackOffset="sign"
          barCategoryGap={12}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: textColor }} />
          <YAxis tick={{ fontSize: 10, fill: textColor }} width={25} />
          <Tooltip
            cursor={{ fill: "none" }}
            contentStyle={{
              backgroundColor: bgColor,
              borderRadius: "6px",
              borderColor: borderColor,
              color: textColor,
            }}
          />
          <Legend wrapperStyle={{ fontSize: "10px", color: textColor }} />
          <Bar
            dataKey="exchanges"
            stackId="a"
            fill={exchangesColor}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="returns"
            stackId="a"
            fill={returnsColor}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReturnsExchange;
