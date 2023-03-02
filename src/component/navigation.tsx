import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

export default function Navigation() {
  const { toggle, dark } = useContext(ThemeContext)
  const [hover, setHover] = useState(false)

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg px-3"
        id={dark ? 'active-navbar' : 'inactive-navbar'}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={logo} alt="logo" style={{ width: '50px' }}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active alignCenter"
                  aria-current="page"
                  to="/home"
                  onMouseEnter={() => {
                    setHover(true)
                  }}
                  onMouseLeave={() => {
                    setHover(false)
                  }}
                >
                  {hover ? (
                    <HomeOutlinedIcon
                      style={{ marginRight: '5px' }}
                      fontSize="large"
                    />
                  ) : (
                    <HomeRoundedIcon
                      style={{ marginRight: '5px' }}
                      fontSize="large"
                    />
                  )}
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2 alignCenter">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item mx-2 alignCenter">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2 alignCenter">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-2 alignCenter">
                <Link className="nav-link" to="/add-video">
                  Create
                </Link>
              </li>
            </ul>
            <div
              onClick={toggle}
              className="button-toggle-switch"
              id={dark ? 'active-toggle' : 'inactive-toggle'}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  )
}
