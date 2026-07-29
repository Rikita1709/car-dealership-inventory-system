import { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import DashboardCard from "../components/DashboardCard";
import { getDashboard } from "../api/dashboard";

function Dashboard() {

  const [stats, setStats] = useState({
    total_vehicles: 0,
    total_purchases: 0,
    total_revenue: 0,
    low_stock: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();

    console.log("Dashboard API Response:", data);

    setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>

      <div className="grid grid-cols-4 gap-6">

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

    </Layout>
  );
}

export default Dashboard;