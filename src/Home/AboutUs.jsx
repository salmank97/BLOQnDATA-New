import React, { Component } from 'react';
import { pageForAboutUs } from "./constants";
import './static/style';

class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: pageForAboutUs.data.map((row, index) => {
        return (
          <div>
            <div style={{ height: "64px" }}></div>
            <div className="pageforaboutusdiv" key={index}>
              <div className="pageforaboutusheading">
                <h1>{row.heading}</h1>
              </div>

              <div className="pageforaboutusbody">
                <h1>{row.body}</h1>
              </div>
            </div>
          </div>
        );
      })
    };
  }


  render() {
    return (
      <div>
        {this.state.content}
      </div>
    );
  }
}

export default AboutUs;