import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from '../../images/globe2.svg'
import partner1 from '../../images/partners/partner1.png'


export default class ClientSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,  
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div class="partners">
        <Slider {...settings}>  
          <div>
            <h3><img src = {partner1} className = "slider-img" /></h3>
            <div className = "slider-content">Hello world</div>
          </div>
          <div>
            <h3><img src = {partner1} className = "slider-img"/></h3>
            <div className = "slider-content">Help Children In Deep Breath</div>
          </div>
          <div>
            <h3><img src = {partner1} className = "slider-img"/></h3>
            <div className = "slider-content">Study Room For Best Concentration</div>
          </div>
          <div>
            <h3><img src = {partner1} className = "slider-img"/></h3>
            <div className = "slider-content">USB Salt Lamps to enhance creativity</div>
          </div>
          <div>
            <h3><img src = {partner1} className = "slider-img"/></h3>
            <div className = "slider-content">Night Lamps for Better Sleep</div>
          </div>
        </Slider>
      </div>
    );
  }
}