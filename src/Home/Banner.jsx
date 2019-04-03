import React from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import Subscribe from './Subscribe';
import BannerSVGAnim from './component/BannerSVGAnim';
import { Row, Col } from 'antd';
import partner from '../images/partners.png'
import Particles from 'react-particles-js';


// Styling of this file is done in home.less
function Banner(props) {
  return (
    
    

    <div className="banner-wrapper element" name = "home">
    <Particles  className="particles-js"
    // params = {
    //   {
    //     "particles": {
    //       "number": {
    //         "value": (props.isMobile) ? 30 : 70,
    //         "density": {
    //           "enable": true,
    //           "value_area": 800
    //         }
    //       },
    //       "color": {
    //         "value": "#ffffff"
    //       },
    //       "shape": {
    //         "type": "circle",
    //         "stroke": {
    //           "width": 0,
    //           "color": "#000000"
    //         },
    //         "polygon": {
    //           "nb_sides": 5
    //         },
    //         "image": {
    //           "src": "img/github.svg",
    //           "width": 100,
    //           "height": 100
    //         }
    //       },
    //       "opacity": {
    //         "value": 0.5,
    //         "random": false,
    //         "anim": {
    //           "enable": false,
    //           "speed": 1,
    //           "opacity_min": 0.1,
    //           "sync": false
    //         }
    //       },
    //       "size": {
    //         "value": 3,
    //         "random": true,
    //         "anim": {
    //           "enable": false,
    //           "speed": 20,
    //           "size_min": 0.1,
    //           "sync": false
    //         }
    //       },
    //       "line_linked": {
    //         "enable": true,
    //         "distance": 150,
    //         "color": "#ffffff",
    //         "opacity": 0.4,
    //         "width": 1
    //       },
    //       "move": {
    //         "enable": true,
    //         "speed": 4,
    //         "direction": "none",
    //         "random": false,
    //         "straight": false,
    //         "out_mode": "out",
    //         "bounce": false,
    //         "attract": {
    //           "enable": false,
    //           "rotateX": 600,
    //           "rotateY": 1200
    //         }
    //       }
    //     },
    //     "interactivity": {
    //       "detect_on": "canvas",
    //       "events": {
    //         "onhover": {
    //           "enable": true,
    //           "mode": "grab"
    //         },
    //         "onclick": {
    //           "enable": true,
    //           "mode": "push"
    //         },
    //         "resize": true
    //       },
    //       "modes": {
    //         "grab": {
    //           "distance": 140,
    //           "line_linked": {
    //             "opacity": 1
    //           }
    //         },
    //         "bubble": {
    //           "distance": 400,
    //           "size": 40,
    //           "duration": 2,
    //           "opacity": 8,
    //           "speed": 3
    //         },
    //         "repulse": {
    //           "distance": 200,
    //           "duration": 0.5
    //         },
    //         "push": {
    //           "particles_nb": 1
    //         },
    //         "remove": {
    //           "particles_nb": 2
    //         }
    //       }
    //     },
    //     "retina_detect": true
    //   }
    // }
    params={{
	    "particles": {
	        "number": {
	            "value": (props.isMobile) ? 20 : 60
	        },
	        "size": {
	            "value": 3
	        }
      },
              "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              // "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.5
            },
            "push": {
              "particles_nb": 1
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        // "retina_detect": true
	    // "interactivity": {
	    //     "events": {
	    //         "onhover": {
	    //             "enable": true,
	    //             "mode": "grab"
	    //         }
	    //     }
	    // }
	}}
    />
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <div>
        <h1 key="h1" className = "banner-heading-text">DECENTRALIZED FUNDING</h1>
        <p key="content" className = "banner-heading-text">
        BLOQnDATA is a Decentralized funding source for the cryptocurrency community. Startup ICO's and blockchain companies.
        </p>
        </div>  
        
      </QueueAnim>
      {/* <Subscribe/>  */}
       <div className="partner-logos" >
        <Row className="bottom-bar" >
        <Col xs = {8} sm={4}><img className="partner-logos-img" src = {partner}/></Col>      
        <Col xs = {8} sm={4}><img className="partner-logos-img" src = {partner}/></Col>
        <Col xs = {8} sm={4}><img className="partner-logos-img" src = {partner}/></Col>      
        <Col xs = {8} sm={4}><img className="partner-logos-img" src = {partner}/></Col>
        <Col xs = {8} sm={4}><img className="partner-logos-img" src = {partner}/></Col>      
        <Col xs = {8} sm={4}><img className="partner-logos-img" src = {partner}/></Col>
      </Row>
        </div>
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
