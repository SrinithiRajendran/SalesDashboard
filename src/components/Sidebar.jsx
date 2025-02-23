import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileInvoiceDollar,
  FaBox,
  FaUsers,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, setIsOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`fixed lg:relative shadow-lg z-50 left-0 top-0 h-full ${
        darkMode ? "bg-[#0c0c0c] text-white" : "bg-[#90cefa] text-black"
      } p-4 text-[12px] md:text-[14px] 
      transition-transform duration-200 ease-out
      ${isOpen ? "translate-x-0 w-[250px]" : "-translate-x-full w-[250px]"} 
      lg:translate-x-0 lg:w-1/4 lg:block`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold font-lugrasimo">Sales Dashboard</h2>

        <button
          onClick={() => setIsOpen(false)}
          className={`${
            darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
          } text-2xl lg:hidden cursor-pointer`}
        >
          <BsX />
        </button>
      </div>
      <ul className="space-y-10 font-bold">
        {[
          { icon: <FaTachometerAlt />, label: "Dashboard Overview", path: "/" },
          {
            icon: <FaFileInvoiceDollar />,
            label: "Sales Reports",
            path: "/salesreports",
          },
          {
            icon: <FaBox />,
            label: "Order Management",
            path: "/ordermanagement",
          },
          { icon: <FaUsers />, label: "Customers", path: "/customers" },
          { icon: <FaChartPie />, label: "Analytics", path: "/analytics" },
        ].map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
              darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
            }`}
          >
            {item.icon}
            <Link to={item.path} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
        <li
          className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
            darkMode ? "hover:text-[#0ff]" : "hover:text-[#0000ff]"
          }`}
        >
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
