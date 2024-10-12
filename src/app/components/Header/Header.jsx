import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="header">
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
                  <a href="tel:+91 8019690003" className="wbtn d-md-block d-none">
                    +91 8019690003
                  </a>
                  &nbsp; &nbsp;
                  {/* WhatsApp icon - Visible on mobile only */}
                  <a
                    href={`https://api.whatsapp.com/send/?phone=8019690003&text&app_absent=0`}
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
