import React from 'react';
import imageUrl from "../../../../public/img/location.png"
import Image from 'next/image';

const LocationCard = ({ locationName }) => {
  return (
    <div className="card mx-auto mb-4" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px' }}>
      <div className="card-body text-center">
        <Image
          src={imageUrl}
          alt="Location Icon"
          className="card-img-top mx-auto"
          style={{ width: '80px', height: '80px' }}
        />
        <h5 className="card-title mt-3">{locationName}</h5>
        <hr className="mt-2" style={{ borderTop: '2px solid #6f42c1' }} />
      </div>
    </div>
  );
};

export default LocationCard;
