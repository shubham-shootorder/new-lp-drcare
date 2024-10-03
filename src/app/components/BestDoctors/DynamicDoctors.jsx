"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Link from "next/link";
import "./doctorcard.css";
register();

const DynamicDoctors = ({
  term,
  masterRow,
  doctorsResult,
  root,
  center,
  service,
  filteredTestimonials,
}) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
      },
      pagination: true,
      loop: true,
      injectStyles: [
        `
          .swiper-button-next-2,
          .swiper-button-prev-2 {
            margin-top: -26px;
            position: absolute;
            top: 55%;
            color: #f96f17;
            background-color: #fff;
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 3.5833332538604736px 3.5833332538604736px 0 #6f62780d;
            height: 30px;
          }
          .swiper-button-prev-2 {
            background-image: url("/img/icons/box-arrow-in-left.svg");
            position: absolute;
            top: 50%;
            left: -40px;
            width: 45px;
            height: 45px;
            transform: translateY(-50%);
            margin-top: 0px;
          }

          .swiper-button-next-2 {
            background-image: url("/img/icons/right.svg");
            margin-top: 0px;
            position: absolute;
            top: 50%;
            right: -40px;
            width: 45px;
            height: 45px;
            transform: translateY(-50%);
          }
          .swiper-button-next-2::after,.swiper-button-prev-2::after {
            content: "";
         }
          .swiper-button-next-2 svg,.swiper-button-prev-2 svg {
            display: none;
         }
          .swiper-pagination-bullet {
            display: none;
          }
          @media (min-width: 768px) {
            .swiper-wrapper {
              justify-content: center;
            }
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="section-heading-so so-fix">
      <div className="container">
        <h2 className="heading-text mb-2" data-aos="zoom-in">
          Best Fertility
          {service && service !== "fertility"
            ? service.toUpperCase()
            : " IVF"}{" "}
          Doctors in{" "}
          {center?.center_name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h2>

        <p
          className="text-center"
          style={{ color: "#54495C", padding: "10px !important" }}
          data-aos="fade-up"
        >
          An expert team led by experienced doctors, best embryologists, and personal IVF coordinator, keeping your health as a priority and ensuring the best results.
        </p>

        <div className="carousel-wrap">
          <div className="our-experts">
            <swiper-container
              id="swiper-container-1"
              ref={swiperElRef}
              init="false"
              slides-per-view="1"
              navigation="true"
              pagination="false"
              space-between={30}
              breakpoints={JSON.stringify({ 768: { slidesPerView: 4 } })}
            >
              {filteredTestimonials.map((testimonial) => (
                <swiper-slide key={testimonial.id}>
                  <div className="item doctor-slider">
                    <Image
                      loading="lazy"
                      src={`/img/doctors/${testimonial.image}`}
                      alt="Doctor"
                      width={768}
                      height={600}
                    />
                    <div className="card-content">
                      <h4 className="doctor-card-name">{testimonial.name}</h4>
                      {testimonial?.qualification && (
                        <>
                          <p className="doctor-card-qual">
                            {testimonial?.qualification}
                          </p>
                        </>
                      )}
                      <p className="doctor-card-test">
                        {testimonial.designation}
                      </p>
                      <Link className="book-appoinment-link" href="#">
                        Book an Appointment
                      </Link>
                    </div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
            <div
              className="swiper-button-prev-2"
              tabIndex="0"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-container-1"
            ></div>
            <div
              className="swiper-button-next-2"
              tabIndex="0"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-container-1"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicDoctors;
