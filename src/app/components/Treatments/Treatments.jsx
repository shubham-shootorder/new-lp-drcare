"use client";

import React, { useState } from "react";
import Image from "next/image";

const Treatments = ({ root, term, masterRow, center, service }) => {
  const treatments = [
    {
      // imgSrc: `${root}assets/img/icons/1_0.svg`,
      imgSrc: `/img/icons/1_0.svg`,
      title: "In Vitro Fertilization (IVF)",
      description:
        "Getting the best egg and the best sperm together through advanced technologies to make you realise your parenthood dream!",
    },
    {
      // imgSrc: `${root}assets/img/icons/2_0.svg`,
      imgSrc: `/img/icons/2_0.svg`,
      title: "Intrauterine Insemination (IUI)",
      description:
        "Selecting the best sperm through Microfluidics to make you happy parents.",
    },
    {
      // imgSrc: `${root}assets/img/icons/3_0.svg`,
      imgSrc: `/img/icons/3_0.svg`,
      title: "Drug Free IVF (CAPA IVM)",
      description:
        "Harmonious and safe treatment experience with a lesser number of injections to help you conceive despite cancer or PCOS.",
    },
    {
      // imgSrc: `${root}assets/img/icons/5_0.svg`,
      imgSrc: `/img/icons/51_0.svg`,
      title: "ICSI (Intracytoplasmic Sperm Injection)",
      description:
        "A specialized form of IVF where a single sperm is directly injected into an egg using advanced microscopic techniques, significantly enhancing fertilization chances, especially in cases of severe male infertility.",
    },
    {
      // imgSrc: `${root}assets/img/icons/4_0.svg`,
      imgSrc: `/img/icons/4_0.svg`,
      title: "Fertility Preservation",
      description:
        "Cancer or any other medical condition need not put an end to your parenthood dream. Preserve your fertility potential for future pregnancy goals.",
    },
    {
      // imgSrc: `${root}assets/img/icons/6_0.svg`,
      imgSrc: `/img/icons/6_0.svg`,
      title: "Preimplantation genetic testing (PGT)",
      description:
        "Improves your chances of having a healthy child even after your late 30s.",
    },
    {
      // imgSrc: `${root}assets/img/icons/7_0.svg`,
      imgSrc: `/img/icons/7_0.svg`,
      title: "Microfluidics",
      description:
        "Enhance your IUI/ IVF success rate through the best sperm selection by Microfluidics.",
    },
    {
      // imgSrc: `${root}assets/img/icons/8_0.svg`,
      imgSrc: `/img/icons/8_0.svg`,
      title: "1000+ MicroTESE",
      description:
        "Zero sperm count need not put an end to your fatherhood dream!",
    },
  ];

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(treatments.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedHoverState = [...isHoveredArray];
    updatedHoverState[index] = true;
    setIsHoveredArray(updatedHoverState);
  };

  const handleMouseLeave = (index) => {
    setIsHoveredArray(Array(treatments.length).fill(false));
  };

  return (
    <section className="section-heading-so">
      <div className="container">
        {/* <h2 className="heading-text" data-aos="zoom-in">{term.toUpperCase()} treatments in {masterRow.center_name}</h2> */}
        <h2 className="heading-text" data-aos="zoom-in">
        {service ? service.toUpperCase() : 'IVF'} Treatment in {center?.center_name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </h2>
        {/* Cards Parent Div */}
        <div className="row pt-2">
          {treatments.map((treatment, index) => (
            <div className="col-md-3 col-6 text-center" key={index}>
              <div
                className={`hover panel ${isHoveredArray[index] ? "flip" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                data-aos="zoom-in"
              >
                <div className="front">
                  <div className="oasisss-treatcard">
                    <center>
                      <Image
                        loading="lazy"
                        className="lazy-load"
                        src={treatment.imgSrc}
                        alt="icons"
                        width={100}
                        height={100}
                      />
                    </center>
                    <h3>{treatment.title}</h3>
                  </div>
                </div>
                <div className="back">
                  <div className="oasisss-treatcard">
                    <p className="text-black p-2">{treatment.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
