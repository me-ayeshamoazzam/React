import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div>
          <p>Est. 2026</p>
          <h1>AURA</h1>
          <p>Curating spaces of quiet luxury.</p>
        </div>
      </div>

      <div className="page-container text-center">
        <h2 className="section-title">Welcome to Aura</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#5a5a5a' }}>
          We are a full-service interior design studio based in New York. 
          We specialize in high-end residential and boutique commercial projects, 
          focusing on natural materials, light, and timeless beauty.
        </p>
        
        <Link to="/gallery">
          <button style={{ marginTop: '2rem' }}>View Our Work</button>
        </Link>
      </div>

      <div className="testimonial-banner">
        <h3>"Aura completely transformed our home. Their attention to detail and understanding of light is unmatched."</h3>
        <p>— Sarah & James, Brooklyn NY</p>
      </div>
    </div>
  );
}