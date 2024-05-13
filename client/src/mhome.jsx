import React, { useState, useEffect } from 'react';
import './mhome.css';
import { useNavigate } from 'react-router-dom';
import image1 from './assets/images1.svg';
import img from './assets/sensi-logo1.png';
import image2 from './assets/images2.svg';
import image3 from './assets/image3.svg';
import image4 from './assets/images4.svg';
import image5 from './assets/images5.svg';
import image6 from './assets/images6.svg';
import image7 from './assets/images7.png';
function Mhome() {
  const navigate = useNavigate();
  const register = () => {
    navigate('/register');
  };
  useEffect(() => {
    const btnScrollTo = document.querySelector('.btn--scroll-to');
    const section1 = document.querySelector('#section--1');
    const nav = document.querySelector('.nav1');

    btnScrollTo.addEventListener('click', () => {
      section1.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelectorAll('.nav__link').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const id = el.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      });
    });

    nav.addEventListener('mouseover', handleHover.bind(0.5));
    nav.addEventListener('mouseout', handleHover.bind(1));

    const header = document.querySelector('.header');
    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = entries => {
      const [entry] = entries;
      if (!entry.isIntersecting) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: '-10px',
    });

    headerObserver.observe(header);

    const allSections = document.querySelectorAll('.section');

    const revealSection = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }, []);
  const handleHover = e => {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav1').querySelectorAll('.nav__link');
      const logo = link.closest('.nav1').querySelector('img');
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = e.type === 'mouseover' ? 0.5 : 1;
      });
      logo.style.opacity = e.type === 'mouseover' ? 0.5 : 1;
    }
  };

  return (
    <div>
      <header className='header'>
        <nav className='nav1'>
          <img 
            src={img}
            alt="sens logo"
            className="nav__logo"
            id="logo"
            designer="kavya"
          />
          <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="/">Home</a>
          </li>
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
              <a className="nav_link nav_link--btn btn--show-modal btn btn--text" href="#">AboutUs</a>
            </li>
          </ul>
        </nav>
        <div className='header-title'>
          <div className='flexx'>
            <div>
            <h1 onClick={() => alert('HTML alert')} className="main_text">
              What To
              <span className="highlight">Learn DSA</span>
              With 
              <span className="highlight"> proper </span>
              structure?? 
            </h1>
            <h4 className="sub-text">Best solution is follow our DSA  course !</h4>
            <button className="btn--text btn--scroll-to">Learn more</button>
            </div>
          </div>
          <div>
            <img 
              src={image1}
              alt="Minimalist bank items"
              className='header--img' 
            />
          </div>
        </div>
      </header>
      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">WhyUs</h2>
          <h3 className="section__header">
            We're more than just another online learning platform.
          </h3>
        </div>
        <div className="features">
          <div className="features__feature">
            <h5 className="features__header">Hands-On Learning</h5>
            <p className="sub-text">
              We believe in learning by doing. Our interactive lessons and coding challenges provide you with ample opportunities to apply theoretical concepts in real-world scenarios matter.
            </p>
          </div>
          <img src={image2} alt="whyus" className="features__img" />
          <img src={image4} alt="whyus" className="features__img" />
          
          <div className="features__feature">
            <h5 className="features__header">Expert Guidance</h5>
            <p className="sub-text">
              Our instructors are passionate about empowering students with the knowledge and skills needed to succeed. They provide personalized support, insightful feedback, and guidance every step of the way.
            </p>
          </div>
          <div className="features__feature">  
            <h5 className="features__header">Comprehensive Curriculum</h5>
            <p className="sub-text">
              Our DSA course offers a comprehensive curriculum designed by industry experts and educators with years of experience. We cover everything from the fundamental data structures to advanced algorithms, ensuring that you have a solid understanding of the core concepts.
            </p>
          </div>
          <img src={image6} alt="whyus" className="features__img" />
        </div>
      </section>
      <section className="section" id="section--2">
        <div className="flexxx">
          <div>
            <h3 className="section__header1">
              "Join us and embark on a transformative journey towards mastering Data Structures and Algorithms. Unlock your full potential."
            </h3>
            <button className="about" href="#" onClick={register}>Get into Course</button>
          </div>
          <div>
            <img src={image7} alt="joinus" className="features__img" />
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default Mhome;