import React from 'react';
import { Row, Col } from 'antd';
import ProductSlider from './product/ProductSlider';


class Products extends React.PureComponent {

  componentDidMount() {
    // console.log(this.props.isMobile);

  }

  render() {
    return (
      <div className="element" name = "product">

        <div className="home-page" style = {{height : "100%", margin : '0px'}}>
          <div className="home-page-wrapper" id="page1-wrapper">
            <h2>Products <span>BLOQnDATA</span></h2>
            <div className="title-line-wrapper page1-line"> 
              <div className="title-line" />
            </div>
            <ProductSlider isMobile = {this.props.isMobile}/>

          </div>
        </div>
      </div>
    );
  }
}


export default Products;