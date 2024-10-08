import React from "react";
import Image from "next/image";
import NotificationBar from "./NotificationBar";

const Header = () => {
  // const phoneNumber = phone.replace('tel:', '');
  return (
    <>
      <div className="header">
        {/* <NotificationBar center={center} /> */}
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
                <div className="d-flex">
                  <a href="tel:+91 90115166994" className="wbtn d-md-block d-none">
                    +91 9011516694
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href={`https://api.whatsapp.com/send/?phone=7992979929&text&app_absent=0`}
                    className="whatsupchat"
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
