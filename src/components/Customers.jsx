import NewVsReturningCustomers from "./NewVsReturningCustomers";
import RecentCustomers from "./RecentCustomers";

export const Customers = () => {
  return (
    <div>
      <RecentCustomers />
      <NewVsReturningCustomers />
    </div>
  );
};
