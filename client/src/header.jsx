// header.jsx

import React from 'react';
import './mhome.css';

function Header() {
  return (
    <header className='header'>
      <nav className='nav1'>
        <img 
          src="assests/sensi-logo1.png"
          alt="sens logo"
          className="nav__logo"
          id="logo"
          designer="kavya"
        />
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#section--1">WhyUs</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--2">JoinwithUs</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--3">Testimonials</a>
          </li>
          <li className="nav__item">
            <a className="nav_link nav_link--btn btn--show-modal" href="#">AboutUs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
