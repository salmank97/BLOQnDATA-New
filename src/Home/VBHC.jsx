import React, { Component } from 'react';
import { pageForVBHC } from "./constants";
import './static/style';

class VBHC extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: pageForVBHC.data.map((row, index) =>
            {
              return (
                <div className="pageforaboutusdiv" key={index}>
                  <div className="pageforaboutusheading">
                    <h1>{row.heading}</h1>                
                  </div>    
                  <div className="pageforaboutusbody">
                    <h1>{row.body}</h1>                
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


export default VBHC;