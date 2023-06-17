import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css';

import s1 from '../src/images/s1.jpg';
import s2 from '../src/images/s2.jpg';
import s3 from '../src/images/s3.jpg';

const CarouselIMG =()=>{
    return(
        <>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src={s1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Believe in yourself and anything is possible!</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src={s2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Be better for others but never leave yourself  behind.</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src={s3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Stay away from those people who try to disparage your ambitions.</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
        );
};

export default CarouselIMG;


