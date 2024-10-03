"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LeadForm from "../LeadForm/LeadForm";
import ModalForm from "../LeadForm/ModalForm";
import Image from "next/image";
import NotificationBar from "../Header/NotificationBar";
import ModalFormSF from "../LeadForm/ModalFormSF";

const FloatBottom = ({ center, referal, refId, testlp = false }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="footer-notification">
        <NotificationBar />
      </div>
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
          <a href={center?.phone}>
            <b>CALL US </b> NOW
            <br />
            {center?.phone.replace("tel:", "")}
          </a>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <h5 className="modal-title text-center" style={{ color: "#111" }}>
            Book Appointment
          </h5>
        </Modal.Header>
        <Modal.Body>
          {/* Render the LeadForm component here */}
          {/* <LeadForm service="ivf" /> */}
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

export default FloatBottom;
