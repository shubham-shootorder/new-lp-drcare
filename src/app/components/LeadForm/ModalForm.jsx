"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import oa_state from "@/state";
import axios from "axios";
import centerCity from "@/center-city";

const ModalForm = ({
  service,
  phoneNumber,
  centerName,
  referal = false,
  refId,
}) => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [branches, setBranches] = useState([]);
  const [datetime] = useState(new Date().toISOString().split("T")[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Form Lead
  const [fullname, setFullname] = useState("");
  const [referalField, setReferalField] = useState("");
  // const [mobile, setMobile] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [ageOptions, setAgeOptions] = useState([]);

  // const handleStateChange = (e) => {
  //   const selectedValue = parseInt(e.target.value);
  //   setSelectedState(selectedValue);
  //   const filteredBranches = centerCity.filter(
  //     (center) => center.state_id === selectedValue
  //   );
  //   setBranches(filteredBranches);
  // };

  // const handleBranchChange = (e) => {
  //   setSelectedBranch(e.target.value);
  // };

  const [mobile, setMobile] = useState("+91");
  const mobileInputRef = useRef(null);

  const handleMobileChange = (e) => {
    let value = e.target.value;

    // Handle the case where the user tries to delete part of the prefix
    if (value.length < 3) {
      value = "+91";
    } else if (!value.startsWith("+91")) {
      value = "+91" + value.replace(/^\+91/, "");
    }

    setMobile(value);

    // Update cursor position to ensure it doesn't go before the prefix
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
    // Disable backspace if cursor is at the start of the input
    if (cursorPosition <= 3 && e.key === 'Backspace') {
      e.preventDefault();
    }
  };

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    updateAgeOptions(selectedGender);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const updateAgeOptions = (selectedGender) => {
    let options = [];
    if (selectedGender === "Male") {
      options = generateAgeOptions(25, 45);
    } else if (selectedGender === "Female") {
      options = generateAgeOptions(20, 45);
    }
    setAgeOptions(options);
  };

  const generateAgeOptions = (start, end) => {
    let options = [];
    for (let i = start; i <= end; i++) {
      options.push(i);
    }
    return options;
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const stripPrefix = (number) => {
    return number.replace(/^\+91/, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Extract values from form fields
    const fullname = document.getElementById("fullname-mod").value;
    const mobile = document.getElementById("mobile-mod").value;
    const strippedMobile = stripPrefix(mobile);
    // const location = document.getElementById("location-mod").value;
    // const branch = document.getElementById("branch-mod").value;
    const gender = document.getElementById("gender-mod").value;
    const age = document.getElementById("age-mod").value;
    // const sourceUtm = document.getElementById("utm_source").value;
    // const mediumUtm = document.getElementById("utm_medium").value;
    // const campaignUtm = document.getElementById("utm_campaign").value;
    let referalFieldValue;
    if (referal) {
      referalFieldValue = document.getElementById("referalName").value;
    }

    // Extract UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    let sourceUtm = urlParams.get("utm_source");
    let mediumUtm = urlParams.get("utm_medium");
    let campaignUtm = urlParams.get("utm_campaign");
    let contentUtm = urlParams.get("utm_content");
    let termUtm = urlParams.get("utm_term");
    let campaignIdUtm = urlParams.get("campaignid");
    let adgroupIdUtm = urlParams.get("adgroupid");

    // If UTM parameters are null, set them to empty strings
    sourceUtm = sourceUtm ? sourceUtm : "";
    mediumUtm = mediumUtm ? mediumUtm : "";
    campaignUtm = campaignUtm ? campaignUtm : "";
    contentUtm = contentUtm ? contentUtm : "";
    termUtm = termUtm ? termUtm : "";
    campaignIdUtm = campaignIdUtm ? campaignIdUtm : "";
    adgroupIdUtm = adgroupIdUtm ? adgroupIdUtm : "";

    // Add more fields as
    // const stateName = oa_state.filter(
    //   (item) => item.state_id === Number(location)
    // );

    // const cityCenterName = centerCity.filter((item) => item.id === branch);
    // const sname = stateName[0]?.name;
    // const cname = cityCenterName[0]?.name;
    // const originValue = sourceUtm ? "paid" : "organic";
    let originValue = sourceUtm ? "paid" : "organic";
    if (
      centerName === "karnataka" ||
      centerName === "telangana" ||
      centerName === "andhrapradesh"
    ) {
      originValue = "Influencer";
    }

    // const selectYourBranch = `${cname}`;
    const selectYourBranch = centerName;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "userProvidedData",
      phone_number: mobile,
    });

    // Construct dataObject
    const dataObject = [
      { Attribute: "FirstName", Value: fullname },
      { Attribute: "mx_Gender", Value: gender },
      { Attribute: "mx_Age", Value: age },
      { Attribute: "mx_SelectYourBranch", Value: selectYourBranch },
      { Attribute: "Mobile", Value: strippedMobile },
      { Attribute: "Source", Value: sourceUtm },
      { Attribute: "mx_UTM_Campaign", Value: campaignUtm },
      { Attribute: "mx_UTM_Source", Value: sourceUtm },
      { Attribute: "mx_UTM_medium", Value: mediumUtm },
      { Attribute: "mx_UTM_Content", Value: contentUtm },
      { Attribute: "mx_UTM_Term", Value: termUtm },
      { Attribute: "mx_Source_Campaign_ID", Value: campaignIdUtm },
      { Attribute: "mx_Source_Adgroup_Id", Value: adgroupIdUtm },
      { Attribute: "Origin", Value: originValue },
      { Attribute: "mx_Appointment_Date", Value: datetime },
      { Attribute: "SearchBy", Value: "Mobile" },
    ];

    if (referal) {
      dataObject.push({ Attribute: "Notes", Value: referalFieldValue });
      // dataObject.push({ Attribute: "Source", Value: "Live Birth" });
      dataObject.push({ Attribute: "Subsource", Value: "WhatsApp" });
      // dataObject.push({ Attribute: "Origin", Value: refId });
      dataObject.find((item) => item.Attribute === "Source").Value =
        "Live Birth";
      // dataObject.find(item => item.Attribute === "Subsource").Value = "WhatsApp";
      dataObject.find((item) => item.Attribute === "Origin").Value = refId;
    }

    // Make API call
    try {
      const accessKey = "u$r28bf3b3ba19df2ce87f563a0c9e7d95d";
      const secretKey = "eb6eaef1c9fc31bceaf852a72b99a3b827883261";
      const url = `https://api.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?&accessKey=${accessKey}&secretKey=${secretKey}`;
      // const url = `https://api.leadsquared.com/v2/LeadManagement.svc/Lead.CreateOrUpdate?postUpdatedLead=false&accessKey=${accessKey}&secretKey=${secretKey}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataObject),
      });

      if (response.ok) {
        setIsSubmitting(false);
        // router.push("/lp/thankyou", { scroll: false });
        window.location.href = "https://oasisindia.in/thank-you";
        e.target.reset();
      } else {
        setIsSubmitting(false);
        setShowErrorMessage(true);
        console.error("Failed to capture lead:", response.statusText);
      }
    } catch (error) {
      setIsSubmitting(false);
      setShowErrorMessage(true);
      console.error("Error capturing lead:", error);
    }
  };

  return (
    <>
      <div className="col-md-4 oasis-startjour frm">
        <h1 className="heading-text pb-2 d-md-none d-block" data-aos="zoom-in">
          {/* Affordable {service ? service.toUpperCase() : "IVF"} Cost */}
          Free Consultation
        </h1>

        <div className="oasis-form" data-aos="fade-up">
          <h1
            className="heading-text pt-4 pb-1 d-none d-md-block"
            style={{ fontSize: "27px" }}
            data-aos="zoom-in"
          >
            {/* Affordable {service ? service.toUpperCase() : "IVF"} Cost */}
            Free Consultation
          </h1>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="type" id="type-mod" value="home" />
            <input type="hidden" name="utm_source" id="utm_source-mod" />
            <input type="hidden" name="utm_campaign" id="utm_campaign-mod" />
            <input type="hidden" name="utm_medium" id="utm_medium-mod" />
            <div className="mb-3">
              <input
                placeholder="Full Name"
                type="text"
                className="form-control"
                id="fullname-mod"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Mobile Number"
                type="text"
                className="form-control"
                id="mobile-mod"
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
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <select
                    className="form-select"
                    name="gender"
                    id="gender-mod"
                    required
                    onChange={handleGenderChange}
                    value={gender}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    id="age-mod"
                    name="age"
                    required
                    value={age}
                    onChange={handleAgeChange}
                    disabled={!gender}
                  >
                    <option value="">Age</option>
                    {ageOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {referal && (
              <>
                <div className="mb-3">
                  <input
                    placeholder="Name of your friend/Referrer to Oasis"
                    type="text"
                    className="form-control"
                    id="referalName"
                    name="referalName"
                    value={referalField}
                    onChange={(e) => setReferalField(e.target.value)}
                  />
                </div>
              </>
            )}
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
                  onChange={handleTermsChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I consent Dr Care to contact me
                </label>
              </div>
            </center>
            <button
              type="submit"
              id="form-submit"
              className="btn btn-oasis-submit mb-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Request call back!"}
            </button>
          </form>
          {showErrorMessage && (
            <>
              <p
                style={{
                  color: "#FF0329",
                  textAlign: "center",
                  fontWeight: "bold",
                  padding: "0 10px 10px 10px",
                  fontSize: "12px",
                }}
              >
                Error in submission! Please call
                <a
                  href={phoneNumber}
                  className="wbtn d-md-block"
                  style={{ color: "#672658", padding: "0 0 0 5px" }}
                >
                  {phoneNumber?.replace("tel:", "")}
                </a>
              </p>
            </>
          )}
          {/* <div className="form-footer text-center">
            <p className="avail-emi">
              Avail 0% interest on <b>EMI</b>
            </p>
            <p>All Procedures | No Upper Limit</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ModalForm;
