// src="https://media3.scdn.vn/img4/2022/05_11/66fCtpSaD7CMb8xvovov.png"
// "https://media3.scdn.vn/img4/2022/05_18/nQSd1vZ9VZv35kxxFiHV.png
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="https://media3.scdn.vn/img4/2022/05_11/66fCtpSaD7CMb8xvovov.png" className="d-block  img-fluid" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://media3.scdn.vn/img4/2022/05_18/nQSd1vZ9VZv35kxxFiHV.png" className="d-block  img-fluid"  alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
