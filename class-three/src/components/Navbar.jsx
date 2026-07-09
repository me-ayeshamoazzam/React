import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AURA</div>
      
      <div className="nav-links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/gallery"> Gallery </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </nav>
  );
}