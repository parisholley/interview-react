import React from 'react';

const UserList: React.FC = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <div>
      <h2>User List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa' }}>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #dee2e6' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #dee2e6' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #dee2e6' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{user.id}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{user.name}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
