import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { type videoType } from './data'
import { getImage } from './helper/Utils'
import { ThemeContext } from './ThemeContext'

export const Card = ({ film, clicked }: { film: videoType, clicked: any }) => {
  const { dark } = useContext(ThemeContext)

  return (
    <div
      className="card"
      id={dark ? 'active-card' : 'inactive-card'}
      style={{ width: '100%', margin: '1rem 0' }}
    >
      <img src={getImage(film.video)} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title text-center">{film.name}</h5>
        <p
          className="card-text mt-3"
          title={film.description}
          style={{ textAlign: 'justify' }}
        >
          {film.description}
        </p>
      </div>
      <div className="row justify-content-center px-3">
        <button
          className="btn col-6"
          id="detail-btn"
          onClick={() => clicked(film)}
        >
          Detail
        </button>
        <NavLink className="btn col-6" id="detail-btn" to={`/watch/${film.id}`}>
          Watch
        </NavLink>
      </div>
    </div>
  )
}
