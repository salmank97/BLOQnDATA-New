import React from 'react';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Card } from 'antd';
import laptop_bg from '../images/Laptop.svg';
import bloqico from '../images/favico.png';
import YoutubeVideoSlider from './video/Slider';

// import ThemeContext from 'c'

class Why extends React.PureComponent {
  // static contextType = ThemeContext;

  constructor(props) {
    super(props);
    
  }
  

  render() {
    return (
      <div>

        <div className="home-page padding-top" >
          <div className="home-page-wrapper" id="page1-wrapper">
            <Row >
              <Col className="" sm={0} md={2}>
              </Col>
              <Col className="" md={10} sm={24}>
                <div className="gutter-box">
                  <div style={{ width: 'fit-content' }}>
                    <h1>About Us</h1>
                    <div className="title-line-wrapper page1-line">
                      <div className="title-line" />
                    </div>
                  </div>
                  <div className="why-content">
                    em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  {/* inner GRID system */}
                  <Row gutter={24}>
                    <Col className="" span={12}>
                      <div className="card-icon-div" >
                        <img className="card-icon" src={bloqico} />
                      </div>
                      <Card className="card">
                        <p>Choose the most disruptive technology candidates from a pool of online applicants for funding.</p>

                      </Card>
                    </Col>
                    <Col className="" span={12}>
                      <div className="card-icon-div" >
                        <img className="card-icon" src={bloqico} />
                      </div>
                      <Card className="card">
                        <p>Choose the most disruptive technology candidates from a pool of online applicants for funding.</p>

                      </Card>
                    </Col>
                    {/* <Col className="" span={12}>
                      <Card
                        title="Default size card"
                        extra={<a href="#">More</a>}
                      // style={{ width: 300 }}
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                    </Col> */}
                  </Row>
                  <Card
                  //   title="Default size card"
                  //   extra={<a href="#">More</a>}
                  // // style={{ width: 300 }}
                  >
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quasi illo at ad. Ut eum eaque officia, debitis cumque odit omnis voluptatibus voluptate sunt sed facere enim excepturi asperiores?</p>
                  </Card>
                </div>
              </Col>
              <Col className="" md={12} sm={24}>
                {/* <img src={laptop_bg} /> */}
                <YoutubeVideoSlider/>
                {/* <div id="laptop-col" className="gutter-box"></div> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}


export default Why;