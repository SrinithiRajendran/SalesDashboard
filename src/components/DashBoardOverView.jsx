import RevenueData from "./RevenueData";
import RecentOrders from "./RecentOrders";
import BestSellingProducts from "./BestSellingProducts";
import ActiveUsers from "./ActiveUsers";
import OrderStatusSummary from "./OrdersStatusSummary";
import Cards from "./Cards";

const DashBoardOverView = () => {
  return (
    <div className=" w-full h-full overflow-y-auto md:p-6 ">
      <Cards />
      <div className="md:pr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        <div className="col-span-2 md:col-span-3">
          <RevenueData />
        </div>
        <div className="col-span-2 md:col-span-1">
          <ActiveUsers />
        </div>

        <div className="col-span-2 sm:col-span-2 md:col-span-4">
          <RecentOrders />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <OrderStatusSummary />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-3">
          <BestSellingProducts />
        </div>
      </div>
    </div>
  );
};

export default DashBoardOverView;
