import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import DataDashboard from './challenge3/DataDashboard';
import CardLayout from './challenge4/CardLayout';
import ErrorBoundary from './components/ErrorBoundary';
import UsersPage from "./challenge6/UsersPage";
import UserReports from "./challenge6/UserReports";
import ObserverComponent from "./challenge5/ObserverComponent";
import DashboardComponent from "./challenge7/ComplexComponent";
import UserList from "./challenge6/UserList";
import CreateUser from "./challenge6/CreateUser";

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

            <Route path="challenges/css" element={<CardLayout />} />
            <Route path="challenges/observer" element={<ObserverComponent />} />
            <Route path="challenges/complex" element={<DashboardComponent />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
