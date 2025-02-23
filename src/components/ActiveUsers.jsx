import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { activeUsersData } from "../data";

const ActiveUsers = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full p-4">
      <h2
        className="text-[10px] font-bold text-center mb-6 md:mb-4"
        style={{ color: darkMode ? "#0ff" : "#000" }}
      >
        Active Users & Signups
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {activeUsersData.map((item, index) => (
          <div
            key={index}
            className="p-3 text-center rounded-sm shadow-md border"
            style={{
              borderColor: darkMode ? "#0ff" : "#058216",
              backgroundColor: darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff",
            }}
          >
            <h3
              className="text-[10px] md:text-[14px]"
              style={{ color: darkMode ? "#0ff" : "#058216" }}
            >
              {item.label}
            </h3>
            <p
              className="text-[12px] md:text-[16px] font-bold mt-6"
              style={{ color: darkMode ? "#0ff" : "#000" }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsers;
