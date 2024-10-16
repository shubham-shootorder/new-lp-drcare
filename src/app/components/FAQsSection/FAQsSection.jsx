// /app/components/FAQsSection/FAQsSection.js

"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

const FAQsSection = ({ faqs }) => {
  // Split FAQs into two columns for better UI if there are multiple FAQs
  const midpoint = Math.ceil(faqs.length / 2);
  const firstColumnFAQs = faqs.slice(0, midpoint);
  const secondColumnFAQs = faqs.slice(midpoint);

  return (
    <section className="section-heading-so">
      <div className="container">
        <h2 className="heading-text mb-3" data-aos="zoom-in">
          FAQs
        </h2>

        <div className="accordion" id="accordionExample">
          <div className="row">
            <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                {firstColumnFAQs.map((faqItem, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faqItem.question}</Accordion.Header>
                    <Accordion.Body>{faqItem.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                {secondColumnFAQs.map((faqItem, index) => (
                  <Accordion.Item
                    eventKey={(index + midpoint).toString()}
                    key={index + midpoint}
                  >
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

// PropTypes for type checking
FAQsSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQsSection;
