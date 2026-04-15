import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function UserDashboard() {

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/api/user/profile");
    alert(res.data.message);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>User Dashboard</h2>
        <button className="btn btn-success mt-3" onClick={fetchData}>
          Get Profile
        </button>
      </div>
    </>
  );
}

export default UserDashboard;