"use client";
import React, { useRef, useEffect, useState } from "react";
import { TabContainer, TabContent, TabPane, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Image from "next/image";

// CardContent Component
function CardContent({ imageSrc, title, desc }) {
  const defaultImage = "https://via.placeholder.com/150"; // Default image URL

  return (
    <div className="card mobile-card-p h-100 d-flex flex-column">
      <div className="row g-0 align-items-center fertility-card-content flex-grow-1">
        {imageSrc && (
          <div className="col-12 col-md-4">
            <div className="icon-placeholder mx-auto treatment-img-card">
              <Image
                src={imageSrc || defaultImage}
                alt={title}
                className="img-fluid rounded treatment-img"
                height={200}
                width={300}
              />
            </div>
          </div>
        )}
        <div className={`col-12 ${imageSrc !== "" ? "col-md-8" : "col-md-12"}`}>
          <div className="card-body d-flex flex-column">
            <p className="card-title avail-emi text-center text-md-start">
              {title}
            </p>
            <div className="card-text text-md-start flex-grow-1">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FertilitySection Component
function FertilitySection({ tabsDataPass, title }) {
  const navRef = useRef(null);
  const [activeKey, setActiveKey] = useState(tabsDataPass[0]?.eventKey || "");

  useEffect(() => {
    const navLinks = navRef.current.querySelectorAll(".nav-link");

    const handleClick = (e, link) => {
      const tabWidth = link.offsetWidth;
      navRef.current.scrollBy({ left: tabWidth, behavior: "smooth" });
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => handleClick(e, link));
    });

    // Clean up event listeners on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", (e) => handleClick(e, link));
      });
    };
  }, []);

  return (
    <div id="f-section" style={{ padding: "20px 0px" }}>
      <h1 className="container heading-text text-black mb-3">
        Homeopathy Treatment For {title}
      </h1>

      <TabContainer
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
      >
        <Nav
          variant="tabs"
          className="container mt-3 mb-4 flex-nowrap justify-content-start justify-content-md-center"
          ref={navRef}
        >
          {tabsDataPass.map((tab) => (
            <Nav.Item key={tab.eventKey}>
              <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <TabContent style={{ backgroundColor: "#d7f4ff" }} className="pb-4 w-100">
          {tabsDataPass.map((tab) => (
            <TabPane key={tab.eventKey} eventKey={tab.eventKey}>
              <div className="row container justify-content-center g-4 mx-auto">
                {tab.content &&
                  tab.content.map((content, index) => {
                    // Determine the column class based on the number of content items
                    const isSingle = tab.content.length === 1;
                    const columnClass = isSingle
                      ? "col-12"
                      : "col-12 col-lg-6 col-md-6";

                    return (
                      <div key={index} className={`${columnClass} `}>
                        <CardContent
                          imageSrc={content.imageSrc}
                          title={content.title}
                          desc={content.desc}
                        />
                      </div>
                    );
                  })}
              </div>
            </TabPane>
          ))}
        </TabContent>
      </TabContainer>
    </div>
  );
}

export default FertilitySection;
