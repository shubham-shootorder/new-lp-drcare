"use client";
import React from "react";
import Image from "next/image";

const Carousel = ({ carouselData,title }) => {
  return (
    <section id="choose-fertility" className="section-heading-so">
      <div className="container">
        <h2 className="heading-text text-center mb-3">
        Why DR Care Homeopathic Treatment For {title}
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {carouselData?.map((item, index) => (
            <div className="col" key={index}>
              <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
                <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
                  <Image
                    src={item.imageSrc} // Dynamic image source
                    alt={item.alt} // Dynamic alt text
                    height={100}
                    width={100}
                  />
                </div>
                <div className="card-body">
                  <p className="card-title avail-emi">{item.title}</p>
                  <p className="card-text">
                    {/* Use dangerouslySetInnerHTML if `text` contains HTML tags */}
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
