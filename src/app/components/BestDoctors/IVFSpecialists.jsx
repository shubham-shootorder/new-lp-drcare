import React from "react";
import Image from "next/image";

const IVFSpecialists = ({ service }) => {
  return (
    <section className="section-heading-so so-fix sec-bg1">
      <div className="container">
        <h2 className="heading-text mb-3" data-aos="zoom-in">
          {/* Best {service ? service.toUpperCase() : "IVF"} Specialists in India */}
          DR. A M Reddy
        </h2>

        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-12 col-12 d-flex justify-content-center tw-align-middle">
            <div className="doc-card mob" data-aos="zoom-in">
              <Image
                loading="lazy"
                src={`/img/dr-am-reddy.png`}
                alt="dr-am-reddy"
                className="w-100 lazy-load"
                width={366}
                height={438}
              />
              <div className="text-block" style={{color:"#000000"}}>
                <h3>Dr. A M Reddy</h3>
                <p className="">
                  Co - Founder & Medical <br />
                  Director
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-6">
            <div className="doc-card mob" data-aos="zoom-in">
              <Image
                loading="lazy"
                src={`/img/doc-img-krishna-chaitanya.webp`}
                alt="doc-img-krishna-chaitanya"
                className="w-100 lazy-load"
                width={366}
                height={438}
              />
              <div className="text-block">
                <h3>Dr. Krishna Chaitanya</h3>
                <p className="text-white">
                  Scientific Head & Clinical <br />
                  Embryologist
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-md-3"></div>
        </div>

        {/* Add the Book Now button */}
        <div className="text-center best-doc-book-btn">
          {/* <a href="#" className="best-doctor-btn">
            Book Now
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default IVFSpecialists;
