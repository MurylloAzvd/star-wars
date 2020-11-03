import React from 'react';
import './index.css';


function Nav() {


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Personagens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ships">Naves</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;