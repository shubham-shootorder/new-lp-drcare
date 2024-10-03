import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img 
            src="https://oasisindia.in/wp-content/uploads/2020/10/About-Us.jpg" 
            alt="Family" 
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className='text-black my-2'>About Us</h2>
          <p className='text-black my-3'>
            Oasis Fertility is a comprehensive healthcare provider with specific attention to infertility treatments. Oasis is a ‘one-stop’ single-day care clinic where consultation, investigation and treatment are taken care of during the course of a single day.
          </p>
          <p className='text-black my-3'>
            We also take immense pride in our strict adherence to standards and quality. Oasis is an ISO 2001 certified organization and diligently follows the Indian Council of Medical Research (ICMR) guidelines. Oasis is also a member of The American Society for Reproductive Medicine and The Federation of Obstetric and Gynaecological Societies of India.
          </p>
          <p className='text-black my-3'>
            Oasis is a unit of the entity Sadguru Healthcare Services Pvt Ltd., which aims to offer state of art services in the Indian healthcare industry by leveraging latest technologies coupled with proven, evidence based international medical practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
