import React from 'react';
import Slider from './video/Slider';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import YoutubeVideoSlider from './video/Slider';

class Videos extends React.PureComponent {

  render(){
    return (
      <div id="videos">
    <div className="home-page padding-top " >
          <div className="home-page-wrapper" id="page1-wrapper">
            <h2>Let’s Watch New Videos</h2>
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
  
          <Row>
            <Col sm={4} xs={0}>
            
            </Col>
            <Col  sm={16} xs={24}>
            <div className="videos-page-wrapper">
          <div className="title-line-wrapper Videos-line">
            <div className="title-line" />
          </div>
          {/* <h2><span>Let’s Watch New Videos</span></h2> */}
          <div className = "video-slider" style = {{border : '16px solid white', height : '400px', width : "100%", background : 'black', boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.2)"}}>
          <YoutubeVideoSlider url={["kq6dwUqk_k8","kq6dwUqk_k8"]}/>
          </div>
        </div> 
            </Col>
            <Col sm={4} xs={0}>
            
            </Col>
          </Row>
            </div>
            </div>
      </div>
    );
  }

}

export default Videos;
