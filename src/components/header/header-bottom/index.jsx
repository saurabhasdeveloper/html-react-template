import { Link, useLocation } from 'react-router-dom';

const HeaderBottom = ()=>{
  const location = useLocation();

  return (
    <div className="hero_area">
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <span>
                Inance
              </span>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} >
                  <Link className="nav-link" exact to="/" activeClassName="active">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/about" activeClassName="active">About</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/service' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/service" activeClassName="active">Services</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/contact-us" activeClassName="active">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom