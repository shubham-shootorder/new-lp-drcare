import React from "react";
import Practo from "../../../../public/img/practo.svg"
import GoogleSvg from "../../../../public/img/google.svg"
import Pulse from "../../../../public/img/pulse.svg"
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
          <div className="col-4 p-0">
            <Image
              src={Practo}
              alt="practo"
              className="w-100 lazy-load"
            />
          </div>
          <div className="col-4 p-0">
            <Image
              src={GoogleSvg}
              alt="google"
              className="w-100 lazy-load"
            />
          </div>
          <div className="col-4 p-0">
            <Image
              src={Pulse}
              alt="pulse"
              className="w-100 lazy-load"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedIVFClinic;
