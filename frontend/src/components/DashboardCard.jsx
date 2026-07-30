import {
  Car,
  ShoppingCart,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

function DashboardCard({
  title,
  value,
  color,
}) {

  let Icon = Car;

  if (title === "Purchases")
    Icon = ShoppingCart;

  if (title === "Revenue")
    Icon = DollarSign;

  if (title === "Low Stock")
    Icon = AlertTriangle;

  return (

    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2
            className={`text-4xl font-bold mt-3 ${color}`}
          >
            {value}
          </h2>

        </div>

        <div
          className={`${color} bg-gray-100 p-4 rounded-full`}
        >
          <Icon size={34} />
        </div>

      </div>

    </div>

  );

}

export default DashboardCard;