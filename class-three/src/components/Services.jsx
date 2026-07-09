import React from 'react';
import { Link } from 'react-router-dom';

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
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const processList = [
    {
      step: "01",
      title: "Discovery",
      desc: "We meet to discuss your vision, lifestyle, and goals for the space. We gather inspiration and establish a timeline."
    },
    {
      step: "02",
      title: "Design Concept",
      desc: "Our team creates detailed floor plans, 3D renderings, and curates a selection of materials and furnishings."
    },
    {
      step: "03",
      title: "Execution",
      desc: "We manage the contractors, oversee the installation, and style the final space down to the last detail."
    }
  ];

  return (
    <div>
      <div className="page-container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="grid">
          {servicesList.map((service, index) => (
            <div className="card text-center" key={index}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p style={{ color: '#5a5a5a' }}>{service.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '8rem' }}>
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            {processList.map((item, index) => (
              <div key={index}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p style={{ color: '#5a5a5a' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-banner">
        <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Ready to start your project?</h2>
        <p style={{ marginBottom: '2rem', color: '#ccc' }}>Contact us to schedule your initial consultation.</p>
        <Link to="/contact">
          <button style={{ backgroundColor: 'white', color: '#121212' }}>Get in Touch</button>
        </Link>
      </div>
    </div>
  );
}