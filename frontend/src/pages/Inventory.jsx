import { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import VehicleTable from "../components/VehicleTable";
import VehicleModal from "../components/VehicleModal";
import toast from "react-hot-toast";

import {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} from "../api/vehicle";

import { purchaseVehicle } from "../api/purchase";

function Inventory() {

  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const [page, setPage] = useState(1);
  const limit = 5;

  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    loadVehicles();
  }, [sortBy, order, page]);

  useEffect(() => {
    filterVehicles();
  }, [vehicles, search, category]);

  const loadVehicles = async () => {
    try {

      const data = await getVehicles(
        sortBy,
        order,
        page,
        limit
      );

      setVehicles(data);

    } catch (error) {
      console.log(error);
    }
  };

  const filterVehicles = () => {

    let data = [...vehicles];

    if (search !== "") {

      data = data.filter(
        (vehicle) =>
          vehicle.make.toLowerCase().includes(search.toLowerCase()) ||
          vehicle.model.toLowerCase().includes(search.toLowerCase())
      );

    }

    if (category !== "") {

      data = data.filter(
        (vehicle) => vehicle.category === category
      );

    }

    setFilteredVehicles(data);

  };

  const handleSaveVehicle = async (vehicle) => {

    try {

      if (selectedVehicle) {

        await updateVehicle(selectedVehicle.id, vehicle);

        toast.success("Vehicle Updated Successfully");

      } else {

        await addVehicle(vehicle);

        toast.success("Vehicle Added Successfully");

      }

      setShowModal(false);
      setSelectedVehicle(null);

      loadVehicles();

    } catch (error) {

      console.log(error);
      toast.error("Operation Failed");

    }

  };

  const handleEditVehicle = (vehicle) => {

    setSelectedVehicle(vehicle);
    setShowModal(true);

  };

  const handleDeleteVehicle = async (id) => {

    if (!window.confirm("Delete this vehicle?")) return;

    try {

      await deleteVehicle(id);

      toast.success("Vehicle Deleted Successfully");

      loadVehicles();

    } catch (error) {

      console.log(error);
      toast.error("Delete Failed");

    }

  };

  const handlePurchaseVehicle = async (id) => {

    try {

      await purchaseVehicle(id);

      toast.success("Vehicle Purchased Successfully");

      loadVehicles();

    } catch (error) {

      console.log(error);

      if (error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Purchase Failed");
      }

    }

  };

  return (

    <Layout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Vehicle Inventory
        </h1>

        <button
          onClick={() => {
            setSelectedVehicle(null);
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Vehicle
        </button>

      </div>

      <div className="flex flex-wrap gap-4 mb-6">

        <input
          type="text"
          placeholder="Search by Make or Model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-80"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">All Categories</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Luxury">Luxury</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="quantity">Stock</option>
          <option value="make">Make</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

      </div>

      <VehicleTable
        vehicles={filteredVehicles}
        onPurchase={handlePurchaseVehicle}
        onEdit={handleEditVehicle}
        onDelete={handleDeleteVehicle}
      />

      <div className="flex justify-center gap-4 mt-8">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-200 px-5 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold text-lg mt-2">
          Page {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Next
        </button>

      </div>

      <VehicleModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedVehicle(null);
        }}
        onSave={handleSaveVehicle}
        vehicle={selectedVehicle}
      />

    </Layout>

  );

}

export default Inventory;