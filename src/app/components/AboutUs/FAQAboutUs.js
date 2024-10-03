"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";

const faq1 = [
  {
    question: "Vision",
    answer:
      "To be the trusted experts and leaders in providing evidence based fertility treatments with compassion.",
  }
];

const faq2 = [
  {
    question: "Mission",
    answer:
      "To offer accessible, affordable, informative, compassionate and quality healthcare for couples hoping to be parents by combining evidence based treatments with the latest advances in medical technology.",
  }
];

const FAQAboutUs = () => {
  return (
    <section className="section-heading-so">
      <div className="container">

        <div className="accordion pt-3" id="accordionExample">
          <div className="row">
            <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                {faq1.map((faqItem, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faqItem.question}</Accordion.Header>
                    <Accordion.Body>{faqItem.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                {faq2.map((faqItem, index) => (
                  <Accordion.Item eventKey={(index + 5).toString()} key={index}>
                    <Accordion.Header>{faqItem.question}</Accordion.Header>
                    <Accordion.Body>{faqItem.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAboutUs;
