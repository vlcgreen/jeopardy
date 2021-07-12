import React from 'react';
import {Link} from 'react-router-dom';
import '../layout/navbar.css'

const BaseLayout = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/"> <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/gamesettings">Settings</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/game">Game</Link>
      </li>
    </ul>
  </div>
</nav>

      {props.children}
    </>
  )
}

export default BaseLayout
