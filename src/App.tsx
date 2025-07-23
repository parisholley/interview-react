import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import UsersPage from './pages/UsersPage';
import UserList from './pages/UserList';
import CreateUser from './pages/CreateUser';
import UserReports from './pages/UserReports';
import UserProfile from './components/UserProfile';
import DataDashboard from './components/DataDashboard';
import CardLayout from './components/CardLayout';
import ObserverComponent from './components/ObserverComponent';
import ComplexComponent from './components/ComplexComponent';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong at the app level!</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DataDashboard />} />
            
            {/* Users section with nested routes */}
            <Route path="users" element={<UsersPage />}>
              <Route index element={<Navigate to="list" replace />} />
              <Route path="list" element={<UserList />} />
              <Route path="create" element={<CreateUser />} />
              <Route path="reports" element={<UserReports />} />
            </Route>
            
            {/* Individual challenge pages */}
            <Route path="challenges/typescript" element={
              <UserProfile 
                user={{ 
                  type: 'admin', 
                  id: 1, 
                  name: 'Test Admin', 
                  email: 'admin@example.com', 
                  permissions: ['read', 'write', 'delete'],
                  lastLogin: new Date()
                }} 
                onUpdate={() => {}} 
                onProcessAdmin={() => {}}
              />} 
            />
            <Route path="challenges/css" element={<CardLayout />} />
            <Route path="challenges/observer" element={<ObserverComponent />} />
            <Route path="challenges/complex" element={<ComplexComponent />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
