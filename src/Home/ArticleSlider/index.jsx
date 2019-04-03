import React, { Component } from "react";
import Slider from "react-slick";
import CardComponent from './CardComponent';

export default class ArticleSlider extends Component {
  render() {
    const settings = { 
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
      ],
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#A7E0BC",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      )
    };
    return (
      <div className="gutter-box">
        <Slider {...settings}>
          <div>
            <CardComponent isMobile = {this.props.isMobile}/>
          </div>
          <div>
          <CardComponent isMobile = {this.props.isMobile}/>
          </div>
          <div>
          <CardComponent isMobile = {this.props.isMobile}/>
          </div>
        </Slider>
      </div>
    );
  }
}
