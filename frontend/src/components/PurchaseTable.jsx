function PurchaseTable({ purchases }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-4 text-left">Vehicle</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Purchased By</th>
          </tr>

        </thead>

        <tbody>

          {purchases.length === 0 ? (

            <tr>

              <td
                colSpan="4"
                className="text-center p-6"
              >
                No Purchases Yet
              </td>

            </tr>

          ) : (

            purchases.map((purchase) => (

              <tr
                key={purchase.id}
                className="border-t"
              >

                <td className="p-4">
                  {purchase.make} {purchase.model}
                </td>

                <td className="p-4">
                  {purchase.category}
                </td>

                <td className="p-4">
                  ${purchase.price}
                </td>

                <td className="p-4">
                  {purchase.buyer}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default PurchaseTable;