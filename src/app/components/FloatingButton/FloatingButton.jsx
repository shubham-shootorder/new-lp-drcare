"use client";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import LeadForm from "../LeadForm/LeadForm";
import ModalForm from "../LeadForm/ModalForm";
import ModalFormSF from "../LeadForm/ModalFormSF";

const FloatingButton = ({center, referal, refId, testlp = false}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>    
    <div className="floating-btn d-none d-md-none d-lg-block">
      <a
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn button-primary-float"
      >
        <button
          id="backButtonTrigger"
          className="myBackButton"
          style={{
            backgroundColor: "#F58941",
            color: "#ffffff",
            border: "none",
            padding: "15px 20px"
          }}
          onClick={handleShow}
        >
          <style jsx>{`
            #backButtonTrigger:hover {
              background-color: #ffffff;
            }
          `}</style>
          Book Appointment
        </button>
      </a>
      {/* <a href="#get_form" className="btn button-primary-float">ENQUIRE NOW</a> */}
    </div>

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
              <LeadForm/>
            </>
          ) : (
            <>
              <LeadForm />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FloatingButton;
