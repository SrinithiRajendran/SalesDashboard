import OrderSummary from "./OrderSummary";
import RecentOrders from "./RecentOrders";
import ReturnsExchange from "./ReturnsExchange";

const OrderManagement = () => {
  return (
    <div>
      <OrderSummary />
      <RecentOrders />
      <ReturnsExchange />
    </div>
  );
};

export default OrderManagement;
