import React from 'react';
import { Card } from './Card';
import { playerInformation } from './data';

export default function ListCard() {
  return (
    <div className="container text-center">
      <div className="row">
      {playerInformation.map(player => 
        <div className="col-4" key={player.id}>
          <Card player={player} /> 
        </div>)
      }
      </div>
    </div>
  )
}

