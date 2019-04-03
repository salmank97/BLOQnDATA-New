import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import ClientSlider from './partners/ClientSlider';

function OurPartners() {
  
  return (
    <div className="home-page page2 colored-sections">
      <div className="home-page-wrapper">
        <h2><span>Our Partners</span></h2>
        <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
        <p class="sect-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <OverPack> 
            <ClientSlider/>
        </OverPack>
      </div>
    </div>
  );
}

export default OurPartners;