import React from 'react';
import { Row, Col, Icon, Menu, Button, Popover } from 'antd';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { enquireScreen } from 'enquire-js';
import bg_img from '../images/logo.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    menuVisible: false,
    menuMode: 'horizontal',
    isTop: true,
  };

  componentDidMount() {
    
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        // console.log(isTop)
          this.setState({ isTop })
      }
    });

    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });



    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }



  handleShowMenu = () => {
    this.setState({
      menuVisible : !this.state.menuVisible
    })
  }

  menuClickHandler = () => {
    this.setState ({
      menuVisible : false
    })
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home" >
        <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={1500} onClick = {this.handleShowMenu} >HOME</Link>
        </Menu.Item>
        <Menu.Item key="docs">
        <Link activeClass="active" className="document" to="document" spy={true} smooth={true} duration={1500} onClick = {this.handleShowMenu} >DOCUMENT</Link>
          {/* <a><span></span></a> */}
        </Menu.Item>
        <Menu.Item key="products">
        <Link activeClass="active" className="product" to="product" spy={true} smooth={true} duration={1500} onClick = {this.handleShowMenu} >PRODUCT</Link>        
          {/* <a></a> */}
        </Menu.Item>
        <Menu.Item key="team">
        <Link activeClass="active" className="team" to="team" spy={true} smooth={true} duration={1500} onClick = {this.handleShowMenu} >TEAM</Link>                
          {/* <a>TEAM</a> */}
        </Menu.Item>
        {/* <Menu.Item key="bounty">
          <a>BOUNTY</a>
        </Menu.Item> */}
        <Menu.Item key="faq">
        <Link activeClass="active" className="faq" to="faq" spy={true} smooth={true} duration={1500} onClick = {this.handleShowMenu} >FAQ</Link>        
          {/* <a></a> */}
        </Menu.Item>
        {/* {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
              ABCDERDFEW
              </a>
            </Menu.Item>
          )
        } */}
      </Menu>
    );

    return (
      <div id="header" className="header" style = {(this.state.isTop) ? {backgroundColor : 'transparent'} : {backgroundColor : '#50c878', margin : '0'}}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={bg_img} alt="logo" />
              {/* <span>ANT DESIGN PRO</span> */}
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="http://preview.pro.ant.design"
                  rel="noopener noreferrer"
                >
                </a>
              </div>
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
