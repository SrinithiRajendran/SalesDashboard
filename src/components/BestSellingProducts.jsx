import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";
import { bestSellingProducts } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BestSellingProducts = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full text-[10px] md:text-[10px] md:p-4">
      <h2
        className="text-[10px] font-bold text-center mb-4"
        style={{ color: darkMode ? "#0ff" : "#000" }}
      >
        Best Selling Products
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={bestSellingProducts}
          margin={{ top: 10, right: 10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#444" : "#ccc"}
          />
          <XAxis
            dataKey="product"
            tick={{ fontSize: 10, fill: darkMode ? "#0ff" : "#000" }}
          />
          <YAxis
            tick={{ fontSize: 10, fill: darkMode ? "#0ff" : "#000" }}
            width={30}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff",
              borderColor: darkMode ? "#0ff" : "#000",
              borderRadius: "6px",
              color: darkMode ? "#0ff" : "#000",
            }}
            cursor={{ fill: "none" }}
            itemStyle={{
              color: darkMode ? "#0ff" : "#000",
              fontSize: "10px",
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: "10px",
              color: darkMode ? "#0ff" : "#000",
            }}
          />
          <Bar dataKey="sales" barSize={15}>
            {bestSellingProducts.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={darkMode ? "black" : "#ebd2fc"}
                stroke={darkMode ? "#0ff" : "#000"}
                strokeWidth={1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BestSellingProducts;
