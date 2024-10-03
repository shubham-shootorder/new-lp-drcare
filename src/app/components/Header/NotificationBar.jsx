"use client";

import React, { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { css } from "@emotion/react";
import Modal from "react-bootstrap/Modal";
import ModalForm from "../LeadForm/ModalForm";

const NotificationBar = ({ center }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Calculate remaining time till midnight (12 AM) IST
  const calculateTimeLeft = () => {
    // Get current time in UTC
    const now = new Date();

    // Convert UTC time to IST by adjusting the time zone offset
    const currentISTTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    // Get the next midnight time in IST (12 AM next day)
    const nextMidnightIST = new Date(
      currentISTTime.getFullYear(),
      currentISTTime.getMonth(),
      currentISTTime.getDate() + 1, // Next day
      0, 0, 0, 0
    );

    // Calculate the difference in milliseconds
    const timeDifference = nextMidnightIST - currentISTTime;

    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="notificationBar" style={styles.notificationBar}>
        <span style={styles.text}>
          <strong>IVF OFFER</strong> | ENDS IN: {timeLeft.hours}H {timeLeft.minutes}M{" "}
          {timeLeft.seconds}S
        </span>
        <a
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleShow}
          style={styles.button}
          className={css`${shakeAnimation}`}
        >
          CALL NOW
        </a>
      </div>

      <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <h5 className="modal-title text-center" style={{ color: "#111" }}>
            Book Appointment
          </h5>
        </Modal.Header>
        <Modal.Body>
          <ModalForm
            service="ivf"
            phoneNumber={center?.phone}
            centerName={center?.center_name}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

const styles = {
  notificationBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    backgroundColor: "#fff",
    color: "#672658",
    gap: "20px",
    height: "30px",
  },
  text: {
    fontSize: "14px",
    fontWeight: "bolder",
    color: "#672658",
  },
  button: {
    padding: "2px 15px",
    backgroundColor: "#ff0329",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  },
};

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export default NotificationBar;
