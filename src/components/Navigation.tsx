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
            Challenge 3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users" $active={location.pathname.startsWith('/users')}>
            Challenge 6
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="challenges/css" $active={location.pathname.startsWith('challenges/css')}>
            Challenge 4
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="challenges/observer" $active={location.pathname.startsWith('challenges/observer')}>
            Challenge 5
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="challenges/complex" $active={location.pathname.startsWith('challenges/complex')}>
            Challenge 7
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
