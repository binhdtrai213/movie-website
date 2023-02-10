import { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { filmInformation } from './data';
import { ThemeContext } from './ThemeContext';

export default function Watch() {
  const idVideo = useParams();
  const video = filmInformation.filter(vid => vid.id.toString() === idVideo.id);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  const renderStar = (quantity: number) => {
    let good = '';
    for (let i = 1; i <= quantity; i++) good = good + '⭐';
    let bad = '';
    for (let i = quantity + 1; i<= 5; i++) bad = bad + '🕳️';
    return good + bad;
  }

  return (
    <div className='row w-100 ps-3 pt-4'>
      {/* watch movie */}
      <div className='col-9 pe-4'>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item w-100" src={video[0].video} allowFullScreen title={video[0].name} style={{height: '500px'}}/>
        </div>
        <div className="card-body" style={{ color: theme.color }}>
          <h3 className="card-title mt-1 mb-0">{video[0].name}</h3>
          <p className="card-text mt-1 mb-3" title={video[0].description} style={{ textAlign: 'justify' }}>
            {video[0].description}
          </p>
        </div>
      </div>

      {/* recommend movie */}
      <div className='col-3 ps-3'>
        <h3 className='text-center mb-4' style={{ color: theme.color}}>Recommend</h3>
        {filmInformation.map(video => {
          if (video.id.toString() !== idVideo.id) 
            return <NavLink 
              className="mb-3 row card align-items-center p-2" 
              style={{ flexDirection: 'row', cursor: 'pointer', textDecoration: 'none', color: '#121212' }}
              to={`/watch/${video.id}`}
            >
              <img src={video.img} className="col-5 h-auto px-1" alt="recommend video" />
              <div className="card-body col-6 p-0 ps-1">
                <b className="card-title mb-0" style={{ fontSize: '17px' }}>{video.name}</b>
                <p className="card-text mb-0" style={{ fontSize: '16px' }} >
                  {`${video.views} views`}
                </p>
                <div className="mb-0">{renderStar(video.star)}</div>
              </div>
            </NavLink>
        })}
      </div>
    </div>
  )
}
