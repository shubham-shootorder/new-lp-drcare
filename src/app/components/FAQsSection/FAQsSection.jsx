"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";

const faq1 = [
  {
    question: "Can I conceive with IVF even after 35?",
    answer:
      "Yes, IVF can help you conceive even after 35 with the help of advanced technologies like ERA & PGT-A.",
  },
  {
    question: "What is the duration of an IVF cycle?",
    answer: "The duration of an IVF cycle may vary from 6 to 12 weeks.",
  },
  {
    question: "Is the IVF procedure painful?",
    answer:
      "IVF is a painless procedure. You may experience minimal discomfort due to the injections that are used for IVF stimulation and egg pickup is done under anesthesia.",
  },
];

const faq2 = [
  {
    question: "How can I ensure a healthy baby with IVF?",
    answer:
      "PGT-A allows screening and selecting the best embryo without chromosomal abnormalities for embryo transfer. This helps you in having a healthy baby.",
  },
  {
    question: "Does IVF always result in twins?",
    answer:
      "No. Through SET (Single Embryo Transfer) an advanced technology, it is possible to have a single healthy baby through IVF.",
  },
];

const FAQsSection = () => {
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

export default FAQsSection;
