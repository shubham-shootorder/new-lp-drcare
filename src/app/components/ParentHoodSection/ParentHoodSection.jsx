"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageParent from "../../../../public/img/baby-girl.webp";
import Modal from "react-bootstrap/Modal";
import LeadForm from "../LeadForm/LeadForm";
import ModalForm from "../LeadForm/ModalForm";
import ModalFormSF from "../LeadForm/ModalFormSF";

const ParentHoodSection = ({ center, referal, refId, testlp = false }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="section-heading-so">
        <div className="container">
          <div className="row pt-4 nsec">
            <div className="col-md-8">
              <div className="new-content">
                <h2
                  className="heading-text"
                  style={{ marginBottom: "16px" }}
                  data-aos="zoom-in"
                >
                  Parenthood Dreams. Fulfilled and Delivered.
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  Overcome your challenges effortlessly with our
                  top-tier  experts and personalized treatment plans
                  that suit best for you.
                </p>
                <a onClick={handleShow} className="btn">
                  Book Appointment
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="new-image">
                {/* <center><img loading="lazy" src={`${root}assets/img/baby-girl.webp`} alt="icons" width="100%" /></center> */}
                <center>
                  <Image src={ImageParent} alt="icons" />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <h5 className="modal-title text-center" style={{ color: "#111" }}>
            Book Appointment
          </h5>
        </Modal.Header>
        <Modal.Body>
          {/* Render the LeadForm component here */}
          {testlp ? (
            <>
              <ModalFormSF
                service="ivf"
                phoneNumber={center?.phone}
                centerName={center?.center_name}
                referal={referal}
                refId={refId}
              />
            </>
          ) : (
            <>
              <ModalForm
                service="ivf"
                phoneNumber={center?.phone}
                centerName={center?.center_name}
                referal={referal}
                refId={refId}
              />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ParentHoodSection;
