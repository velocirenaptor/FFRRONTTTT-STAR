import React from 'react';
import LoginButton from '../components/LoginButton';
import '../css/style.css';
import '../css/bootstrap.css';
import '../css/responsive.css';
import { BrowserRouter } from 'react-router-dom';
import DisplayProduct from '../components/DisplayProduct';
import SliderSection from '../components/SliderSection';
import TestimonialSection from '../components/Testimonial';

function Home() {
  return (
    <div>

<SliderSection />

      <section className="shop_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>Lo más popular</h2>
    </div>
    <DisplayProduct />
    <div className="btn-box">
      <a href="">View All Products</a>
    </div>
  </div>
</section>


<section className="why_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        ¿Cómo personalizar?
      </h2>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="box">
          <div className="img-box">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
              <i className="fa-regular fa-image"></i>
            </svg>
          </div>
          <div className="detail-box">
            <h5>
              Elige
            </h5>
            <p>
              tu fotografía, imagen o diseño favorito.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="img-box">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.667 490.667" style={{enableBackground: 'new 0 0 490.667 490.667'}} xmlSpace="preserve">
              <i className="fa-solid fa-paint-roller"></i>
            </svg>
          </div>
          <div className="detail-box">
            <h5>
              Dibujo
            </h5>
            <p>
              manda una fotografía y pide tu dibujo digital.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="img-box">
            <svg id="_30_Premium" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" dataName="30_Premium">
              <i className="fa-solid fa-images"></i>
            </svg>
          </div>
          <div className="detail-box">
            <h5>
              Collage
            </h5>
            <p>
              Adjunta varias fotos para un collage.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="img-box">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.667 490.667" style={{enableBackground: 'new 0 0 490.667 490.667'}} xmlSpace="preserve">
              <i className="fa-solid fa-paint-roller"></i>
            </svg>
          </div>
          <div className="detail-box">
            <h5>
              Dibujo
            </h5>
            <p>
              manda una fotografía y pide tu dibujo digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="gift_section layout_padding-bottom">
      <div className="box ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="img_container">
                <div className="img-box">
                  <img src="images/gifts.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Gifts for your <br />
                    loved ones
                  </h2>
                </div>
                <p>
                  Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                </p>
                <div className="btn-box">
                  <a href="#" className="btn1">
                    Buy Now
                  </a>
                  <a href="#" className="btn2">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection />

    </div>
  );
}

export default Home;
