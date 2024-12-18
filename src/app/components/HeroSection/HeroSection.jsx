"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import StatisticBar from "./StatisticBar";
import LeadForm from "../LeadForm/LeadForm";
import "./FreeBanner.css";
import { splitHeading } from "@/utils/splitHeading";
import free from '../../../../public/img/Free-001.png';

const HeroSection = ({ diseaseInfo }) => {
  const { heading, imageUrl, mobileImgUrl } = diseaseInfo; 
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getWordsPerLine = () => {
    if (windowWidth < 576) return 3;
    if (windowWidth < 768) return 2;
    return 3;
  };

  const wordsPerLine = getWordsPerLine();
  const headingLines = splitHeading(heading, wordsPerLine);

  return (
    <>
      <section
        className="hero-banner"
        style={{
          backgroundImage: windowWidth >= 768 ? `url(${imageUrl})` : "none", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="container">
          <div className="row align-items-start">

            {/* Mobile image with heading overlay */}
            {windowWidth < 768 && (
              <div className="col-12 d-md-none" style={{ position: "relative", padding: "0px" }}>
                {/* Mobile image */}
                <div className="hero-header home mob-hero-bg">
                  <Image
                    src={mobileImgUrl}
                    alt="Mobile Background"
                    width={600}
                    height={800}
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    style={{ zIndex: "-1" }}
                  />
                </div>
                
                {/* Heading overlay */}
                <div style={{
                  position: "absolute", 
                  bottom: "-72%", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)", 
                  textAlign: "center", 
                  color: "#fff",
                  padding: "10px",
                  width: "100%",
                  zIndex: "1",
                }}>
                  <h1>
                    {headingLines.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== headingLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>

                  {/* Free image below heading */}
                  <div style={{ marginTop: "196px" }}>
                    <Image
                      src={free}
                      alt="Free offer"
                      width={300}
                      height={0}
                      style={{ margin: "0 auto" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Desktop view heading */}
            {windowWidth >= 768 && (
              <div className="col-md-8">
                
                <div className="row">
                  <div
                    className="d-sm-block hero-header"
                    style={{ height: "400px", display: 'flex', flexDirection: 'column', justifyContent: "center" }}
                  >
                    
                    <h1>
                      {headingLines.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index !== headingLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h1>
                    <div className="col-md-7" style={{ position: "relative" }}>
                      <Image
                        src={free}
                        alt="test"
                        height={0}
                        width={300}
                        style={{ position: "relative", left: "0px", top: "30px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hero Bottom center bar */}
            <div className="col-md-12 d-md-none d-block">
              <div
                className="row oasis-stats text-center align-items-top"
                data-aos="fade-up"
                style={{ margin: "0 auto" }}
              >
                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                  <h3>33+</h3>
                  <p >Clinics</p>
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
            <LeadForm />
          </div>
        </div>
      </section>
      <StatisticBar />
    </>
  );
};

export default HeroSection;
