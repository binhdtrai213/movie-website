import React from 'react'
import { bannerList } from './data'

export default function Banner() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="container carousel slide px-2 px-lg-5 mt-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {bannerList.map((img, index) => (
          <div className="carousel-item active rounded-2" key={index}>
            <img
              src={img}
              className={'d-block w-100 rounded-2'}
              alt={`slide ${index}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
