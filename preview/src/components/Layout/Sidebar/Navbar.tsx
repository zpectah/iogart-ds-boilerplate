import React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {
  navItems?: {
    path: string,
    label: string,
  }[];
}

const Navbar = ({ navItems = [] }: NavbarProps) => (
  <nav>
    <ul>
      {navItems.map((item) => (
        <li
          key={item.path}
        >
          <Link to={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
