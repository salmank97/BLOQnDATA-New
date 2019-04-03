import React from 'react';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Card } from 'antd';
import globe from '../images/globe2.svg';

class Strategy extends React.PureComponent {

  render() {
    return (
      <div className="strategy-wrapper">
        <div className="home-page strategy" >
          <div className="home-page-wrapper" id="page1-wrapper">
            {/* {!this.props.isMobile && (
              <Parallax
                className="page1-bg"
                animation={{ translateY: 200, ease: 'linear', playScale: [0, 1.65] }}
                location="page1-wrapper"
              >
                Feature
              </Parallax>
            )} */}
            <h2>Strategy of <span>BLOQnDATA</span></h2>
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <div className="gutter-example" id="strategy">
            <Row gutter={16}>
              <Col className="gutter-row" xs={0} md={2}>
                <div className="gutter-box"></div>
              </Col>
              <Col className="gutter-row" xs={24} md={7}>
                <div className="gutter-box">Find inspiring and disruptive startip ICO's including blockchain companies in various stages of development. Target those startups and other companies that break the established mold and thus present opportunities to achieve stratospheric results for Cryptfunder and its' token holders</div>
                <br />
                <div className="gutter-box">Enable participants to easily apply online through a comprehensive, multi-part application process secure data entry and upload capabiilities and save and return functionality. Streamline the funding application process through the Cryptfunder application portal and other modules.</div>
              </Col>
              <Col className="gutter-row" xs={24} md={6}>
                <div className="gutter-box">
                  <img src={globe} width={200} style={{ display: 'block', margin: 'auto' }} />
                </div>
              </Col>
              <Col className="gutter-row" xs={24} md={7}>
                <div className="gutter-box">Fund those startups and other companies to their required funding levels enabling tthem to achieve their maximum potential success without being handicapped by the lack of proper funding. Surplus funding will hep to gain support and freedom of technological 'movement' thus ensuring that any company funded.</div>
                <br />
                <div className="gutter-box">Hold for valuue is the motto of Cryptfunder and its produccts. We will evaluate and perform thorough reseearch and critical analysis on our held tokens and rebalance our supported company's token portfolios at all times.</div>
              </Col>
              <Col className="gutter-row" xs={0} md={2}>
                <div className="gutter-box"></div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}


export default Strategy;