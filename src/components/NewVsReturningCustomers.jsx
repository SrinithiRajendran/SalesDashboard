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
import { customerData } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NewVsReturningCustomers = () => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? "#0ff" : "#1b29e3";
  const gridColor = darkMode ? "#444" : "#ccc";
  const newCustomerColor = darkMode ? "#39FF14" : "#069118";
  const returningCustomerColor = darkMode ? "#0ff" : "#1b29e3";

  return (
    <div className="w-full text-[10px] p-4 mt-6">
      <h2
        className={`text-[12px] font-bold mb-6 text-center ${
          darkMode ? "text-[#0ff]" : "text-[#333]"
        }`}
      >
        New vs Returning Customers
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={customerData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: textColor }} />
          <YAxis tick={{ fontSize: 10, fill: textColor }} />
          <Tooltip
            cursor={{ stroke: textColor, strokeWidth: 1 }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderRadius: "6px",
              borderColor: textColor,
              color: textColor,
            }}
          />
          <Legend wrapperStyle={{ fontSize: "10px", color: textColor }} />
          <Line
            type="monotone"
            dataKey="newCustomers"
            stroke={newCustomerColor}
            strokeWidth={1.5}
            dot={{ stroke: newCustomerColor, strokeWidth: 2, r: 3 }}
            animationDuration={500}
          />
          <Line
            type="monotone"
            dataKey="returningCustomers"
            stroke={returningCustomerColor}
            strokeWidth={1.5}
            dot={{ stroke: returningCustomerColor, strokeWidth: 2, r: 3 }}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewVsReturningCustomers;
