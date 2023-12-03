import React, { useState } from 'react';


const Cards = ({ name, photo, socialMedia, description, contact, url }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      window.open(url, "_blank");
    };
  
    return (
      <div className="flip-card" onClick={handleClick}>
        <div className='flip-card-inner'>
            <div className="flip-card-front">    
              <img src={photo} alt={name} className="card-photo" />
              <h2 className="card-name">{name}</h2>
              <p className="card-social-media">{socialMedia}</p>
            </div>
            <div className="flip-card-back">
              <p className="card-description">{description}</p>
              <p className="card-contact">{contact}</p>
            </div>
        </div>
      </div>
    );
  };
  
export default Cards;
