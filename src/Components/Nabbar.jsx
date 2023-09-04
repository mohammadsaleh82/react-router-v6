import {Link} from 'react-router-dom'

const Nabbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>کتابخانه من</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>خانه</Link>
              </li>
              <li className="nav-item">
                <Link to={'/books'} className="nav-link" >کتاب های من</Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link"  >درباره من</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nabbar