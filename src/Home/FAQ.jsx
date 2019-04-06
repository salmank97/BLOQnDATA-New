import React from 'react';
import { Collapse, Icon } from 'antd';

class FAQ extends React.PureComponent {

  render() {
    // <ThemeProvider>
    // <ThemeContext.Consumer>
    // {val => <div>{val}</div>}
    // </ThemeContext.Consumer>
    // </ThemeProvider>
      const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
<div className="element" name = "faq">

<div className="home-page page2 faq-sect" >
  <div className="home-page-wrapper" id="page1-wrapper">
    <h2><span>FAQ</span></h2>
    {/* <div className="title-line-wrapper page1-line">
      <div className="title-line" />
    </div> */}
        <div className = "collapsable">
        <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
  >
    <Panel header={<h3 className = "collapsable-heading">Heading shoulkd be displayed here</h3>} key="1" className = "custom-panel-style">
      <p>{text}</p>
    </Panel>
  </Collapse>
    <br/>
        <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
  >
    <Panel header={<h3 className = "collapsable-heading">Heading shoulkd be displayed here</h3>} key="2" className = "custom-panel-style">
      <p>{text}</p>
    </Panel>
  </Collapse>
    <br/>
    <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
  >
    <Panel header={<h3 className = "collapsable-heading">Heading shoulkd be displayed here</h3>} key="3" className = "custom-panel-style">
      <p>{text}</p>
    </Panel>
  </Collapse>
        </div>
  </div>
</div>
</div>
    );
  }
}
export default FAQ;

