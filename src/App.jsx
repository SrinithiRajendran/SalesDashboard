import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashBoardOverView from "./components/DashBoardOverView";
import SalesReports from "./components/SalesReports";
import { useContext, useState } from "react";
import OrderManagement from "./components/OrderManagement";
import { Customers } from "./components/Customers";
import Analytics from "./components/Analytics";
import { ThemeContext } from "./context/ThemeContext"; // Named import

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  return (
    <Router>
      <div className="flex h-screen bg-[#000000] w-full overflow-hidden ">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div
          className={`flex h-screen w-full pb-20 overflow-hidden transition-all duration-300 ${
            darkMode ? "bg-[#000000] text-white" : "bg-[#f4f4f4] text-black"
          }`}
        >
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="mt-[60px] w-full h-full overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<DashBoardOverView />} />
              <Route path="/salesreports" element={<SalesReports />} />
              <Route path="/ordermanagement" element={<OrderManagement />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
