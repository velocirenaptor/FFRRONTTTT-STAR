import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/slider.css'; // Import custom styles for the slider

function SliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section className="slider_section">
      <div className="slider_container">
        <Slider {...settings}>

          <div className="carousel-item">
          <img src="https://res.cloudinary.com/dd9lx460j/image/upload/v1715581669/starcases/cases/340027479_1579365192582905_6240504213468964329_n_u6kx6x.jpg" className="img-1" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h1>¡Bienvenido a Starcases!</h1>
                <p>¡Somos un emprendimiento pequeño que busca dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México despuésmente!</p>
                <button className="boton" a href="https://www.instagram.com/star_cases.e/" >Contacto</button>
            </div>
          </div>

          <div className="carousel-item">
          <img src="https://res.cloudinary.com/dd9lx460j/image/upload/v1715582069/starcases/cases/downloaded_image_iqdq8d.jpg" className="img-2" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h1>¡Bienvenido a Starcases!</h1>
                <p>¡Somos un emprendimiento pequeño que busca dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México despuésmente!</p>
                <button className="boton" a href="https://www.instagram.com/star_cases.e/" >Contacto</button>
            </div>
          </div>

          <div className="carousel-item">
          <img src="https://res.cloudinary.com/dd9lx460j/image/upload/v1715582095/starcases/cases/363292057_299999395876626_7985253898066853657_n_yz3lrm.jpg" className="img-3" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h1>¡Bienvenido a Starcases!</h1>
                <p>¡Somos un emprendimiento pequeño que busca dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México despuésmente!</p>
                <button className="boton" a href="https://www.instagram.com/star_cases.e/" >Contacto</button>
            </div>


          </div>
        </Slider>
      </div>
    </section>
  );
}

export default SliderSection;
