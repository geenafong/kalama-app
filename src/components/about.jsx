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
                    <p>We host events on our beautiful property in Kalama, WA</p>
                    <p>Lorem ipsum dolor sit amet, an nisl movet vocent nec. At iusto accumsan iracundia vel, mei omnis reque nemore no. Legere altera ut mel, meis graeco nam ex. Ferri melius salutatus te sea, sonet eruditi usu ad. Soleat inimicus scribentur ei vix, duis dicat scripserit no nam. Mea eu alii falli, cum legere postea id. </p>
                    <p>Commune phaedrum legendos vim ad, duo ex autem expetendis, per error suscipit ut. Augue vivendum gloriatur ei ius, sed ludus tation regione ut, cum ne nisl causae fabulas. Ad sit cibo diceret inimicus. Usu ei malis erroribus imperdiet, nec te accusamus molestiae, mentitum maiestatis ex eos. Quot fuisset sed te, eum ex omnium percipit. Esse ridens dicunt ut has, et mollis legendos cotidieque has. </p>
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
                    <p>Share your special moment in a beautiful setting</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-home-outline" />
                </span>
                <div className="desc">
                    <h3>Private Parties</h3>
                    <p>Family Reunions, Special Events, Private Events</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-file-openoffice" />
                </span>
                <div className="desc">
                    <h3>Corporate Events</h3>
                    <p>Corporate Parties, Employee Outings, Conferences</p>
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
