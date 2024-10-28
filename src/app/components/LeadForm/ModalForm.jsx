"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LeadForm = ({}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [urlPath, setUrlPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrlPath(window.location.pathname);
    }
  }, []);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(""); // Updated for text input
  const [age, setAge] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [mobile, setMobile] = useState("+91");
  const mobileInputRef = useRef(null);
  const [city, setCity] = useState(""); // New state for City
  const [healthProblem, setHealthProblem] = useState(""); // New state for health problem description

  const handleMobileChange = (e) => {
    let value = e.target.value;
    if (value.length < 3) {
      value = "+91";
    } else if (!value.startsWith("+91")) {
      value = "+91" + value.replace(/^\+91/, "");
    }
    setMobile(value);

    const cursorPosition = mobileInputRef.current.selectionStart;
    setTimeout(() => {
      if (cursorPosition < 3) {
        mobileInputRef.current.setSelectionRange(3, 3);
      } else {
        mobileInputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    const cursorPosition = mobileInputRef.current.selectionStart;
    if (cursorPosition <= 3 && e.key === "Backspace") {
      e.preventDefault();
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Fetch values from the form
    const fullname = document.getElementById("fullnameModal").value;
    const email = document.getElementById("emailModal").value;
    const mobile = document.getElementById("mobileModal").value;
    const city = document.getElementById("cityModal").value;
    const healthProblem = document.getElementById("healthProblemModal").value;
  
    // Fetch UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const sourceUtm = urlParams.get("utm_source") || "";
    const mediumUtm = urlParams.get("utm_medium") || "";
    const campaignUtm = urlParams.get("utm_campaign") || "";
    const contentUtm = urlParams.get("utm_content") || "";
    const termUtm = urlParams.get("utm_term") || "";
  
    // Get the service from the URL path
    const urlPath = window.location.pathname;
  
    // Prepare the data payload for the PHP API
    const data = {
      full_name: fullname,
      phone: mobile,
      others: `health problem is ${healthProblem}`,
      email: email,
      location: city,
      service: urlPath,
      utm_source: sourceUtm,
      utm_medium: mediumUtm,
      utm_campaign: campaignUtm,
      utm_content: contentUtm,
      utm_term: termUtm,
    };
  
    try {
      // Call the PHP API on your server
      const response = await axios.post("https://drcarehomeopathy.in/lead_generation.php", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Response from PHP API:", response.data);
  
      setIsSubmitting(false);
      router.push("/lp/thankyou");
    } catch (error) {
      // Handle errors gracefully
      console.error("There was a problem with the form submission:", error);
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <>
      <div className="col-md-4 oasis-startjour frm">
        <h1 className="heading-text pb-2 d-md-none d-block" data-aos="zoom-in">
          Free Consultation
        </h1>
        <div className="oasis-form" data-aos="fade-up">
          <h1 className="heading-text pt-4 pb-1 d-none d-md-block" style={{ fontSize: "27px" }} data-aos="zoom-in">
            Free Consultation
          </h1>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="type" id="type" value="home" />
            <input type="hidden" name="utm_source" id="utm_source" />
            <input type="hidden" name="utm_campaign" id="utm_campaign" />
            <input type="hidden" name="utm_medium" id="utm_medium" />

            <div className="mb-3">
              <input
                placeholder="Full Name"
                type="text"
                className="form-control"
                id="fullnameModal"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Email"
                type="email"
                className="form-control"
                id="emailModal"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  placeholder="Mobile Number"
                  type="text"
                  className="form-control"
                  id="mobileModal"
                  name="mobile"
                  minLength="13"
                  maxLength="13"
                  value={mobile}
                  onChange={handleMobileChange}
                  onKeyDown={handleKeyDown}
                  ref={mobileInputRef}
                  required
                />
              </div>

              <div className="col-6">
                <input
                  placeholder="City"
                  type="text"
                  className="form-control"
                  id="cityModal"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Describe Your Health Problem"
                className="form-control"
                id="healthProblemModal"
                name="healthProblem"
                rows="3"
                value={healthProblem}
                onChange={(e) => setHealthProblem(e.target.value)}
                required
              />
            </div>

            <center>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="1"
                  name="terms"
                  id="exampleCheck1Modal"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I consent Dr Care to contact me
                </label>
              </div>

              {showErrorMessage && <p style={{ color: "red" }}>Please accept the consent.</p>}
            </center>

            <button
              type="submit"
              className="btn btn-oasis-submit mb-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeadForm;
