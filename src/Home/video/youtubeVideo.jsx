import React from 'react';
import YouTube from 'react-youtube';
 
export default class YoutubeVideo extends React.Component {

  constructor(props) {
    super(props);
    // console.log("Props for youtube are : ", this.props);
  }
  

  componentWillReceiveProps(nextProp){
//    console.log(nextProp);
  }
  
  render() {
    const opts = {
      height: '350',
      width: '100%',
      margin : 'auto',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls : 1
      }
    };
 
    return (
      <YouTube
        // videoId={this.props.id}
        videoId={this.props.videoURL}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}