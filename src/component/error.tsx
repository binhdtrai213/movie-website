import React from 'react'
import './error.scss'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className="error-page">
      {/* <img src={ErrorImage} alt="Error page" /> */}
      <div className="container">
        <div className="error">
          <p className="p">4</p>
          <span className="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div className="mouth"></div>
              <div className="blood"></div>
              <div className="blood blood2"></div>
            </div>
          </span>
          <p className="p">4</p>
          <div className="page-ms">
            <p className="page-msg"> Oops, Can not find your page! </p>
            <NavLink to="/home">
              <button className="go-back">Go Back</button>
            </NavLink>
          </div>
        </div>
      </div>
      <iframe
        style={{ width: 0, height: 0, border: 'none' }}
        allow="autoplay"
        src="https://instaud.io/_/2Vvu.mp3"
        title="nothing"
      ></iframe>
    </div>
  )
}
