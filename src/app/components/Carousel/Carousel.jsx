"use client";
import React from "react";
import Image from "next/image";

const Carousel = ({ masterRow, root, center }) => {
  return (
    <section id="choose-fertility" className="section-heading-so">
      <div className="container ">
        <h2 className="heading-text text-center mb-3">
          HOMEOPATHY TREATMENT FOR DIABETES MELLITUS:
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* 1. Comprehensive Diabetes Management */}
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
                <Image
                  src={"/img/icons/Clinical-Excellence-01-01-01-1.png"} // Update with appropriate image
                  alt="Comprehensive Diabetes Management"
                  height={100}
                  width={100}
                />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Comprehensive Management</p>
                <p className="card-text">
                  Diabetes treatment encompasses lifestyle and dietary modifications in addition to medications. At Dr. Care Homeopathy, we integrate these elements to provide a holistic approach to managing diabetes effectively.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Homeopathy: Addressing Root Causes */}
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
                <Image
                  src={"/img/icons/Clinical-Excellence-01-01-01-2.png"} // Update with appropriate image
                  alt="Addressing Root Causes"
                  height={100}
                  width={100}
                />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Addressing Root Causes</p>
                <p className="card-text">
                  While conventional hormonal medicines regulate blood sugar levels, they often overlook the underlying causes of diabetes. Homeopathy focuses on the patient&apo;ss physical, mental, and emotional symptoms to not only maintain hormonal balance but also eliminate the root causes of the disorder.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Experienced and Dedicated Team */}
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
                <Image
                  src={"/img/icons/Clinical-Excellence-01-01-01-3.png"} // Update with appropriate image
                  alt="Experienced and Dedicated Team"
                  height={100}
                  width={100}
                />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Dedicated Team</p>
                <p className="card-text">
                  Our team of well-experienced doctors and dynamic medicines at Dr. Care Homeopathy have successfully aided numerous individuals in leading healthy and normal lives. We prioritize personalized care tailored to each patient&apo;ss unique needs.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Get in Touch with Us */}
          <div className="col">
            <div className="card choose-fertility-card h-100 text-center shadow-sm p-3">
              <div className="circle-icon mx-auto d-flex align-items-center justify-content-center">
                <Image
                  src={"/img/icons/Clinical-Excellence-01-01-01-4.png"} // Update with appropriate image
                  alt="Get in Touch"
                  height={100}
                  width={100}
                />
              </div>
              <div className="card-body">
                <p className="card-title avail-emi">Get in Touch</p>
                <p className="card-text">
                  For more information about the treatments and services offered by Dr. Care Homeopathy, please call us at <strong>07337557853</strong>. Let us help you embark on your journey to better health today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
