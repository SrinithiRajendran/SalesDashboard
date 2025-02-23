import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LabelList,
  Cell,
} from "recharts";
import { searchedProducts } from "../data";

const COLORS = ["#FF6B6B", "#36A2EB", "#FFCE56", "#1F8A70", "#9966FF"];

const SearchedProducts = () => (
  <div className="w-full text-[12px] md:text-[10px] pr-10">
    <h2 className="font-bold text-gray-900 mb-6 text-center tracking-wide">
      Most Searched Products
    </h2>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={searchedProducts} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          type="number"
          tick={{ fill: "#555", fontSize: 10 }}
          domain={[0, "dataMax + 500"]}
        />

        <YAxis
          type="category"
          dataKey="product"
          tick={{ fill: "#222", fontSize: 10 }}
          width={140}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        />
        <Legend verticalAlign="top" wrapperStyle={{ fontSize: "10px" }} />
        <Bar
          dataKey="searches"
          barSize={15}
          radius={10}
          animationDuration={1000}
        >
          <LabelList
            dataKey="searches"
            position="right"
            fill="#222"
            fontSize={10}
          />
          {searchedProducts.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SearchedProducts;
