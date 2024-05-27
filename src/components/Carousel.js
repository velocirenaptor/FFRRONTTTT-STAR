import React from 'react';
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const SliderSection = () => {
  return (
    <CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src={"https://res.cloudinary.com/dd9lx460j/image/upload/v1715582069/starcases/cases/downloaded_image_iqdq8d.jpg"} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={"https://res.cloudinary.com/dd9lx460j/image/upload/v1715581669/starcases/cases/340027479_1579365192582905_6240504213468964329_n_u6kx6x.jpg"} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={"https://res.cloudinary.com/dd9lx460j/image/upload/v1715582095/starcases/cases/363292057_299999395876626_7985253898066853657_n_yz3lrm.jpg"} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  );
};

export default SliderSection;


// const SliderSection = () => {
//   return (
//     <CCarousel controls indicators>
//       <CCarouselItem>
//         <CImage className="d-block w-100" src={} alt="slide 1" />
//         <CCarouselCaption className="d-none d-md-block">
//           <h5>¡Bienvenido a Starcases!v</h5>
//           <p>Some representative placeholder content for the first slide.</p>
//         </CCarouselCaption>
//       </CCarouselItem>
//       <CCarouselItem>
//         <CImage className="d-block w-100" src={} alt="slide 2" />
//         <CCarouselCaption className="d-none d-md-block">
//           <h5>Second slide label</h5>
//           <p>Some representative placeholder content for the second slide.</p>
//         </CCarouselCaption>
//       </CCarouselItem>
//       <CCarouselItem>
//         <CImage className="d-block w-100" src={} alt="slide 3" />
//         <CCarouselCaption className="d-none d-md-block">
//           <h5>Third slide label</h5>
//           <p>Some representative placeholder content for the third slide.</p>
//         </CCarouselCaption>
//       </CCarouselItem>
//     </CCarousel>
//   );
// };

