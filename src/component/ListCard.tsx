import React from 'react';
import { Card } from './Card';
import { filmInformation } from './data';

export default function ListCard({theme} : {theme: boolean}) {
  return (
    <div className="container text-center">
      <div className="row p-5 pt-4">
      {filmInformation.map(film => 
        <div className="col-12 col-md-6 col-lg-4 p-3 pt-0" key={film.id}>
          <Card film={film} theme={theme} /> 
        </div>)
      }
      </div>
    </div>
  )
}

