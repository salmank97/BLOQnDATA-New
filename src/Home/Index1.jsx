import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";

import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Footer from "./Footer";
import "./static/style";
import Videos from "./Videos";
import Why from "./Why";
import Strategy from "./Strategy";
import Products from "./Products";
import RoadMap from "./RoadMap";
import OurPartners from "./OurPartners";
import FAQ from "./FAQ";
import SocialMedia from "./SocialMedia";
import Subscribe from "./Subscribe";
import Articles from "./Articles";
import InfoComponent from "./InfoComponent.jsx";
import AboutUs from "./AboutUs.jsx";
import * as constants from "./constants.jsx";
import Routes from "./Routes";
import { getShortDescriptionFromFireBase } from "../Data/firebaseApi";
var data = [];

let isMobile;
const ThemeContext = React.createContext(isMobile);
enquireScreen(b => {
  isMobile = b;
});

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      display: <h1>Loading page....</h1>,
      data: []
    };
  }

  async componentDidMount() {
    let gotData = await this.fetchAllShortData();
  console.log("GD ", gotData);
    this.setState({
    data: gotData
    });
  }

  async fetchAllShortData() {
    let data = await getShortDescriptionFromFireBase("Data/Home");
    return await data;
  }

  render() {
    let gotData = [];
    if(this.state.data["About Us"])
    {
      gotData = this.state.data;
     // console.log("here",gotData)
    }

    return (
      <DocumentTitle title="BLOQnDATA">
        <ThemeContext.Provider value={isMobile}>
          <div
            className="home-wrapper"
            style={{ backgroundColor: "white", color: "black" }}
          >
          <div>
            <Header isMobile={this.state.isMobile} />
            <Banner isMobile={this.state.isMobile} />
            <Videos isMobile={this.state.isMobile} />

            <InfoComponent history={this.props.history} data={gotData["About Us"]} heading={"About Us"} redirect="/aboutus"/>
            <InfoComponent history={this.props.history} data={gotData["Who Do We Help"]} heading={"Who Do We Help"} redirect="/whodowehelp"/>
            <InfoComponent history={this.props.history} data={gotData["VB Health Care"]} heading={"Value Based Health Care"} redirect="/VBHealthCare"/>
            <InfoComponent history={this.props.history} data={gotData["Pilot Programs"]} heading={"Pilot Programs"} redirect="/pilotprograms"/>
            <InfoComponent history={this.props.history} data={gotData["Library"]} heading={"Library"} redirect="/library"/>

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
          </div>
        </ThemeContext.Provider>
      </DocumentTitle>

      // <Routes />
    );
  }
}

export default Home;
