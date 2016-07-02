import React, {Component} from 'react'
import Audio from 'react-howler'
import raf from 'raf'

export default class AudioPlayer extends Component{
  constructor(){
    super();
    this.state = {
      loaded: false,
      duration: 0,
      currentTime: 0,
      playing: false
    };
  }
  componentWillUpdate(){
    this.handleEnd.bind(this);
  }
  handleOnLoad(){
    this.setState({
      loaded: true,
      duration: this.audio.duration()
    })
  }
  handlePlay(){
    this.setState({
      playing: true
    });
    this.renderSeekPos()
  }
  handleToggle(){
    this.setState({
      playing: !this.state.playing
    });
    this.clearRAF()
  }
  handleEnd () {
    this.setState({
      playing: false
    });
    this.clearRAF()
  }
  renderSeekPos(){
    this.setState({
      currentTime: this.audio.seek()
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos.bind(this))
    }
  }
  clearRAF () {
    raf.cancel(this._raf)
  }
  render(){
    return(
      <div className="audio-player">
        <h4>{this.props.trackName}</h4>
        <p>Duration: {(this.state.duration / 60).toFixed(2)} minutes</p>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"
               width={this.state.duration} 
               height="10px" 
               viewPort={`0 0 ${this.state.duration} 100`}>
            <rect width={this.state.duration} height="10" x="0" fill="#ccc" />
            <rect width={this.state.currentTime} height="10" x="0" fill="#008d46" />
          </svg>
        </div>
        <button onClick={this.handleToggle.bind(this)}>
          {(this.state.playing) ? <span>&#10074;&#10074;</span> : <span>&#9658;</span> }
        </button>
        <Audio
          src={this.props.audio}
          playing={this.state.playing}
          onLoad={this.handleOnLoad.bind(this)}
          onPlay={this.handlePlay.bind(this)}
          onEnd={this.handleEnd.bind(this)}
          loop={false}
          ref={(ref) => this.audio = ref}
        />
      </div>
    )

  }

}