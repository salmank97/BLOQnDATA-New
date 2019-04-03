import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import download from '../images/whitepaper-icons/download.svg';
import whitepaper from '../images/whitepaper-icons/contract.svg';
import onepage from '../images/whitepaper-icons/legal-paper.svg';
import roadmap from '../images/whitepaper-icons/route.svg';
import terms from '../images/whitepaper-icons/mace.svg';


function Page2() {
  
  return (
    <div className="home-page white-paper element" name="document">
      <div className="home-page-wrapper">
        <h2 class="white-heading"><span>White Paper</span></h2> <br></br>
        {/* <OverPack> */}
            <div className="gutter-example white-paper-buttons">
            <div id = "white-paper-button-group">
            <Row gutter={24}>
            {/* <div className = "mobile-btn-group"> */}
                  <Col className="gutter-row" md = {6} sm = {12} xs = {12}>
                  <div className="wp-buttons">
                      <img class="icon" src={whitepaper} alt="icon"/>
                      <h3>White Paper</h3>
                      {/* <img id="download-btn" src={download} alt="icon"/> */}
                      <a href="#"><img id="download-btn" src={download} alt="icon"/></a>
                  </div>
                  </Col>
                  <Col className="gutter-row" md = {6} sm = {12} xs = {12}>
                    <div className="wp-buttons">
                      <img class="icon" src={onepage} alt="icon"/>
                      <h3>White Paper</h3>
                      <a href="#"><img id="download-btn" src={download} alt="icon"/></a>
                    </div>
                  </Col>
            {/* </div> */}
                  <Col className="gutter-row" md = {6} sm = {12} xs = {12}>
                    <div className="wp-buttons">
                      <img class="icon" src={roadmap} alt="icon"/>
                      <h3>White Paper</h3>
                      <a href="#"><img id="download-btn" src={download} alt="icon"/></a>
                    </div>
                  </Col>              
                  <Col className="gutter-row" md = {6} sm = {12} xs = {12}>
                    <div className="wp-buttons">
                      <img class="icon" src={terms} alt="icon"/>
                      <h3>White Paper</h3>
                      <a href="#"><img id="download-btn" src={download} alt="icon"/></a>
                    </div>
                  </Col>
              </Row>
            </div>
             
            </div>
        {/* </OverPack> */}
      </div>
    </div>
  );
}

export default Page2;
