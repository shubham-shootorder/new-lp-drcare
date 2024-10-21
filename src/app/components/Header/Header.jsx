"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import ModalForm from "../LeadForm/ModalForm";

const Header = ({diseaseInfo}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="header" style={{ backgroundColor: "red" }}>
        <header>
          <nav className="navbar">
            <div className="container align-items-center">
              <a className="navbar-brand" href="#">
                <Image
                  src={`/img/logo.svg`}
                  alt="logo"
                  width={172}
                  height={60}
                />
              </a>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <a href="tel:+91 7997993400" className="wbtn d-md-block d-none">
                    {diseaseInfo?.phone}
                  </a>
                  &nbsp; &nbsp;

                  {/* Book an Appointment button */}
                  <button
                    onClick={handleShow} // Add the onClick event here
                    className="btn btn-oasis-submit d-md-block d-none" // Adjust the button styling as needed
                    style={{ backgroundColor: "#FF0329", color: "white", padding: "8px 16px", borderRadius: "5px" }}
                  >
                    Book Appointment
                  </button>

                  {/* WhatsApp icon - Visible on mobile only */}
                  <a
                    href={`https://api.whatsapp.com/send/?phone=7997993400&text&app_absent=0`}
                    className="whatsupchat d-block d-md-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/img/WhatsApp.svg`}
                      alt="whatsapp-icon.png"
                      className="img-fluid whatsaap-icon"
                      width={36}
                      height={36}
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <Modal show={showModal} onHide={handleClose} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton>
            <h5 className="modal-title text-center" style={{ color: "#111" }}>
              Book Appointment
            </h5>
          </Modal.Header>
          <Modal.Body>
            <ModalForm
              service="ivf"
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Header;
