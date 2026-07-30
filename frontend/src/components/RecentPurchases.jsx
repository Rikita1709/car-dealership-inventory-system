function RecentPurchases({ purchases }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Recent Purchases
      </h2>

      {purchases.length === 0 ? (

        <p className="text-gray-500">
          No Purchases Yet
        </p>

      ) : (

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-3">
                Vehicle
              </th>

              <th className="text-left p-3">
                Buyer
              </th>

              <th className="text-left p-3">
                Price
              </th>

            </tr>

          </thead>

          <tbody>

            {purchases.map((purchase, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="p-3">
                  {purchase.vehicle}
                </td>

                <td className="p-3">
                  {purchase.buyer}
                </td>

                <td className="p-3">
                  ${purchase.price}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default RecentPurchases;