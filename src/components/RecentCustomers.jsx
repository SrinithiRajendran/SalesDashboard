import { Recentcustomers } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RecentCustomers = () => {
  const { darkMode } = useContext(ThemeContext);

  const borderColor = darkMode ? "border-[#0ff]" : "border-gray-400";
  const bgHeader = darkMode ? "bg-[#111] text-white" : "bg-gray-200 text-black";
  const rowHover = darkMode ? "hover:bg-[#222]" : "hover:bg-gray-100";

  return (
    <div className="w-full p-4 text-[10px] md:text-[12px]">
      <h2
        className={`text-[12px] font-bold text-center mb-6 ${
          darkMode ? "text-[#0ff]" : "text-[#333]"
        }`}
      >
        Recent Customers
      </h2>
      <div className="overflow-x-auto">
        <table className={`w-full border ${borderColor} text-center`}>
          <thead>
            <tr className={bgHeader}>
              <th className="p-4">S.No.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Signup Date</th>
              <th className="p-2">Location</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Recentcustomers.map((customer, index) => {
              const statusColor =
                customer.status === "Returning"
                  ? darkMode
                    ? "text-[#0ff]"
                    : "text-[#3d77eb]"
                  : darkMode
                  ? "text-[#00ff26]"
                  : "text-[#069118]";

              return (
                <tr
                  key={index}
                  className={`border-b ${borderColor} ${rowHover} ${statusColor}`}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-2">{customer.name}</td>
                  <td className="p-2">{customer.email}</td>
                  <td className="p-2">{customer.date}</td>
                  <td className="p-2">{customer.location}</td>
                  <td className="p-2">{customer.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCustomers;
