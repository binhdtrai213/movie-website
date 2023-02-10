import { useState } from 'react';
import { Card } from './Card';
import { filmInformation } from './data';

type FilmType = {
  id: number,
  name: string,
  description: string,
  img: string,
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
      {popup && <div className='overlay' onClick={() => setPopup(undefined)}>
        <div className='popup card p-3' style={{ width: '50%' }}>
          <button 
            type="button" 
            className="btn-close mb-2" 
            style={{ marginLeft: 'calc(100% - 20px)' }}
            onClick={() => setPopup(undefined)}
            data-bs-dismiss="modal" 
            aria-label="Close">
          </button>
          <img src={popup.img} className="card-img-top" alt="film"/>
          <div className="card-body">
            <h5 className="card-title">{popup.name}</h5>
            <p className="card-text" title={popup.description}>{popup.description}</p>
          </div>
        </div>
      </div>}
    </div>
  )
}

