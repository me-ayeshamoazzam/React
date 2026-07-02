import React from 'react';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AURA</div>
      
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}