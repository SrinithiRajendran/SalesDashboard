import { PieChart, Pie, Cell } from "recharts";
import { searchTimes } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SearchTimes = () => {
  const { darkMode } = useContext(ThemeContext);

  // Define color sets for dark and light mode
  const DARK_COLORS = [
    "#d000ff",
    "#00eeff",
    "#ff1900",
    "#11ff00",
    "#ff00ae",
    "#eaff00",
  ];
  const LIGHT_COLORS = [
    "#7b1fa2",
    "#039be5",
    "#e53935",
    "#43a047",
    "#d81b60",
    "#fdd835",
  ];

  const chartColors = darkMode ? DARK_COLORS : LIGHT_COLORS;

  return (
    <div className="w-full md:mt-6 text-[10px] flex flex-col items-center">
      {/* Title with dynamic text color */}
      <h2
        className={`text-[12px] font-bold text-center mb-4 ${
          darkMode ? "text-[#0ff]" : "text-[#333]"
        }`}
      >
        Peak Search Times
      </h2>

      {/* Pie Chart Container */}
      <div className="flex justify-center items-center w-full">
        <PieChart width={500} height={250}>
          <Pie
            data={searchTimes}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={50} // Creates a ring effect
            fill="transparent"
            dataKey="searches"
            nameKey="time"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {searchTimes.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
                stroke="#222" // Border for better visibility
                strokeWidth={darkMode ? 0.5 : 1} // Thicker stroke in light mode
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default SearchTimes;
