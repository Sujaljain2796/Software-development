import React, { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading users...</p>;
  }

  return (
    <div className="container">
      <h1>Fetch Users from API</h1>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Users;