import React, { Component } from 'react'

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
                  <li><a href="#contact-us" data-nav-section="contact-us">Contact Us</a></li>
                  <li><a href="#services" data-nav-section="services">Services</a></li>
                  <li><a href="#about" data-nav-section="about">About Us</a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
