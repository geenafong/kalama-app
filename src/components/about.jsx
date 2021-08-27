import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Are We?</h2>
                    <p>Kalama River Retreat offers five-acres of private event space sitting along side the beautiful Kalama River located in Washington. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="services">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Services</span>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-infinity" />
                </span>
                <div className="desc">
                    <h3>Weddings</h3>
                    <p>Share your special moment in a beautiful setting along the Kalama River</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-file-openoffice" />
                </span>
                <div className="desc">
                    <h3>Private Parties</h3>
                    <p>We offer a place to host family reunions, company events, etc.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-home-outline" />
                </span>
                <div className="desc">
                    <h3>Cottage Rental</h3>
                    <p>We have a cottage available for you to rent out for your event.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Contact Us</span>
                    <span className="email"><i className="icon-mail"></i> <a href="mailto:kalamariverretreat@gmail.com">kalamariverretreat@gmail.com</a></span>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
