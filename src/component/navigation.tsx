/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Button from '@mui/material/Button'
import { auth, provider } from './loginFirebase/config'
import { signInWithPopup } from 'firebase/auth'
import Avatar from '@mui/material/Avatar'

export default function Navigation() {
  const { toggle, dark } = useContext(ThemeContext)
  const [hover, setHover] = useState(false)
  const [user, setUser] = useState<any | undefined>()
  const [isLogout, setIsLogout] = useState(false)

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                onClick={toggle}
                className="button-toggle-switch"
                id={dark ? 'active-toggle' : 'inactive-toggle'}
                style={{ marginRight: '1rem' }}
              ></div>
              {!user ? (
                <Button variant="outlined" onClick={handleClick}>
                  Login
                </Button>
              ) : (
                <div>
                  {!isLogout ? (
                    <Avatar
                      src={user.photoURL}
                      onMouseEnter={() => {
                        setIsLogout(true)
                      }}
                      onMouseLeave={() => {
                        setIsLogout(false)
                      }}
                      alt="avatar"
                    />
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setUser(undefined)
                        setIsLogout(false)
                      }}
                      onMouseEnter={() => {
                        setIsLogout(true)
                      }}
                      onMouseLeave={() => {
                        setIsLogout(false)
                      }}
                    >
                      Logout
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
