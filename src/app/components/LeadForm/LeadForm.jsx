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

    const fullname = document.getElementById("fullname").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const urlParams = new URLSearchParams(window.location.search);

    let sourceUtm = urlParams.get("utm_source") || "";
    let mediumUtm = urlParams.get("utm_medium") || "";
    let campaignUtm = urlParams.get("utm_campaign") || "";
    let contentUtm = urlParams.get("utm_content") || "";
    let termUtm = urlParams.get("utm_term") || "";

    try {
      const response = await axios.post("/api/data", {
        full_name: fullname,
        phone: mobile,
        others: `gender is ${gender} and age is ${age} city is ${city} health problem is ${healthProblem}`,
        service: urlPath,
        utm_source: sourceUtm,
        utm_medium: mediumUtm,
        utm_campaign: campaignUtm,
        utm_content: contentUtm,
        utm_term: termUtm,
      });

      setIsSubmitting(false);
      router.push("/thankyou");
    } catch (error) {
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
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  placeholder="Mobile Number"
                  type="text"
                  className="form-control"
                  id="mobile"
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
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    placeholder="Gender"
                    type="text"
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    placeholder="Age"
                    type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Describe Your Health Problem"
                className="form-control"
                id="healthProblem"
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
                  id="exampleCheck1"
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
