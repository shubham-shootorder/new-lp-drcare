"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import LeadForm from "@/app/components/LeadForm/LeadForm";

const ThankyouComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
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
                <a
                  href="https://api.whatsapp.com/send/?phone=917992979929&text&app_absent=0"
                  className="whatsupchat"
                  target="blank"
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
          </nav>
        </header>
        <section className="thank-yousec" style={{ marginTop: "50px",minHeight:"70vh",display:"flex",justifyContent:"center",alignItems:"center" }}>
          <div className="container">
            <h1 className="heading-text">THANK YOU.</h1>
            <p className="text-center text-black">
              <b>Welcome to the journey towards parenthood.</b>
            </p>
            <center>
              {" "}
              <div className="title-strip" />{" "}
            </center>
            <p className="text-center text-black">
              {" "}
              You’ll soon receive a call from Dr Care
              <Image
                src={`/img/verified.svg`}
                alt="verified"
                className="img-fluid whatsaap-icon"
                width={36}
                height={36}
              />
              number on &nbsp;{" "}
              <Image
                src={`/img/truecall.svg`}
                alt="verified"
                className="img-fluid whatsaap-icon"
                width={150}
                height={36}
              />{" "}
            </p>
          </div>
        </section>
        <section className="thank-yousecsss" style={{ display: "none" }}>
          <div className="container">
            <p className="text-center text-black">
              To receive emails from us regarding offers and promotions, we
              request you to fill in your email ID details below:
            </p>
            <form id="leadForm" action="save1.php" method="POST">
              <div className="row">
                {" "}
                <div className="col" />
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="col">
                  <button
                    type="submit"
                    id="formmm-submit"
                    className="btn btnnn-oasis-submit"
                  >
                    {" "}
                    Submit
                  </button>
                </div>
                <div className="col" />
              </div>
            </form>
          </div>
        </section>
        <div className="float-bottom  d-block d-md-none noth moth">
          <button className="float-btm-text1">
            <a
              href="#"
              onClick={handleShow}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <b>BOOK</b>
              <br /> APPOINTMENT
            </a>
          </button>
          <button className="float-btm-text2">
            <a href="tel:+918929901971">
              <b>CALL US </b>
              <br /> NOW
            </a>
          </button>
        </div>
        <footer className="pttt-4 pbbbbbb-5">
          <div className="container">
            <p className="text-center texttt-white">
              {" "}
              Please search
              {/* <Image
                src={`/img/map2.svg`}
                alt="verified"
                className="img-fluid whatsaap-icon"
                width={250}
                height={100}
              /> */}
              &nbsp; to save the location to easily reach for a
              free&nbsp;consultation.
            </p>
            <center>
              {" "}
              <div className="title-strippp" />{" "}
            </center>
            <h5 className="dtnn">
              © 2024 Dr Care. All rights reserved.{" "}
              <a
                href="https://drcarehomeopathy.com/privacy-policy/"
                target="_blank"
                style={{ textDecoration: "none", color: "#F58941" }}
              >
                Privacy Policy.
              </a>
            </h5>
          </div>
        </footer>
      </div>

      <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <h5 className="modal-title text-center" style={{ color: "#111" }}>
            Book Appointment
          </h5>
        </Modal.Header>
        <Modal.Body>
          {/* Render the LeadForm component here */}
          <LeadForm service="ivf" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ThankyouComponent;
