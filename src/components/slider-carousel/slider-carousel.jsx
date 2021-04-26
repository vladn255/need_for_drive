import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SLIDES } from "../../const.js";

import SliderItem from "../slider-item/slider-item.jsx";

const arrowLeftStyle = {
  position: "absolute",
  left: "28px",
  top: "50%",
  height: "44px",
  zIndex: "10",
};

const arrowRightStyle = {
  position: "absolute",
  right: "28px",
  top: "50%",
  height: "44px",
  zIndex: "10",
};

const ArrowLeft = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, ...arrowLeftStyle }}
      onClick={onClick}
    ></div>
  );
};

const ArrowRight = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, ...arrowRightStyle }}
      onClick={onClick}
    ></div>
  );
};

const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    dotsClass: "slider__nav",
    appendDots: (dots) => <ul className="slider__nav"> {dots} </ul>,
    customPaging: (i) => <div>{}</div>,
  };

  return (
    <>
      <div className="slider__wrapper">
        <Slider {...settings}>
          {SLIDES.map((slide, index) => (
            <SliderItem key={index.toString()} index={index} slide={slide} />
          ))}
        </Slider>
      </div>
    </>
  );
};

ArrowLeft.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

ArrowRight.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default SliderCarousel;
