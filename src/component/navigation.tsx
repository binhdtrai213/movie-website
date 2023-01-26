import logo from '../assets/logo.jpg';

export default function Navigation({theme, changeTheme} : {theme: boolean, changeTheme: Function}) {

  return (
    <div>
      <nav 
        className="navbar navbar-expand-lg px-3" 
        id={theme ? "active-navbar" : "inactive-navbar"}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={logo} alt="logo" style={{ width: '50px' }}></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/news">News</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <div 
              onClick={() => changeTheme()} 
              className="button-toggle-switch"
              id={theme ? "active-toggle" : "inactive-toggle"}
            >
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

