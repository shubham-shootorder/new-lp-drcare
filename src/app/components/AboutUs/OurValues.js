import React from 'react';

const values = [
  {
    title: 'Compassionate',
    imgSrc: 'https://oasisindia.in/wp-content/uploads/2020/04/pledge-compassion.jpg',
  },
  {
    title: 'Competent',
    imgSrc: 'https://oasisindia.in/wp-content/uploads/2020/04/pledge-competence.jpg',
  },
  {
    title: 'Customized',
    imgSrc: 'https://oasisindia.in/wp-content/uploads/2020/04/pledge-competency.jpg',
  },
  {
    title: 'Confidential',
    imgSrc: 'https://oasisindia.in/wp-content/uploads/2020/04/pledge-control.jpg',
  },
  {
    title: 'Careful',
    imgSrc: 'https://oasisindia.in/wp-content/uploads/2020/04/pledge-careful.jpg',
  },
];

const OurValues = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-black mb-4">Our Values</h2>
      <div className="row justify-content-center text-center">
        {values.map((value, index) => (
          <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
            <div className="p-3 mx-auto" style={{ width: '100px', height: '100px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: "50px" }}>
              <img
                src={value.imgSrc}
                alt={value.title}
                className="img-fluid rounded-circle"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h5 className="mt-3 text-black">{value.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
