import React, { useEffect, useState } from 'react'
import { Box, Modal, Skeleton } from '@mui/material'

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

const array3 = ['', '', '']

export default function ListCard() {
  const [popup, setPopup] = useState<videoType | undefined>()
  const videos = useSelector((state: RootState) => state.video.value)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const updatePopup = (film: videoType) => {
    setPopup(film)
  }

  useEffect(() => {
    setLoading(true)
    VideoAPI.getAll()
      .then((res) => {
        dispatch(setInitialValue(res.data))
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="container">
      <div className="row p-5 pt-4">
        {!loading
          ? videos.map((film) => (
              <div className="col-12 col-md-6 col-lg-4 p-3 pt-0" key={film.id}>
                <Card film={film} clicked={updatePopup} />
              </div>
          ))
          : array3.map((value, index) => (
              <div className="col-12 col-md-6 col-lg-4 p-3 pt-0" key={index}>
                <Box
                  sx={{
                    width: '100%',
                    marginRight: 0.5,
                    padding: '1rem',
                    my: 5,
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="100%"
                    height={150}
                    sx={{ margin: '1rem 0', borderRadius: '5px' }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    sx={{ marginBottom: '1rem', borderRadius: '5px' }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="60%"
                    sx={{ marginBottom: '1rem', borderRadius: '5px' }}
                  />
                </Box>
              </div>
          ))
        }
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
