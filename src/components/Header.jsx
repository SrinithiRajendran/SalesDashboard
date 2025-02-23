import {
  BsList,
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSun,
} from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
const Header = ({ setIsOpen }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`${
        darkMode ? "bg-[#0c0c0c] text-[white]" : "bg-[#90cefa] text-[black]"
      } flex fixed top-0 left-0 right-0 items-center justify-between h-[60px] w-full px-6 `}
    >
      <button
        className={`${
          darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
        } text-[20px] cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BsList />
      </button>

      <div className="flex space-x-4">
        <button
          onClick={toggleTheme}
          className={`${
            darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
          } text-[20px] cursor-pointer`}
        >
          {darkMode ? <BsSun /> : <MdOutlineDarkMode />}
        </button>
        <BsFillBellFill
          className={`${
            darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
          } text-[20px] cursor-pointer`}
        />
        <BsFillEnvelopeFill
          className={`${
            darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
          } text-[20px] cursor-pointer`}
        />
        <BsPersonCircle
          className={`${
            darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
          } text-[20px] cursor-pointer`}
        />
      </div>
    </header>
  );
};

export default Header;
