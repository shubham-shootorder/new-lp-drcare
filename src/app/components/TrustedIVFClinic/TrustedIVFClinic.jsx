import React from "react";
import Google from "../../../../public/img/google.png"
import facebook from "../../../../public/img/facebook.png"
import Justdial from "../../../../public/img/Justdail.png"
import lybrate from "../../../../public/img/lybrate.png"
import practo from "../../../../public/img/practo.png"

import Image from "next/image";

const TrustedIVFClinic = ({ term, masterRow, root, center, service }) => {
  return (
    <section className="section-heading-so" style={{ backgroundColor: "#F7F7F7"}}>
      <div className="container">
        <div className="d-none d-md-none d-lg-block">
          {/* <h2 className="heading-text" data-aos="zoom-in">Most Trusted {term.toUpperCase()} Clinic in {masterRow.center_name}</h2> */}
          <h2 className="heading-text mb-3" style={{marginBottom: "10px"}} data-aos="zoom-in">
            {/* Most Trusted IVF Clinic in {" "}
            {center?.center_name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} */}
              Trusted Clinic
          </h2>
        </div>
        <div className="hedy d-block d-md-none noth moth">
          {/* <h2 className="heading-text" data-aos="zoom-in">Most Trusted {term.toUpperCase()} Clinic<br /> in {masterRow.center_name}</h2> */}
          <h2 className="heading-text mb-3" style={{marginBottom: "10px"}} data-aos="zoom-in">
            {/* Most Trusted IVF Clinic in {" "}
            {center?.center_name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} */}
              Trusted Clinic
          </h2>
        </div>

        <div className="row justify-content-center pt-1 pb-1">
          <div className="col-2 p-0">
            <Image
              src={Google}
              alt="google"
              className="w-100 lazy-load"
            />
          </div>
          <div className="col-2 p-0">
            <Image
              src={facebook}
              alt="facebook"
              className="w-100 lazy-load"
            />
          </div>
          <div className="col-2 p-0">
            <Image
              src={Justdial}
              alt="Justdial"
              className="w-100 lazy-load"
            />
          </div>
          <div className="col-2 p-0">
            <Image
              src={lybrate}
              alt="lybrate"
              className="w-100 lazy-load"
            />
          </div>
          <div className="col-2 p-0">
            <Image
              src={practo}
              alt="practo"
              className="w-100 lazy-load"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedIVFClinic;
