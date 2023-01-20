export const Card = (props: any) => {
  const player = props.player;
  return (
    <div className="card" style={{ width: '100%', margin: '1rem 0' }}>
      <img src={player.img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">{player.description}</p>
      </div>
      <button className="btn btn-outline-dark" id="detail-btn">Detail</button>
    </div>
  );
}
