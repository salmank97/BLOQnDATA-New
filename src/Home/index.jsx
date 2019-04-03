import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style';
import Videos from './Videos';
import Why from './Why';
import Strategy from './Strategy';
import Products from './Products';
import RoadMap from './RoadMap';
import OurPartners from './OurPartners';
import FAQ from './FAQ';
import SocialMedia from './SocialMedia';
import Subscribe from './Subscribe';
import Articles from './Articles';
import InfoComponent from './InfoComponent.jsx';
import AboutUs from './AboutUs.jsx';
import * as constants from './constants.jsx';
import Routes from './Routes';

let isMobile;
const ThemeContext = React.createContext(isMobile);
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      route: "/",
      display: <h1>Loading page....</h1>
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });

    this.setState({display:       
    <div>
      <Header isMobile={this.state.isMobile} />
      <Banner isMobile={this.state.isMobile} />
      <Videos isMobile={this.state.isMobile} />

      <InfoComponent  data={constants.AboutUs}/>
      <InfoComponent  data={constants.WhoDoWeHelp}/>
      <InfoComponent  data={constants.HealthCare}/>
      <InfoComponent  data={constants.PilotProgram}/>
      <InfoComponent  data={constants.Library}/>

      <Strategy isMobile={this.state.isMobile}/>
      <Products isMobile={this.state.isMobile}/>
      <Page1 isMobile={this.state.isMobile} />
      <OurPartners />
      <RoadMap isMobile={this.state.isMobile}/>
      <Page2 isMobile={this.state.isMobile} />
      <FAQ isMobile={this.state.isMobile}/> 
      <Articles/>
      <SocialMedia/>   
      <Subscribe/>        
      <Footer />
    </div>
    });
  }

  render() {

    console.log("In render index1");

    return (
          <DocumentTitle title="BLOQnDATA">
              <ThemeContext.Provider value={isMobile}>
              <div className="home-wrapper" style={{backgroundColor: "white", color:"black"}}>
                {this.state.display}
              </div>
              </ThemeContext.Provider>
          </DocumentTitle>

        // <Routes />
      );
  }
}

export default Home;
