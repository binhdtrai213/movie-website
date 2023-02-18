import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { Card } from './Card';
import { filmInformation } from './data';
import CloseIcon from '@mui/icons-material/Close';

type FilmType = {
  id: number,
  name: string,
  description: string,
  img: string,
};

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
};

export default function ListCard() {
  const [popup, setPopup] = useState<FilmType | undefined>();

  const updatePopup = (film: FilmType) => {
    setPopup(film);
  }

  return (
    <div className="container">
      <div className="row p-5 pt-4">
      {filmInformation.map(film => 
        <div className="col-12 col-md-6 col-lg-4 p-3 pt-0" key={film.id}>
          <Card film={film} clicked={updatePopup} /> 
        </div>)
      }
      </div>
      {popup && <Modal
        open={popup !== undefined}
        onClose={() => setPopup(undefined)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Style}>
          <button 
            className="btn-close-card"
            onClick={() => setPopup(undefined)}
          >
            <CloseIcon />
          </button>
          <img src={popup.img} className="card-img-top" alt="film"/>
          <div className="card-body">
            <h5 style={{ margin: '10px 0' }}>{popup.name}</h5>
            <p className="card-text" title={popup.description}>{popup.description}</p>
          </div>
        </Box>
        
      </Modal>}
      
    </div>
  )
}

