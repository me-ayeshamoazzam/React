import React from 'react';

export default function Contact() {
  return (
    <div className="page-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', margin: 0 }}>Inquire</h2>
        <p style={{ color: '#5a5a5a', marginTop: '1rem' }}>
          We take on a limited number of commissions per year.
        </p>
      </div>

      <form className="form-container">
        {/* The div below keeps First and Last name side-by-side */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        
        <input type="email" placeholder="Email Address" required />
        
        <textarea 
          placeholder="Tell us about your project..." 
          rows="5" 
          required 
        ></textarea>
        
        <button type="button">Submit Inquiry</button>
      </form>
    </div>
  );
}