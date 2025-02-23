import { AiOutlineArrowUp } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const SalesGrowth = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="grid grid-cols-2 gap-10 mt-10">
      <div
        className={`${
          darkMode
            ? "text-[white] shadow-[0_0_5px_#0ff,0_0_6px_#0ff]"
            : "text-[black] shadow-[0_0_5px_#086f9e]"
        } flex justify-center items-center gap-4 p-6 border-[1px]  w-[100%] h-[120px]`}
      >
        <div
          className={`text-sm md:text-3xl ${
            darkMode ? "text-[#0ae70a]" : "text-[#077c07]"
          } `}
        >
          <FaDollarSign />
        </div>
        <div>
          <h3 className="text-xs md:text-lg font-semibold">Total Sales</h3>
          <p
            className={`${
              darkMode ? "text-[#0ff]" : " text-[#000]"
            } text-sm md:text-xl font-bold`}
          >
            $150,000
          </p>
        </div>
      </div>
      <div
        className={` ${
          darkMode
            ? "text-[white] shadow-[0_0_5px_#0ff,0_0_6px_#0ff]"
            : "text-[black] shadow-[0_0_5px_#086f9e]"
        } flex md:flex-row flex-col justify-center items-center gap-4 p-6 border-[1px]   w-[100%] h-[120px]`}
      >
        <div className="text-center md:text-start">
          <h3 className="text-xs md:text-lg font-semibold">Sales Growth</h3>
          <p className="text-[10px] md:text-sm text-[#6f7669]">
            Compared to last month
          </p>
        </div>
        <div className="flex  items-center ">
          <AiOutlineArrowUp
            className={` ${
              darkMode ? "text-[#0ae70a]" : "text-[#046e04]"
            } text-md md:text-3xl mr-2`}
          />

          <span className="text-sm md:text-lg font-bold">20.00%</span>
        </div>
      </div>
    </div>
  );
};

export default SalesGrowth;
