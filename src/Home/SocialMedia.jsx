import React from 'react';
import { Row, Col } from 'antd';
import SocialMediaLinks from '../Data/SocialMediaLinks.json';
import facebook from '../images/Icons/facebook-square.svg';
import twitter from '../images/Icons/twitter.svg';
import linkedin from '../images/Icons/linkedin-in.svg';
import telegram from '../images/Icons/telegram-plane.svg';


function SocialMedia() {
  return (
    <div className=" page2 social-page">
      {/* <div className = "triangle-bottomright">
    </div> */}
      <div className="home-page-wrapper ">
        <h2><span>Social Media</span></h2>
        <div className="title-line-wrapper page1-line">
          <div className="title-line" />
        </div>
        {/* <p class="sect-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> */}
        <div className="main-container">
          <Row gutter={24}>
            <Col md={2} xs={0} sm={0} className="gutter-row" >
              <div >
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-youtube"></i>
                <h3>Youtube</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-telegram-plane"></i>
                <h3>Telegram</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-instagram"></i>
                <h3>instagram</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-reddit-alien"></i>
                <h3>Reddit</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-facebook-square"></i>
                <h3>Facebook</h3>
              </div>
            </Col>
            <Col md={2} xs={0} sm={0} style = {{visibility : 'hidden'}} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-facebook-square"></i>
                <h3>Facebook</h3>
              </div>
            </Col>
            <Col md={2} xs={0} sm={0} style = {{visibility : 'hidden'}} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-facebook-square"></i>
                <h3>Facebook</h3>
              </div>
            </Col>
            {/* <Col md={2} xs={0} sm={0} className="gutter-row" ><div className="social-media-box" style = {{height : '100%'}}>Hello</div></Col>
            <Col md={2} xs={0} sm={0} className="gutter-row" ><div className="social-media-box"></div></Col> */}
          {/* </Row>
          <Row gutter={24}> */}
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-btc"></i>
                <h3>Bitcoin Talk</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-github"></i>
                <h3>Github</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-linkedin-in"></i>
                <h3>linkedin</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-twitter"></i>
                <h3>Twitter</h3>
              </div>
            </Col>
            <Col md={4} xs={12} sm={8} className="gutter-row" >
              <div className="social-media-box">
                <i class="fab fa-medium"></i>
                <h3>Medium</h3>
              </div>
            </Col>
            <Col md={2} xs={0} sm={0} className="gutter-row" ><div></div></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;