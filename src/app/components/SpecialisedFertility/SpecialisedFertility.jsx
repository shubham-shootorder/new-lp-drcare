"use client";

import React, { useState } from "react";
import Image from "next/image";

const SpecialisedFertility = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovere1] = useState(false);
  const [isHovered2, setIsHovere2] = useState(false);
  const [isHovered3, setIsHovere3] = useState(false);

  //const root = '/path/to/root'; // Replace with your actual root path if needed

  return (
    <section className="section-heading-so">
      <div className="container">
        <h2 className="heading-text" data-aos="zoom-in">
          Specialised Fertility Treatments
        </h2>
        <div className="row pt-4">
          <div className="col-md-3 col-6 text-center">
            <div
              className={`hover panel ${isHovered ? "flip" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-aos="zoom-in"
            >
              <div className="front">
                <div className="oasis-treatcard">
                  <center>
                    <Image
                      loading="lazy"
                      className="lazy-load"
                      // src={`${root}/assets/img/icons/11.svg`}
                      src={`/img/icons/52_0.svg`}
                      alt="icons"
                      width={100}
                      height={100}
                    />
                  </center>
                  <h3>Low AMH / Low Egg Count</h3>
                </div>
              </div>
              <div className="back">
                <div className="oasis-treatcard">
                  <p className="text-black p-2">
                    A condition characterized by lower than normal levels of
                    Anti-Müllerian Hormone (AMH), indicating a reduced ovarian
                    reserve and fewer available eggs for fertilization, which
                    can affect a womans fertility and response to fertility
                    treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 text-center">
            <div
              className={`hover panel ${isHovered1 ? "flip" : ""}`}
              onMouseEnter={() => setIsHovere1(true)}
              onMouseLeave={() => setIsHovere1(false)}
              data-aos="zoom-in"
            >
              <div className="front">
                <div className="oasis-treatcard">
                  <center>
                    <Image
                      loading="lazy"
                      className="lazy-load"
                      // src={`${root}/assets/img/icons/12.svg`}
                      src={`/img/icons/53_0.svg`}
                      alt="icons"
                      width={100}
                      height={100}
                    />
                  </center>
                  <h3>PCOS / PCOD</h3>
                </div>
              </div>
              <div className="back">
                <div className="oasis-treatcard">
                  <p className="text-black p-2">
                    A hormonal disorder common among women of reproductive age,
                    characterized by irregular menstrual periods, excess
                    androgen levels, and polycystic ovaries. This condition can
                    affect ovulation, leading to infertility, and is often
                    associated with insulin resistance, weight gain, and other
                    metabolic issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 text-center">
            <div
              className={`hover panel ${isHovered2 ? "flip" : ""}`}
              onMouseEnter={() => setIsHovere2(true)}
              onMouseLeave={() => setIsHovere2(false)}
              data-aos="zoom-in"
            >
              <div className="front">
                <div className="oasis-treatcard">
                  <center>
                    <Image
                      loading="lazy"
                      className="lazy-load"
                      // src={`${root}/assets/img/icons/13.svg`}
                      src={`/img/icons/54_0.svg`}
                      alt="icons"
                      width={100}
                      height={100}
                    />
                  </center>
                  <h3>Late Motherhood</h3>
                </div>
              </div>
              <div className="back">
                <div className="oasis-treatcard">
                  <p className="text-black p-2">
                    The experience of becoming a mother at an older age,
                    typically defined as age 35 or older. This can involve
                    unique challenges and considerations, such as increased
                    fertility treatments, higher risk of pregnancy
                    complications, and balancing career and personal life, but
                    also offers benefits like greater emotional and financial
                    stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 text-center">
            <div
              className={`hover panel ${isHovered3 ? "flip" : ""}`}
              onMouseEnter={() => setIsHovere3(true)}
              onMouseLeave={() => setIsHovere3(false)}
              data-aos="zoom-in"
            >
              <div className="front">
                <div className="oasis-treatcard">
                  <center>
                    <Image
                      loading="lazy"
                      className="lazy-load"
                      // src={`${root}/assets/img/icons/14.svg`}
                      src={`/img/icons/55_0.svg`}
                      alt="icons"
                      width={120}
                      height={100}
                    />
                  </center>
                  <h3>Low Quality / Zero Sperm Count</h3>
                </div>
              </div>
              <div className="back">
                <div className="oasis-treatcard">
                  <p className="text-black p-2">
                    A condition where a man has a low concentration of sperm
                    (oligospermia) or no sperm at all (azoospermia) in his
                    semen. This can significantly affect fertility and may be
                    caused by various factors, including genetic issues,
                    hormonal imbalances, lifestyle factors, or medical
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialisedFertility;
