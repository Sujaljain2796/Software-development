import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("auth");

    axios.get("http://localhost:8080/api/admin/dashboard", {
      headers: {
        Authorization: "Basic " + token
      }
    })
    .then(res => setData(res.data))   // ✅ FIX HERE
    .catch(() => setData("Access Denied"));
  }, []);

  return <h2>{data}</h2>;
}

export default AdminDashboard;