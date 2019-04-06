import React, { Component } from 'react';
import Index1 from './Index1';
import {
    BrowserRouter as Router,
    //  Router,
    Route,
    Link,
    Switch
   } from 'react-router-dom';
import AboutUs from './AboutUs';
import WhoDoWeHelp from './WhoDoWeHelp';
import Home from './Index1';
import history from './History';
import Header from './Header';
import VBHC from './VBHC';
import Footer from './Footer';

const BasicRouting = () => {
    // history.listen(_ => {
    //     window.scrollTo(0, 0)
    //     })
    return (

      // <Router history={history}>
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/whodowehelp" component={WhoDoWeHelp} />
          <Route path="/healthcare" component={VBHC} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
   }

   export default BasicRouting;