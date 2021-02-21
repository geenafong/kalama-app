import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TopNav extends Component {
  render() { 
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/kalama-logo.jpg)'}} />
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><Link to='/contact-us'>Contact Us</Link></li>
                  <li><a href="#services" data-nav-section="services">Services</a></li>
                  <li><a href="#about" data-nav-section="about">About Us</a></li>
                </ul>
              </div>
            </nav>
            {/* <nav id="colorlib-main-menu"> 
              <ul>
                <li><a href="https://www.facebook.com/kalama-retreat" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/kalama-retreat" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/kalama-retreat/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav> */}
          </aside>
        </div>
      </div>
    )
  }
}
