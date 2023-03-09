import React, { useEffect, useState } from 'react'
import { Box, Modal } from '@mui/material'

import { Card } from './Card'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { type RootState } from './redux/store'
import { VideoAPI } from './VideoApi/VideoAPI'
import { getImage } from './helper/Utils'
import { setInitialValue } from './redux/slice'
import { type videoType } from './data'

const Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 4,
  borderRadius: '10px',
}

export default function ListCard() {
  const [popup, setPopup] = useState<videoType | undefined>()
  const videos = useSelector((state: RootState) => state.video.value)
  const dispatch = useDispatch()

  const updatePopup = (film: videoType) => {
    setPopup(film)
  }

  useEffect(() => {
    VideoAPI.getAll()
      .then((res) => {
        dispatch(setInitialValue(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="container">
      <div className="row p-5 pt-4">
        {videos.map((film) => (
          <div className="col-12 col-md-6 col-lg-4 p-3 pt-0" key={film.id}>
            <Card film={film} clicked={updatePopup} />
          </div>
        ))}
      </div>
      {popup != null && (
        <Modal
          open={popup !== undefined}
          onClose={() => {
            setPopup(undefined)
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={Style}>
            <button
              className="btn-close-card"
              onClick={() => {
                setPopup(undefined)
              }}
            >
              <CloseIcon />
            </button>
            <img
              src={getImage(popup.video)}
              className="card-img-top"
              alt="film"
            />
            <div className="card-body">
              <h5 style={{ margin: '10px 0' }}>{popup.name}</h5>
              <p className="card-text" title={popup.description}>
                {popup.description}
              </p>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  )
}
