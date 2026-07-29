import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import PurchaseHistory from "./pages/PurchaseHistory";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route
          path="/purchase-history"
          element={<PurchaseHistory />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;