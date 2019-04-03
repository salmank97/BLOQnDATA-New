import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = [ "1996-02-02", "1997-02-02", "1999-01-02" ];
const DATA = [ "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ex qui tempora unde explicabo saepe, nisi natus? Vel suscipit cum blanditiis ab totam deleniti, delectus quis laboriosam a perspiciatis! Iure.",
 "      Adipisicing elit. Inventore ex qui tempora unde explicabo saepe, nisi natus? Vel suscipit cum blanditiis ab totam deleniti, delectus quis laboriosam a perspiciatis! Iure.",
  "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ex qui tempora unde explicabo saepe, nisi natus? Vel suscipit cum blanditiis ab totam deleniti, delectus quis laboriosam a perspiciatis! Iure." ];


export default class RoadMap extends React.PureComponent {
  state = { value: 0, previous: 0 };
  render(){
    return ( 
      <div>
                <div className="home-page roadmap">
          <div className="home-page-wrapper">
            <h2><span>Road Map</span></h2>
            <div className="title-line-wrapper page1-line"> 
              <div className="title-line" />
            </div>
      {/* Bounding box for the Timeline */}
      <div style={(this.props.isMobile) ? { width: '80%', height: '100px', margin: '0 auto' } : {width: '60%', height: '100px', margin: '0 auto'}}>
        <HorizontalTimeline
          index={this.state.value}
          indexClick={(index) => {
            this.setState({ value: index, previous: this.state.value });
          }}
          values={ VALUES } />
      </div>
      <div className='detail-data'>
        {/* any arbitrary component can go here */}
        {DATA[this.state.value]}
      </div> 
    </div>
    </div>
    </div>
    );
  }

}
