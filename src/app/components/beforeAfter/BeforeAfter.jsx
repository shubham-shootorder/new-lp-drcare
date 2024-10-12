"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const BeforeAfter = ({ beforeAfter }) => {
  const settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    arrows: true, // Display arrows for navigation
    prevArrow: <button className="slick-prev">&#8249;</button>, // Custom prev arrow
    nextArrow: <button className="slick-next">&#8250;</button>, // Custom next arrow
    responsive: [
      {
        breakpoint: 768, // Breakpoint for responsive design
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <section className="section-heading-so sec-bg1">
      <div className="container">
        <h2 className="heading-text" data-aos="zoom-in">
          Before and After
        </h2>

        <div className="carousel-wrap">
          <Slider {...settings}>
            {beforeAfter.map((item) => (
              <div key={item.id} className="item" style={{ margin: '0 15px',padding:"0px 20px" }}> {/* Add margin for gap */}
                <div className="before-after-images" style={{margin:"0px 20px"}}>
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
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
