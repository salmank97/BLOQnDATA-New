import React from 'react';
import { Input, Button } from 'antd';
import { Row, Col } from 'antd';

function Subscribe(props) {
  return (
    <div className="subscribe-wrapper">
      {/* <h3 className="heading">Subscribe Our Monthly Newsletter</h3> */}
      <h2 className="heading"><span>Subscribe Our Monthly Newsletter</span></h2>
      <div style={{width:"300px", margin:"0 auto"}}>
        <div className="subscribe-input">
          <Input placeholder="Enter your email.." />
          {/* <Button type="primary" shape="circle" icon="mail"></Button> */}
          <Button id="subscribe-btn" type="primary" shape="circle" icon="mail" />
        </div>
      </div>
    </div>
  );
}


export default Subscribe;
