import React from "react";
import Slider from "react-slick";
import './Corousal.css';
import carosal1 from "../../images/carousalimg1.webp";
import carosal2 from "../../images/carousalimg2.jpg";
import carosal3 from "../../images/coursalimg3.jpg";

function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Number of slides to scroll
  };
  return (
    <div className="carousalContainer">
      <Slider {...settings}>
        <div className="carosalimgContainer">
          <img src={carosal1} alt="" />
        </div>
        <div className="carosalimgContainer">
          <img src={carosal2} alt="" />
        </div>
        <div className="carosalimgContainer">
          <img src={carosal3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousal;
