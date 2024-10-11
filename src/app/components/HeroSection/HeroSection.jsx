"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import StatisticBar from "./StatisticBar";
import LeadForm from "../LeadForm/LeadForm";
import "./FreeBanner.css";
import { splitHeading } from "@/utils/splitHeading";
import free from '../../../../public/img/Free-001.png';

const HeroSection = ({ diseaseInfo }) => {
  const { heading, imageUrl, mobileImgUrl } = diseaseInfo; // Destructure heading and imageUrl from diseaseInfo
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(window.innerWidth);

      // Handler to update window width on resize
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Determine words per line based on window width
  const getWordsPerLine = () => {
    if (windowWidth < 576) return 2; // Extra small devices
    if (windowWidth < 768) return 2; // Small devices
    return 3; // Medium and larger devices
  };

  const wordsPerLine = getWordsPerLine();

  // Split the heading into lines
  const headingLines = splitHeading(heading, wordsPerLine);

  return (
    <>
      <section
        className="hero-banner"
        style={{
          backgroundImage: windowWidth < 768 ? `url(${mobileImgUrl})` : `url(${imageUrl})`, // Use mobile image for small devices
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="container">
          <div className="row align-items-start">
            {/* Hero Heading */}
            <div className="col-md-8">
              <div className="row">
                <div
                  className="d-sm-block hero-header"
                  style={{ height: "600px", display: 'flex', flexDirection: 'column', justifyContent: "center" }}
                >
                  <div>
                    <h1>
                      {headingLines.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index !== headingLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h1>
                  </div>
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

            {/* Only show mobile image on small screens */}
            {/* {windowWidth < 768 && (
              <div className="col-12 d-md-none" style={{ padding: "0px" }}>
                <div className="hero-header home mob-hero-bg">
                  <Image
                    src={mobileImgUrl}
                    alt="bg image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={50}
                    priority={true}
                    style={{ zIndex: "-1" }}
                  />
                </div>
              </div>
            )} */}

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
            <LeadForm />
          </div>
        </div>
      </section>
      <StatisticBar />
    </>
  );
};

export default HeroSection;
