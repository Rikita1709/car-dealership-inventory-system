import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  ShoppingCart,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          🚗 Car Dealer
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Inventory System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition duration-300"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/inventory"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition duration-300"
        >
          <Car size={20} />
          Inventory
        </Link>

        <Link
          to="/purchase-history"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition duration-300"
        >
          <ShoppingCart size={20} />
          Purchase History
        </Link>

      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-6 py-5 text-red-400 hover:bg-red-600 hover:text-white transition duration-300"
      >
        <LogOut size={20} />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;