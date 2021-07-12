import React from 'react';
import {Link} from 'react-router-dom';

const BaseLayout = (props) => {
  return (
    <>
      <ul>
          <li>
              <Link to="/">Home Page</Link>
          </li>
          <li>
              <Link to="/gamesettings">Category Selection Page</Link>
          </li>
          <li>
              <Link to="/game">Gameboard Page</Link>
          </li>
      </ul>

      {props.children}
    </>
  )
}

export default BaseLayout
