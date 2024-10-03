import Image from 'next/image';
import React from 'react';

const AwardSection = ({ term, root, service }) => {
  return (
    <div className="section-heading-so d-none d-md-none d-lg-block">
      <section className="ptTTTTTTTTTT-4 pb-4">
        <div className="container" style={{ background: '#f7f7f7', color: 'black', fontSize: '10px', marginTop: '20px' }}>
          <div className="row pt-4 align-items-center">
            {/* <h2 className="heading-text" data-aos="zoom-in">Highly Awarded {term.toUpperCase()} Healthcare Chain in India</h2> */}
            <h2 className="heading-text" data-aos="zoom-in">Highly Awarded {service ? (service.toUpperCase()) : 'IVF'} {" "} Healthcare Clinic Chain in India</h2>
            
            <div className="col-md-3 col-6 text-center">
              <div className="hover panel" data-aos="zoom-in">
                <div className="frontt">
                  <div className="oasis-treatcarddd">
                    <center>
                      <Image
                        loading="lazy"
                        className="lazy-load"
                        src={`/img/award.svg`}
                        alt="icons"
                        width={120}
                        height={64}
                      />
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center">
              <p>Recognized as The IVF Chain of the Year (South) 2023 by ET Healthworld National Fertility Awards.</p>
            </div>

            <div className="col-md-3 col-6 text-center">
              <div className="hover panel" data-aos="zoom-in">
                <div className="frontt">
                  <div className="oasis-treatcarddd">
                    <center>
                      <Image
                        loading="lazy"
                        className="lazy-load"
                        src={`/img/award.svg`}
                        alt="icons"
                        width={120}
                        height={64}
                      />
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center">
              <p>Oasis Fertility awarded as one of the Best Healthcare Brands 2023 by The Economic Times.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardSection;
