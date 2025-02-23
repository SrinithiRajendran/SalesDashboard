import { orders } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RecentOrders = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full p-2 mb-6">
      <h2
        className="text-[10px] font-bold text-center mb-6"
        style={{ color: darkMode ? "#0ff" : "#000" }}
      >
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table
          className="w-full border text-[10px] shadow-lg"
          style={{ borderColor: darkMode ? "#0ff" : "#000" }}
        >
          <thead>
            <tr
              className={`${darkMode ? "text-[#0ff]" : "text-[#000]"}`}
              style={{ backgroundColor: darkMode ? "#111" : "#ddd" }}
            >
              <th
                className="p-4 border"
                style={{ borderColor: darkMode ? "#0ff" : "#000" }}
              >
                Order ID
              </th>
              <th
                className="p-1 border"
                style={{ borderColor: darkMode ? "#0ff" : "#000" }}
              >
                Tracking ID
              </th>
              <th
                className="p-1 border"
                style={{ borderColor: darkMode ? "#0ff" : "#000" }}
              >
                Customer
              </th>
              <th
                className="p-1 border"
                style={{ borderColor: darkMode ? "#0ff" : "#000" }}
              >
                Product
              </th>
              <th
                className="p-1 border"
                style={{ borderColor: darkMode ? "#0ff" : "#000" }}
              >
                Date
              </th>
              <th
                className="p-1 border"
                style={{ borderColor: darkMode ? "#0ff" : "#000" }}
              >
                Amount
              </th>
              <th
                className="p-1 border"
                style={{ borderColor: darkMode ? "#0ff " : "#000" }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className={`text-center ${
                  darkMode ? "hover:bg-[#222]" : "hover:bg-[#dcdada]"
                }`}
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                <td
                  className="p-1 md:p-3 border"
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.id}
                </td>
                <td
                  className="p-1 border"
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.trackingId}
                </td>
                <td
                  className="p-1 border"
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.customer}
                </td>
                <td
                  className="p-1 border"
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.product}
                </td>
                <td
                  className="p-1 border"
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.date}
                </td>
                <td
                  className="p-1 border"
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.amount}
                </td>
                <td
                  className={`p-1 border font-bold ${
                    order.status === "Completed"
                      ? "text-green-400"
                      : order.status === "Pending"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                  style={{ borderColor: darkMode ? "#0ff" : "#000" }}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
