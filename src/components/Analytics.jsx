import BestSellingProducts from "./BestSellingProducts";
import ConversionData from "./ConversionData";
import LocationSales from "./LocationSales";
import SearchTimes from "./SearchTimes";
const Analytics = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <SearchTimes />
        </div>
        <div className="col-span-2 md:col-span-1">
          <LocationSales />
        </div>
      </div>

      <ConversionData />
      <BestSellingProducts />
    </div>
  );
};

export default Analytics;
