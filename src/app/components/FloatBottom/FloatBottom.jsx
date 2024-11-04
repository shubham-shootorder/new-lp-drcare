"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalForm from "../LeadForm/ModalForm";
import Image from "next/image";
import LeadForm from "../LeadForm/LeadForm";

const FloatBottom = ({ diseaseInfo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="footer-notification">{/* <NotificationBar /> */}</div>
      <div className="float-bottom d-flex d-md-none noth moth">
        <button className="float-btm-text1">
          <a
            onClick={handleShow}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <b>BOOK</b>
            <br /> APPOINTMENT
          </a>
        </button>
        <button className="float-btm-text2">
          <a href={`tel:${diseaseInfo?.phone}`}>
            <b>CALL US </b> NOW
            <br />
            {/* {center?.phone.replace("tel:", "")} */}
          </a>
        </button>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=8019690003&text&app_absent=0"
        className="whatsapp-chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/img/WhatsApp.svg"
          alt="WhatsApp Icon"
          className="img-fluid whatsapp-icon"
          width={60}
          height={60}
        />
      </a>

      <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <h5 className="modal-title text-center" style={{ color: "#111" }}>
            Book Appointment
          </h5>
        </Modal.Header>
        <Modal.Body>
          <ModalForm/>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .whatsapp-chat {
          position: fixed;
          bottom: 20px; /* Adjust the distance from the bottom */
          right: 20px; /* Adjust the distance from the right */
          display: none; /* Hidden by default */
          z-index: 1000; /* Ensures it's above other content */
        }

        /* Show the WhatsApp button on desktop screens */
        @media (min-width: 768px) {
          .whatsapp-chat {
            display: block; /* Show on desktop */
          }
        }
      `}</style>
    </>
  );
};

export default FloatBottom;
