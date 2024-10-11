"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";

const BeforeAfter = ({ beforeAfter }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: {
        // nextEl: ".swiper-button-next-1",
        // prevEl: ".swiper-button-prev-1",
      },
      pagination: false,
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
            box-shadow: 0 3.583px 3.583px 0 #6f62780d;
            height: 30px;
          }
          .swiper-button-next-1::after,
          .swiper-button-prev-1::after {
            content: "";
          }
          .swiper-button-next-1 svg,
          .swiper-button-prev-1 svg {
            display: none;
          }
          .swiper-pagination-bullet {
            display: none;
          }
        `,
      ],
    };

   
    swiperContainer.initialize();
  }, []);

  return (
    <section className="section-heading-so sec-bg1">
      <div className="container">
        <h2 className="heading-text" data-aos="zoom-in">
          Before and After
        </h2>

        <div className="carousel-wrap">
          <div className="before-after-slider">
            <swiper-container
              ref={swiperElRef}
              slides-per-view="auto" // Change to "auto"
              init="false"
              navigation="true"
              pagination="false"
              space-between={30}
              breakpoints={JSON.stringify({ 768: { slidesPerView: 3 } })}
            >
              {beforeAfter.map((item) => (
                <swiper-slide key={item.id} style={{ width: "auto" }}> {/* Set width to auto */}
                  <div className="item">
                    <div className="before-after-images">
                      <Image
                        loading="lazy"
                        src={item.imageUrlBefore}
                        alt={`${item.title} Before`}
                        layout="responsive" // Use responsive layout
                        width={300} // Use a reasonable width for your design
                        height={300} // Use a reasonable height for your design
                      />
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

export default BeforeAfter;
