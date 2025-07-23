import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #2c3e50;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? '#3498db' : 'white'};
  text-decoration: none;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  
  &:hover {
    color: #3498db;
  }
`;

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/dashboard" $active={location.pathname === '/dashboard'}>
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users" $active={location.pathname.startsWith('/users')}>
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/reports" $active={location.pathname.startsWith('/reports')}>
            Reports
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
