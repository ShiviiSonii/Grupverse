import React from 'react';
import "./Carousel.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function CarouselSlide({ text }) {
    return (
    <div className='carousel'>
      <div className="carousel-slide">
        <div className="carousel-text">{text}</div>
        <div><img className="carousel-image" alt="" src='https://grupverse.com/api/media/teamprofilepic/22_7.png'/></div>
        <button className="join-button">Join</button>
      </div>
    </div>
    );
  }

const Carousel = () => {

    const settings = {
        infinite: true, // Enable infinite scrolling
        slidesToShow: 3, // Adjust the number of slides shown at a time
        slidesToScroll: 1,
        autoplay:true,// Slide transition speed in milliseconds
        autoplaySpeed: 3000,
        speed:500,
        swipeToSlide:true, // Autoplay interval in milliseconds
      };

  return (
    <div className="carousel-container">
    <Slider {...settings}>
      <CarouselSlide key="1" text="Quicl On Canvas" />
      <CarouselSlide key="2" text="norMeme" />
      <CarouselSlide key="3" text="Space" />
      <CarouselSlide key="4" text="Current Affairs" />
      <CarouselSlide key="5" text="Aiims" />
      
      {/* Add more slides as needed */}
    </Slider>
    </div>
  );
};

export default Carousel;
