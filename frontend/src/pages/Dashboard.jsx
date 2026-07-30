import { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentPurchases from "../components/RecentPurchases";
import LowStockPanel from "../components/LowStockPanel";

import { getDashboard } from "../api/dashboard";

function Dashboard() {

  const [stats, setStats] = useState({
    total_vehicles: 0,
    total_purchases: 0,
    total_revenue: 0,
    low_stock: 0,
    vehicles: [],
    recent_purchases: [],
    low_stock_vehicles: [],
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();
      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Vehicles"
          value={stats.total_vehicles}
          color="text-blue-600"
        />

        <DashboardCard
          title="Purchases"
          value={stats.total_purchases}
          color="text-green-600"
        />

        <DashboardCard
          title="Low Stock"
          value={stats.low_stock}
          color="text-red-600"
        />

        <DashboardCard
          title="Revenue"
          value={`$${stats.total_revenue}`}
          color="text-purple-600"
        />

      </div>

      <DashboardCharts vehicles={stats.vehicles} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <RecentPurchases
          purchases={stats.recent_purchases}
        />

        <LowStockPanel
          vehicles={stats.low_stock_vehicles}
        />

      </div>

    </Layout>
  );
}

export default Dashboard;