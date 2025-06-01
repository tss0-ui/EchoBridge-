import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Registered Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email} – {user.role}</li>
        ))}
      </ul>
    </div>
  );
}
