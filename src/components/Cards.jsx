import {
  FaShoppingCart,
  FaUserPlus,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Cards = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
      <div
        className={`${
          darkMode
            ? "text-[white] shadow-[0_0_5px_#2ae82d,0_0_10px_#2ae82d]"
            : "text-[#000000] shadow-[0_0_5px_#058216]"
        } flex justify-center items-center gap-4 p-6 border-[1px] `}
      >
        <div
          className={`text-xl md:text-3xl  ${
            darkMode ? "text-[#0ae70a]" : "text-[green]"
          }`}
        >
          <FaDollarSign />
        </div>
        <div>
          <h3 className="text-sm md:text-md  font-semibold">Total Sales</h3>
          <p
            className={`text-xl font-bold ${
              darkMode ? "text-[#42edf3]" : "text-black"
            }`}
          >
            $150,000
          </p>
        </div>
      </div>

      <div
        className={` ${
          darkMode
            ? "text-[white] shadow-[0_0_5px_red,0_0_10px_red]"
            : "text-[#000000] shadow-[0_0_5px_red]"
        } flex justify-center items-center gap-4 p-6 border-[1px] `}
      >
        <div
          className={`text-xl md:text-3xl  ${
            darkMode ? "text-[#ef0f0f]" : "text-[#c0251f]"
          }`}
        >
          <FaShoppingCart />
        </div>
        <div>
          <h3 className="text-sm md:text-md font-semibold">Total Orders</h3>
          <p
            className={`text-xl font-bold ${
              darkMode ? "text-[#42edf3]" : "text-black"
            }`}
          >
            2,500
          </p>
        </div>
      </div>

      <div
        className={`${
          darkMode
            ? "text-[white] shadow-[0_0_5px_#1505fa,0_0_10px_#1505fa]"
            : "text-[#000000] shadow-[0_0_5px_#1505fa]"
        } flex justify-center items-center gap-4 p-6 border-[1px] `}
      >
        <div
          className={`text-xl md:text-3xl  ${
            darkMode ? "text-[#1d42fc]" : "text-[#1e1ba8]"
          }`}
        >
          <FaUserPlus />
        </div>
        <div>
          <h3 className="text-sm md:text-md font-semibold">New Customers</h3>
          <p
            className={`text-xl font-bold ${
              darkMode ? "text-[#42edf3]" : "text-black"
            }`}
          >
            300
          </p>
        </div>
      </div>

      <div
        className={`${
          darkMode
            ? "text-[white] shadow-[0_0_5px_#e105fa,0_0_10px_#e105fa]"
            : "text-[#000000] shadow-[0_0_5px_#e105fa]"
        } flex justify-center items-center gap-4 p-6 border-[1px] `}
      >
        <div
          className={`text-xl md:text-3xl  ${
            darkMode ? "text-[#f30bef]" : "text-[#6b0080]"
          }`}
        >
          <FaChartLine />
        </div>
        <div>
          <h3 className="text-sm md:text-md font-semibold">Revenue Growth</h3>
          <p
            className={`text-xl font-bold ${
              darkMode ? "text-[#42edf3]" : "text-black"
            }`}
          >
            +12%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
