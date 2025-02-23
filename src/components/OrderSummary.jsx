import { useContext } from "react";
import {
  FaClipboardList,
  FaHourglassHalf,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const OrderSummary = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      <div className="flex items-center gap-4 p-6 border rounded-lg shadow-md border-blue-500">
        <FaClipboardList className="text-blue-500 text-xl md:text-3xl" />
        <div>
          <h3
            className={`text-sm md:text-md font-semibold ${
              darkMode ? "text-white" : "text-[black]"
            }`}
          >
            Total Orders
          </h3>
          <p
            className={`text-md md:text-2xl font-bold ${
              darkMode ? "text-gray-300" : "text-[#817e7e]"
            }`}
          >
            2,500
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-6 border rounded-lg shadow-md border-yellow-500">
        <FaHourglassHalf className="text-yellow-500 text-xl md:text-3xl" />
        <div>
          <h3
            className={`text-sm md:text-md font-semibold ${
              darkMode ? "text-white" : "text-[black]"
            }`}
          >
            Pending Orders
          </h3>
          <p
            className={`text-md md:text-2xl font-bold ${
              darkMode ? "text-gray-300" : "text-[#817e7e]"
            }`}
          >
            120
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-6 border rounded-lg shadow-md border-green-500">
        <FaCheckCircle className="text-green-500 text-xl md:text-3xl" />
        <div>
          <h3
            className={`text-sm md:text-md font-semibold ${
              darkMode ? "text-white" : "text-[black]"
            }`}
          >
            Completed Orders
          </h3>
          <p
            className={`text-md md:text-2xl font-bold ${
              darkMode ? "text-gray-300" : "text-[#817e7e]"
            }`}
          >
            2,300
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-6 border rounded-lg shadow-md border-red-500">
        <FaTimesCircle className="text-red-500 text-xl md:text-3xl" />
        <div>
          <h3
            className={`text-sm md:text-md font-semibold ${
              darkMode ? "text-white" : "text-[black]"
            }`}
          >
            Canceled Orders
          </h3>
          <p
            className={`text-md md:text-2xl font-bold ${
              darkMode ? "text-gray-300" : "text-[#817e7e]"
            }`}
          >
            80
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
