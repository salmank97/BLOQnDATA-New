import React from 'react';
import ArticleSlider from './ArticleSlider';
import { Card, Icon } from 'antd';

const { Meta } = Card;


export default class Articles extends React.PureComponent {
  render(){
    return ( 
      <div className="element" name = "articles">
                <div className="home-page roadmap">
          <div className="home-page-wrapper">
            <h2><span>Articles</span></h2>
            <div className="title-line-wrapper page1-line"> 
              <div className="title-line" />
            </div>
          
        <ArticleSlider/>
    </div>
    </div>
    </div>
    );
  }

}
