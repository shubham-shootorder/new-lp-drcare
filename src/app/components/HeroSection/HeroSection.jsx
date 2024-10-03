"use client";

import React, { useState } from "react";
import Image from "next/image";
import StatisticBar from "./StatisticBar";
import oa_state from "@/state";
import axios from "axios";
import centerCity from "@/center-city";
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
      <section className="hero-banner">
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
                    <h1 >
                      Best {service ? formatServiceName(service) : "IVF"} Clinic
                      in{" "}
                      {center?.center_name_heading
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </h1>
                    <h2 style={{ width: "50%",color:"black" }}>
                      {!querySubTitle ? (
                        <>{center?.hero_title}</>
                      ) : (
                        <>{querySubTitle} is inviting you to Oasis Fertility</>
                      )}
                    </h2>
                  </div>
                  <div className="col-md-7" style={{ position: "relative" }}>
                    <Image
                      src={Free}
                      alt="test"
                      height={0}
                      width={300}
                      style={{ position: "relative", left: "0px", top: "30px" }}
                    />
                    {/* <h3>{center?.additional_content}</h3>
                    <h4>{center?.title?.toUpperCase()}</h4> */}
                    {/* <div className="box_free_out">
                      <div className="box_free">
                        <span className="txt_free">
                          <span>FREE</span>
                          <span className="text-free-span">Consultation | Ultrasound | Registration</span>
                         </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 d-md-none d-block"
              style={{ padding: "0px" }}
            >
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
                <div className="d-flex flex-column" style={{justifyContent: 'space-between', height: "310px"}}>

                <div>
                  <h1>
                    Best {service ? service.toUpperCase() : "IVF"} Clinic in{" "}
                    {center?.center_name_heading
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h1>
                  {/* <h2>{center?.hero_title}</h2> */}
                  <h2>
                    {!querySubTitle ? (
                      <>{center?.hero_title}</>
                    ) : (
                      <>{querySubTitle} is inviting you to Oasis Fertility</>
                    )}
                  </h2>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "0",
                  }}
                >
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

              {/* <Image
                src={`/img/mob-banner-so-min.webp`}
                alt="mobilebanner"
                width={500}
                height={300}
              /> */}
            </div>
            {/* Hero Bottom center bar */}
            <div className="col-md-12 d-md-none d-block">
              <div
                className="row oasis-stats text-center align-items-top"
                data-aos="fade-up"
                style={{ margin: "0 auto" }}
              >
                <div className="col-3">
                  <h3>
                    <div data-from="0" data-to="100000">
                      1,00,000
                    </div>
                    +
                  </h3>
                  <p>
                    Healthy <br /> Babies
                  </p>
                </div>
                <div className="col-3">
                  <div className="d-none d-md-none d-lg-block">
                    <p>Success Rate Across India</p>
                  </div>
                  <div className="hedy d-block d-md-none noth moth">
                    <h3>
                      <div data-from="0" data-to="69">
                        69
                      </div>
                      %IVF
                    </h3>
                    <p>
                      Success Rate
                      <br /> Across India
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <h3>
                    <div data-from="0" data-to="1000">
                      1000
                    </div>
                    +Cases
                  </h3>
                  <p>
                    MicroTESE <br /> solving Male Infertility
                  </p>
                </div>
                <div className="col-3">
                  <h3>
                    <div data-from="0" data-to="32">
                      32 Centres
                    </div>
                  </h3>
                  <p>Across India</p>
                </div>
              </div>
            </div>
            {/* Hero section form */}
            {testlp ? (
              <>
                <LeadFormSF
                  service={service}
                  phoneNumber={center?.phone}
                  centerName={center?.center_name}
                  referal={referal}
                  refId={refId}
                />
              </>
            ) : (
              <>
                <LeadForm
                  service={service}
                  phoneNumber={center?.phone}
                  centerName={center?.center_name}
                  referal={referal}
                  refId={refId}
                />
              </>
            )}
          </div>
        </div>
      </section>
      <StatisticBar />
    </>
  );
};

export default HeroSection;
