type filmType = {
  id: number,
  name: string,
  description: string,
  img: string,
}

export const Card = ({film, theme} : {film: filmType, theme: boolean}) => {
  return (
    <div 
      className="card" 
      id={theme ? "active-card" : "inactive-card"}
      style={{ width: '100%', margin: '1rem 0' }} 
    >
      <img src={film.img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{film.name}</h5>
        <p className="card-text" title={film.description}>{film.description}</p>
      </div>
      <button className="btn btn-outline-dark" id="detail-btn">Detail</button>
    </div>
  );
}
