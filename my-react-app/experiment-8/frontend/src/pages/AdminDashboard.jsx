import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AdminDashboard() {

const fetchAdmin = async () => {
  try {
    const username = sessionStorage.getItem("user");
    const password = "123"; // since you're using static password

    const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password)
      }
    });

    alert(res.data);
  } catch (err) {
    alert("Access Denied");
  }
};

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Admin Dashboard</h2>

        <button className="btn btn-danger mt-3" onClick={fetchAdmin}>
          Admin Data
        </button>
      </div>
    </>
  );
}

export default AdminDashboard;