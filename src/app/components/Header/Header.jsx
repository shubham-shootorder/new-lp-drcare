import React from "react";
import Image from "next/image";

const Header = () => {
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
                    +91 7997993400
                  </a>
                  &nbsp; &nbsp;

                  {/* Book an Appointment button */}
                  <a
                    href="#book-appointment" // Replace with your booking link or section ID
                    className="btn btn-oasis-submit d-md-block d-none" // Adjust the button styling as needed
                    style={{ backgroundColor: "#FF0329", color: "white", padding: "8px 16px", borderRadius: "5px" }}
                  >
                    Book An Appointment
                  </a>

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
      </div>
    </>
  );
};

export default Header;
