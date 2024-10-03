import React from "react";
import Image from "next/image";

const IVFSpecialists = ({ service }) => {
  return (
    <section className="section-heading-so so-fix sec-bg1">
      <div className="container">
        <h2 className="heading-text mb-3" data-aos="zoom-in">
          Best {service ? service.toUpperCase() : "IVF"} Specialists in India
        </h2>

        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-3 col-6">
            <div className="doc-card mob" data-aos="zoom-in">
              <Image
                loading="lazy"
                src={`/img/doc-img-durga-g-rao.webp`}
                alt="doc-img-durga-g-rao"
                className="w-100 lazy-load"
                width={366}
                height={438}
              />
              <div className="text-block">
                <h3>Dr. Durga G. Rao</h3>
                <p className="text-white">
                  Co - Founder & Medical <br />
                  Director
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
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
          </div>
          <div className="col-md-3"></div>
        </div>

        {/* Add the Book Now button */}
        <div className="text-center best-doc-book-btn">
          <a href="#" className="best-doctor-btn">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default IVFSpecialists;
