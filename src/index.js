import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContactUs from './components/contactUs'

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route exact path="/contact-us" component={ContactUs} />
            <App path="/" component={App}/>
        </Switch>
      </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
