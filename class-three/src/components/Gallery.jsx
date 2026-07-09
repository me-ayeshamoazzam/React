import React from 'react';

export default function Gallery() {

  const projects = [
    {
      title: "The Brooklyn Brownstone",
      location: "New York, NY",
      images: [
        "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      title: "Minimalist Desert Home",
      location: "Scottsdale, AZ",
      images: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  return (
    <div className="page-container">
      <h2 className="section-title">Selected Works</h2>
      
      {projects.map((project, projectIndex) => (
        <div className="project-section" key={projectIndex}>
          
          <div className="project-header">
            <h3 style={{ margin: 0, fontSize: '2rem' }}>{project.title}</h3>
            <span className="project-location">{project.location}</span>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>

            {project.images.map((imgUrl, imgIndex) => (
              <img 
                key={imgIndex} 
                src={imgUrl} 
                alt={`${project.title} interior`} 
                className="gallery-img" 
              />
            ))}
          </div>

        </div>
      ))}
      
    </div>
  );
}