function VehicleTable({ vehicles }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800 text-white">

          <tr>
            <th className="p-4 text-left">Make</th>
            <th className="p-4 text-left">Model</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {vehicles.length === 0 ? (

            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-gray-500"
              >
                No Vehicles Found
              </td>
            </tr>

          ) : (

            vehicles.map((vehicle) => (

              <tr
                key={vehicle.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{vehicle.make}</td>

                <td className="p-4">{vehicle.model}</td>

                <td className="p-4">{vehicle.category}</td>

                <td className="p-4">
                  ${vehicle.price}
                </td>

                <td className="p-4">
                  {vehicle.quantity}
                </td>

                <td className="p-4 text-center">

                  <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700">
                    Edit
                  </button>

                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default VehicleTable;