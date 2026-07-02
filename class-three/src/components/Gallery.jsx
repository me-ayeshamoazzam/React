import React from 'react';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80",
    // 👇 Here is the brand new link for the middle image
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="page-container">
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Recent Work</h2>
      
      <div className="grid">
        {images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt="Interior design" className="gallery-img" />
        ))}
      </div>
    </div>
  );
}