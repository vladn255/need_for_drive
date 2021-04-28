import React from "react";
import PropTypes from "prop-types";

const SliderItem = ({ index, slide }) => {
  const { title, text, buttonColor, imgUrl } = slide;
  const styles = {
    backgroundImage: `url(..${imgUrl})`,
  };

  return (
    <article className="slider-item" key={index} style={styles}>
      <div className="slider-item__wrapper">
        <h2 className="slider-item__title">{title}</h2>
        <p className="slider-item__text">{text}</p>
        <button className={`button button--slider-item button--${buttonColor}`}>
          Подробнее
        </button>
      </div>
    </article>
  );
};

SliderItem.propTypes = {
  index: PropTypes.number.isRequired,
  slide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default SliderItem;
