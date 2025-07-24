import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const TabContainer = styled.div`
  border-bottom: 2px solid #ecf0f1;
  margin-bottom: 2rem;
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tab = styled(Link)<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${props => props.$active ? '#3498db' : '#7f8c8d'};
  border-bottom: 2px solid ${props => props.$active ? '#3498db' : 'transparent'};
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  
  &:hover {
    color: #3498db;
  }
`;

const ContentArea = styled.div`
  min-height: 400px;
`;

const UsersPage: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Users Management</h1>

      <TabContainer>
        <TabList>
          <Tab to="/users/list" $active={location.pathname === '/users/list'}>
            User List
          </Tab>
          <Tab to="/users/create" $active={location.pathname === '/users/create'}>
            Create User
          </Tab>
          <Tab to="/users/reports" $active={location.pathname === '/users/reports'}>
            User Reports
          </Tab>
        </TabList>
      </TabContainer>

        <ContentArea>
          <Outlet />
        </ContentArea>
    </div>
  );
};

export default UsersPage;
