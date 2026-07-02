import React from 'react';

export default function About() {
  return (
    <div className="page-container">
      <div className="split-screen">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" 
          alt="Studio interior" 
        />
        <div>
          <h2>Our Philosophy</h2>
          <p>
            At Aura, we believe that true luxury lies in simplicity. We craft 
            environments that are not just visually stunning, but profoundly serene.
          </p>
          <br />
          <p>
            We use natural textures, soft light, and beautiful furniture to build
            the perfect modern home.
          </p>
        </div>
      </div>
    </div>
  );
}