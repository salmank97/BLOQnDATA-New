import React from 'react';
import PropTypes from 'prop-types';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import team1 from '../images/Team/team1.png';


const { TweenOneGroup } = TweenOne;

const featuresCN = [
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#13C2C2',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  },
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#2F54EB',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  },
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#F5222D',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  },
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#F5222D',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  },
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#F5222D',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  },
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#F5222D',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  },
  {
    title: 'Clarence ',
    content: 'CEO, Founder',
    src: team1,
    color: '#F5222D',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid facere porro blanditiis. Tempora quis tempore inventore nostrum porro ullam molestiae laborum maiores cum. Voluptatem illum sunt dolore iure provident.'
  }
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
];

class Page1 extends React.PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }
  // onMouseOver = (i) => {
  //   this.setState({
  //     hoverNum: i,
  //   });
  // }
  // onMouseOut = () => {
  //   this.setState({
  //     hoverNum: null,
  //   });
  // }
  getEnter = (e) => {
    const i = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }];
  }
  render() {
    const { hoverNum } = this.state;
    let children = [[], [], [], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map((className) => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()} >
          <div
            className="page1-box"
            onMouseEnter={() => { this.onMouseOver(i); }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeOutBack',
              }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <img src={item.src} alt="img" style={i === 3 ? { marginLeft: -15 } : {}} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      // console.log(i)
      children[Math.floor(i / 4)].push(child);
    });

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper team-row"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="team-sect home-page padding-top element" name="team" >
        <div className="home-page-wrapper" id="page1-wrapper">
          <h2><span>Our Team</span></h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          <p class="sect-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam assumenda fugiat deleniti quae quasi explicabo cum reiciendis eius dolore quia sequi facere aliquid, tenetur possimus voluptates sunt eos enim neque?</p>
          {children}
        </div>
      </div>
    );
  }
}

export default Page1;
