import { AlertTriangle } from "lucide-react";

function LowStockPanel({ vehicles }) {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center gap-3 mb-5">

        <AlertTriangle
          className="text-red-600"
          size={30}
        />

        <h2 className="text-2xl font-bold">
          Low Stock Vehicles
        </h2>

      </div>

      {

        vehicles.length === 0 ?

        (

          <p className="text-green-600 font-semibold">
            All vehicles are sufficiently stocked.
          </p>

        )

        :

        (

          vehicles.map((vehicle,index)=>(

            <div
              key={index}
              className="flex justify-between border-b py-3"
            >

              <div>

                <h3 className="font-semibold">

                  {vehicle.make} {vehicle.model}

                </h3>

              </div>

              <span className="text-red-600 font-bold">

                Stock : {vehicle.quantity}

              </span>

            </div>

          ))

        )

      }

    </div>

  );

}

export default LowStockPanel;