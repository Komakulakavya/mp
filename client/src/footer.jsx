import React from 'react';
import './mhome.css';
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="#">WhyUs</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">Pricing</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">Terms of Use</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">Privacy Policy</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">Careers</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">Blog</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">Contact Us</a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; Copyright by
        <a
          className="footer__link twitter-link"
          target="_blank"
          href="https://twitter.com/jonasschmedtman"
        >
          Sensei
        </a>
      </p>
    </footer>
  );
}

export default Footer;
