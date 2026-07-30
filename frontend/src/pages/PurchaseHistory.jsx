import { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import PurchaseTable from "../components/PurchaseTable";

import { getPurchaseHistory } from "../api/purchase";

function PurchaseHistory() {

  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    loadPurchases();
  }, []);

  const loadPurchases = async () => {

    try {

      const data = await getPurchaseHistory();

      setPurchases(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <Layout>

      <h1 className="text-3xl font-bold mb-6">
        Purchase History
      </h1>

      <PurchaseTable purchases={purchases} />

    </Layout>

  );

}

export default PurchaseHistory;