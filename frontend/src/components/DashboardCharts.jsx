import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#f59e0b",
  "#9333ea",
];

function DashboardCharts({ vehicles }) {

  const categoryData = [];

  const stockData = [];

  const categories = {};

  vehicles.forEach((vehicle) => {

    if (categories[vehicle.category]) {

      categories[vehicle.category]++;

    } else {

      categories[vehicle.category] = 1;

    }

    stockData.push({
      name: vehicle.make,
      stock: vehicle.quantity,
    });

  });

  for (let key in categories) {

    categoryData.push({
      name: key,
      value: categories[key],
    });

  }

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-xl font-bold mb-5">
          Vehicle Categories
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={100}
              label
            >

              {categoryData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-xl font-bold mb-5">
          Vehicle Stock
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={stockData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="stock"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default DashboardCharts;