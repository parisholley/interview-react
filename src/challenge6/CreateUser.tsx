import React from 'react';

const CreateUser: React.FC = () => {
  return (
    <div>
      <h2>Create New User</h2>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input type="text" style={{ padding: '0.5rem', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input type="email" style={{ padding: '0.5rem', width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '0.25rem' }}>Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;

