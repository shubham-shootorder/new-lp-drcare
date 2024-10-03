"use client";

import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import StatisticBar from "./StatisticBar";
import LeadForm from "../LeadForm/LeadForm";
import "./FreeBanner.css";
import Free from "../../../../public/img/Free-01.png";
// import DesktopBanner from "../../../../public/img/Desktop_Bangalore-offer.jpg";
// import DesktopBanner from "../../../../public/img/new-banner-desktop.jpg";
import DesktopBanner from "../../../../public/img/new-banner-desktop.webp";
import Link from "next/link";
import LeadFormSF from "../LeadForm/LeadFormSF";
import LeadFormCopy from "../LeadForm/LeadFormcopy";
import LeadFormSFCopy from "../LeadForm/LeadFormSFcopy";

const formatServiceName = (service) => {
  if (service === "fertility") {
    return "Fertility";
  }
  return service.toUpperCase();
};

const HeroSectionU = ({
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
      <Carousel>
        {/* First Banner */}
        <Carousel.Item>
          <div className="hero-banner hero-overlay">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-md-8">
                  <div className="row">
                    <div className="d-none d-sm-block hero-header">
                      <div>
                        <h1>
                          Best {service ? formatServiceName(service) : "IVF"}{" "}
                          Clinic in{" "}
                          {center?.center_name
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </h1>
                        <h2 style={{ width: "50%" }}>
                          {!querySubTitle ? (
                            <>{center?.hero_title}</>
                          ) : (
                            <>
                              {querySubTitle} is inviting you to Oasis Fertility
                            </>
                          )}
                        </h2>
                      </div>
                      <div
                        className="col-md-7"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src={Free}
                          alt="test"
                          style={{ position: "relative", left: "-40px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 d-md-none d-block"
                  style={{ padding: "0px" }}
                >
                  <div
                    className="col-md-12 d-md-none d-block hero-header home mob-hero-bg"
                    style={{
                      background: "url(/img/mob-banner-so-min.webp)",
                    }}
                  >
                    <div>
                      <h1>
                        Best {service ? service.toUpperCase() : "IVF"} Clinic in{" "}
                        {center?.center_name
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </h1>
                      <h2>
                        {!querySubTitle ? (
                          <>{center?.hero_title}</>
                        ) : (
                          <>
                            {querySubTitle} is inviting you to Oasis Fertility
                          </>
                        )}
                      </h2>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "30%",
                        padding: "90px 0",
                      }}
                    >
                      <Link href={`tel:9437751812`}>
                        <Image src={Free} alt="test" />
                      </Link>
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
          </div>
        </Carousel.Item>

        {/* Second Banner */}
        <Carousel.Item>
          <div
            className="hero-banner"
            style={{
              position: "relative",
              backgroundImage: `url(${DesktopBanner.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row align-items-start">
                <div className="col-md-8">
                  <div className="row">
                    <div
                      className="d-none d-sm-block hero-header"
                      style={{ height: "400px" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="col-12 d-md-none d-block"
                  style={{ padding: "0px" }}
                >
                  <div
                    className="col-md-12 d-md-none d-block hero-header home mob-hero-bg"
                    style={{
                      background: "url(/img/Mobile-Banner_Janmastami.webp)",
                    }}
                  ></div>
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
                    <LeadFormSFCopy
                      service={service}
                      phoneNumber={center?.phone}
                      centerName={center?.center_name}
                      referal={referal}
                      refId={refId}
                    />
                  </>
                ) : (
                  <>
                    <LeadFormCopy
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
          </div>
        </Carousel.Item>
      </Carousel>
      
      <StatisticBar />
    </>
  );
};

export default HeroSectionU;
