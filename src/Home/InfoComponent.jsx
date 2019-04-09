import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import YoutubeVideoSlider from "./video/Slider";
import * as constants from "./constants.jsx";
import { Link } from "react-router-dom";

class InfoComponent extends React.PureComponent {
  constructor(props) {
    super(props);
//    console.log("[IC] Props are: ", props);
this.state={
width:window.innerWidth,
};
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };


  onClick = event => {
    const redirect = this.props.redirect;

    console.log("Button clicked. Redirecting to: ", redirect);
    window.scrollTo(0, 0);
//    this.props.history.push(`${redirect}`);
    redirect(`${redirect}`);
    // this.props.setRoute(redirect);
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    let url = this.props.redirect;
    let myData = {url: "", paragraph: ""};
    // console.log("This props are: ", this.props.data);
    if(this.props.data)
    {
      if(this.props.data.url)
      {
        myData = this.props.data;
      }
    }

    if(this.props.display==="true"&&isMobile!==true)
    return (
      <div >
        {/* <div className="home-page padding-top"> */}
        <div className="">
          {/* <div className="home-page-wrapper aboutuswrapper" id="page1-wrapper"> */}
          <div className="aboutuswrapper" id="page1-wrapper">
            <Row>
            <Col className="" sm={0} md={1} />
             
            <Col className="videoStyle" md={12} sm={24}>
                {/* <img src={laptop_bg} /> */}
                <div className = "video-slider"
                 style = {{border : '16px solid white', background : 'black',
                  boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.6)"}}>
                <YoutubeVideoSlider url={myData.url}/>
                </div>
                {/* <div id="laptop-col" className="gutter-box"></div> */}
              </Col>
              
              <Col className="" md={11} sm={24}>
                <div className="gutter-box">
                  <div className="component-heading">
                    <h2>{this.props.heading}</h2>
                    <div className="title-line-wrapper page1-line">
                      <div className="title-line" />
                    </div>
                  </div>
                  <div className="why-content aboutusbody">
                    {myData.paragraph}
                  </div>
                  {/* inner GRID system */}
                  <Row gutter={24}>
                    <Button
                      className="learnmorebutton"
                      id={this.props.heading}
                      onClick={this.onClick}
                      type="primary"
                      shape="round"
                      size={"large"}
                      style={{boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.2)"}}
                    >
                      <Link to={url}>Learn More</Link>
                    </Button>
                    </Row>
                </div>
              </Col>
              <Col className="" sm={0} md={1} />

              
            </Row>
          </div>
        </div>
      </div>
    );

else if(this.props.display==="false"||isMobile===true){
  return (
    <div >
      {/* <div className="home-page padding-top"> */}
      <div className="">
        {/* <div className="home-page-wrapper aboutuswrapper" id="page1-wrapper"> */}
        <div className="aboutuswrapper" id="page1-wrapper">
          <Row>
            <Col className="" sm={0} md={1} />
            <Col className="" md={11} sm={24}>
              <div className="gutter-box">
                <div className="component-heading">
                  <h2>{this.props.heading}</h2>
                  <div className="title-line-wrapper page1-line">
                    <div className="title-line" />
                  </div>
                </div>
                <div className="why-content aboutusbody">
                  {myData.paragraph}
                </div>
                {/* inner GRID system */}
              
                <Row gutter={24}>
                  <Button
                    className="learnmorebutton"
                    id={this.props.heading}
                    onClick={this.onClick}
                    type="primary"
                    shape="round"
                    size={"large"}
                    style={{boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.2)"}}
                  >
                    <Link to={url}>Learn More</Link>
                  </Button>
                  </Row>
              </div>
            </Col>
            <Col className="videoStyle" md={12} sm={24}>
              {/* <img src={laptop_bg} /> */}
              <div className = "video-slider"
               style = {{border : '16px solid white', background : 'black',
                boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.6)"}}>
              <YoutubeVideoSlider url={myData.url}/>
              </div>
              {/* <div id="laptop-col" className="gutter-box"></div> */}
            </Col>
            <Col className="" sm={0} md={1} />
          </Row>
        </div>
      </div>
    </div>
  );
}
    
  }
}

export default InfoComponent;


                    {/* <Col className="" span={12}>
                                <div className="card-icon-div" >
                                  <img className="card-icon" src={bloqico} />
                                </div> */}
                    {/* <Card className="card">
                                  <p>Choose the most disruptive technology candidates from a pool of online applicants for funding.</p>          
                                </Card> */}
                    {/* </Col> */}
                    {/* <Col className="" span={12}>
                                <div className="card-icon-div" >
                                  <img className="card-icon" src={bloqico} />
                                </div>
                                {/* <Card className="card">
                                  <p>Choose the most disruptive technology candidates from a pool of online applicants for funding.</p>          
                                </Card> */}
                    {/* </Col> */}
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
                  {/* <Card
                            //   title="Default size card"
                            //   extra={<a href="#">More</a>}
                            // // style={{ width: 300 }}
                            >
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quasi illo at ad. Ut eum eaque officia, debitis cumque odit omnis voluptatibus voluptate sunt sed facere enim excepturi asperiores?</p>
                            </Card> */}
