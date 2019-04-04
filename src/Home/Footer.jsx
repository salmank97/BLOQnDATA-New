import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import footerimg from '../images/footer.png';
import facebook from '../images/Icons/facebook-square.svg';
import twitter from '../images/Icons/twitter.svg';
import linkedin from '../images/Icons/linkedin-in.svg';
import telegram from '../images/Icons/telegram-plane.svg';
import {Link} from 'react-scroll';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <img src={footerimg} />
              {/* <h2>Ant Design</h2> */}
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                  BLOQnDATA will revolutionize the funding process for startup ICOs and blockchain companies. We will offer much needed funding at crucial developmental stages for these blockchain companies. Cryptfunder is your gateway to emerging startups before they soar. Welcome to the ground floor.
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><br /></h2>
              <div>
        <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={1500}> <span className="links-arrow">></span> Home </Link>
              </div> 
              <div>
                <a href="#"><span>></span> About</a>
              </div>
              <div>
        <Link activeClass="active" className="product" to="product" spy={true} smooth={true} duration={1500}> <span className="links-arrow">></span> Product </Link>                
              </div>
        <Link activeClass="active" className="team" to="team" spy={true} smooth={true} duration={1500}> <span className="links-arrow">></span> Team </Link>                
              <div>
        <Link activeClass="active" className="articles" to="articles" spy={true} smooth={true} duration={1500}> <span className="links-arrow">></span> Articles </Link>                
              </div>
              <div>
                <a href="#"><span>></span> Contact Us</a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><br /></h2>
              <div>
                <a href="#"><span className="links-arrow">></span> White Paper</a>
              </div>
              <div>
                <a href="#"><span>></span> Road Map</a>
              </div>
              <div>
                <a href="#"><span>></span> One Pager</a>
              </div>
              <div>
                <a href="#"><span>></span> Team</a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h1 style={{ color: 'white' }}>
                Get in touch
              </h1>
              <div>

              </div>
              <div>
                <a href="#linkedin"><img className="social-icons" src={linkedin} alt="icon" /></a>
                <a href="#twitter"><img className="social-icons" src={twitter} alt="icon" /></a>
                <a href="#facebook"><img className="social-icons" src={facebook} alt="icon" /></a>
                <a href="#telegram"><img className="social-icons" src={telegram} alt="icon" /></a>
              </div>
              <div>
                {/* <a href="#"><img className="social-icons" src={facebook} alt="icon" /></a> */}
                <Button type="primary" shape="round" style={{ backgroundColor: "", borderColor: "", borderRadius: "20px", padding: "0 30px", width: "150px" }} size={'large'}>White Paper</Button>
              </div>
              <div>
                <Button type="primary" shape="round" style={{ backgroundColor: "", borderColor: "", borderRadius: "20px", padding: "0 30px", width: "150px" }} size={'large'}>Join Telegram</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={3} sm={24}>
          {/* <div className="translate-button">
            <Button ghost size="small" >
              English
            </Button>
          </div> */}
        </Col>
        <Col lg={18} sm={24} style={{ textAlign: 'center' }}>
          <span > &copy; Copyright All Rights Reserved by BLOQnDATA</span>
          {/* <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策 ICP
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span> */}
        </Col>
        <Col lg={3} sm={24}>
        </Col>

      </Row>
    </footer>
  );
}


export default Footer;
