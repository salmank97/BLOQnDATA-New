import React, { Component } from 'react';
import { pageForWhoDoWeHelp } from "./constants";
import './static/style';

class WhoDoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: pageForWhoDoWeHelp.data.map((row, index) =>
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
    
export default WhoDoWeHelp;