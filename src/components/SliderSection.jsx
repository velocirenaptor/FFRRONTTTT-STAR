import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import '../css/slider.css';

function SliderSection() {
  useEffect(() => {
    const carousel = document.getElementById("carouselItem");
    const carouselInstance = new Carousel(carousel, {
      interval: 5000, // Set interval for sliding
      pause: "hover" // Pause the carousel on mouse hover
    });

    // Optionally, you can pause the carousel on mouse hover
    carousel.addEventListener("mouseover", () => {
      carouselInstance.pause();
    });
    
    carousel.addEventListener("mouseleave", () => {
      carouselInstance.cycle();
    });

    // Clean up function to destroy the carousel when the component unmounts
    return () => carouselInstance.dispose();
  }, []);

  return (
    <section className="slider_section">
      <div className="slider_container">
        <div id="carouselItem" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <img src="https://res.cloudinary.com/dd9lx460j/image/upload/v1715581669/starcases/cases/340027479_1579365192582905_6240504213468964329_n_u6kx6x.jpg" className="img-1" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h1>¡Bienvenido a Starcases!</h1>
                <p>¡Somos un emprendimiento pequeño que busca dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México despuésmente!</p>
                <a href="https://www.instagram.com/star_cases.e/">Contacto</a>
              </div>
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/dd9lx460j/image/upload/v1715582069/starcases/cases/downloaded_image_iqdq8d.jpg" className="img-2" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h1>¡Bienvenido a Starcases!</h1>
                <p>¡Somos un emprendimiento pequeño que busca dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México despuésmente!</p>
                <a href="https://www.instagram.com/star_cases.e/">Contacto</a>
              </div>
            </div>
            {/* Third Slide */}
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/dd9lx460j/image/upload/v1715582095/starcases/cases/363292057_299999395876626_7985253898066853657_n_yz3lrm.jpg" className="img-3" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h1>¡Bienvenido a Starcases!</h1>
                <p>¡Somos un emprendimiento pequeño que busca dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México despuésmente!</p>
                <a href="https://www.instagram.com/star_cases.e/">Contacto</a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselItem" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselItem" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
