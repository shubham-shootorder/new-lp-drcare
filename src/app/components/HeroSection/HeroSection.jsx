"use client";

import React, { useState } from "react";
import Image from "next/image";
import StatisticBar from "./StatisticBar";
import LeadForm from "../LeadForm/LeadForm";
import "./FreeBanner.css";
import Free from "../../../../public/img/Free-01.png";
import Link from "next/link";
import LeadFormSF from "../LeadForm/LeadFormSF";

const formatServiceName = (service) => {
  if (service === "fertility") {
    return "Fertility";
  }
  return service.toUpperCase();
};

const HeroSection = ({
  root,
  term,
  masterRow,
  states,
  center,
  service,
  querySubTitle = "",
  referal = false,
  refId,
  testlp = false,
}) => {
  return (
    <>
      <section
        className="hero-banner"
        style={{
          backgroundImage: `url(${center?.backgroundImage})`, // Dynamically set background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          zIndex: '1',
          // Use !important to override CSS classes

        }}
      >
        <div className="container">
          <div className="row align-items-start">
            {/* Hero Heading */}

            <div className="col-md-8">
              <div className="row">
                <div
                  className="d-none d-sm-block hero-header"
                  style={{ height: "400px" }}
                >
                  <div>
                    <h1>Diabetes Relief Through <br/>Homeopathy Solutions</h1>
                  </div>
                  <div className="col-md-7" style={{ position: "relative" }}>
                    {/* <Image
                      src={Free}
                      alt="test"
                      height={0}
                      width={300}
                      style={{ position: "relative", left: "0px", top: "30px" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 d-md-none d-block" style={{ padding: "0px" }}>
              <div className="col-md-12 d-md-none d-block hero-header home mob-hero-bg">
                <Image
                  src="/img/mob-banner-so-min.webp"
                  alt="bg image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={50}
                  priority={true}
                  style={{ zIndex: "-1" }}
                />
                <div className="d-flex flex-column" style={{ justifyContent: 'space-between', height: "310px" }}>
                  <div>
                    <h1>
                      Best {service ? service.toUpperCase() : "IVF"} Clinic in{" "}
                      {center?.center_name_heading
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </h1>
                    <h2>
                      {!querySubTitle ? (
                        <>{center?.hero_title}</>
                      ) : (
                        <>{querySubTitle} is inviting you to Oasis Fertility</>
                      )}
                    </h2>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "0" }}>
                    <Link href={`tel:9437751812`}>
                      <Image
                        src={Free}
                        alt="test"
                        loading="lazy"
                        height={90}
                        width={0}
                        priority={false}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Bottom center bar */}
            <div className="col-md-12 d-md-none d-block">
              <div
                className="row oasis-stats text-center align-items-top"
                data-aos="fade-up"
                style={{ margin: "0 auto" }}
              >
                <div className="col-3">
                  <h3>33+</h3>
                  <p>Clinics</p>
                </div>
                <div className="col-3">
                  <div className="hedy d-block d-md-none noth moth">
                    <h3>44 Lakhs</h3>
                    <p>Patients</p>
                  </div>
                </div>
                <div className="col-3">
                  <h3>300+</h3>
                  <p>Doctors</p>
                </div>
                <div className="col-3">
                  <h3>20 Years</h3>
                  <p>Experience</p>
                </div>
              </div>
            </div>

            {/* Hero section form */}
            {testlp ? (
              <LeadFormSF
                service={service}
                phoneNumber={center?.phone}
                centerName={center?.center_name}
                referal={referal}
                refId={refId}
              />
            ) : (
              <LeadForm
                service={service}
                phoneNumber={center?.phone}
                centerName={center?.center_name}
                referal={referal}
                refId={refId}
              />
            )}
          </div>
        </div>
      </section>
      <StatisticBar />
    </>
  );
};

export default HeroSection;
