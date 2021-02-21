import React, { Component } from 'react';
import './App.css';
import TopNav from './components/topnav'
import Introduction from './components/introduction'
import About from './components/about'
import ContactUs from './components/contactUs'


class App extends Component {
  render() {
    return (
       <div id="colorlib-page">
       <div id="container-wrap">
          <TopNav></TopNav>
          <div id="colorlibmain">
           <Introduction></Introduction>
           <About></About>
          <ContactUs></ContactUs>      
          </div>
       </div>
       </div>
    );
  }
}

export default App;
