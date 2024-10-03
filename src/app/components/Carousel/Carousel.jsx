"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";

const Carousel = ({ masterRow, root, center }) => {
  return (
    <section id="choose-fertility" className="section-heading-so">
      <div className="container ">
        <h2 className="heading-text text-center mb-3">
          Choose Oasis Fertility in{" "}
          {center?.center_name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
                <Image src={"/img/icons/Clinical-Excellence-01-01-01-1.png"} alt="img" height={100} width={100} />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Clinical Excellence</p>
                <p className="card-text">
                  Science and evidence-based fertility care by experienced
                  fertility doctors, to help couples have healthy babies.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
              <Image src={"/img/icons/Clinical-Excellence-01-01-01-2.png"} alt="img" height={100} width={100} />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Personalized Treatments</p>
                <p className="card-text">
                  Treatments that are tailored to suit your specific needs and
                  ensure the best outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
              <Image src={"/img/icons/Clinical-Excellence-01-01-01-3.png"} alt="img" height={100} width={100} />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Comprehensive Care</p>
                <p className="card-text">
                  Patient-centric nutritional, psychological and holistic
                  support in every step of the fertility journey.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
              <Image src={"/img/icons/Clinical-Excellence-01-01-01-4.png"} alt="img" height={100} width={100} />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Transparent Pricing</p>
                <p className="card-text">
                  No hidden costs. Clear pricing on every test, scan and
                  procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
