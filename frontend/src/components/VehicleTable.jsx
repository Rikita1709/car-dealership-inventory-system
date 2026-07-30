function VehicleTable({
  vehicles,
  onPurchase,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

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
                className="text-center p-6"
              >
                No Vehicles Found
              </td>
            </tr>

          ) : (

            vehicles.map((vehicle) => (

              <tr
                key={vehicle.id}
                className="border-t"
              >

                <td className="p-4">{vehicle.make}</td>

                <td className="p-4">{vehicle.model}</td>

                <td className="p-4">{vehicle.category}</td>

                <td className="p-4">${vehicle.price}</td>

                <td className="p-4">{vehicle.quantity}</td>

                <td className="p-4">

                  <div className="flex gap-2 justify-center">

                    <button
                      onClick={() => onPurchase(vehicle.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
                    >
                      Purchase
                    </button>

                    <button
                      onClick={() => onEdit(vehicle)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(vehicle.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

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