import React from 'react';
import { Link } from 'react-router-dom'
import { COMPANY_NAME } from '../../const';

import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{ COMPANY_NAME }</Link>
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;