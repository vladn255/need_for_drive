import React from "react";

import SliderCarousel from "../slider-carousel/slider-carousel.jsx";
import HeaderMenu from "../header-menu/header-menu.jsx";

const Main = () => {
  return (
    <div className="main-page">
      <header className="header container">

      </header>

      <main className="main-container">
        <section className="banner container">
          <div className="banner-header">
            <span className="banner-header__text">Need for drive</span>
            <span className="banner-header__city">Ульяновск</span>
          </div>

          <div className="banner-main">
            <p className="banner-main__title">Каршеринг</p>
            <p className="banner-main__name">Need for drive</p>
            <p className="banner-main__description">
              Поминутная аренда авто твоего города
            </p>
          </div>

          <button className="button button--reserve">Забронировать</button>

          <div className="banner-footer">
            <span className="banner-footer__copyright">
              &copy; 2016-2019 «Need for drive»
            </span>
            <span className="banner-footer__contacts">8 (495) 234-22-44</span>
          </div>
        </section>

        <section className="slider">
          <SliderCarousel />
        </section>
      </main>
    </div>
  );
};

export default Main;
