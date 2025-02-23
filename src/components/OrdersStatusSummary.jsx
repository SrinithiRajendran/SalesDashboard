import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { orderStatusData } from "../data";

const COLORS = ["#069419", "#FFD700", "#FF4500"];

const OrderStatusSummary = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full text-[10px] mb-6 md:mb-0 lg:p-0 p-4">
      <h2
        className="text-[10px] md:text-[12px] font-bold text-center"
        style={{ color: darkMode ? "#0ff" : "#000" }}
      >
        Order Status Summary
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={orderStatusData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            paddingAngle={5}
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {orderStatusData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                strokeWidth={1}
                style={{
                  filter: `drop-shadow(0px 0px 3px ${
                    COLORS[index % COLORS.length]
                  })`,
                }}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#222" : "#fff",
              borderColor: darkMode ? "#0ff" : "#000",
              borderRadius: "6px",
            }}
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderStatusSummary;
