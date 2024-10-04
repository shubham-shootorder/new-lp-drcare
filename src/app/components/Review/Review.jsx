"use client";
import Image from "next/image";
import React from "react";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

const Review = ({
  term,
  masterRow,
  testimonialsResult,
  root,
  center,
  service,
  filteredReview,
}) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      },
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next-1,
          .swiper-button-prev-1 {
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
          .swiper-button-prev-1 {
            background-image: url("/img/icons/box-arrow-in-left.svg");
            position: absolute;
            top: 50%;
            left: -40px;
            width: 45px;
            height: 45px;
            transform: translateY(-50%);
            margin-top: 0px;
          }

          .swiper-button-next-1 {
            background-image: url("/img/icons/box-arrow-in-right.svg");
            margin-top: 0px;
            position: absolute;
            top: 50%;
            right: -40px;
            width: 45px;
            height: 45px;
            transform: translateY(-50%);
          }
          .swiper-button-next-1::after,.swiper-button-prev-1::after {
            content: "";
         }
          .swiper-button-next-1 svg,.swiper-button-prev-1 svg {
            display: none;
         }
          .swiper-pagination-bullet{
            display: none;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="section-heading-so">
      <div className="container">
        <div className="d-none d-md-none d-lg-block">
          <h2 className="heading-text" data-aos="zoom-in">
            {/* Best Reviewed {term.toUpperCase()} Clinic in {masterRow.center_name && masterRow.center_name.charAt(0).toUpperCase() + masterRow.center_name.slice(1)} */}
            {/* Best Reviewed {service ? service.toUpperCase() : "IVF"} Clinic in{" "}
            {center?.center_name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} */}
              Hear from what our
              patients say.
          </h2>
        </div>
        <div className="hedy d-block d-md-none noth moth">
          <h2 className="heading-text" data-aos="zoom-in">
            {/* Best Reviewed {service ? service.toUpperCase() : "IVF"} Clinic in{" "}
            {center?.center_name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} */}
              Hear from what our
              patients say.
          </h2>
        </div>

        <div className="carousel-wrap">
          <div className=" google-reviews">
            <swiper-container
              ref={swiperElRef}
              slides-per-view="1"
              init="false"
              navigation="true"
              pagination="false"
              space-between={30}
              breakpoints={JSON.stringify({ 768: { slidesPerView: 3 } })}
            >
              {filteredReview?.map((testimonial) => (
                <swiper-slide key={testimonial.id}>
                  <div className="item">
                    <div className="logo-rating">
                      <Image
                        loading="lazy"
                        src={`/img/google-logo.svg`}
                        alt="google-logo"
                        className="google-logo lazy-load"
                        width={80}
                        height={80}
                      />
                      <Image
                        loading="lazy"
                        src={`/img/rating.svg`}
                        alt="rating"
                        className="w-50 lazy-load"
                        width={148}
                        height={22}
                      />
                    </div>
                    <div className="review-content">
                      <p>{testimonial.testimonial}</p>
                      <div className="age">
                        <h3>
                          {testimonial.name}, {testimonial.age}
                        </h3>
                        <h4>
                          {testimonial.location
                            .split(" ")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
            <div className="swiper-button-prev-1"></div>
            <div className="swiper-button-next-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
