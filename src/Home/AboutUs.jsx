import React, { Component } from 'react';
import Header from "./Header";
import './static/style';

class AboutUs extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div style={{ height: "64px", backgroundColor: "#50c878" }} />
        <div className="problems">
          <h2>About US</h2>
        </div>
      </div>
    );
  }
}
export default AboutUs;