import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true, // Muestra indicadores de navegación
    arrows: true, // Muestra flechas de navegación
    infinite: true, // Permite navegación infinita
    speed: 900, // Velocidad de transición
    slidesToShow: 1, // Muestra 1 slide a la vez
    slidesToScroll: 1, // Se mueve de uno en uno
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000,
    pauseOnHover: false, // Velocidad del autoplay (ms)

  };

  return (
    <Slider  className="carrusel" {...settings}>
      <div><img src="./src/assets/imgs/Java-logo.png" alt="1" /></div>
      <div><img src="./src/assets/imgs/JavaScript-logo.png" alt="2"/></div>
      <div><img src="./src/assets/imgs/PHP-logo.svg.png" alt="3"/></div>
    </Slider>
  );
};




