import React, { Component } from "react";
import Slider from "react-slick";

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div className="pb-3">
              <img
                src="https://media3.scdn.vn/img4/2022/05_11/66fCtpSaD7CMb8xvovov.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div>
          <div className="pb-3">
              <img
                src="https://media3.scdn.vn/img4/2022/05_18/nQSd1vZ9VZv35kxxFiHV.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
     
        </Slider>
      </div>
    );
  }
}
