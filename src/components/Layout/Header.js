// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthControls from '../AuthControls';

const links = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'À propos', href: '/about', current: false },
  { name: 'UserProfile', href: '/user-profile', current: false },
  { name: 'Produits', href: '/produits', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

const Header = () => {
  return (
    <div className="p-6 bg-blue-500 text-white flex justify-between items-center">
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <li key={link.name} className="mr-6">
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? 'font-bold' : '')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <AuthControls />
    </div>
  );
};

export default Header;