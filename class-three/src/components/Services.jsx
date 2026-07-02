import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Architecture",
      desc: "Custom home designs for your lifestyle.",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interior Design",
      desc: "Finding the perfect furniture and art.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Commercial",
      desc: "Beautiful offices and retail spaces.",
      // 👇 This is the new, fixed image link!
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="page-container">
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Services</h2>
      
      <div className="grid">
        {servicesList.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}