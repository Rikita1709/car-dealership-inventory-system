function Navbar() {
  return (
    <div className="h-20 bg-white shadow flex items-center justify-between px-8">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Welcome to Car Dealership Inventory System
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold text-slate-800">
            Admin
          </p>

          <p className="text-sm text-gray-500">
            administrator
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
          A
        </div>

      </div>

    </div>
  );
}

export default Navbar;