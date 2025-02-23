// Monthly Revenue Data
export const revenueData = [
  { week: "Week1", revenue: 15000 },
  { week: "Week2", revenue: 32000 },
  { week: "Week3", revenue: 28000 },
  { week: "Week4", revenue: 34000 },
  { week: "Week5", revenue: 25000 },
  { week: "Week6", revenue: 49000 },
  { week: "Week7", revenue: 90000 },
  { week: "Week8", revenue: 140000 },
  { week: "Week9", revenue: 105000 },
  { week: "Week10", revenue: 120000 },
];

// Top Searched Products

export const searchedProducts = [
  { product: "Laptop", searches: 1500, rating: 4.5, reviews: 100 },
  { product: "Smartphone", searches: 1800, rating: 4.3, reviews: 120 },
  { product: "Speakers", searches: 500, rating: 4.0, reviews: 50 },
  { product: "Headphones", searches: 600, rating: 3.8, reviews: 80 },
  { product: "Smartwatch", searches: 700, rating: 4.6, reviews: 90 },
  { product: "Tablet", searches: 650, rating: 4.2, reviews: 75 },
];

// Peak Search Times
export const searchTimes = [
  { time: "12 AM - 4 AM", searches: 100 },
  { time: "4 AM - 8 AM", searches: 300 },
  { time: "8 AM - 12 PM", searches: 500 },
  { time: "12 PM - 4 PM", searches: 400 },
  { time: "4 PM - 8 PM", searches: 250 },
  { time: "8 PM - 12 AM", searches: 450 },
];

// Sales Trends Over Time
export const salesTrends = [
  { month: "Jan", sales: 1500 },
  { month: "Feb", sales: 2500 },
  { month: "Mar", sales: 1000 },
  { month: "Apr", sales: 900 },
  { month: "May", sales: 1200 },
  { month: "Jun", sales: 870 },
  { month: "Jul", sales: 500 },
  { month: "Aug", sales: 550 },
  { month: "Sep", sales: 580 },
  { month: "Oct", sales: 1000 },
  { month: "Nov", sales: 950 },
  { month: "Dec", sales: 700 },
];

// Category-wise Sales Breakdown
export const categorySales = [
  { category: "Electronics", revenue: 250000 },
  { category: "Fashion", revenue: 150000 },
  { category: "Home & Kitchen", revenue: 130000 },
  { category: "Beauty", revenue: 120000 },
  { category: "Sports", revenue: 110000 },
];

// New vs Returning Customers
export const customerData = [
  { month: "Jan", newCustomers: 410, returningCustomers: 240 },
  { month: "Feb", newCustomers: 590, returningCustomers: 560 },
  { month: "Mar", newCustomers: 710, returningCustomers: 200 },
  { month: "Apr", newCustomers: 540, returningCustomers: 360 },
  { month: "May", newCustomers: 800, returningCustomers: 300 },
  { month: "Jun", newCustomers: 300, returningCustomers: 460 },
  { month: "Jul", newCustomers: 390, returningCustomers: 510 },
  { month: "Aug", newCustomers: 330, returningCustomers: 540 },
  { month: "Sep", newCustomers: 680, returningCustomers: 610 },
  { month: "Oct", newCustomers: 940, returningCustomers: 630 },
  { month: "Nov", newCustomers: 1100, returningCustomers: 690 },
  { month: "Dec", newCustomers: 780, returningCustomers: 740 },
];

// Geographic Sales Distribution
export const locationSales = [
  {
    country: "United States of America",
    revenue: 150000,
    coordinates: [-98, 39],
  },
  { country: "India", revenue: 120000, coordinates: [78, 22] },
  { country: "Germany", revenue: 90000, coordinates: [10, 51] },
  { country: "United Kingdom", revenue: 80000, coordinates: [-2, 55] },
  { country: "Canada", revenue: 75000, coordinates: [-106, 56] },
  { country: "Australia", revenue: 60000, coordinates: [133, -25] },
];

// Low Stock & Trending Products
export const inventoryData = [
  { product: "Laptop", stock: 5 },
  { product: "Shoes", stock: 50 },
  { product: "Phone", stock: 7 },
  { product: "Tshirts", stock: 20 },
  { product: "Headphones", stock: 15 },
  { product: "Skincare", stock: 4 },
  { product: "Watch", stock: 5 },
];

// Order Conversion Rate
export const conversionData = [
  { month: "Jan", views: 4400, orders: 290 },
  { month: "Feb", views: 5500, orders: 1200 },
  { month: "Mar", views: 3500, orders: 500 },
  { month: "Apr", views: 5500, orders: 850 },
  { month: "May", views: 7000, orders: 780 },
  { month: "Jun", views: 2500, orders: 200 },
  { month: "Jul", views: 8000, orders: 900 },
  { month: "Aug", views: 10500, orders: 830 },
  { month: "Sep", views: 9000, orders: 530 },
  { month: "Oct", views: 6500, orders: 600 },
  { month: "Nov", views: 11000, orders: 1500 },
  { month: "Dec", views: 10000, orders: 700 },
];

// Monthly Product Exchanges and Returns Data
export const monthlyExchangesAndReturns = [
  { month: "Jan", exchanges: 50, returns: 15 },
  { month: "Feb", exchanges: 60, returns: 20 },
  { month: "Mar", exchanges: 55, returns: 18 },
  { month: "Apr", exchanges: 70, returns: 25 },
  { month: "May", exchanges: 80, returns: 30 },
  { month: "Jun", exchanges: 90, returns: 35 },
  { month: "Jul", exchanges: 100, returns: 40 },
  { month: "Aug", exchanges: 95, returns: 38 },
  { month: "Sep", exchanges: 85, returns: 30 },
  { month: "Oct", exchanges: 90, returns: 33 },
  { month: "Nov", exchanges: 110, returns: 45 },
  { month: "Dec", exchanges: 120, returns: 50 },
];
export const orders = [
  {
    id: "#001",
    trackingId: "TRK123456",
    customer: "John Doe",
    product: "Wireless Headphones",
    date: "2024-02-15",
    amount: "$250",
    status: "Completed",
  },
  {
    id: "#002",
    trackingId: "TRK654321",
    customer: "Jane Smith",
    product: "Smartphone",
    date: "2024-02-16",
    amount: "$120",
    status: "Pending",
  },
  {
    id: "#003",
    trackingId: "TRK987654",
    customer: "Michael Brown",
    product: "Gaming Keyboard",
    date: "2024-02-17",
    amount: "$320",
    status: "Cancelled",
  },
  {
    id: "#004",
    trackingId: "TRK321987",
    customer: "Sarah Johnson",
    product: "Laptop",
    date: "2024-02-18",
    amount: "$450",
    status: "Completed",
  },
  {
    id: "#005",
    trackingId: "TRK741852",
    customer: "David Lee",
    product: "Smartwatch",
    date: "2024-02-19",
    amount: "$180",
    status: "Pending",
  },
];

export const bestSellingProducts = [
  { product: "Smartphone", sales: 120 },
  { product: "Backpack", sales: 75 }, // Accessories
  { product: "T-shirt", sales: 70 },
  { product: "Headphones", sales: 80 },
  { product: "Sunglasses", sales: 48 },
  { product: "Perfume", sales: 45 },
];

export const orderStatusData = [
  { name: "Completed", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Canceled", value: 15 },
];

export const activeUsersData = [
  { label: "Active Users", value: 1200 },
  { label: "New Signups", value: 230 },
];

export const Recentcustomers = [
  {
    name: "John Doe",
    email: "john@email.com",
    date: "2025-02-20",
    location: "New York",
    status: "New",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    date: "2025-02-19",
    location: "London",
    status: "Returning",
  },
  {
    name: "Mike Ross",
    email: "mike@email.com",
    date: "2025-02-18",
    location: "Sydney",
    status: "New",
  },
  {
    name: "Alice Johnson",
    email: "alice@email.com",
    date: "2025-02-17",
    location: "Berlin",
    status: "Returning",
  },
  {
    name: "Robert Brown",
    email: "robert@email.com",
    date: "2025-02-16",
    location: "Paris",
    status: "New",
  },
];
